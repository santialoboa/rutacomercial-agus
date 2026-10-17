import React, { useState } from 'react';
import { MAP_NODES, MAP_ROUTES, CARD_LOCATIONS } from '../../data/mapData';
import { HISTORICAL_GOODS } from '../../data/goods';
import type { MapNode } from '../../types/game';
import { sounds } from '../../utils/audio';

interface JourneyMapProps {
  currentCardNumber: number;
  className?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export const JourneyMap: React.FC<JourneyMapProps> = ({
  currentCardNumber,
  className = '',
  onClose,
  isModal = false
}) => {
  const [mapMode, setMapMode] = useState<'historical' | 'interactive' | 'goods'>('historical');
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(null);
  const [selectedGoodId, setSelectedGoodId] = useState<string>('silk');

  const currentLocationInfo = CARD_LOCATIONS[currentCardNumber] || CARD_LOCATIONS[1];
  const currentNodeId = currentLocationInfo.nodeId;

  // Determine visited nodes up to current card
  const visitedNodeIds = new Set<string>();
  for (let i = 1; i <= currentCardNumber; i++) {
    if (CARD_LOCATIONS[i]) {
      visitedNodeIds.add(CARD_LOCATIONS[i].nodeId);
    }
  }

  const handleNodeClick = (node: MapNode) => {
    sounds.playWoodClick();
    setSelectedNode(node);
  };

  return (
    <div className={`relative flex flex-col rounded-xl border-4 border-[#5b412d] bg-[#dfceaa] shadow-2xl p-4 sm:p-6 text-[#2a2118] ${className}`}>
      {/* Medieval Header Ribbon & View Toggle */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-[#5b412d]/40 pb-3 mb-4 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#35271e] tracking-wide flex items-center gap-2">
            <span>🗺️</span> Gran Mapa y Redes Medievales
          </h2>
          <p className="text-xs sm:text-sm text-[#5b412d] italic font-serif">
            Circulación terrestre, marítima y caravanas transcontinentales (Siglo XIV)
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <div className="flex rounded-lg border border-[#5b412d] bg-[#eadbb8] p-0.5">
            <button
              onClick={() => {
                sounds.playParchment();
                setMapMode('historical');
              }}
              className={`rounded-md px-2.5 py-1 font-serif text-xs font-bold transition-all cursor-pointer ${
                mapMode === 'historical'
                  ? 'bg-[#713c3d] text-[#fff6df] shadow'
                  : 'text-[#35271e] hover:bg-[#d8c39a]'
              }`}
            >
              🗺️ Mapa Ilustrado
            </button>
            <button
              onClick={() => {
                sounds.playParchment();
                setMapMode('interactive');
              }}
              className={`rounded-md px-2.5 py-1 font-serif text-xs font-bold transition-all cursor-pointer ${
                mapMode === 'interactive'
                  ? 'bg-[#713c3d] text-[#fff6df] shadow'
                  : 'text-[#35271e] hover:bg-[#d8c39a]'
              }`}
            >
              🧭 Red Interactiva
            </button>
            <button
              onClick={() => {
                sounds.playParchment();
                setMapMode('goods');
              }}
              className={`rounded-md px-2.5 py-1 font-serif text-xs font-bold transition-all cursor-pointer ${
                mapMode === 'goods'
                  ? 'bg-[#713c3d] text-[#fff6df] shadow'
                  : 'text-[#35271e] hover:bg-[#d8c39a]'
              }`}
            >
              ⚖️ 5 Grandes Mercancías
            </button>
          </div>

          {isModal && onClose && (
            <button
              onClick={() => {
                sounds.playParchment();
                onClose();
              }}
              className="rounded-lg border-2 border-[#5b412d] bg-[#eadbb8] hover:bg-[#d8c39a] px-3 py-1 font-serif font-bold text-sm text-[#35271e] transition-all shadow cursor-pointer"
            >
              ✕ Cerrar
            </button>
          )}
        </div>
      </div>

      {/* VIEW 1: AUTHENTIC HISTORICAL SILK ROAD MAP */}
      {mapMode === 'historical' ? (
        <div className="relative w-full aspect-[16/9] max-h-[560px] rounded-lg border-2 border-[#5b412d] bg-[#25231f] overflow-hidden select-none shadow-inner">
          <img
            src="/images/silk_road_map.jpg"
            alt="Mapa histórico de la Ruta de la Seda y redes comerciales"
            className="w-full h-full object-contain bg-[#f9eed9]"
          />

          {/* Current position banner badge on the historical map */}
          <div className="absolute top-3 right-3 bg-[#713c3d]/95 border border-[#501213] text-[#fff3cf] px-3.5 py-1.5 rounded-full text-xs font-serif font-bold tracking-wide shadow-lg flex items-center gap-2 backdrop-blur-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ab8841] animate-ping" />
            <span>Escala actual de la Caravana: <strong>{currentLocationInfo.title}</strong></span>
          </div>

          <div className="absolute bottom-2 left-2 bg-[#eadbb8]/95 border border-[#5b412d]/70 rounded p-2 text-xs font-serif text-[#35271e] shadow pointer-events-none max-w-xs">
            <div className="font-bold border-b border-[#5b412d]/30 pb-0.5 mb-1 text-[11px] text-[#713c3d]">
              RUTAS DEL MAPA
            </div>
            <p className="text-[11px] leading-tight text-[#443224]">
              Muestra el camino principal terrestre por Asia Central (Samarcanda, Bujará), ramales y rutas marítimas por el Océano Índico y Mediterráneo.
            </p>
          </div>
        </div>
      ) : (
        /* VIEW 2: INTERACTIVE SVG EXPLORATION */
        <div className="relative w-full aspect-[16/9] max-h-[520px] rounded-lg border-2 border-[#5b412d]/60 bg-[#eadbb8] overflow-hidden select-none shadow-inner">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#5b412d_1px,transparent_1px)] [background-size:16px_16px]" />

          <svg viewBox="0 0 1000 560" className="w-full h-full">
            {/* Compass Rose in corner */}
            <g transform="translate(110, 100) scale(0.65)" opacity="0.6">
              <circle cx="0" cy="0" r="50" stroke="#5b412d" strokeWidth="2" fill="none" strokeDasharray="3 3" />
              <polygon points="0,-60 12,-15 60,0 15,12 0,60 -12,15 -60,0 -15,-12" fill="#713c3d" fillOpacity="0.7" stroke="#35271e" strokeWidth="1.5" />
              <polygon points="0,-60 -12,-15 -60,0 -15,-12" fill="#a4864d" fillOpacity="0.8" />
              <text x="0" y="-68" textAnchor="middle" fill="#35271e" fontSize="18" fontWeight="bold" fontFamily="serif">SEPTENTRIO</text>
              <text x="0" y="82" textAnchor="middle" fill="#35271e" fontSize="14" fontFamily="serif">MERIDIES</text>
              <text x="80" y="5" textAnchor="start" fill="#35271e" fontSize="14" fontFamily="serif">ORIENS</text>
              <text x="-80" y="5" textAnchor="end" fill="#35271e" fontSize="14" fontFamily="serif">OCCIDENS</text>
            </g>

            {/* Sea waves */}
            <g opacity="0.35" stroke="#4e6270" strokeWidth="1.5" fill="none">
              <path d="M280 250 Q310 245 340 250 T400 250" />
              <path d="M300 270 Q330 265 360 270" />
              <path d="M480 340 Q510 335 540 340 T600 340" />
              <path d="M650 420 Q680 415 710 420 T770 420" />
              <path d="M720 450 Q750 445 780 450 T840 450" />
            </g>

            {/* Mountain chains */}
            <g opacity="0.4" stroke="#5b412d" strokeWidth="1.5" fill="#dfceaa">
              <polygon points="610,210 625,185 640,210" />
              <polygon points="630,210 650,175 670,210" />
              <polygon points="660,210 680,180 700,210" />
              <polygon points="690,210 715,170 740,210" />
              <polygon points="730,210 755,185 780,210" />
            </g>

            {/* Routes */}
            {MAP_ROUTES.map((route, idx) => {
              const fromNode = MAP_NODES.find((n) => n.id === route.from);
              const toNode = MAP_NODES.find((n) => n.id === route.to);
              if (!fromNode || !toNode) return null;

              const x1 = (fromNode.x / 100) * 1000;
              const y1 = (fromNode.y / 100) * 560;
              const x2 = (toNode.x / 100) * 1000;
              const y2 = (toNode.y / 100) * 560;

              const isPassedRoute = (route.activeUntilCard || 99) <= currentCardNumber;
              const strokeColor = {
                terrestrial: isPassedRoute ? '#713c3d' : '#8c6e54',
                maritime: isPassedRoute ? '#2b526b' : '#5b788c',
                transsaharan: isPassedRoute ? '#a46f25' : '#c4964e'
              }[route.type];

              const strokeDash = {
                terrestrial: 'none',
                maritime: '6 4',
                transsaharan: '3 3'
              }[route.type];

              return (
                <g key={`route-${idx}`}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={strokeColor}
                    strokeWidth={isPassedRoute ? 3.5 : 2}
                    strokeDasharray={strokeDash}
                    strokeLinecap="round"
                    opacity={isPassedRoute ? 0.95 : 0.55}
                  />
                </g>
              );
            })}

            {/* Nodes */}
            {MAP_NODES.map((node) => {
              const cx = (node.x / 100) * 1000;
              const cy = (node.y / 100) * 560;
              const isCurrent = node.id === currentNodeId;
              const isVisited = visitedNodeIds.has(node.id);
              const isSelected = selectedNode?.id === node.id;

              return (
                <g
                  key={node.id}
                  transform={`translate(${cx}, ${cy})`}
                  className="cursor-pointer transition-transform hover:scale-125"
                  onClick={() => handleNodeClick(node)}
                >
                  {isCurrent && (
                    <>
                      <circle cx="0" cy="0" r="26" fill="#713c3d" fillOpacity="0.2">
                        <animate attributeName="r" values="18;32;18" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="16" fill="#ab8841" fillOpacity="0.4" />
                    </>
                  )}

                  <circle
                    cx="0"
                    cy="0"
                    r={isCurrent ? 12 : isVisited ? 9 : 7}
                    fill={isCurrent ? '#713c3d' : isVisited ? '#a4864d' : '#dfceaa'}
                    stroke="#35271e"
                    strokeWidth={isSelected ? 3 : 2}
                  />

                  <circle cx="0" cy="0" r={isCurrent ? 5 : 3} fill={isCurrent ? '#fff3cf' : '#35271e'} />

                  {isCurrent && (
                    <g transform="translate(0, -22)">
                      <line x1="0" y1="0" x2="0" y2="14" stroke="#35271e" strokeWidth="2" />
                      <polygon points="0,0 16,5 0,10" fill="#713c3d" stroke="#35271e" strokeWidth="1" />
                    </g>
                  )}

                  <text
                    x="0"
                    y={isCurrent ? 26 : 20}
                    textAnchor="middle"
                    fill="#2a2118"
                    fontSize={isCurrent ? 14 : 11}
                    fontWeight={isCurrent ? 'bold' : 'normal'}
                    fontFamily="'EB Garamond', serif"
                    className="pointer-events-none drop-shadow-sm select-none"
                    style={{ textShadow: '0 1px 3px rgba(255,255,255,0.8)' }}
                  >
                    {node.name.split(' y ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="absolute top-2 right-2 bg-[#713c3d] text-[#fff3cf] px-3 py-1 rounded-full text-xs font-serif font-bold tracking-wide shadow flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ab8841] animate-ping" />
            <span>Posición de la Caravana: <strong>{currentLocationInfo.title}</strong></span>
          </div>
        </div>
      )}

      {/* VIEW 3: CÓDICE DE LAS 5 GRANDES MERCANCÍAS HISTÓRICAS */}
      {mapMode === 'goods' && (
        <div className="rounded-xl border-2 border-[#5b412d] bg-[#fbf5e7] p-4 sm:p-5 shadow-inner animate-fadeIn">
          {/* Top Goods Navigation Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-5 border-b border-[#5b412d]/30 pb-3">
            {HISTORICAL_GOODS.map((good) => {
              const isSelected = selectedGoodId === good.id;
              const icons: Record<string, string> = {
                silk: '🧵',
                spices: '🌿',
                porcelain: '🏺',
                paper: '📜',
                gold: '👑'
              };

              return (
                <button
                  key={good.id}
                  onClick={() => {
                    sounds.playWoodClick();
                    setSelectedGoodId(good.id);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-serif text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'border-2 border-[#713c3d] bg-[#713c3d] text-[#fff6df] shadow-md scale-105'
                      : 'border border-[#5b412d]/40 bg-[#eadbb8] text-[#35271e] hover:bg-[#dcc9a1]'
                  }`}
                >
                  <span>{icons[good.id] || '✦'}</span>
                  <span>{good.name.split(' (')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Good Showcase */}
          {(() => {
            const currentGood = HISTORICAL_GOODS.find((g) => g.id === selectedGoodId) || HISTORICAL_GOODS[0];
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
                  <div className="text-4xl mb-2">
                    {selectedGoodId === 'silk' && '🧵'}
                    {selectedGoodId === 'spices' && '🌿'}
                    {selectedGoodId === 'porcelain' && '🏺'}
                    {selectedGoodId === 'paper' && '📜'}
                    {selectedGoodId === 'gold' && '👑'}
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

      {/* Selected Node Details */}
      {selectedNode && mapMode === 'interactive' && (
        <div className="mt-4 rounded-lg border-2 border-[#5b412d] bg-[#eadbb8] p-3 text-sm animate-fadeIn">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#713c3d]">
                {selectedNode.region}
              </span>
              <h3 className="font-serif font-bold text-base text-[#35271e]">
                {selectedNode.name}
              </h3>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-xs font-bold text-[#713c3d] hover:underline px-2 py-0.5 cursor-pointer"
            >
              Cerrar detalle
            </button>
          </div>
          <p className="mt-1 text-xs text-[#443224]">{selectedNode.description}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            <span className="text-[11px] font-bold text-[#5b412d]">Mercancías y saberes:</span>
            {selectedNode.goods.map((good, i) => (
              <span
                key={i}
                className="rounded border border-[#5b412d]/40 bg-[#dfceaa] px-1.5 py-0.5 text-[10px] text-[#2a2118]"
              >
                {good}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
