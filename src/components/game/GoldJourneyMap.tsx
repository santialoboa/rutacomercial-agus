import React, { useState, useRef } from 'react';
import {
  GOLD_MAP_NODES,
  GOLD_HISTORICAL_GOODS,
  CARAVAN_STAGES_GOLD_WEST,
  CARAVAN_STAGES_GOLD_EAST,
  getGoldCardLocation
} from '../../data/goldMapData';
import type { MapNode, StoryBranch } from '../../types/game';
import { sounds } from '../../utils/audio';
import { PotionCraftIcon } from '../illustrations/PotionCraftIcon';

interface GoldJourneyMapProps {
  currentCardNumber: number;
  branch?: StoryBranch;
  className?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export const GoldJourneyMap: React.FC<GoldJourneyMapProps> = ({
  currentCardNumber,
  branch = 'carthage-venice',
  className = '',
  onClose,
  isModal = false
}) => {
  const [mapMode, setMapMode] = useState<'map' | 'goods'>('map');
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(null);
  const [selectedGoodId, setSelectedGoodId] = useState<string>('gold_dust');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showAllNodes, setShowAllNodes] = useState<boolean>(true);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const isGoldEast = branch === 'egypt-byzantium';
  const stages = isGoldEast ? CARAVAN_STAGES_GOLD_EAST : CARAVAN_STAGES_GOLD_WEST;

  const currentLocationInfo = getGoldCardLocation(currentCardNumber, branch);
  const currentNodeId = currentLocationInfo.nodeId;
  const currentNode = GOLD_MAP_NODES.find((n) => n.id === currentNodeId) || GOLD_MAP_NODES[0];

  // Visited nodes up to current card
  const visitedNodeIds = new Set<string>(['ghana']);
  for (let i = 1; i <= currentCardNumber; i++) {
    const loc = getGoldCardLocation(i, branch);
    if (loc) {
      visitedNodeIds.add(loc.nodeId);
    }
  }

  // Caravan route line segments connecting stops on the regional map
  const journeyTrailPoints = isGoldEast
    ? [
        { id: 'ghana', x: 13.5, y: 84.0, passed: currentCardNumber >= 1 },
        { id: 'mali_timbuktu', x: 29.5, y: 78.5, passed: currentCardNumber >= 2 },
        { id: 'fezzan', x: 54.0, y: 62.0, passed: currentCardNumber >= 3 },
        { id: 'cairo_gold', x: 74.0, y: 44.5, passed: currentCardNumber >= 3 },
        { id: 'constantinople_gold', x: 79.5, y: 18.0, passed: currentCardNumber >= 4 }
      ]
    : [
        { id: 'ghana', x: 13.5, y: 84.0, passed: currentCardNumber >= 1 },
        { id: 'mali_timbuktu', x: 29.5, y: 78.5, passed: currentCardNumber >= 2 },
        { id: 'taghaza', x: 26.5, y: 55.0, passed: currentCardNumber >= 3 },
        { id: 'tunis_carthage', x: 36.5, y: 34.0, passed: currentCardNumber >= 3 },
        { id: 'venice_gold', x: 30.5, y: 14.5, passed: currentCardNumber >= 4 }
      ];

  const handleNodeClick = (node: MapNode) => {
    sounds.playWoodClick();
    setSelectedNode(node);
  };

  const handleStageClick = (stage: (typeof stages)[0]) => {
    sounds.playParchment();
    const node = GOLD_MAP_NODES.find((n) => n.id === stage.nodeId);
    if (node) {
      setSelectedNode(node);
    }
  };

  const centerOnCaravan = () => {
    sounds.playBell(587.33, 0.3);
    setSelectedNode(currentNode);
    setZoomLevel(1.2);
  };

  return (
    <div className={`relative flex flex-col rounded-2xl border-4 border-[#5b412d] bg-[#dfceaa] shadow-2xl p-3 sm:p-5 text-[#2a2118] ${className}`}>
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-[#5b412d]/40 pb-3 mb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <PotionCraftIcon name="gold" size={36} className="shadow-sm" />
          <div>
            <h2 className="text-lg sm:text-2xl font-bold font-serif text-[#35271e] tracking-wide leading-tight flex items-center gap-2">
              Gran Mapa del Camino del Oro
            </h2>
            <p className="text-xs text-[#5b412d] italic font-serif">
              África Occidental, el Sahara, el Mediterráneo y Bizancio (Siglos XI–XIV)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View Switcher */}
          <div className="flex rounded-lg border border-[#5b412d] bg-[#eadbb8] p-0.5">
            <button
              onClick={() => {
                sounds.playParchment();
                setMapMode('map');
              }}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 font-serif text-xs font-bold transition-all cursor-pointer ${
                mapMode === 'map'
                  ? 'bg-[#8c6527] text-[#fffcf2] shadow'
                  : 'text-[#35271e] hover:bg-[#d8c39a]'
              }`}
            >
              <span>🧭</span>
              <span>Mapa Regional</span>
            </button>
            <button
              onClick={() => {
                sounds.playParchment();
                setMapMode('goods');
              }}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 font-serif text-xs font-bold transition-all cursor-pointer ${
                mapMode === 'goods'
                  ? 'bg-[#8c6527] text-[#fffcf2] shadow'
                  : 'text-[#35271e] hover:bg-[#d8c39a]'
              }`}
            >
              <span>⚖️</span>
              <span>5 Grandes Bienes del Oro</span>
            </button>
          </div>

          {isModal && onClose && (
            <button
              onClick={() => {
                sounds.playParchment();
                onClose();
              }}
              className="rounded-lg border-2 border-[#5b412d] bg-[#eadbb8] hover:bg-[#d8c39a] hover:border-[#8c6527] px-3 py-1 font-serif font-bold text-xs sm:text-sm text-[#35271e] transition-all shadow cursor-pointer"
            >
              ✕ Cerrar
            </button>
          )}
        </div>
      </div>

      {/* MODE 1: REGIONAL MEDIEVAL MAP CANVAS */}
      {mapMode === 'map' ? (
        <div className="flex flex-col space-y-3">
          {/* Top Control Bar with Quick Actions */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-[#eadbb8]/80 rounded-xl px-3 py-2 border border-[#5b412d]/30 text-xs font-serif">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#8c6527] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ab8841] animate-ping" />
                Escala actual:
              </span>
              <strong className="text-[#35271e]">{currentLocationInfo.title}</strong>
              <span className="hidden sm:inline-block rounded bg-[#8c6527]/15 px-2 py-0.5 text-[10px] text-[#5b412d] font-bold">
                {isGoldEast ? '✦ Ramal de Egipto y Bizancio' : '✦ Ramal de Túnez y Venecia'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={centerOnCaravan}
                title="Centrar mapa en la escala actual de la caravana"
                className="px-2.5 py-1 rounded-md border border-[#5b412d] bg-[#fbf5e7] hover:bg-[#dfceaa] font-bold text-[#8c6527] transition-all shadow-xs cursor-pointer flex items-center gap-1"
              >
                <span>📍</span>
                <span>Centrar en Caravana</span>
              </button>

              <button
                onClick={() => setShowAllNodes(!showAllNodes)}
                className="px-2 py-1 rounded-md border border-[#5b412d]/50 bg-[#dfceaa] hover:bg-[#fbf5e7] text-[#35271e] transition cursor-pointer"
              >
                {showAllNodes ? '👁️ Todos los Oasis y Ciudades' : '🎯 Solo Recorrido'}
              </button>

              {/* Zoom controls */}
              <div className="flex items-center border border-[#5b412d] rounded-md bg-[#dfceaa] overflow-hidden">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(1, z - 0.2))}
                  title="Alejar mapa"
                  className="px-2 py-0.5 hover:bg-[#eadbb8] font-bold cursor-pointer text-[#35271e]"
                >
                  −
                </button>
                <span className="px-1.5 text-[11px] font-bold text-[#5b412d]">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(2, z + 0.2))}
                  title="Acercar mapa"
                  className="px-2 py-0.5 hover:bg-[#eadbb8] font-bold cursor-pointer text-[#35271e]"
                >
                  +
                </button>
                {zoomLevel !== 1 && (
                  <button
                    onClick={() => setZoomLevel(1)}
                    title="Restablecer tamaño normal"
                    className="px-1.5 py-0.5 hover:bg-[#eadbb8] text-[10px] text-[#8c6527] font-bold border-l border-[#5b412d]/30 cursor-pointer"
                  >
                    100%
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Map Canvas Frame */}
          <div
            ref={mapContainerRef}
            className="relative w-full aspect-[16/9] max-h-[580px] rounded-xl border-3 border-[#5b412d] bg-[#d9c49d] overflow-hidden select-none shadow-inner"
          >
            {/* Smooth Zoom Container */}
            <div
              className="w-full h-full relative transition-transform duration-300 ease-out origin-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {/* AUTHENTIC MEDIEVAL REGIONAL CARTOGRAPHY SVG */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full absolute inset-0 select-none pointer-events-none"
              >
                <defs>
                  {/* Parchment Base Gradient */}
                  <radialGradient id="parchmentLight" cx="45%" cy="50%" r="65%">
                    <stop offset="0%" stopColor="#ebdcb8" />
                    <stop offset="55%" stopColor="#dfcca3" />
                    <stop offset="100%" stopColor="#c2ab7e" />
                  </radialGradient>

                  {/* Sea Gradient */}
                  <linearGradient id="mediterraneanSea" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9fb7a8" />
                    <stop offset="40%" stopColor="#8ba59b" />
                    <stop offset="100%" stopColor="#7a978f" />
                  </linearGradient>

                  {/* Sahara Desert Warm Fill */}
                  <radialGradient id="desertSands" cx="40%" cy="65%" r="50%">
                    <stop offset="0%" stopColor="#dfb776" />
                    <stop offset="60%" stopColor="#d3a968" />
                    <stop offset="100%" stopColor="#c39757" />
                  </radialGradient>

                  {/* Sahel Savannah Green Tint */}
                  <linearGradient id="sahelSavannah" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c89f5f" />
                    <stop offset="60%" stopColor="#a79e60" />
                    <stop offset="100%" stopColor="#7b8e53" />
                  </linearGradient>

                  {/* Southern Europe Land */}
                  <linearGradient id="europeLand" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#cfbc98" />
                    <stop offset="100%" stopColor="#bfa980" />
                  </linearGradient>

                  {/* Subtle Hatching Pattern for Mountains */}
                  <pattern id="mountainHatch" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="4" stroke="#5b412d" strokeWidth="0.6" strokeOpacity="0.35" />
                  </pattern>

                  {/* Decorative Waves Pattern for Sea */}
                  <pattern id="seaWaves" width="8" height="4" patternUnits="userSpaceOnUse">
                    <path d="M 0 2 Q 2 0 4 2 Q 6 4 8 2" fill="none" stroke="#5d7b73" strokeWidth="0.3" strokeOpacity="0.4" />
                  </pattern>
                </defs>

                {/* Base Parchment Texture */}
                <rect width="100" height="100" fill="url(#parchmentLight)" />

                {/* WATER BODIES: The Mediterranean Sea, Atlantic, Red Sea, Black Sea */}
                {/* Mediterranean Basin and Atlantic Ocean */}
                <path
                  d="M 0,0 L 100,0 L 100,50 L 82,48 L 78,42 L 72,42 L 64,43 L 55,41 L 48,46 L 42,44 L 36,42 L 35,34 L 24,39 L 17,40 L 14,50 L 10,70 L 6,84 L 4,95 L 0,100 Z"
                  fill="url(#mediterraneanSea)"
                />
                <rect width="100" height="50" fill="url(#seaWaves)" opacity="0.6" />

                {/* Black Sea (Northeast of Constantinople) */}
                <path
                  d="M 80,6 C 84,4 90,5 98,7 C 98,14 93,17 84,16 C 81,15 80,10 80,6 Z"
                  fill="url(#mediterraneanSea)"
                  stroke="#5b412d"
                  strokeWidth="0.3"
                />

                {/* Red Sea & Gulf of Suez */}
                <path
                  d="M 78,46 L 82,62 L 87,78 L 92,90 L 89,92 L 84,78 L 80,60 L 76,48 Z"
                  fill="url(#mediterraneanSea)"
                  stroke="#5b412d"
                  strokeWidth="0.3"
                />

                {/* LANDMASS: NORTH AFRICA, SAHARA & WEST AFRICA */}
                <path
                  d="M 0,100 
                     L 4,95 
                     C 6,90 7,86 6,84 
                     C 7,76 9,72 10,70 
                     C 12,58 13,54 14,50 
                     C 15,44 16,42 17,40 
                     C 20,39 23,38 27,38 
                     C 31,37 34,35 36.5,34 
                     C 38,36 37,40 36,42 
                     C 38,43 40,44 42,44 
                     C 44,45 46,46 48,46 
                     C 50,45 52,43 55,41 
                     C 58,42 61,43 64,43 
                     C 68,43 70,42 72,42 
                     C 74,43 76,45 77,46 
                     L 80,50 L 83,62 L 87,78 L 91,90 L 93,100 
                     L 0,100 Z"
                  fill="url(#desertSands)"
                  stroke="#5b412d"
                  strokeWidth="0.5"
                />

                {/* West Africa / Sahel Savannah Zone (Greener South) */}
                <path
                  d="M 0,100 
                     L 4,95 
                     C 8,92 12,88 16,87 
                     C 22,86 28,84 34,84 
                     C 40,84 46,86 52,87 
                     C 60,88 70,90 80,91 
                     L 93,100 Z"
                  fill="url(#sahelSavannah)"
                  opacity="0.85"
                />

                {/* LANDMASS: SOUTHERN EUROPE & ASIA MINOR */}
                {/* Iberian Peninsula (Valencia / Spain) */}
                <path
                  d="M 12,24 C 15,22 18,22 21,24 C 23,26 23,30 21,33 C 19,37 17,40 16,40 C 14,38 12,32 12,24 Z"
                  fill="url(#europeLand)"
                  stroke="#5b412d"
                  strokeWidth="0.4"
                />

                {/* Italian Peninsula (Venice, Rome, Sicily) */}
                <path
                  d="M 26,12 C 29,13 32,13 34,14 C 33,16 31,18 30.5,14.5 C 29,18 28,21 28.5,24 C 29,27 31,29 34,31 C 35,32 34,34 32,33 C 30,30 27,26 26.5,22 C 25.5,18 25,14 26,12 Z"
                  fill="url(#europeLand)"
                  stroke="#5b412d"
                  strokeWidth="0.4"
                />
                {/* Sicily Island */}
                <polygon points="32,34 35,34 33.5,36.5" fill="url(#europeLand)" stroke="#5b412d" strokeWidth="0.3" />

                {/* Balkan Peninsula, Greece, Peloponnese & Aegean Islands */}
                <path
                  d="M 38,12 C 42,12 46,13 50,14 C 49,18 47,24 46,28 C 45,31 43,33 42,34 C 40,32 41,28 41,24 C 39,20 38,16 38,12 Z"
                  fill="url(#europeLand)"
                  stroke="#5b412d"
                  strokeWidth="0.4"
                />
                {/* Crete Island */}
                <ellipse cx="52" cy="38" rx="3.5" ry="0.8" fill="url(#europeLand)" stroke="#5b412d" strokeWidth="0.3" />

                {/* Asia Minor / Anatolia & Constantinople (bridging Europe & Asia) */}
                <path
                  d="M 72,12 
                     C 76,14 78,16 79.5,18 
                     C 81,17 84,16 88,17 
                     C 94,18 99,19 100,20 
                     L 100,38 
                     C 94,36 88,34 84,33 
                     C 80,32 78,34 76,36 
                     C 75,32 74,28 73,24 
                     C 71,20 71,15 72,12 Z"
                  fill="url(#europeLand)"
                  stroke="#5b412d"
                  strokeWidth="0.4"
                />
                {/* Cyprus Island */}
                <polygon points="71,35 74,35 73,37" fill="url(#europeLand)" stroke="#5b412d" strokeWidth="0.3" />

                {/* HISTORICAL RIVERS */}
                {/* River Niger with its famous northern loop/bend at Tombuctú! */}
                <path
                  d="M 12,90 Q 20,85 24,82 Q 27,79 29.5,78.5 Q 33,78 36,82 Q 39,86 42,91"
                  fill="none"
                  stroke="#3e758a"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                />
                {/* River Senegal & Falémé (Bambuk gold basin) */}
                <path
                  d="M 6,86 Q 9,84 13.5,84 Q 15,87 14,92"
                  fill="none"
                  stroke="#3e758a"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                />
                {/* River Nile winding from Nubia to Cairo and the Delta */}
                <path
                  d="M 76,82 Q 77,72 75,64 Q 74,56 74,47 Q 73,44 74,44.5 Q 72,43 70,42"
                  fill="none"
                  stroke="#3e758a"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                />
                <path
                  d="M 74,44.5 Q 75,43 76,42"
                  fill="none"
                  stroke="#3e758a"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                />

                {/* MOUNTAIN PEAKS & MASSIFS (Medieval Engraved Triangles) */}
                {/* Atlas Mountains (Morocco / Algeria) */}
                <g fill="none" stroke="#68472f" strokeWidth="0.4" opacity="0.75">
                  <path d="M 17,42 L 18.5,39 L 20,42 M 19.5,42 L 21,38.5 L 22.5,42 M 22,42 L 23.5,39.5 L 25,42 M 24.5,42 L 26,39 L 27.5,42" />
                </g>
                {/* Central Saharan Massifs (Ahaggar & Tibesti) */}
                <g fill="none" stroke="#795333" strokeWidth="0.4" opacity="0.65">
                  <path d="M 38,62 L 39.5,59 L 41,62 M 40.5,62 L 42,58.5 L 43.5,62 M 44,62 L 45.5,59.5 L 47,62" />
                </g>
                {/* European Alps (North of Venice) */}
                <g fill="none" stroke="#5b412d" strokeWidth="0.4" opacity="0.7">
                  <path d="M 28,12 L 29.5,9.5 L 31,12 M 30.5,12 L 32,9 L 33.5,12 M 33,12 L 34.5,10 L 36,12" />
                </g>

                {/* DESERT DUNES (Subtle Golden Ripple Lines in Sahara) */}
                <g stroke="#ba8b48" strokeWidth="0.35" fill="none" opacity="0.5">
                  <path d="M 18,66 Q 22,64 26,66 Q 30,68 34,66" />
                  <path d="M 32,72 Q 36,70 40,72 Q 44,74 48,72" />
                  <path d="M 42,56 Q 46,54 50,56 Q 54,58 58,56" />
                  <path d="M 58,68 Q 62,66 66,68 Q 70,70 74,68" />
                  <path d="M 22,50 Q 25,48 28,50" />
                </g>

                {/* PALM TREE / OASIS SYMBOLS */}
                {/* Bilma / Fezzan Oasis Palm */}
                <g transform="translate(53, 60.5) scale(0.4)" stroke="#4a5f32" strokeWidth="0.8" fill="none">
                  <path d="M 0,5 L 0,0 M 0,0 C -2,-3 -4,-2 -5,0 M 0,0 C -1,-4 1,-4 0,-5 M 0,0 C 2,-3 4,-2 5,0" />
                </g>
                {/* Taghaza Salt Deposits */}
                <g transform="translate(25.5, 53.5) scale(0.35)" stroke="#fffbf0" strokeWidth="0.8" fill="#f8f1de">
                  <rect x="-2" y="-1.5" width="4" height="3" rx="0.5" />
                  <rect x="2" y="-0.5" width="3" height="2" rx="0.5" />
                </g>

                {/* DECORATIVE MEDIEVAL VIGNETTES */}
                {/* Miniature Caravan Camels in the Sahara */}
                <g transform="translate(42, 69) scale(0.45)" fill="#68472f" opacity="0.75">
                  <path d="M 0,0 Q 2,-3 4,-1 Q 6,-4 8,-1 L 9,2 L 8,5 L 7,2 L 5,2 L 5,5 L 4,5 L 4,2 L 2,2 L 2,5 L 1,5 L 1,2 Z" />
                </g>
                <g transform="translate(47, 70) scale(0.38)" fill="#68472f" opacity="0.65">
                  <path d="M 0,0 Q 2,-3 4,-1 Q 6,-4 8,-1 L 9,2 L 8,5 L 7,2 L 5,2 L 5,5 L 4,5 L 4,2 L 2,2 L 2,5 L 1,5 L 1,2 Z" />
                </g>

                {/* Miniature Medieval Galley Sailing the Mediterranean */}
                <g transform="translate(55, 28) scale(0.55)" fill="#443224" stroke="#443224" strokeWidth="0.3" opacity="0.85">
                  {/* Hull */}
                  <path d="M -5,2 C -2,4 4,4 7,1 L 6,0 L -4,0 Z" />
                  {/* Mast & Lateen Sail */}
                  <line x1="1" y1="0" x2="1" y2="-6" strokeWidth="0.6" />
                  <polygon points="1,-6 6,-1 1,-2" fill="#fffaf0" stroke="#5b412d" strokeWidth="0.3" />
                  {/* Oars */}
                  <line x1="-3" y1="2" x2="-4" y2="4" strokeWidth="0.3" />
                  <line x1="-1" y1="2" x2="-2" y2="4" strokeWidth="0.3" />
                  <line x1="1" y1="2" x2="0" y2="4" strokeWidth="0.3" />
                  <line x1="3" y1="2" x2="2" y2="4" strokeWidth="0.3" />
                </g>

                {/* Egyptian Pyramids Silhouette */}
                <g transform="translate(71, 46) scale(0.45)" fill="#b88d4d" stroke="#68472f" strokeWidth="0.4" opacity="0.85">
                  <polygon points="0,5 4,-2 8,5" />
                  <polygon points="6,5 9,0 12,5" fill="#a47a3d" />
                </g>

                {/* DECORATIVE COMPASS ROSE (Rosa de los Vientos) */}
                <g transform="translate(11, 22) scale(0.85)" opacity="0.85">
                  <circle cx="0" cy="0" r="7" fill="#fdf7ea" fillOpacity="0.4" stroke="#5b412d" strokeWidth="0.4" strokeDasharray="0.8 0.4" />
                  {/* Cardinal Points */}
                  <polygon points="0,0 -1.2,-1.2 0,-8 1.2,-1.2" fill="#713c3d" stroke="#35271e" strokeWidth="0.3" />
                  <polygon points="0,0 -1.2,1.2 0,8 1.2,1.2" fill="#ab8841" stroke="#35271e" strokeWidth="0.3" />
                  <polygon points="0,0 -1.2,-1.2 -8,0 -1.2,1.2" fill="#ab8841" stroke="#35271e" strokeWidth="0.3" />
                  <polygon points="0,0 1.2,-1.2 8,0 1.2,1.2" fill="#ab8841" stroke="#35271e" strokeWidth="0.3" />
                  {/* Fleur-de-lis on North */}
                  <text x="0" y="-9" fontSize="3" fontWeight="bold" fontFamily="serif" textAnchor="middle" fill="#713c3d">N</text>
                  <circle cx="0" cy="0" r="1" fill="#fff6df" stroke="#35271e" strokeWidth="0.4" />
                </g>

                {/* REGIONAL WATERMARK LABELS */}
                <text x="6" y="60" fontSize="2.8" fontFamily="serif" fontStyle="italic" fill="#5b412d" opacity="0.4" letterSpacing="0.2">
                  OCÉANO ATLÁNTICO
                </text>
                <text x="50" y="24" fontSize="3.2" fontFamily="serif" fontStyle="italic" fontWeight="bold" fill="#3f5a53" opacity="0.55" letterSpacing="0.3" textAnchor="middle">
                  MAR MEDITERRÁNEO
                </text>
                <text x="44" y="52" fontSize="3.6" fontFamily="serif" fontWeight="bold" fill="#7e5c32" opacity="0.45" letterSpacing="0.5" textAnchor="middle">
                  GRAN DESIERTO DEL SAHARA
                </text>
                <text x="22" y="93" fontSize="3.2" fontFamily="serif" fontWeight="bold" fill="#46582f" opacity="0.55" letterSpacing="0.3" textAnchor="middle">
                  SAHEL Y ÁFRICA OCCIDENTAL
                </text>
                <text x="31" y="9" fontSize="2.8" fontFamily="serif" fontWeight="bold" fill="#5b412d" opacity="0.6" letterSpacing="0.2" textAnchor="middle">
                  EUROPA (VENECIA)
                </text>
                <text x="88" y="10" fontSize="2.8" fontFamily="serif" fontWeight="bold" fill="#5b412d" opacity="0.6" letterSpacing="0.2" textAnchor="middle">
                  ASIA MENOR (BIZANCIO)
                </text>

                {/* DOTTED GOLDEN JOURNEY TRAIL */}
                {journeyTrailPoints.map((pt, idx) => {
                  if (idx === 0) return null;
                  const prev = journeyTrailPoints[idx - 1];
                  const isTraversed = pt.passed;
                  const isMaritime =
                    (prev.id === 'tunis_carthage' && pt.id === 'venice_gold') ||
                    (prev.id === 'cairo_gold' && pt.id === 'constantinople_gold');

                  return (
                    <g key={`gold-trail-${idx}`}>
                      {/* Glow line */}
                      {isTraversed && (
                        <line
                          x1={prev.x}
                          y1={prev.y}
                          x2={pt.x}
                          y2={pt.y}
                          stroke={isMaritime ? '#5de2ff' : '#ffd573'}
                          strokeWidth="1.8"
                          strokeOpacity="0.4"
                          strokeLinecap="round"
                        />
                      )}
                      {/* Dashed trail */}
                      <line
                        x1={prev.x}
                        y1={prev.y}
                        x2={pt.x}
                        y2={pt.y}
                        stroke={isTraversed ? (isMaritime ? '#0284c7' : '#b45309') : '#94723e'}
                        strokeWidth={isTraversed ? '0.9' : '0.5'}
                        strokeDasharray={isTraversed ? '1.2 0.8' : '0.6 0.6'}
                        strokeOpacity={isTraversed ? '0.95' : '0.45'}
                        strokeLinecap="round"
                      />
                    </g>
                  );
                })}

                {/* ORNATE TOP BANNER CARTOUCHE */}
                <g transform="translate(50, 4.5)" opacity="0.95">
                  <rect x="-32" y="-3.5" width="64" height="7" rx="1.5" fill="#fdf6e2" stroke="#5b412d" strokeWidth="0.5" />
                  <rect x="-31" y="-2.5" width="62" height="5" fill="none" stroke="#ab8841" strokeWidth="0.3" strokeDasharray="1 0.5" />
                  <text x="0" y="1.2" fontSize="2.8" fontWeight="bold" fontFamily="serif" textAnchor="middle" fill="#501213" letterSpacing="0.15">
                    ITER AURUM • EL CAMINO DEL ORO TRANSAHARIANO
                  </text>
                </g>
              </svg>

              {/* INTERACTIVE CITY / OASIS PINS */}
              {GOLD_MAP_NODES.map((node) => {
                const isCurrent = node.id === currentNodeId;
                const isVisited = visitedNodeIds.has(node.id);
                const isSelected = selectedNode?.id === node.id;
                const isMaritimeNode = node.id === 'venice_gold' || node.id === 'tunis_carthage' || node.id === 'constantinople_gold';

                if (!showAllNodes && !isVisited && !isCurrent) {
                  return null;
                }

                return (
                  <div
                    key={node.id}
                    onClick={() => handleNodeClick(node)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group transition-transform hover:scale-125"
                    title={`${node.name} (${node.region})`}
                  >
                    {/* Glowing Ping for Current Caravan Location */}
                    {isCurrent && (
                      <div className="absolute inset-0 -m-3">
                        <span className="absolute inset-0 rounded-full bg-[#f59e0b] opacity-80 animate-ping" />
                        <span className="absolute inset-1 rounded-full bg-[#713c3d] opacity-50 animate-pulse" />
                      </div>
                    )}

                    {/* Node Token */}
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all shadow-md ${
                        isCurrent
                          ? 'w-8 h-8 sm:w-9 sm:h-9 bg-[#8c6527] border-2 border-[#fff3cf] ring-2 ring-[#ffd573]'
                          : isSelected
                          ? 'w-6 h-6 sm:w-7 sm:h-7 bg-[#b45309] border-2 border-[#fff6df] ring-2 ring-[#5b412d]'
                          : isVisited
                          ? 'w-5 h-5 sm:w-6 sm:h-6 bg-[#ab8841] border-1.5 border-[#fbebc4]'
                          : 'w-4 h-4 sm:w-5 sm:h-5 bg-[#eadbb8] border border-[#5b412d] opacity-85 hover:opacity-100'
                      }`}
                    >
                      {isCurrent ? (
                        <span className="text-sm select-none animate-bounce" role="img" aria-label={isMaritimeNode ? 'Navío' : 'Caravana'}>
                          {isMaritimeNode ? '⛵' : '🐪'}
                        </span>
                      ) : isVisited ? (
                        <span className="text-[10px] font-bold text-[#fffcf2]">✓</span>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#35271e]" />
                      )}
                    </div>

                    {/* City Name Label Banner */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] font-serif font-bold whitespace-nowrap shadow-sm pointer-events-none transition-all ${
                        isCurrent
                          ? 'bg-[#8c6527] text-[#fff3cf] border border-[#ffd573] scale-105 z-30'
                          : isSelected
                          ? 'bg-[#b45309] text-[#fffcf2] border border-[#35271e] z-30'
                          : 'bg-[#eadbb8]/95 text-[#2a2118] border border-[#5b412d]/50 group-hover:bg-[#fbf5e7]'
                      }`}
                    >
                      {node.name.split(' (')[0].split(' y ')[0]}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Current Position Badge pinned in top-left corner */}
            <div className="absolute top-2.5 left-2.5 z-30 bg-[#8c6527]/95 border-2 border-[#ffd573] text-[#fff3cf] px-3 py-1.5 rounded-xl text-xs font-serif shadow-xl flex items-center gap-2 backdrop-blur-xs">
              <span className="text-base">
                {currentNodeId === 'venice_gold' || currentNodeId === 'constantinople_gold' ? '⛵' : '🐪'}
              </span>
              <div>
                <span className="text-[10px] uppercase tracking-wider block text-[#ffd573] font-bold">
                  {currentNodeId === 'venice_gold' || currentNodeId === 'constantinople_gold' ? 'Puerto de Entrada:' : 'Campamento de la Caravana:'}
                </span>
                <strong className="text-xs sm:text-sm font-serif">
                  {currentLocationInfo.title}
                </strong>
              </div>
            </div>
          </div>

          {/* Caravan Journey Steps Timeline */}
          <div className="rounded-xl border-2 border-[#5b412d]/40 bg-[#eadbb8] p-2.5 shadow-sm">
            <div className="flex items-center justify-between mb-1.5 px-1">
              <span className="text-xs font-serif uppercase tracking-wider font-bold text-[#8c6527] flex items-center gap-1.5">
                <span>📜</span> Recorrido Cronológico del Camino del Oro:
              </span>
              <span className="text-[11px] font-serif text-[#5b412d] italic hidden sm:inline">
                Click en cualquier etapa para inspeccionar el enclave histórico
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {stages.map((stage) => {
                const isPassed = stage.cardNum <= currentCardNumber;
                const isCurrentStage = stage.cardNum === currentCardNumber;
                const isSelected = selectedNode?.id === stage.nodeId;

                return (
                  <button
                    key={`${stage.cardNum}-${stage.nodeId}`}
                    onClick={() => handleStageClick(stage)}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg border text-center transition-all cursor-pointer ${
                      isCurrentStage
                        ? 'border-[#8c6527] bg-[#8c6527] text-[#fff6df] shadow-md ring-2 ring-[#ffd573]'
                        : isSelected
                        ? 'border-[#ab8841] bg-[#fbf5e7] text-[#8c6527] shadow-sm font-bold'
                        : isPassed
                        ? 'border-[#5b412d]/40 bg-[#dfceaa] text-[#35271e] hover:bg-[#fbf5e7]'
                        : 'border-[#5b412d]/20 bg-[#eadbb8]/50 text-[#5b412d]/60'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold">
                      {stage.label}
                    </span>
                    <span className="text-xs font-serif font-semibold truncate w-full">
                      {stage.title.split(' (')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Inspection Drawer when a node is clicked */}
          {selectedNode && (
            <div className="rounded-xl border-2 border-[#8c6527] bg-[#fbf5e7] p-4 shadow-lg animate-fadeIn text-[#2a2118]">
              <div className="flex justify-between items-start border-b border-[#5b412d]/30 pb-2 mb-2">
                <div>
                  <span className="text-[11px] font-serif uppercase tracking-widest font-bold text-[#8c6527]">
                    📍 {selectedNode.region}
                  </span>
                  <h3 className="font-serif font-black text-lg sm:text-xl text-[#35271e] leading-snug">
                    {selectedNode.name}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedNode(null)}
                  className="rounded-md border border-[#5b412d]/40 bg-[#dfceaa] hover:bg-[#eadbb8] px-2 py-0.5 text-xs font-bold text-[#35271e] cursor-pointer"
                >
                  ✕ Cerrar
                </button>
              </div>

              <p className="font-serif text-xs sm:text-sm text-[#443224] leading-relaxed mb-3">
                {selectedNode.description}
              </p>

              {/* Goods and treasures traded */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#5b412d]/20">
                <span className="text-xs font-serif font-bold text-[#8c6527]">
                  Bienes, monedas y saberes que confluían aquí:
                </span>
                {selectedNode.goods.map((good, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-md border border-[#ab8841]/50 bg-[#dfceaa] px-2 py-0.5 text-xs font-serif text-[#35271e] shadow-xs"
                  >
                    <span>✦</span>
                    <span>{good}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* MODE 2: 5 GRANDES BIENES DEL CIRCUITO DEL ORO */
        <div className="rounded-xl border-2 border-[#5b412d] bg-[#fbf5e7] p-4 sm:p-5 shadow-inner animate-fadeIn">
          {/* Top Goods Navigation Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-5 border-b border-[#5b412d]/30 pb-3">
            {GOLD_HISTORICAL_GOODS.map((good) => {
              const isSelected = selectedGoodId === good.id;

              return (
                <button
                  key={good.id}
                  onClick={() => {
                    sounds.playWoodClick();
                    setSelectedGoodId(good.id);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-serif text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'border-2 border-[#8c6527] bg-[#8c6527] text-[#fff6df] shadow-md scale-105'
                      : 'border border-[#5b412d]/40 bg-[#eadbb8] text-[#35271e] hover:bg-[#dcc9a1]'
                  }`}
                >
                  <PotionCraftIcon name={good.iconName} size={22} />
                  <span>{good.name.split(' (')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Good Showcase */}
          {(() => {
            const currentGood =
              GOLD_HISTORICAL_GOODS.find((g) => g.id === selectedGoodId) || GOLD_HISTORICAL_GOODS[0];

            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                <div className="md:col-span-4 rounded-xl border-2 border-[#5b412d]/60 bg-[#dfceaa]/60 p-4 text-center">
                  <div className="flex justify-center mb-3">
                    <PotionCraftIcon name={currentGood.iconName} size={72} className="shadow-md" />
                  </div>
                  <h3 className="font-serif font-black text-xl text-[#35271e] mb-1">
                    {currentGood.name}
                  </h3>
                  <div className="inline-block rounded-md border border-[#8c6527] bg-[#8c6527]/10 px-2 py-0.5 text-xs font-serif font-bold text-[#8c6527] mb-3">
                    📍 Origen: {currentGood.origin}
                  </div>
                  <div className="rounded-lg border border-[#ab8841] bg-[#fffbf2] p-2.5 text-left text-xs font-serif text-[#443224]">
                    <strong className="text-[#8c6527] block mb-1">Circuito y Trayecto:</strong>
                    <p className="italic leading-relaxed">{currentGood.circuit}</p>
                  </div>
                </div>

                <div className="md:col-span-8 flex flex-col justify-between space-y-4">
                  <div className="rounded-xl border border-[#5b412d]/30 bg-[#fffdf7] p-4 shadow-sm">
                    <h4 className="font-serif font-bold text-sm text-[#8c6527] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span>📜</span> Trascendencia en la Economía Medieval Transcontinental:
                    </h4>
                    <p className="font-serif text-sm text-[#2a2118] leading-relaxed">
                      {currentGood.significance}
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-[#ab8841] bg-[#fff9ea] p-3.5 shadow-sm">
                    <span className="text-xs font-serif uppercase tracking-wider font-bold text-[#8c6527] flex items-center gap-1.5 mb-1">
                      <span>💡</span> Pregunta Orientadora para el Aula:
                    </span>
                    <p className="font-serif italic text-sm font-semibold text-[#35271e]">
                      "{currentGood.guidingQuestion}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
