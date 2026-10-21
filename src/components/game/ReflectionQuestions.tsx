import React, { useState } from 'react';
import { ParchmentFrame } from '../ui/ParchmentFrame';
import { MedievalButton } from '../ui/MedievalButton';
import { sounds } from '../../utils/audio';

import type { StoryId } from '../../types/game';

interface ReflectionQuestionsProps {
  onContinueToEpilogue: () => void;
  storyId?: StoryId;
}

export const ReflectionQuestions: React.FC<ReflectionQuestionsProps> = ({
  onContinueToEpilogue,
  storyId = 'silk-road'
}) => {
  const [activeQuestion, setActiveQuestion] = useState<number | 'all'>('all');
  const isGoldRoad = storyId === 'gold-road';

  const questionsSilkRoad = [
    {
      num: 1,
      title: 'Lo Inesperado del Camino',
      question: '¿Qué fue lo más inesperado que les ocurrió a los viajeros durante el recorrido?',
      guidance: 'Piensen en cómo imaginaban el viaje antes de partir y con qué sorpresas se toparon (el papel, los números extraños, las noticias de una peste lejana...).'
    },
    {
      num: 2,
      title: 'Más Allá de las Mercancías',
      question: '¿Qué cosas aparecieron en el viaje que no eran mercancías para comprar o vender?',
      guidance: 'Identifiquen ideas, saberes técnicos, lenguas, métodos científicos, noticias y también enfermedades que viajaban junto a las personas.'
    },
    {
      num: 3,
      title: 'Las Caras de la Conectividad',
      question: '¿Todas las consecuencias de estar conectados con otras sociedades fueron iguales o positivas?',
      guidance: 'Debatan cómo la misma conectividad que enriqueció bibliotecas y mercados también permitió que una epidemia letal se extendiera por todo el mundo conocido.'
    }
  ];

  const questionsGoldRoad = [
    {
      num: 1,
      title: 'El Valor Real: Oro frente a la Sal',
      question: '¿Por qué en mitad del desierto del Sahara una barra de sal gema podía valer lo mismo o más que un saco de oro puro?',
      guidance: 'Debatan sobre la diferencia entre el valor de prestigio o moneda (el oro no se come ni se bebe) y el valor biológico de supervivencia (sin sal el cuerpo humano colapsa bajo el sol saheliano).'
    },
    {
      num: 2,
      title: 'Las Sombras del Comercio: Personas como Mercancía',
      question: '¿Cómo convivían en una misma metrópolis como Tombuctú la alta erudición científica y las bibliotecas con la crueldad del comercio de seres humanos?',
      guidance: 'Reflexionen sobre la dolorosa realidad histórica del tráfico transahariano de cautivos. ¿Puede una sociedad producir grandes saberes y al mismo tiempo sostener prácticas inhumanas?'
    },
    {
      num: 3,
      title: 'La Huella Africana en Europa y Oriente',
      question: 'Si los ducados de Venecia y los tesoros de Bizancio se fabricaban con oro del África Occidental, ¿por qué la historia tradicional invisibilizó este protagonismo africano?',
      guidance: 'Analicen cómo la riqueza del Renacimiento italiano y los imperios mediterráneos dependía de las minas de Bambuk y las caravanas del Sahel, reconociendo el papel central de África en la economía medieval.'
    }
  ];

  const questions = isGoldRoad ? questionsGoldRoad : questionsSilkRoad;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 flex items-center justify-center">
      <ParchmentFrame className="max-w-4xl text-center">
        <div className="mb-6">
          <span className="font-serif uppercase tracking-widest text-xs font-bold text-[#713c3d]">
            Cierre Didáctico — Preguntas para el Aula
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#35271e] mt-1 mb-2">
            Reflexión Colectiva
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#5b412d] max-w-xl mx-auto">
            Discusión abierta frente al curso. No hay respuestas automáticas: escuchemos las opiniones y argumentos de los estudiantes.
          </p>
        </div>

        {/* Question filter tabs (can see one by one or all together for projection) */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => {
              sounds.playWoodClick();
              setActiveQuestion('all');
            }}
            className={`rounded-lg px-3 py-1 font-serif text-xs font-bold transition-all cursor-pointer ${
              activeQuestion === 'all'
                ? 'border-2 border-[#713c3d] bg-[#713c3d] text-[#fff6df]'
                : 'border border-[#5b412d]/40 bg-[#eadbb8] text-[#35271e]'
            }`}
          >
            Ver las 3 Preguntas
          </button>
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => {
                sounds.playWoodClick();
                setActiveQuestion(num);
              }}
              className={`rounded-lg px-3 py-1 font-serif text-xs font-bold transition-all cursor-pointer ${
                activeQuestion === num
                  ? 'border-2 border-[#713c3d] bg-[#713c3d] text-[#fff6df]'
                  : 'border border-[#5b412d]/40 bg-[#eadbb8] text-[#35271e]'
              }`}
            >
              Pregunta {num}
            </button>
          ))}
        </div>

        {/* Question Cards */}
        <div className="space-y-5 text-left mb-8">
          {questions
            .filter((q) => activeQuestion === 'all' || activeQuestion === q.num)
            .map((q) => (
              <div
                key={q.num}
                className="relative rounded-2xl border-2 border-[#713c3d]/60 bg-[#fffdf7] p-5 sm:p-7 shadow-md transition-transform hover:border-[#713c3d]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#501213] bg-[#713c3d] text-[#fff6df] font-serif font-black text-xl sm:text-2xl shadow">
                    {q.num}
                  </span>
                  <div>
                    <span className="text-xs font-serif uppercase tracking-wider text-[#713c3d] font-bold">
                      {q.title}
                    </span>
                    <h3 className="font-serif font-bold text-lg sm:text-2xl text-[#35271e] mt-0.5 leading-snug">
                      "{q.question}"
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#5b412d] italic border-t border-[#5b412d]/15 pt-2">
                      💡 <strong>Guía para el debate:</strong> {q.guidance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Transition Button */}
        <div className="flex justify-center border-t border-[#5b412d]/30 pt-6">
          <MedievalButton
            variant="royal"
            size="large"
            onClick={() => {
              sounds.playParchment();
              onContinueToEpilogue();
            }}
          >
            Descubrir qué hay de histórico detrás del viaje ➔
          </MedievalButton>
        </div>
      </ParchmentFrame>
    </div>
  );
};
