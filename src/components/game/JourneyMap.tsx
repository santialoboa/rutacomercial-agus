import React, { useState, useRef } from 'react';
import { MAP_NODES, getCardLocation } from '../../data/mapData';
import { HISTORICAL_GOODS } from '../../data/goods';
import type { MapNode, StoryBranch, StoryId } from '../../types/game';
import { sounds } from '../../utils/audio';
import { PotionCraftIcon } from '../illustrations/PotionCraftIcon';

interface JourneyMapProps {
  currentCardNumber: number;
  branch?: StoryBranch;
  storyId?: StoryId;
  className?: string;
  onClose?: () => void;
  isModal?: boolean;
}

// Ordered stages representing the caravan's chronological adventure
const CARAVAN_STAGES_LAND = [
  { cardNum: 0, nodeId: 'china', label: 'Partida', title: "Chang'an (China Imperial)" },
  { cardNum: 1, nodeId: 'samarkand', label: 'Carta 1', title: 'Samarcanda (Gran Bazar)' },
  { cardNum: 2, nodeId: 'samarkand', label: 'Carta 2', title: 'Samarcanda (Molinos de Papel)' },
  { cardNum: 3, nodeId: 'india', label: 'Carta 3', title: 'India (Cifras y Especias)' },
  { cardNum: 4, nodeId: 'baghdad', label: 'Carta 4', title: 'Bagdad (Sabiduría y Medicina)' },
  { cardNum: 5, nodeId: 'alexandria', label: 'Carta 5', title: 'Alejandría (Dársena de Galeras)' },
  { cardNum: 6, nodeId: 'caffa_constantinople', label: 'Carta 6', title: 'Caffa y Bósforo (Alerta de Peste)' },
  { cardNum: 7, nodeId: 'venice_genoa', label: 'Destino', title: 'Venecia y Puertos de Europa' }
];

const CARAVAN_STAGES_SEA = [
  { cardNum: 0, nodeId: 'china', label: 'Partida', title: "Chang'an (China Imperial)" },
  { cardNum: 1, nodeId: 'samarkand', label: 'Carta 1', title: 'Samarcanda (Gran Bazar)' },
  { cardNum: 2, nodeId: 'samarkand', label: 'Carta 2', title: 'Samarcanda (Molinos de Papel)' },
  { cardNum: 3, nodeId: 'india', label: 'Carta 3', title: 'India (Salto al Océano)' },
  { cardNum: 4, nodeId: 'india', label: 'Carta 4M', title: 'Océano Índico (Vientos del Monzón)' },
  { cardNum: 5, nodeId: 'ormuz', label: 'Carta 5M', title: 'Ormuz (Aduana del Golfo)' },
  { cardNum: 6, nodeId: 'venice_genoa', label: 'Carta 6M', title: 'Puerto de Entrada (Cuarentena)' },
  { cardNum: 7, nodeId: 'venice_genoa', label: 'Destino', title: 'Venecia y Puertos de Europa' }
];

const CARAVAN_STAGES_GOLD_WEST = [
  { cardNum: 1, nodeId: 'ghana', label: 'Carta 1', title: 'Koumbi Saleh (Monopolio del Oro)' },
  { cardNum: 2, nodeId: 'mali_timbuktu', label: 'Carta 2', title: 'Tombuctú (Saberes y Tráfico de Cautivos)' },
  { cardNum: 3, nodeId: 'tunis_carthage', label: 'Carta 3', title: 'Túnez y Cartago (Dinares y Galeras)' },
  { cardNum: 4, nodeId: 'venice_gold', label: 'Carta 4', title: 'Venecia (La Zecca y Ducado de Oro)' }
];

const CARAVAN_STAGES_GOLD_EAST = [
  { cardNum: 1, nodeId: 'ghana', label: 'Carta 1', title: 'Koumbi Saleh (Monopolio del Oro)' },
  { cardNum: 2, nodeId: 'mali_timbuktu', label: 'Carta 2', title: 'Tombuctú (Saberes y Tráfico de Cautivos)' },
  { cardNum: 3, nodeId: 'cairo_gold', label: 'Carta 3', title: 'El Cairo (Devaluación y Bimaristán)' },
  { cardNum: 4, nodeId: 'constantinople_gold', label: 'Carta 4', title: 'Constantinopla (Hiperpíron y Santa Sofía)' }
];

export const JourneyMap: React.FC<JourneyMapProps> = ({
  currentCardNumber,
  branch = 'land',
  storyId = 'silk-road',
  className = '',
  onClose,
  isModal = false
}) => {
  const [mapMode, setMapMode] = useState<'map' | 'goods'>('map');
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(null);
  const [selectedGoodId, setSelectedGoodId] = useState<string>('silk');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showAllNodes, setShowAllNodes] = useState<boolean>(true);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const isGoldRoad = storyId === 'gold-road';
  const isGoldEast = branch === 'egypt-byzantium';

  const stages = isGoldRoad
    ? (isGoldEast ? CARAVAN_STAGES_GOLD_EAST : CARAVAN_STAGES_GOLD_WEST)
    : (branch === 'sea' ? CARAVAN_STAGES_SEA : CARAVAN_STAGES_LAND);

  const currentLocationInfo = getCardLocation(currentCardNumber, branch, storyId);
  const currentNodeId = currentLocationInfo.nodeId;
  const currentNode = MAP_NODES.find((n) => n.id === currentNodeId) || MAP_NODES[0];

  // Determine visited nodes up to current card
  const visitedNodeIds = new Set<string>(isGoldRoad ? ['ghana'] : ['china']);
  for (let i = 1; i <= currentCardNumber; i++) {
    const loc = getCardLocation(i, branch, storyId);
    if (loc) {
      visitedNodeIds.add(loc.nodeId);
    }
  }

  // Caravan route line segments connecting visited stops
  const journeyTrailPoints = isGoldRoad
    ? (isGoldEast
        ? [
            { id: 'ghana', x: 10.5, y: 78.5, passed: currentCardNumber >= 1 },
            { id: 'mali_timbuktu', x: 18.0, y: 74.0, passed: currentCardNumber >= 2 },
            { id: 'fezzan', x: 26.5, y: 65.0, passed: currentCardNumber >= 3 },
            { id: 'cairo_gold', x: 32.5, y: 53.0, passed: currentCardNumber >= 3 },
            { id: 'constantinople_gold', x: 30.5, y: 36.5, passed: currentCardNumber >= 4 }
          ]
        : [
            { id: 'ghana', x: 10.5, y: 78.5, passed: currentCardNumber >= 1 },
            { id: 'mali_timbuktu', x: 18.0, y: 74.0, passed: currentCardNumber >= 2 },
            { id: 'taghaza', x: 15.5, y: 59.0, passed: currentCardNumber >= 3 },
            { id: 'tunis_carthage', x: 21.0, y: 44.0, passed: currentCardNumber >= 3 },
            { id: 'venice_gold', x: 18.0, y: 29.5, passed: currentCardNumber >= 4 }
          ])
    : (branch === 'sea'
        ? [
            { id: 'china', x: 89.5, y: 47.5, passed: true },
            { id: 'dunhuang', x: 79.0, y: 39.2, passed: true },
            { id: 'kashgar', x: 64.0, y: 39.2, passed: true },
            { id: 'samarkand', x: 57.2, y: 41.0, passed: currentCardNumber >= 1 },
            { id: 'india', x: 61.5, y: 69.5, passed: currentCardNumber >= 3 },
            { id: 'ormuz', x: 48.0, y: 58.5, passed: currentCardNumber >= 5 },
            { id: 'alexandria', x: 30.5, y: 54.5, passed: currentCardNumber >= 5 },
            { id: 'venice_genoa', x: 17.2, y: 30.5, passed: currentCardNumber >= 6 }
          ]
        : [
            { id: 'china', x: 89.5, y: 47.5, passed: true },
            { id: 'dunhuang', x: 79.0, y: 39.2, passed: true },
            { id: 'kashgar', x: 64.0, y: 39.2, passed: true },
            { id: 'samarkand', x: 57.2, y: 41.0, passed: currentCardNumber >= 1 },
            { id: 'india', x: 61.5, y: 69.5, passed: currentCardNumber >= 3 },
            { id: 'baghdad', x: 39.5, y: 51.5, passed: currentCardNumber >= 4 },
            { id: 'alexandria', x: 30.5, y: 54.5, passed: currentCardNumber >= 5 },
            { id: 'caffa_constantinople', x: 29.5, y: 37.5, passed: currentCardNumber >= 6 },
            { id: 'venice_genoa', x: 17.2, y: 30.5, passed: currentCardNumber >= 7 }
          ]);

  const handleNodeClick = (node: MapNode) => {
    sounds.playWoodClick();
    setSelectedNode(node);
  };

  const handleStageClick = (stage: (typeof stages)[0]) => {
    sounds.playParchment();
    const node = MAP_NODES.find((n) => n.id === stage.nodeId);
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
          <PotionCraftIcon name="map" size={36} className="shadow-sm" />
          <div>
            <h2 className="text-lg sm:text-2xl font-bold font-serif text-[#35271e] tracking-wide leading-tight flex items-center gap-2">
              Gran Mapa de la Ruta de la Seda
            </h2>
            <p className="text-xs text-[#5b412d] italic font-serif">
              Seguimiento interactivo de la caravana transcontinental (Siglo XIV)
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
                  ? 'bg-[#713c3d] text-[#fff6df] shadow'
                  : 'text-[#35271e] hover:bg-[#d8c39a]'
              }`}
            >
              <span>🧭</span>
              <span>Mapa Interactivo</span>
            </button>
            <button
              onClick={() => {
                sounds.playParchment();
                setMapMode('goods');
              }}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 font-serif text-xs font-bold transition-all cursor-pointer ${
                mapMode === 'goods'
                  ? 'bg-[#713c3d] text-[#fff6df] shadow'
                  : 'text-[#35271e] hover:bg-[#d8c39a]'
              }`}
            >
              <span>⚖️</span>
              <span>5 Grandes Mercancías</span>
            </button>
          </div>

          {isModal && onClose && (
            <button
              onClick={() => {
                sounds.playParchment();
                onClose();
              }}
              className="rounded-lg border-2 border-[#5b412d] bg-[#eadbb8] hover:bg-[#d8c39a] hover:border-[#713c3d] px-3 py-1 font-serif font-bold text-xs sm:text-sm text-[#35271e] transition-all shadow cursor-pointer"
            >
              ✕ Cerrar
            </button>
          )}
        </div>
      </div>

      {/* MODE 1: GORGEOUS POTION CRAFT INTERACTIVE MAP */}
      {mapMode === 'map' ? (
        <div className="flex flex-col space-y-3">
          {/* Top Control Bar with Quick Actions */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-[#eadbb8]/80 rounded-xl px-3 py-2 border border-[#5b412d]/30 text-xs font-serif">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#713c3d] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ab8841] animate-ping" />
                Escala actual:
              </span>
              <strong className="text-[#35271e]">{currentLocationInfo.title}</strong>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={centerOnCaravan}
                title="Centrar mapa en la escala actual de la caravana"
                className="px-2.5 py-1 rounded-md border border-[#5b412d] bg-[#fbf5e7] hover:bg-[#dfceaa] font-bold text-[#713c3d] transition-all shadow-xs cursor-pointer flex items-center gap-1"
              >
                <span>📍</span>
                <span>Centrar en Caravana</span>
              </button>

              <button
                onClick={() => setShowAllNodes(!showAllNodes)}
                className="px-2 py-1 rounded-md border border-[#5b412d]/50 bg-[#dfceaa] hover:bg-[#fbf5e7] text-[#35271e] transition cursor-pointer"
              >
                {showAllNodes ? '👁️ Todas las Ciudades' : '🎯 Solo Recorrido'}
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
                    className="px-1.5 py-0.5 hover:bg-[#eadbb8] text-[10px] text-[#713c3d] font-bold border-l border-[#5b412d]/30 cursor-pointer"
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
            className="relative w-full aspect-[16/9] max-h-[580px] rounded-xl border-3 border-[#5b412d] bg-[#221a14] overflow-hidden select-none shadow-inner"
          >
            {/* The base Potion Craft cartography image with smooth zoom transition */}
            <div
              className="w-full h-full relative transition-transform duration-300 ease-out origin-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src="/images/potion_silk_road_map.jpg"
                alt="Mapa interactivo de la Ruta de la Seda en estilo Potion Craft"
                className="w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
              />

              {/* Dotted Golden Journey Trail connecting visited stops */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              >
                {journeyTrailPoints.map((pt, idx) => {
                  if (idx === 0) return null;
                  const prev = journeyTrailPoints[idx - 1];
                  const isTraversed = pt.passed;

                  return (
                    <g key={`trail-${idx}`}>
                      <line
                        x1={prev.x}
                        y1={prev.y}
                        x2={pt.x}
                        y2={pt.y}
                        stroke={isTraversed ? (branch === 'sea' ? '#5de2ff' : '#ffd573') : (branch === 'sea' ? '#356d84' : '#a4864d')}
                        strokeWidth={isTraversed ? '0.7' : '0.35'}
                        strokeDasharray={isTraversed ? '0.8 0.6' : '0.4 0.4'}
                        strokeOpacity={isTraversed ? '0.9' : '0.4'}
                        strokeLinecap="round"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Interactive City Pins / Hotspots */}
              {MAP_NODES.map((node) => {
                const isCurrent = node.id === currentNodeId;
                const isVisited = visitedNodeIds.has(node.id);
                const isSelected = selectedNode?.id === node.id;

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
                    {/* Glowing Ping for the Current Caravan Node */}
                    {isCurrent && (
                      <div className="absolute inset-0 -m-3">
                        <span className="absolute inset-0 rounded-full bg-[#ffdd80] opacity-75 animate-ping" />
                        <span className="absolute inset-1 rounded-full bg-[#713c3d] opacity-40 animate-pulse" />
                      </div>
                    )}

                    {/* Node Token */}
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all shadow-md ${
                        isCurrent
                          ? 'w-8 h-8 sm:w-9 sm:h-9 bg-[#713c3d] border-2 border-[#fff3cf] ring-2 ring-[#ab8841]'
                          : isSelected
                          ? 'w-6 h-6 sm:w-7 sm:h-7 bg-[#ab8841] border-2 border-[#fff6df] ring-2 ring-[#713c3d]'
                          : isVisited
                          ? 'w-5 h-5 sm:w-6 sm:h-6 bg-[#8c6527] border-1.5 border-[#fbebc4]'
                          : 'w-4 h-4 sm:w-5 sm:h-5 bg-[#eadbb8] border border-[#5b412d] opacity-85 hover:opacity-100'
                      }`}
                    >
                      {isCurrent ? (
                        <span className="text-sm select-none animate-bounce" role="img" aria-label={branch === 'sea' && currentCardNumber >= 4 ? 'Navío' : 'Caravana'}>
                          {branch === 'sea' && currentCardNumber >= 4 ? '⛵' : '🐪'}
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
                          ? 'bg-[#713c3d] text-[#fff3cf] border border-[#ab8841] scale-105 z-30'
                          : isSelected
                          ? 'bg-[#ab8841] text-[#fffcf2] border border-[#35271e] z-30'
                          : 'bg-[#eadbb8]/95 text-[#2a2118] border border-[#5b412d]/50 group-hover:bg-[#fbf5e7]'
                      }`}
                    >
                      {node.name.split(' (')[0].split(' y ')[0]}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Current Position Badge pinned in corner */}
            <div className="absolute top-2.5 left-2.5 z-30 bg-[#713c3d]/95 border-2 border-[#ab8841] text-[#fff3cf] px-3 py-1.5 rounded-xl text-xs font-serif shadow-xl flex items-center gap-2 backdrop-blur-xs">
              <span className="text-base">{branch === 'sea' && currentCardNumber >= 4 ? '⛵' : '🐪'}</span>
              <div>
                <span className="text-[10px] uppercase tracking-wider block text-[#ffd573] font-bold">
                  {branch === 'sea' && currentCardNumber >= 4 ? 'Posición de la Flota Marina:' : 'Posición de la Caravana:'}
                </span>
                <strong className="text-xs sm:text-sm font-serif">
                  {currentLocationInfo.title}
                </strong>
              </div>
            </div>
          </div>

          {/* Caravan Journey Steps Timeline (How we are moving!) */}
          <div className="rounded-xl border-2 border-[#5b412d]/40 bg-[#eadbb8] p-2.5 shadow-sm">
            <div className="flex items-center justify-between mb-1.5 px-1">
              <span className="text-xs font-serif uppercase tracking-wider font-bold text-[#713c3d] flex items-center gap-1.5">
                <span>📜</span> Recorrido Cronológico del Viaje:
              </span>
              <span className="text-[11px] font-serif text-[#5b412d] italic hidden sm:inline">
                Click en cualquier etapa para inspeccionar el lugar
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1.5">
              {stages.map((stage) => {
                const isPassed = stage.cardNum <= currentCardNumber;
                const isCurrentStage =
                  stage.cardNum === currentCardNumber ||
                  (stage.cardNum === 0 && currentCardNumber === 0);
                const isSelected = selectedNode?.id === stage.nodeId;

                return (
                  <button
                    key={`${stage.cardNum}-${stage.nodeId}`}
                    onClick={() => handleStageClick(stage)}
                    className={`flex flex-col items-center justify-center p-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                      isCurrentStage
                        ? 'border-[#713c3d] bg-[#713c3d] text-[#fff6df] shadow-md ring-2 ring-[#ab8841]'
                        : isSelected
                        ? 'border-[#ab8841] bg-[#fbf5e7] text-[#713c3d] shadow-sm font-bold'
                        : isPassed
                        ? 'border-[#5b412d]/40 bg-[#dfceaa] text-[#35271e] hover:bg-[#fbf5e7]'
                        : 'border-[#5b412d]/20 bg-[#eadbb8]/50 text-[#5b412d]/60'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold">
                      {stage.label}
                    </span>
                    <span className="text-[11px] font-serif font-semibold truncate w-full">
                      {stage.title.split(' (')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Inspection Card Drawer when a node is selected */}
          {selectedNode && (
            <div className="rounded-xl border-2 border-[#713c3d] bg-[#fbf5e7] p-4 shadow-lg animate-fadeIn text-[#2a2118]">
              <div className="flex justify-between items-start border-b border-[#5b412d]/30 pb-2 mb-2">
                <div>
                  <span className="text-[11px] font-serif uppercase tracking-widest font-bold text-[#713c3d]">
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
                <span className="text-xs font-serif font-bold text-[#713c3d]">
                  Mercancías y saberes que confluían aquí:
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
        /* MODE 2: CÓDICE DE LAS 5 GRANDES MERCANCÍAS HISTÓRICAS WITH POTION CRAFT ICONS */
        <div className="rounded-xl border-2 border-[#5b412d] bg-[#fbf5e7] p-4 sm:p-5 shadow-inner animate-fadeIn">
          {/* Top Goods Navigation Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-5 border-b border-[#5b412d]/30 pb-3">
            {HISTORICAL_GOODS.map((good) => {
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
                      ? 'border-2 border-[#713c3d] bg-[#713c3d] text-[#fff6df] shadow-md scale-105'
                      : 'border border-[#5b412d]/40 bg-[#eadbb8] text-[#35271e] hover:bg-[#dcc9a1]'
                  }`}
                >
                  <PotionCraftIcon name={good.id} size={22} />
                  <span>{good.name.split(' (')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Good Showcase */}
          {(() => {
            const currentGood =
              HISTORICAL_GOODS.find((g) => g.id === selectedGoodId) || HISTORICAL_GOODS[0];
            const goodsGuideQuestions: Record<string, string> = {
              silk: '¿Por qué la seda viajaba miles de leguas si pesaba tan poco? ¿Quiénes podían comprarla al final del recorrido?',
              spices: '¿Por qué decimos que las especias impulsaron las rutas marítimas en el Océano Índico más que cualquier otro producto?',
              porcelain: '¿Por qué la porcelana demuestra que no existía una sola "Ruta de la Seda", sino redes terrestres y marítimas entrelazadas?',
              paper: '¿Qué diferencia histórica fundamental hay entre comprar papel terminado y aprender a fabricar un molino de papel en tu propia tierra?',
              gold: '¿Por qué el oro de los reinos de Mali y Ghana demuestra que África subsahariana estaba fuertemente integrada a la economía mundial medieval?'
            };

            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                <div className="md:col-span-4 rounded-xl border-2 border-[#5b412d]/60 bg-[#dfceaa]/60 p-4 text-center">
                  <div className="flex justify-center mb-3">
                    <PotionCraftIcon name={selectedGoodId} size={72} className="shadow-md" />
                  </div>
                  <h3 className="font-serif font-black text-xl text-[#35271e] mb-1">
                    {currentGood.name}
                  </h3>
                  <div className="inline-block rounded-md border border-[#713c3d] bg-[#713c3d]/10 px-2 py-0.5 text-xs font-serif font-bold text-[#713c3d] mb-3">
                    📍 Procedencia: {currentGood.origin}
                  </div>
                  <div className="rounded-lg border border-[#ab8841] bg-[#fffbf2] p-2.5 text-left text-xs font-serif text-[#443224]">
                    <strong className="text-[#713c3d] block mb-1">Circuito y Trayecto:</strong>
                    <p className="italic leading-relaxed">{currentGood.circuit}</p>
                  </div>
                </div>

                <div className="md:col-span-8 flex flex-col justify-between space-y-4">
                  <div className="rounded-xl border border-[#5b412d]/30 bg-[#fffdf7] p-4 shadow-sm">
                    <h4 className="font-serif font-bold text-sm text-[#713c3d] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span>📜</span> Trascendencia en las Redes Medievales:
                    </h4>
                    <p className="font-serif text-sm text-[#2a2118] leading-relaxed">
                      {currentGood.significance}
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-[#ab8841] bg-[#fff9ea] p-3.5 shadow-sm">
                    <span className="text-xs font-serif uppercase tracking-wider font-bold text-[#713c3d] flex items-center gap-1.5 mb-1">
                      <span>💡</span> Pregunta Orientadora para el Aula:
                    </span>
                    <p className="font-serif italic text-sm font-semibold text-[#35271e]">
                      "{goodsGuideQuestions[currentGood.id]}"
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
