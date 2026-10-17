import React, { useState } from 'react';
import { ParchmentFrame } from '../ui/ParchmentFrame';
import { MedievalButton } from '../ui/MedievalButton';
import { CHARACTERS } from '../../data/characters';
import type { Character, CharacterId } from '../../types/game';
import { sounds } from '../../utils/audio';

interface CharacterSelectionProps {
  onSelectCharacter: (character: Character) => void;
}

export const CharacterSelection: React.FC<CharacterSelectionProps> = ({ onSelectCharacter }) => {
  const [selectedId, setSelectedId] = useState<CharacterId>('merchant');

  const selectedChar = CHARACTERS.find((c) => c.id === selectedId) || CHARACTERS[0];

  const handleCardClick = (id: CharacterId) => {
    sounds.playWoodClick();
    setSelectedId(id);
  };

  const handleConfirm = () => {
    sounds.playBell(659.25, 0.4); // pleasant high chime
    onSelectCharacter(selectedChar);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 flex items-center justify-center">
      <ParchmentFrame className="max-w-5xl">
        <div className="text-center mb-6">
          <span className="font-serif uppercase tracking-widest text-xs font-bold text-[#713c3d]">
            Paso 1 — Perspectiva del Curso
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#35271e] mt-1 mb-2">
            Elijan a su Guía de Viaje
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#5b412d] max-w-2xl mx-auto italic">
            ¿Desde qué mirada prefieren registrar la crónica colectiva? Discutan en el aula y seleccionen a su protagonista.
          </p>
        </div>

        {/* 4 Large Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {CHARACTERS.map((char) => {
            const isSelected = char.id === selectedId;

            return (
              <div
                key={char.id}
                onClick={() => handleCardClick(char.id)}
                className={`group relative flex flex-col justify-between rounded-2xl border-3 p-4 transition-all duration-200 cursor-pointer select-none text-left ${
                  isSelected
                    ? 'border-[#713c3d] bg-[#fbf5e8] shadow-2xl ring-4 ring-[#ab8841]/60 scale-[1.03]'
                    : 'border-[#5b412d]/40 bg-[#eadbb8]/70 hover:bg-[#eadbb8] hover:border-[#5b412d] shadow'
                }`}
              >
                <div>
                  {/* Framed Potion Craft Portrait */}
                  <div className="relative mb-3.5 overflow-hidden rounded-xl border-2 border-[#5b412d] bg-[#f4ebd4] shadow-md aspect-[4/5] w-full">
                    <img
                      src={char.avatarImage || `/images/char_${char.id}.jpg`}
                      alt={char.name}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(42,33,24,0.35)]" />

                    {/* Badge for role */}
                    <div className="absolute bottom-2 left-2 right-2 text-center rounded bg-black/70 backdrop-blur-xs py-0.5 px-1.5 border border-[#ab8841]/50">
                      <span className="text-[10px] font-serif uppercase tracking-widest text-[#fff3cf] font-bold">
                        {char.role.split(',')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Character Name */}
                  <div className="text-center mb-2">
                    <h3 className="font-serif font-black text-xl text-[#35271e] leading-snug">
                      {char.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-serif text-xs text-[#443224] leading-relaxed mb-3">
                    {char.description}
                  </p>
                </div>

                {/* Motifs / Attribute tags & Selection Button */}
                <div className="pt-2 border-t border-[#5b412d]/25">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {char.motifs.slice(0, 3).map((motif, i) => (
                      <span
                        key={i}
                        className="text-[9.5px] font-serif rounded bg-[#dfceaa] px-1.5 py-0.5 text-[#35271e] border border-[#5b412d]/30"
                      >
                        {motif}
                      </span>
                    ))}
                  </div>

                  {/* Selection indicator checkmark */}
                  <div className="text-center">
                    <span
                      className={`inline-block w-full text-xs font-serif font-bold py-1.5 rounded-lg border transition-all ${
                        isSelected
                          ? 'border-[#713c3d] bg-[#713c3d] text-[#fff6df] shadow'
                          : 'border-[#5b412d]/40 text-[#5b412d] bg-[#dfceaa]/40 group-hover:bg-[#dfceaa]'
                      }`}
                    >
                      {isSelected ? '✓ Guía Seleccionado' : 'Elegir este Viajero'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Perspective preview callout */}
        <div className="rounded-xl border-2 border-[#ab8841] bg-[#fff8e7] p-4 mb-6 shadow-md text-sm font-serif">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📜</span>
            <div>
              <strong className="text-[#713c3d] font-bold text-base">
                Mirada de {selectedChar.name}:
              </strong>{' '}
              <span className="text-[#35271e] italic block mt-0.5">
                "{selectedChar.perspectiveText}"
              </span>
              <p className="text-xs text-[#5b412d] mt-2 border-t border-[#5b412d]/20 pt-1.5">
                <strong>Dinámica en el aula:</strong> En cada una de las 6 paradas, las <strong>3 alternativas a debatir y votar</strong> estarán adaptadas a los intereses, saberes y dilemas de {selectedChar.name}.
              </p>
            </div>
          </div>
        </div>

        {/* Confirmation Button */}
        <div className="flex justify-center">
          <MedievalButton variant="primary" size="large" onClick={handleConfirm}>
            Confirmar Personaje y Ver Mapa
          </MedievalButton>
        </div>
      </ParchmentFrame>
    </div>
  );
};
