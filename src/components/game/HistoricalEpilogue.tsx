import React, { useState } from 'react';
import { ParchmentFrame } from '../ui/ParchmentFrame';
import { MedievalButton } from '../ui/MedievalButton';
import { HISTORICAL_GOODS } from '../../data/goods';
import { sounds } from '../../utils/audio';

interface HistoricalEpilogueProps {
  onRestartAdventure: () => void;
  onViewChronicle: () => void;
}

export const HistoricalEpilogue: React.FC<HistoricalEpilogueProps> = ({
  onRestartAdventure,
  onViewChronicle
}) => {
  const [selectedTab, setSelectedTab] = useState<'axes' | 'goods'>('axes');

  const historicalAxes = [
    {
      num: 1,
      title: 'Las rutas como espacios de intercambio cultural',
      summary: 'Cuando se desplazan productos, también viajan personas.',
      details:
        'Mercaderes, peregrinos, marineros y diplomáticos llevaban consigo sus idiomas, costumbres, creencias religiosas y noticias. Ningún mercado era un mero punto de venta: eran espacios cosmopolitas donde confluían pueblos que de otro modo jamás habrían entrado en contacto.',
      keyQuestion: '¿Qué situaciones de nuestra caravana mostraron que las personas intercambiaban mucho más que objetos materiales?'
    },
    {
      num: 2,
      title: 'La circulación de técnicas: el secreto del papel',
      summary: 'Distinguir entre recibir un producto terminado y aprender la técnica para producirlo.',
      details:
        'El papel se inventó en China y tardó siglos en difundirse hacia Asia Central, el mundo islámico y finalmente Europa. La clave histórica fue la transferencia de tecnología: cuando una sociedad aprende el oficio, adapta los materiales locales (como trapos de lino y cáñamo) y revoluciona su propia producción de libros y documentos.',
      keyQuestion: '¿Por qué la difusión de una técnica transforma a una sociedad más profundamente que la simple compra de mercancías extranjeras?'
    },
    {
      num: 3,
      title: 'Intercambios matemáticos y médicos',
      summary: 'El mundo islámico como centro dinámico de investigación y síntesis crítica.',
      details:
        'Los conocimientos matemáticos de la India (como la numeración posicional y el cero) fueron estudiados, ampliados y difundidos por sabios como Al-Juarismi. En medicina, hospitales y sabios como Avicena combinaron la botánica de tres continentes con rigurosa observación clínica. No fueron simples intermediarios pasivos, sino creadores e innovadores de vanguardia.',
      keyQuestion: '¿Un saber sigue siendo el mismo cuando otras sociedades lo estudian, lo discuten y lo mejoran?'
    },
    {
      num: 4,
      title: 'La transmisión de enfermedades: La Peste Negra (1347)',
      summary: 'La conectividad entre sociedades como un fenómeno complejo con dos caras.',
      details:
        'Las mismas autopistas comerciales terrestres y marítimas que facilitaban el intercambio de sedas y libros permitieron que la bacteria Yersinia pestis viajara en pulgas de ratas negras desde las estepas y puertos del Mar Negro hacia todo el Mediterráneo y Europa. Las personas del siglo XIV actuaron con los conocimientos de su tiempo, enfrentando una crisis demográfica sin precedentes.',
      keyQuestion: '¿Por qué la conectividad global genera enormes riquezas pero también vulnerabilidades compartidas?'
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 flex items-center justify-center">
      <ParchmentFrame variant="aged" className="max-w-5xl">
        {/* Header */}
        <div className="text-center border-b-2 border-[#5b412d]/30 pb-6 mb-6">
          <span className="font-serif uppercase tracking-widest text-xs font-bold text-[#713c3d]">
            Marco Histórico Teórico
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#35271e] mt-1 mb-2">
            Lo que la Historia nos Enseña
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#5b412d] max-w-2xl mx-auto">
            « Nuestra caravana es inventada, pero los procesos, saberes y dilemas con los que se encontró ocurrieron realmente durante la Edad Media. »
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => {
              sounds.playWoodClick();
              setSelectedTab('axes');
            }}
            className={`rounded-xl px-5 py-2 font-serif font-bold text-sm sm:text-base transition-all cursor-pointer ${
              selectedTab === 'axes'
                ? 'border-2 border-[#713c3d] bg-[#713c3d] text-[#fff6df] shadow'
                : 'border border-[#5b412d]/50 bg-[#eadbb8] text-[#35271e] hover:bg-[#d5c298]'
            }`}
          >
            📜 Los 4 Ejes Temáticos de la Clase
          </button>
          <button
            onClick={() => {
              sounds.playWoodClick();
              setSelectedTab('goods');
            }}
            className={`rounded-xl px-5 py-2 font-serif font-bold text-sm sm:text-base transition-all cursor-pointer ${
              selectedTab === 'goods'
                ? 'border-2 border-[#713c3d] bg-[#713c3d] text-[#fff6df] shadow'
                : 'border border-[#5b412d]/50 bg-[#eadbb8] text-[#35271e] hover:bg-[#d5c298]'
            }`}
          >
            ⚖️ Las 5 Grandes Mercancías Históricas
          </button>
        </div>

        {/* TAB 1: 4 THEORETICAL AXES */}
        {selectedTab === 'axes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {historicalAxes.map((axis) => (
              <div
                key={axis.num}
                className="rounded-2xl border-2 border-[#5b412d]/40 bg-[#fffdf7] p-5 shadow-sm text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#713c3d] text-[#fff6df] font-serif font-bold text-sm">
                      {axis.num}
                    </span>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#35271e] leading-snug">
                      {axis.title}
                    </h3>
                  </div>

                  <p className="font-serif font-bold text-xs sm:text-sm text-[#713c3d] italic mb-2">
                    {axis.summary}
                  </p>

                  <p className="font-serif text-xs sm:text-sm text-[#443224] leading-relaxed mb-3">
                    {axis.details}
                  </p>
                </div>

                <div className="border-t border-[#5b412d]/20 pt-2 text-[11px] font-serif text-[#5b412d] italic">
                  <strong>Pregunta para la explicación:</strong> "{axis.keyQuestion}"
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: REFERENCE GOODS */}
        {selectedTab === 'goods' && (
          <div className="space-y-4 mb-8 text-left">
            {HISTORICAL_GOODS.map((good) => (
              <div
                key={good.id}
                className="rounded-xl border border-[#ab8841] bg-[#fffdf7] p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#5b412d]/20 pb-1.5 mb-2">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#35271e]">
                    {good.name}
                  </h4>
                  <span className="text-xs font-serif font-semibold text-[#713c3d]">
                    Origen: {good.origin}
                  </span>
                </div>

                <div className="text-xs font-serif text-[#5b412d] mb-1.5 font-bold">
                  📍 Circuito de intercambio: <span className="font-normal italic text-[#35271e]">{good.circuit}</span>
                </div>

                <p className="font-serif text-xs sm:text-sm text-[#443224] leading-relaxed">
                  {good.significance}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-4 border-t border-[#5b412d]/30 pt-6">
          <button
            onClick={() => {
              sounds.playParchment();
              onViewChronicle();
            }}
            className="rounded-xl border border-[#5b412d] bg-[#eadbb8] hover:bg-[#d5c298] px-5 py-2.5 font-serif font-bold text-sm sm:text-base text-[#35271e] shadow cursor-pointer"
          >
            📜 Releer la Crónica del Viaje
          </button>

          <MedievalButton
            variant="primary"
            size="large"
            onClick={() => {
              sounds.playBell(440, 0.4);
              onRestartAdventure();
            }}
          >
            ↺ Nueva Aventura para Otro Curso
          </MedievalButton>
        </div>
      </ParchmentFrame>
    </div>
  );
};
