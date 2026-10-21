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
      { id: 'ghana', x: 8.5, y: 81.0, passed: currentCardNumber >= 1 },
      { id: 'mali_timbuktu', x: 16.0, y: 75.5, passed: currentCardNumber >= 2 },
      { id: 'fezzan', x: 26.5, y: 66.0, passed: currentCardNumber >= 3 },
      { id: 'cairo_gold', x: 32.5, y: 55.5, passed: currentCardNumber >= 3 },
      { id: 'constantinople_gold', x: 29.5, y: 37.5, passed: currentCardNumber >= 4 }
    ]
    : [
      { id: 'ghana', x: 8.5, y: 81.0, passed: currentCardNumber >= 1 },
      { id: 'mali_timbuktu', x: 16.0, y: 75.5, passed: currentCardNumber >= 2 },
      { id: 'taghaza', x: 13.5, y: 63.5, passed: currentCardNumber >= 3 },
      { id: 'tunis_carthage', x: 13.5, y: 52.0, passed: currentCardNumber >= 3 },
      { id: 'venice_gold', x: 17.2, y: 20.5, passed: currentCardNumber >= 4 }
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
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 font-serif text-xs font-bold transition-all cursor-pointer ${mapMode === 'map'
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
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 font-serif text-xs font-bold transition-all cursor-pointer ${mapMode === 'goods'
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

      {/* MODE 1: REGIONAL MEDIEVAL MAP CANVAS ENCUADRADO EN ÁFRICA, MEDITERRÁNEO Y EUROPA */}
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
                  onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.2))}
                  title="Alejar mapa"
                  className="px-2 py-0.5 hover:bg-[#eadbb8] font-bold cursor-pointer text-[#35271e]"
                >
                  −
                </button>
                <span className="px-1.5 text-[11px] font-bold text-[#5b412d]">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.2))}
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

          {/* Map Canvas Frame: Reencuadre enfocado de potion_silk_road_map.jpg */}
          <div
            ref={mapContainerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[580px] rounded-xl border-3 border-[#5b412d] bg-[#221a14] overflow-hidden select-none shadow-inner"
          >
            {/* The exact original Potion Craft map image with focused regional framing */}
            <div
              className="absolute transition-transform duration-300 ease-out"
              style={{
                width: '238%',
                height: '136%',
                left: '0%',
                top: '-18%',
                transform: `scale(${zoomLevel})`,
                transformOrigin: '22% 52%'
              }}
            >
              <img
                src="/images/potion_silk_road_map.jpg"
                alt="Mapa interactivo del Camino del Oro en estilo Potion Craft"
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
                  const isMaritime =
                    (prev.id === 'tunis_carthage' && pt.id === 'venice_gold') ||
                    (prev.id === 'cairo_gold' && pt.id === 'constantinople_gold');

                  return (
                    <g key={`gold-trail-${idx}`}>
                      <line
                        x1={prev.x}
                        y1={prev.y}
                        x2={pt.x}
                        y2={pt.y}
                        stroke={isTraversed ? (isMaritime ? '#5de2ff' : '#ffd573') : (isMaritime ? '#356d84' : '#a4864d')}
                        strokeWidth={isTraversed ? '0.75' : '0.4'}
                        strokeDasharray={isTraversed ? '0.9 0.6' : '0.5 0.5'}
                        strokeOpacity={isTraversed ? '0.95' : '0.45'}
                        strokeLinecap="round"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Interactive City Pins / Hotspots */}
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
                      className={`relative flex items-center justify-center rounded-full transition-all shadow-md ${isCurrent
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
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] font-serif font-bold whitespace-nowrap shadow-sm pointer-events-none transition-all ${isCurrent
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
                    className={`flex flex-col items-center justify-center p-2 rounded-lg border text-center transition-all cursor-pointer ${isCurrentStage
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
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-serif text-xs sm:text-sm font-bold transition-all cursor-pointer ${isSelected
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
