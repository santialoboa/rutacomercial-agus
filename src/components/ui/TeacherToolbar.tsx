import React, { useState, useEffect } from 'react';
import { sounds } from '../../utils/audio';
import { GAME_CARDS } from '../../data/cards';
import { MedievalMusicPlayer } from '../audio/MedievalMusicPlayer';
import type { GamePhase } from '../../types/game';

interface TeacherToolbarProps {
  currentPhase: GamePhase;
  currentCardNumber: number;
  onJumpToCard: (cardNumber: number) => void;
  onJumpToPhase: (phase: GamePhase) => void;
  onResetAdventure: () => void;
}

export const TeacherToolbar: React.FC<TeacherToolbarProps> = ({
  currentCardNumber,
  onJumpToCard,
  onJumpToPhase,
  onResetAdventure
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(sounds.getSoundEnabled());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontScale, setFontScale] = useState<'normal' | 'large' | 'huge'>('normal');

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleSound = () => {
    const newState = sounds.toggleMute();
    setSoundEnabled(newState);
  };

  const toggleHighContrast = () => {
    sounds.playWoodClick();
    const nextVal = !isHighContrast;
    setIsHighContrast(nextVal);
    document.body.classList.toggle('projector-contrast', nextVal);
  };

  const cycleFontScale = () => {
    sounds.playWoodClick();
    const nextScale = fontScale === 'normal' ? 'large' : fontScale === 'large' ? 'huge' : 'normal';
    setFontScale(nextScale);
    document.body.classList.remove('font-scale-large', 'font-scale-huge');
    if (nextScale === 'large') document.body.classList.add('font-scale-large');
    if (nextScale === 'huge') document.body.classList.add('font-scale-huge');
  };

  const toggleFullscreen = () => {
    sounds.playWoodClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const handleResetConfirm = () => {
    sounds.playParchment();
    setShowResetConfirm(false);
    setIsOpen(false);
    onResetAdventure();
  };

  return (
    <>
      {/* Top Floating Discreet Bar */}
      <div className="fixed top-3 right-3 z-50 flex items-center gap-2">
        {/* Medieval Music Player */}
        <MedievalMusicPlayer />

        {/* Quick Sound Toggle */}
        <button
          onClick={toggleSound}
          title={soundEnabled ? 'Silenciar sonidos' : 'Activar sonidos'}
          className="flex items-center justify-center rounded-lg border border-[#5b412d]/60 bg-[#dfceaa]/90 hover:bg-[#eadbb8] p-2 text-[#35271e] shadow-md backdrop-blur transition cursor-pointer"
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>

        {/* Quick Fullscreen */}
        <button
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa para proyector'}
          className="flex items-center justify-center rounded-lg border border-[#5b412d]/60 bg-[#dfceaa]/90 hover:bg-[#eadbb8] p-2 text-[#35271e] shadow-md backdrop-blur transition cursor-pointer"
        >
          {isFullscreen ? '🗗' : '⛶'}
        </button>

        {/* Teacher Panel Gear Icon */}
        <button
          onClick={() => {
            sounds.playWoodClick();
            setIsOpen(!isOpen);
          }}
          title="Herramientas de la Docente"
          className="flex items-center gap-1.5 rounded-lg border border-[#5b412d] bg-[#dfceaa]/90 hover:bg-[#eadbb8] px-2.5 py-2 font-serif text-xs font-bold text-[#35271e] shadow-md backdrop-blur transition cursor-pointer"
        >
          <span>📜</span>
          <span className="hidden sm:inline">Panel Docente</span>
        </button>
      </div>

      {/* Teacher Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl border-4 border-[#5b412d] bg-[#dfceaa] p-6 shadow-2xl text-[#2a2118]">
            <div className="flex justify-between items-center border-b-2 border-[#5b412d]/40 pb-3 mb-4">
              <h3 className="font-serif font-bold text-xl text-[#35271e] flex items-center gap-2">
                <span>📜</span> Modo y Control Docente
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-[#5b412d] bg-[#eadbb8] hover:bg-[#d8c39a] px-2 py-1 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#5b412d] mb-4">
              Herramientas diseñadas para guiar la proyección de la clase, navegar entre fases y realizar pruebas.
            </p>

            {/* Projector & Classroom Display Controls */}
            <div className="rounded-xl border border-[#ab8841] bg-[#fff8e7] p-3 mb-4 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="font-serif font-bold text-xs text-[#713c3d] uppercase tracking-wide block">
                    🔦 Ajustes de Proyector y Aula:
                  </span>
                  <span className="text-[11px] font-serif text-[#5b412d] italic">
                    Contraste y tamaño para salones con luz o proyectores lavados.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleHighContrast}
                    className={`px-2.5 py-1 rounded text-xs font-serif font-bold border transition cursor-pointer ${
                      isHighContrast
                        ? 'border-[#713c3d] bg-[#713c3d] text-[#fff6df] shadow-xs'
                        : 'border-[#5b412d]/50 bg-[#dfceaa] text-[#35271e] hover:bg-[#d5c298]'
                    }`}
                  >
                    {isHighContrast ? '✓ Alto Contraste' : 'Alto Contraste'}
                  </button>

                  <button
                    onClick={cycleFontScale}
                    title="Cambiar tamaño de texto proyectado"
                    className="px-2.5 py-1 rounded text-xs font-serif font-bold border border-[#5b412d]/50 bg-[#dfceaa] text-[#35271e] hover:bg-[#d5c298] transition cursor-pointer"
                  >
                    Letra: {fontScale === 'normal' ? 'Normal' : fontScale === 'large' ? 'Grande' : 'Gigante'}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Navigation Sections */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#713c3d] mb-1.5">
                  Saltar a una Carta:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {GAME_CARDS.map((card) => (
                    <button
                      key={card.number}
                      onClick={() => {
                        sounds.playParchment();
                        onJumpToCard(card.number);
                        setIsOpen(false);
                      }}
                      className={`text-left rounded border p-2 text-xs font-serif transition cursor-pointer ${
                        card.number === currentCardNumber
                          ? 'border-[#713c3d] bg-[#713c3d] text-[#fff6df] font-bold'
                          : 'border-[#5b412d]/50 bg-[#eadbb8] hover:bg-[#d5c298] text-[#35271e]'
                      }`}
                    >
                      <div className="font-bold">Carta {card.number}</div>
                      <div className="truncate text-[10px] opacity-80">{card.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#713c3d] mb-1.5">
                  Fases Didácticas Especiales:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      sounds.playParchment();
                      onJumpToPhase('character-select');
                      setIsOpen(false);
                    }}
                    className="rounded border border-[#5b412d]/60 bg-[#eadbb8] hover:bg-[#d5c298] p-2 text-xs font-serif font-bold text-[#35271e] cursor-pointer"
                  >
                    👤 Cambiar Personaje
                  </button>
                  <button
                    onClick={() => {
                      sounds.playParchment();
                      onJumpToPhase('map-view');
                      setIsOpen(false);
                    }}
                    className="inline-flex items-center gap-1.5 rounded border border-[#5b412d]/60 bg-[#eadbb8] hover:bg-[#d5c298] p-2 text-xs font-serif font-bold text-[#35271e] cursor-pointer"
                  >
                    <img src="/images/icon_map.jpg" alt="" className="w-4 h-4 rounded-xs object-cover" />
                    <span>Ver Mapa Completo</span>
                  </button>
                  <button
                    onClick={() => {
                      sounds.playParchment();
                      onJumpToPhase('summary');
                      setIsOpen(false);
                    }}
                    className="rounded border border-[#5b412d]/60 bg-[#eadbb8] hover:bg-[#d5c298] p-2 text-xs font-serif font-bold text-[#35271e] cursor-pointer"
                  >
                    📜 Crónica del Viaje (Resumen)
                  </button>
                  <button
                    onClick={() => {
                      sounds.playParchment();
                      onJumpToPhase('reflection');
                      setIsOpen(false);
                    }}
                    className="rounded border border-[#5b412d]/60 bg-[#eadbb8] hover:bg-[#d5c298] p-2 text-xs font-serif font-bold text-[#35271e] cursor-pointer"
                  >
                    💬 Preguntas de Debate
                  </button>
                  <button
                    onClick={() => {
                      sounds.playParchment();
                      onJumpToPhase('epilogue');
                      setIsOpen(false);
                    }}
                    className="col-span-2 rounded border border-[#5b412d]/60 bg-[#eadbb8] hover:bg-[#d5c298] p-2 text-xs font-serif font-bold text-[#35271e] cursor-pointer"
                  >
                    🎓 Transición a la Explicación Teórica (4 Ejes)
                  </button>
                </div>
              </div>

              {/* Reset Adventure Button */}
              <div className="border-t border-[#5b412d]/30 pt-3 flex justify-between items-center">
                <span className="text-xs text-[#5b412d]">¿Reiniciar aventura para otro curso?</span>
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="rounded border border-[#713c3d] bg-[#713c3d]/15 hover:bg-[#713c3d] hover:text-[#fff6df] px-3 py-1 text-xs font-bold font-serif text-[#713c3d] transition cursor-pointer"
                >
                  ↺ Reiniciar Aventura
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal Before Reset */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border-4 border-[#713c3d] bg-[#dfceaa] p-6 shadow-2xl text-[#2a2118]">
            <h4 className="font-serif font-bold text-lg text-[#713c3d] flex items-center gap-2">
              <span>⚠️</span> ¿Confirmar reinicio de la partida?
            </h4>
            <p className="mt-2 text-sm text-[#443224]">
              Se borrará el personaje elegido y las decisiones tomadas para iniciar una nueva experiencia desde la portada.
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="rounded-lg border border-[#5b412d] bg-[#eadbb8] px-4 py-2 font-serif text-sm font-bold text-[#35271e] hover:bg-[#d5c298] cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleResetConfirm}
                className="rounded-lg border-2 border-[#501213] bg-[#713c3d] px-4 py-2 font-serif text-sm font-bold text-[#fff6df] hover:bg-[#8f2d30] shadow cursor-pointer"
              >
                Sí, Reiniciar Aventura
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
