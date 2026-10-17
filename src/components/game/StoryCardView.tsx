import React, { useState, useEffect } from 'react';
import { ParchmentFrame } from '../ui/ParchmentFrame';
import { MedievalButton } from '../ui/MedievalButton';
import { ProgressRibbon } from '../ui/ProgressRibbon';
import { CardSceneIllustration, WaxSealStamp } from '../illustrations/MedievalIcons';
import type { GameCard, GameChoice, Character, DecisionRecord } from '../../types/game';
import { sounds } from '../../utils/audio';

interface StoryCardViewProps {
  card: GameCard;
  character: Character;
  onChoiceDecided: (decision: DecisionRecord) => void;
  onOpenMap: () => void;
}

export const StoryCardView: React.FC<StoryCardViewProps> = ({
  card,
  character,
  onChoiceDecided,
  onOpenMap
}) => {
  const [selectedChoice, setSelectedChoice] = useState<GameChoice | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [showTeacherPrompt, setShowTeacherPrompt] = useState<boolean>(true);

  // Reset state whenever switching to another card
  useEffect(() => {
    setSelectedChoice(null);
    setIsRevealed(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [card.id]);

  const characterFlavorText = card.characterFlavor[character.id];

  // The 3 choices (A, B, C) are adapted to the chosen character's lens
  const choicesToDisplay: GameChoice[] =
    card.characterChoices?.[character.id] || card.choices || [];

  const handleSelectOption = (choice: GameChoice) => {
    sounds.playWoodClick();
    setSelectedChoice(choice);
  };

  const handleConfirmDecision = () => {
    if (!selectedChoice) return;
    sounds.playWaxSeal();
    setIsRevealed(true);
  };

  const handleContinueJourney = () => {
    if (!selectedChoice) return;
    sounds.playParchment();

    const decisionRecord: DecisionRecord = {
      cardId: card.id,
      cardNumber: card.number,
      cardTitle: card.title,
      choiceId: selectedChoice.id,
      choiceTitle: selectedChoice.title,
      chronicleText: selectedChoice.chronicleText,
      consequence: selectedChoice.consequence,
      historicalInsight: selectedChoice.historicalInsight,
      discoveredGoodsOrIdeas: selectedChoice.discoveredGoodsOrIdeas
    };

    onChoiceDecided(decisionRecord);
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6">
      {/* Top Progress Ribbon */}
      <ProgressRibbon
        currentCardNumber={card.number}
        onOpenMap={onOpenMap}
        characterName={`${character.name} (${character.role})`}
      />

      <ParchmentFrame className="max-w-5xl">
        {/* Card Header */}
        <div className="border-b-2 border-[#5b412d]/30 pb-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-md border border-[#713c3d] bg-[#713c3d] px-2.5 py-0.5 text-xs font-serif font-bold text-[#fff6df]">
                Carta {card.number} de 6
              </span>
              <span className="font-serif text-xs uppercase tracking-wider text-[#713c3d] font-bold">
                {card.theme}
              </span>
            </div>

            <div className="font-serif text-xs text-[#5b412d] italic">
              📍 {card.location}
            </div>
          </div>

          <h2 className="font-serif font-black text-2xl sm:text-4xl text-[#35271e] mt-2 leading-tight">
            {card.title}
          </h2>
        </div>

        {/* Two Columns: Visual & Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          {/* Scene Illustration */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <CardSceneIllustration type={card.illustrationType} />
            <div className="mt-2 text-center text-xs font-serif text-[#5b412d] italic">
              Grabado de la época — {card.location.split('—')[0]}
            </div>
          </div>

          {/* Narrative Text */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <p className="font-serif text-base sm:text-lg text-[#2a2118] leading-relaxed mb-4">
                <span className="drop-cap">{card.intro.charAt(0)}</span>
                {card.intro.slice(1)}
              </p>

              {/* Character Flavor Quote */}
              <div className="rounded-lg border-l-4 border-[#713c3d] bg-[#eadbb8]/60 p-3 mb-4 text-xs sm:text-sm font-serif italic text-[#35271e]">
                <strong className="not-italic text-[#713c3d]">
                  Observación de {character.name}:
                </strong>{' '}
                "{characterFlavorText}"
              </div>
            </div>

            {/* Teacher Discussion Prompt Callout */}
            <div className="rounded-xl border border-[#ab8841] bg-[#fffbf2]/90 p-3 shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-serif uppercase tracking-wider font-bold text-[#713c3d] flex items-center gap-1.5">
                  <span>💡</span> Pregunta orientadora para el aula:
                </span>
                <button
                  onClick={() => setShowTeacherPrompt(!showTeacherPrompt)}
                  className="text-[11px] font-bold text-[#5b412d] hover:underline cursor-pointer"
                >
                  {showTeacherPrompt ? 'Ocultar' : 'Ver'}
                </button>
              </div>

              {showTeacherPrompt && (
                <p className="text-sm font-serif font-semibold text-[#35271e] italic">
                  "{card.teacherPrompt}"
                </p>
              )}
            </div>
          </div>
        </div>

        {/* DECISION SECTION */}
        {!isRevealed ? (
          /* STATE A: SITUATION & CHOICES */
          <div className="mt-6 border-t-2 border-[#5b412d]/30 pt-6">
            <div className="text-center mb-5">
              <span className="font-serif uppercase tracking-widest text-xs font-bold text-[#713c3d]">
                Debate Colectivo y Votación
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#35271e] mt-1">
                {card.prompt}
              </h3>
              <p className="text-xs sm:text-sm font-serif text-[#5b412d] italic">
                Escuchen argumentos, voten a mano alzada y elijan la alternativa del curso:
              </p>
            </div>

            {/* Choice Cards (A, B, C) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {choicesToDisplay.map((choice) => {
                const isSelected = selectedChoice?.id === choice.id;

                return (
                  <div
                    key={choice.id}
                    onClick={() => handleSelectOption(choice)}
                    className={`relative flex flex-col justify-between rounded-xl border-3 p-5 transition-all duration-200 cursor-pointer select-none text-left ${
                      isSelected
                        ? 'border-[#713c3d] bg-[#f5ecda] shadow-xl ring-4 ring-[#ab8841]/50 scale-[1.02]'
                        : 'border-[#5b412d]/40 bg-[#eadbb8]/60 hover:bg-[#eadbb8] hover:border-[#5b412d] shadow'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block rounded border border-[#713c3d] bg-[#713c3d] px-2 py-0.5 text-xs font-serif font-bold text-[#fff6df]">
                          {choice.label}
                        </span>
                        {isSelected && (
                          <span className="text-xs font-serif font-bold text-[#713c3d]">
                            ✓ Opción Elegida
                          </span>
                        )}
                      </div>

                      <h4 className="font-serif font-bold text-base sm:text-lg text-[#35271e] mb-2 leading-snug">
                        {choice.title}
                      </h4>

                      <p className="font-serif text-xs sm:text-sm text-[#443224] leading-relaxed">
                        {choice.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#5b412d]/20 text-center">
                      <span
                        className={`inline-block text-xs font-serif font-bold px-3 py-1 rounded-full border ${
                          isSelected
                            ? 'border-[#713c3d] bg-[#713c3d] text-[#fff6df]'
                            : 'border-[#5b412d]/30 text-[#5b412d]'
                        }`}
                      >
                        {isSelected ? 'Confirmar voto del aula' : 'Seleccionar esta opción'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Confirm Choice Button */}
            <div className="flex justify-center">
              <MedievalButton
                variant="primary"
                size="large"
                disabled={!selectedChoice}
                onClick={handleConfirmDecision}
              >
                {selectedChoice
                  ? `Registrar Elección: ${selectedChoice.label}`
                  : 'Voten una alternativa para continuar'}
              </MedievalButton>
            </div>
          </div>
        ) : (
          /* STATE B: REVEALED CONSEQUENCE */
          <div className="mt-6 border-t-2 border-[#5b412d]/30 pt-6 animate-fadeIn">
            <div className="relative rounded-2xl border-3 border-[#713c3d] bg-[#fbf6ec] p-6 sm:p-8 shadow-xl text-left">
              {/* Wax Seal Stamp on the result */}
              <div className="absolute -top-6 right-6">
                <WaxSealStamp number={selectedChoice?.id} size={64} variant="red" />
              </div>

              <div className="mb-4">
                <span className="font-serif uppercase tracking-widest text-xs font-bold text-[#713c3d] block">
                  Consecuencia Narrativa de la Decisión
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#35271e] mt-1">
                  {selectedChoice?.title}
                </h3>
              </div>

              {/* Consequence text */}
              <div className="font-serif text-base sm:text-xl text-[#2a2118] leading-relaxed mb-5">
                {selectedChoice?.consequence}
              </div>

              {/* Historical insight box */}
              <div className="rounded-xl border border-[#ab8841] bg-[#dfceaa]/50 p-4 mb-4">
                <div className="flex items-start gap-2.5">
                  <span className="text-xl">📜</span>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#713c3d] uppercase tracking-wide">
                      Pista Histórica para la Discusión:
                    </h5>
                    <p className="font-serif text-xs sm:text-sm text-[#443224] mt-0.5 leading-relaxed">
                      {selectedChoice?.historicalInsight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Goods or ideas acquired */}
              {selectedChoice?.discoveredGoodsOrIdeas && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-serif font-bold text-[#5b412d]">
                    Incorporado a la crónica:
                  </span>
                  {selectedChoice.discoveredGoodsOrIdeas.map((item, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-[#713c3d]/40 bg-[#fff] px-2.5 py-0.5 text-xs font-serif text-[#713c3d] font-semibold"
                    >
                      ✦ {item}
                    </span>
                  ))}
                </div>
              )}

              {/* Continue button */}
              <div className="flex justify-center border-t border-[#5b412d]/20 pt-5">
                <MedievalButton
                  variant="royal"
                  size="large"
                  onClick={handleContinueJourney}
                >
                  {card.number < 6
                    ? `Avanzar a la Carta ${card.number + 1} ➔`
                    : 'Ver la Gran Crónica del Viaje ➔'}
                </MedievalButton>
              </div>
            </div>
          </div>
        )}
      </ParchmentFrame>
    </div>
  );
};
