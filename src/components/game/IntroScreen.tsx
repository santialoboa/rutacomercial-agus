import React from 'react';
import { ParchmentFrame } from '../ui/ParchmentFrame';
import { MedievalButton } from '../ui/MedievalButton';
import { sounds } from '../../utils/audio';

import type { StoryId } from '../../types/game';

interface IntroScreenProps {
  onContinue: () => void;
  storyId?: StoryId;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({
  onContinue,
  storyId = 'silk-road'
}) => {
  const isGoldRoad = storyId === 'gold-road';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10">
      <ParchmentFrame className="max-w-4xl text-center">
        <div className="mb-4">
          <span className="font-serif uppercase tracking-widest text-xs font-bold text-[#713c3d]">
            Proemio de la Caravana
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#35271e] mt-1 mb-6">
            {isGoldRoad ? 'El Oro de África y las Rutas del Sahara' : 'El Mundo Conectado'}
          </h2>
        </div>

        {/* Narrative Manuscript Block with Illuminated Drop Cap */}
        <div className="relative mx-auto my-6 max-w-2xl rounded-xl border border-[#5b412d]/40 bg-[#eadbb8]/60 p-6 sm:p-8 text-left shadow-inner">
          <div className="font-serif text-lg sm:text-2xl text-[#2a2118] leading-relaxed">
            <span className="float-left mr-3 text-5xl sm:text-7xl font-black font-serif text-[#713c3d] leading-none select-none drop-shadow">
              {isGoldRoad ? 'E' : 'E'}
            </span>
            {isGoldRoad ? (
              <>
                stamos en el <strong>siglo XIV</strong>, en el corazón del <strong>África Occidental</strong>. Los imperios de Ghana y Mali custodian las cuencas auríferas más ricas del planeta. El oro en polvo (mithqal) brota de los ríos del sur y viaja en caravanas de miles de camellos a través del ardiente desierto del Sahara hacia el Mediterráneo y Oriente.
              </>
            ) : (
              <>
                stamos en el <strong>siglo XIV</strong>. Las rutas comerciales conectan ciudades, mercados y regiones muy distantes entre sí: desde el Mar de la China y los reinos del Océano Índico hasta el Mediterráneo, el norte de África y las ferias de Europa.
              </>
            )}
          </div>

          <div className="mt-5 font-serif text-base sm:text-xl text-[#35271e] leading-relaxed">
            {isGoldRoad ? (
              <>
                Su cofradía comercial se dispone a cruzar las dunas. Negociarán con el monopolio imperial de las pepitas de oro, cambiarán oro por la sal que salva vidas en el desierto, enfrentarán el dilema del tráfico de cautivos y decidirán si llevar su fortuna hacia <strong>Cartago y Venecia</strong> o hacia <strong>Egipto y Constantinopla</strong>.
              </>
            ) : (
              <>
                Una caravana se prepara para emprender la marcha. Sus integrantes buscan comerciar, pero todavía no saben a qué personas conocerán, qué maravillas aprenderán ni qué peligros encontrarán durante el largo recorrido.
              </>
            )}
          </div>

          <div className="mt-6 border-t border-[#5b412d]/30 pt-4 text-xs sm:text-sm text-[#5b412d] italic">
            {isGoldRoad
              ? 'El oro no sacia la sed en el desierto: la pericia de los guías tuareg y el trueque de sal eran la verdadera llave de la vida.'
              : 'Ninguna persona recorría habitualmente el trayecto entero; el mundo se tejía a través de postas, relevos y miles de intermediarios.'}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <MedievalButton
            variant="primary"
            size="large"
            onClick={() => {
              sounds.playParchment();
              onContinue();
            }}
          >
            Conocer a los Viajeros
          </MedievalButton>
        </div>
      </ParchmentFrame>
    </div>
  );
};
