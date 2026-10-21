import React from 'react';
import { ParchmentFrame } from '../ui/ParchmentFrame';
import { MedievalButton } from '../ui/MedievalButton';
import { WaxSealStamp } from '../illustrations/MedievalIcons';
import { sounds } from '../../utils/audio';

interface CoverScreenProps {
  onStartSilkRoad: () => void;
  onStartGoldRoad: () => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({
  onStartSilkRoad,
  onStartGoldRoad
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10">
      <ParchmentFrame variant="royal" className="text-center max-w-4xl">
        {/* Top Illuminated Header Ornament */}
        <div className="flex justify-center mb-3">
          <div className="flex items-center gap-3 text-[#713c3d]">
            <span className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#713c3d]" />
            <span className="text-xl sm:text-2xl font-serif">❖</span>
            <span className="font-serif uppercase tracking-widest text-xs sm:text-sm font-bold text-[#5b412d]">
              Siglo XIV d.C. — Crónicas Históricas Didácticas
            </span>
            <span className="text-xl sm:text-2xl font-serif">❖</span>
            <span className="h-0.5 w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#713c3d]" />
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl text-[#35271e] tracking-tight leading-none mb-3 drop-shadow-sm">
          Crónicas de una caravana
        </h1>
        <p className="font-serif italic text-lg sm:text-2xl text-[#713c3d] max-w-2xl mx-auto mb-5 font-semibold">
          Un viaje por las redes comerciales de la Edad Media
        </p>

        {/* Historical Illuminated Miniatures Banner */}
        <div className="relative mx-auto my-4 max-w-3xl rounded-2xl border-3 border-[#5b412d] bg-[#eadbb8] p-3 sm:p-4 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Left: Silk Road miniature */}
            <div className="sm:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#5b412d]/70 shadow-inner">
              <img
                src="/images/cover.jpg"
                alt="Caravana en la Ruta de la Seda — Atlas Catalán (1375)"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(42,33,24,0.4)] pointer-events-none" />
              <div className="absolute bottom-1.5 left-1.5 right-1.5 rounded bg-black/70 px-2 py-0.5 text-[10px] font-serif text-[#fff6df] italic text-center">
                Ruta de la Seda — Atlas Catalán (1375)
              </div>
            </div>

            {/* Right: Gold Road miniature & Intro text */}
            <div className="sm:col-span-7 flex flex-col justify-between h-full text-left space-y-3 p-1">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border-2 border-[#5b412d]/70 shadow-inner">
                <img
                  src="/images/card_ghana_gold.jpg"
                  alt="El Reino de Ghana y el comercio del oro"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(42,33,24,0.4)] pointer-events-none" />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 rounded bg-black/70 px-2 py-0.5 text-[10px] font-serif text-[#fff6df] italic text-center">
                  El Camino del Oro — Koumbi Saleh y el Sahara
                </div>
              </div>

              <div className="rounded-xl border border-[#ab8841] bg-[#dfceaa]/60 p-3">
                <p className="font-serif text-xs sm:text-sm text-[#443224] leading-relaxed">
                  Una aventura colectiva para descubrir que las rutas medievales no transportaban solamente fardos y monedas, sino <strong>personas, técnicas, saberes, medicinas, religiones... y riesgos insospechados</strong>.
                </p>
                <div className="mt-2 flex items-center justify-between text-xs font-serif text-[#713c3d] font-bold">
                  <span>✦ Elijan la ruta para el aula</span>
                  <span>✦ Voten a mano alzada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Corner Wax Seal Stamp Ornament */}
          <div className="absolute top-2.5 right-2.5 pointer-events-none opacity-90 hidden sm:block">
            <WaxSealStamp variant="gold" size={50} />
          </div>
        </div>

        {/* Start Buttons: Dual Routes */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-2xl mx-auto">
          {/* Ruta de la Seda Button */}
          <MedievalButton
            variant="primary"
            size="large"
            className="flex-1 text-center justify-center py-3.5"
            onClick={() => {
              sounds.playBell(523.25, 0.4);
              window.dispatchEvent(new CustomEvent('start-medieval-music'));
              onStartSilkRoad();
            }}
          >
            <div className="flex items-center justify-center gap-2.5">
              <span className="text-2xl">🐪</span>
              <div className="text-left">
                <div className="font-bold text-base sm:text-lg leading-tight">Ruta de la Seda</div>
                <div className="text-[11px] font-normal opacity-90 tracking-normal font-sans">
                  Asia Central a Europa • 6 Cartas
                </div>
              </div>
              <span className="text-lg ml-1">➔</span>
            </div>
          </MedievalButton>

          {/* Ruta del Oro Button */}
          <MedievalButton
            variant="gold"
            size="large"
            className="flex-1 text-center justify-center py-3.5"
            onClick={() => {
              sounds.playBell(659.25, 0.4);
              window.dispatchEvent(new CustomEvent('start-medieval-music'));
              onStartGoldRoad();
            }}
          >
            <div className="flex items-center justify-center gap-2.5">
              <span className="text-2xl">👑</span>
              <div className="text-left">
                <div className="font-bold text-base sm:text-lg leading-tight">Ruta del Oro</div>
                <div className="text-[11px] font-normal opacity-90 tracking-normal font-sans">
                  África Occidental y Sahara • 4 Cartas
                </div>
              </div>
              <span className="text-lg ml-1">➔</span>
            </div>
          </MedievalButton>
        </div>

        <p className="mt-5 text-xs text-[#5b412d]/80 font-serif">
          Diseñado para proyección escolar frente al aula • Navegación colectiva guiada por la docente
        </p>
      </ParchmentFrame>
    </div>
  );
};

