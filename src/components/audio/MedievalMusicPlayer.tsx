import React, { useState, useRef } from 'react';
import { sounds } from '../../utils/audio';

interface MedievalMusicPlayerProps {
  className?: string;
}

export const MedievalMusicPlayer: React.FC<MedievalMusicPlayerProps> = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(() => {
    const saved = localStorage.getItem('caravan_music_volume');
    return saved !== null ? parseInt(saved, 10) : 60;
  });
  const [showVideoPreview, setShowVideoPreview] = useState<boolean>(false);
  const videoId = 'y_6yOVqZif8'; // 1 hora de música medieval para concentración
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Send command to YouTube iframe via postMessage API
  const sendYouTubeCommand = (func: string, args: (string | number | boolean)[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: func,
          args: args
        }),
        '*'
      );
    }
  };

  // Synchronize volume on change
  const handleVolumeChange = (newVol: number) => {
    const clamped = Math.max(0, Math.min(100, newVol));
    setVolume(clamped);
    localStorage.setItem('caravan_music_volume', String(clamped));

    if (clamped === 0) {
      sendYouTubeCommand('mute');
    } else {
      sendYouTubeCommand('unMute');
      sendYouTubeCommand('setVolume', [clamped]);
    }
  };

  // Toggle Play / Pause
  const togglePlay = () => {
    sounds.playWoodClick();
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    localStorage.setItem('caravan_music_active', String(nextState));

    if (nextState) {
      sendYouTubeCommand('playVideo');
      setTimeout(() => {
        sendYouTubeCommand('setVolume', [volume]);
      }, 500);
    } else {
      sendYouTubeCommand('pauseVideo');
    }
  };

  // Configure volume when iframe finishes loading
  const handleIframeLoad = () => {
    setTimeout(() => {
      sendYouTubeCommand('setVolume', [volume]);
      if (volume === 0) {
        sendYouTubeCommand('mute');
      }
    }, 600);
    setTimeout(() => {
      sendYouTubeCommand('setVolume', [volume]);
    }, 1600);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Discreet floating medieval music toggle button */}
      <div className="flex items-center gap-1.5 rounded-lg border border-[#5b412d] bg-[#dfceaa]/95 hover:bg-[#eadbb8] p-1.5 shadow-md backdrop-blur-xs transition">
        <button
          onClick={togglePlay}
          title={isPlaying ? 'Pausar música medieval' : 'Reproducir música medieval de fondo'}
          className={`flex items-center gap-1.5 px-2 py-1 rounded font-serif text-xs font-bold transition-all cursor-pointer ${
            isPlaying
              ? 'border border-[#713c3d] bg-[#713c3d] text-[#fff6df] shadow-xs'
              : 'text-[#35271e] hover:bg-[#d5c298]'
          }`}
        >
          <span className={isPlaying ? 'animate-pulse' : ''}>🎵</span>
          <span className="hidden sm:inline">
            {isPlaying ? 'Música activa' : 'Música'}
          </span>
          {isPlaying && (
            <span className="flex items-center gap-0.5 ml-1">
              <span className="w-1 h-3 bg-[#fff3cf] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1 h-2 bg-[#fff3cf] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1 h-3.5 bg-[#fff3cf] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          )}
        </button>

        {/* Small settings/info toggle */}
        <button
          onClick={() => {
            sounds.playParchment();
            setIsExpanded(!isExpanded);
          }}
          title="Ajustar volumen y opciones de música"
          className="px-1.5 py-1 text-xs text-[#5b412d] hover:text-[#713c3d] font-bold cursor-pointer"
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      {/* Expanded Medieval Music Box Modal / Popover */}
      {isExpanded && (
        <div className="absolute top-12 right-0 z-50 w-80 sm:w-88 rounded-2xl border-3 border-[#5b412d] bg-[#fbf5e7] p-4 shadow-2xl animate-fadeIn text-[#2a2118]">
          <div className="flex justify-between items-center border-b border-[#5b412d]/30 pb-2 mb-3">
            <span className="font-serif uppercase tracking-wider text-[11px] font-bold text-[#713c3d] flex items-center gap-1">
              <span>🎻</span> Música Medieval de Fondo
            </span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-xs text-[#5b412d] hover:text-[#713c3d] font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="text-left mb-3">
            <h4 className="font-serif font-bold text-sm text-[#35271e] leading-snug">
              Música Antigua para el Aula
            </h4>
            <p className="text-[11px] font-serif text-[#5b412d] italic">
              Laúd, flautas dulces, arpa y acústica medieval de taberna y castillo (Fiechter).
            </p>
          </div>

          {/* Play / Pause & YouTube link */}
          <div className="flex items-center justify-between gap-2 bg-[#eadbb8]/70 rounded-xl p-2.5 border border-[#5b412d]/20 mb-3">
            <button
              onClick={togglePlay}
              className={`flex-1 py-1.5 px-3 rounded-lg font-serif font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isPlaying
                  ? 'border border-[#713c3d] bg-[#713c3d] text-[#fff6df] shadow'
                  : 'border border-[#5b412d] bg-[#dfceaa] text-[#35271e] hover:bg-[#d5c298]'
              }`}
            >
              <span>{isPlaying ? '⏸ Pausar Música' : '▶ Reproducir'}</span>
            </button>

            <button
              onClick={() => setShowVideoPreview(!showVideoPreview)}
              title={showVideoPreview ? 'Ocultar video' : 'Mostrar ventana del video'}
              className="rounded-lg border border-[#5b412d]/40 bg-[#dfceaa] hover:bg-[#d5c298] px-2.5 py-1.5 text-xs font-serif font-semibold text-[#35271e] cursor-pointer"
            >
              {showVideoPreview ? '🗖 Ocultar' : '🗖 Ver Video'}
            </button>

            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir en YouTube en pestaña aparte"
              className="rounded-lg border border-[#5b412d]/40 bg-[#dfceaa] hover:bg-[#d5c298] p-1.5 text-xs font-serif text-[#35271e] cursor-pointer"
            >
              ↗
            </a>
          </div>

          {/* VOLUME SLIDER SECTION */}
          <div className="rounded-xl border border-[#ab8841]/70 bg-[#fffdf7] p-3 mb-3 shadow-xs">
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-serif font-bold text-xs text-[#713c3d] flex items-center gap-1.5">
                <span>{volume === 0 ? '🔇' : volume < 40 ? '🔈' : volume < 75 ? '🔉' : '🔊'}</span>
                <span>Volumen de la Música:</span>
              </span>
              <span className="font-serif font-bold text-xs text-[#35271e] bg-[#eadbb8] px-2 py-0.5 rounded border border-[#5b412d]/30">
                {volume}%
              </span>
            </div>

            {/* Slider bar */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#5b412d] select-none">0%</span>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={volume}
                onChange={(e) => handleVolumeChange(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-[#dfceaa] rounded-lg appearance-none cursor-pointer accent-[#713c3d]"
              />
              <span className="text-xs text-[#5b412d] select-none">100%</span>
            </div>

            {/* Quick volume presets */}
            <div className="flex justify-between gap-1 mt-2.5 pt-2 border-t border-[#5b412d]/15">
              <button
                onClick={() => handleVolumeChange(0)}
                className={`flex-1 py-0.5 rounded text-[10px] font-serif font-bold border transition cursor-pointer ${
                  volume === 0
                    ? 'border-[#713c3d] bg-[#713c3d] text-[#fff6df]'
                    : 'border-[#5b412d]/30 bg-[#dfceaa]/60 text-[#35271e] hover:bg-[#dfceaa]'
                }`}
              >
                Silencio
              </button>
              <button
                onClick={() => handleVolumeChange(30)}
                className={`flex-1 py-0.5 rounded text-[10px] font-serif font-bold border transition cursor-pointer ${
                  volume === 30
                    ? 'border-[#713c3d] bg-[#713c3d] text-[#fff6df]'
                    : 'border-[#5b412d]/30 bg-[#dfceaa]/60 text-[#35271e] hover:bg-[#dfceaa]'
                }`}
              >
                Suave (30%)
              </button>
              <button
                onClick={() => handleVolumeChange(60)}
                className={`flex-1 py-0.5 rounded text-[10px] font-serif font-bold border transition cursor-pointer ${
                  volume === 60
                    ? 'border-[#713c3d] bg-[#713c3d] text-[#fff6df]'
                    : 'border-[#5b412d]/30 bg-[#dfceaa]/60 text-[#35271e] hover:bg-[#dfceaa]'
                }`}
              >
                Medio (60%)
              </button>
              <button
                onClick={() => handleVolumeChange(100)}
                className={`flex-1 py-0.5 rounded text-[10px] font-serif font-bold border transition cursor-pointer ${
                  volume === 100
                    ? 'border-[#713c3d] bg-[#713c3d] text-[#fff6df]'
                    : 'border-[#5b412d]/30 bg-[#dfceaa]/60 text-[#35271e] hover:bg-[#dfceaa]'
                }`}
              >
                Alto (100%)
              </button>
            </div>
          </div>

          {/* Optional Embedded Video View directly in popover */}
          {showVideoPreview && (
            <div className="mt-2 rounded-xl overflow-hidden border-2 border-[#5b412d] aspect-[16/9] shadow-md bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&enablejsapi=1&controls=1`}
                title="Reproductor de Música Medieval"
                allow="autoplay"
              />
            </div>
          )}

          {/* Helper hint */}
          <p className="text-[10px] font-serif text-[#5b412d]/80 text-center italic mt-1">
            Música instrumental de fondo continua sin anuncios intermedios.
          </p>
        </div>
      )}

      {/* Persistent Background YouTube Audio Iframe */}
      {isPlaying && !showVideoPreview && (
        <div className="hidden pointer-events-none opacity-0">
          <iframe
            ref={iframeRef}
            id="medieval-music-iframe"
            width="200"
            height="200"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&enablejsapi=1`}
            title="Música Medieval de Fondo"
            allow="autoplay"
            onLoad={handleIframeLoad}
          />
        </div>
      )}
    </div>
  );
};
