import React from 'react';
import { ParchmentFrame } from '../ui/ParchmentFrame';
import { MedievalButton } from '../ui/MedievalButton';
import { WaxSealStamp, CharacterPortraitIcon } from '../illustrations/MedievalIcons';
import type { Character, DecisionRecord } from '../../types/game';
import { sounds } from '../../utils/audio';

interface ChronicleSummaryProps {
  character: Character;
  decisions: DecisionRecord[];
  onOpenMap: () => void;
  onProceedToReflection: () => void;
}

export const ChronicleSummary: React.FC<ChronicleSummaryProps> = ({
  character,
  decisions,
  onOpenMap,
  onProceedToReflection
}) => {
  // Extract all goods & ideas discovered
  const allDiscovered = Array.from(
    new Set(decisions.flatMap((d) => d.discoveredGoodsOrIdeas || []))
  );

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 flex items-center justify-center">
      <ParchmentFrame variant="royal" className="max-w-4xl">
        {/* Illuminated Header with Wax Seal */}
        <div className="text-center border-b-2 border-[#5b412d]/30 pb-6 mb-6">
          <div className="flex justify-center mb-3">
            <WaxSealStamp variant="gold" size={76} />
          </div>

          <span className="font-serif uppercase tracking-widest text-xs font-bold text-[#713c3d]">
            Registro Histórico del Curso
          </span>

          <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#35271e] mt-1 mb-2">
            Crónica del Viaje
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-[#5b412d]">
            Memoria viva de las decisiones tomadas a lo largo de las rutas medievales
          </p>
        </div>

        {/* Character Perspective Banner */}
        <div className="flex items-center gap-4 rounded-xl border border-[#ab8841] bg-[#eadbb8]/60 p-4 mb-6">
          <CharacterPortraitIcon type={character.avatarIcon} size={54} />
          <div>
            <div className="text-xs font-serif uppercase tracking-wider text-[#713c3d] font-bold">
              Perspectiva de la Caravana
            </div>
            <div className="font-serif font-bold text-lg text-[#35271e]">
              {character.name} — {character.role}
            </div>
            <div className="text-xs font-serif italic text-[#443224]">
              "{character.perspectiveText}"
            </div>
          </div>
        </div>

        {/* Six Decisions Chronicle List */}
        <div className="space-y-4 mb-8">
          <h3 className="font-serif font-bold text-xl text-[#35271e] border-b border-[#5b412d]/20 pb-2">
            Durante el recorrido de nuestra caravana...
          </h3>

          <div className="space-y-3 font-serif">
            {decisions.map((decision) => (
              <div
                key={decision.cardId}
                className="rounded-xl border border-[#5b412d]/30 bg-[#fffdf7]/80 p-4 shadow-sm hover:border-[#713c3d] transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#713c3d] text-[#fff6df] font-bold text-xs">
                    ✓
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-bold text-sm sm:text-base text-[#35271e]">
                        Carta {decision.cardNumber}: {decision.cardTitle}
                      </span>
                      <span className="text-xs text-[#713c3d] font-semibold italic">
                        Opción {decision.choiceId} — {decision.choiceTitle}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-[#443224] leading-relaxed">
                      {decision.chronicleText}
                    </p>

                    <p className="mt-1.5 text-xs text-[#5b412d] italic">
                      <strong>Consecuencia:</strong> {decision.consequence}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discovered Goods and Ideas Badges */}
        {allDiscovered.length > 0 && (
          <div className="rounded-xl border border-[#ab8841] bg-[#dfceaa]/50 p-4 mb-8">
            <h4 className="font-serif font-bold text-sm text-[#713c3d] uppercase tracking-wider mb-2.5">
              ✦ Saberes, mercancías y realidades encontradas:
            </h4>
            <div className="flex flex-wrap gap-2">
              {allDiscovered.map((item, i) => (
                <span
                  key={i}
                  className="rounded-md border border-[#5b412d]/40 bg-[#fffaf0] px-2.5 py-1 text-xs font-serif text-[#35271e] shadow-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Poetic Closing Quote from README */}
        <div className="text-center my-6 py-4 border-y border-[#5b412d]/30 font-serif italic text-lg text-[#713c3d] font-bold">
          « Nuestro viaje terminó, pero las rutas continúan. »
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              sounds.playParchment();
              onOpenMap();
            }}
            className="rounded-xl border-2 border-[#5b412d] bg-[#eadbb8] hover:bg-[#d8c39a] px-5 py-3 font-serif font-bold text-base text-[#35271e] shadow cursor-pointer"
          >
            🗺️ Revisar Mapa del Recorrido
          </button>

          <MedievalButton
            variant="primary"
            size="large"
            onClick={() => {
              sounds.playBell(587.33, 0.4);
              onProceedToReflection();
            }}
          >
            Reflexión Colectiva en el Aula ➔
          </MedievalButton>
        </div>
      </ParchmentFrame>
    </div>
  );
};
