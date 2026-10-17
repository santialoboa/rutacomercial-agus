import React from 'react';
import { GAME_CARDS } from '../../data/cards';
import { sounds } from '../../utils/audio';

interface ProgressRibbonProps {
  currentCardNumber: number;
  onOpenMap: () => void;
  characterName?: string;
}

export const ProgressRibbon: React.FC<ProgressRibbonProps> = ({
  currentCardNumber,
  onOpenMap,
  characterName
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border-2 border-[#5b412d]/50 bg-[#dfceaa]/80 px-4 py-2.5 shadow-md">
      {/* Character indicator */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-serif uppercase tracking-wider text-[#713c3d] font-bold">
          Caravana:
        </span>
        <span className="font-serif font-bold text-sm sm:text-base text-[#35271e]">
          {characterName || 'Viajeros de la Ruta'}
        </span>
      </div>

      {/* 6 Step Cards Indicators */}
      <div className="flex items-center gap-1.5 sm:gap-2.5">
        {GAME_CARDS.map((card) => {
          const isCurrent = card.number === currentCardNumber;
          const isCompleted = card.number < currentCardNumber;

          return (
            <div
              key={card.number}
              title={`Carta ${card.number}: ${card.title}`}
              className={`flex items-center justify-center rounded-full font-serif font-bold transition-all text-xs sm:text-sm ${
                isCurrent
                  ? 'w-7 h-7 sm:w-8 sm:h-8 border-2 border-[#501213] bg-[#713c3d] text-[#fff6df] shadow-md scale-110 ring-2 ring-[#a4864d]/60'
                  : isCompleted
                  ? 'w-6 h-6 sm:w-7 sm:h-7 border border-[#5b412d] bg-[#ab8841] text-[#fffcf2]'
                  : 'w-6 h-6 sm:w-7 sm:h-7 border border-[#5b412d]/40 bg-[#eadbb8]/60 text-[#5b412d]/60'
              }`}
            >
              {isCompleted ? '✓' : card.number}
            </div>
          );
        })}
      </div>

      {/* Button to view map anytime */}
      <button
        onClick={() => {
          sounds.playParchment();
          onOpenMap();
        }}
        className="inline-flex items-center gap-2 rounded-lg border border-[#5b412d] bg-[#eadbb8] hover:bg-[#d8c39a] hover:border-[#713c3d] px-3 py-1 font-serif text-xs sm:text-sm font-bold text-[#35271e] transition-all shadow-sm cursor-pointer group"
      >
        <img
          src="/images/icon_map.jpg"
          alt="Mapa"
          className="w-5 h-5 rounded-xs object-cover border border-[#5b412d]/40 group-hover:rotate-6 transition-transform"
        />
        <span>Ver Mapa de Rutas</span>
      </button>
    </div>
  );
};
