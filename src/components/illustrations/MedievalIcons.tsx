import React, { useState } from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Corner illuminated decorative flourish for manuscript frames
export const ManuscriptFlourish: React.FC<IconProps & { position?: 'tl' | 'tr' | 'bl' | 'br' }> = ({
  className = '',
  size = 48,
  position = 'tl'
}) => {
  const transform = {
    tl: 'rotate(0)',
    tr: 'scaleX(-1)',
    bl: 'scaleY(-1)',
    br: 'scale(-1, -1)'
  }[position];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform }}
    >
      <path
        d="M4 56 V16 C4 9.37 9.37 4 16 4 H56"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10 56 V20 C10 14.48 14.48 10 20 10 H56"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="2 2"
        strokeLinecap="round"
      />
      <path
        d="M16 16 C16 26 26 26 26 16 C26 6 16 6 16 16 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <circle cx="36" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="36" r="2" fill="currentColor" />
    </svg>
  );
};

// Wax Seal Component
export const WaxSealStamp: React.FC<{
  number?: number | string;
  size?: number;
  variant?: 'red' | 'gold' | 'dark';
  className?: string;
}> = ({ number, size = 64, variant = 'red', className = '' }) => {
  const colors = {
    red: { fill: '#7a2223', stroke: '#501213', inner: '#962c2d', text: '#ecdab7' },
    gold: { fill: '#8f6f32', stroke: '#5f4618', inner: '#ab8841', text: '#fff3cf' },
    dark: { fill: '#3d2b20', stroke: '#22160e', inner: '#523a2b', text: '#d9c6a5' }
  }[variant];

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path
          d="M50 4 C64 3 76 9 86 19 C95 28 98 42 96 55 C94 68 87 81 76 89 C64 97 48 97 35 94 C22 91 10 82 5 70 C-1 57 2 41 8 28 C15 15 32 5 50 4 Z"
          fill={colors.fill}
          stroke={colors.stroke}
          strokeWidth="3"
        />
        <circle cx="50" cy="50" r="34" fill={colors.inner} stroke={colors.stroke} strokeWidth="2" strokeDasharray="3 3" />
        <path
          d="M50 26 L53 43 L70 46 L55 53 L58 70 L47 57 L32 64 L41 49 L28 42 L45 42 Z"
          fill="none"
          stroke={colors.text}
          strokeWidth="1.8"
          strokeLinejoin="round"
          opacity="0.85"
        />
        {number !== undefined && (
          <text
            x="50"
            y="56"
            textAnchor="middle"
            fill={colors.text}
            fontSize="20"
            fontFamily="'Cinzel Decorative', 'MedievalSharp', serif"
            fontWeight="bold"
          >
            {number}
          </text>
        )}
      </svg>
    </div>
  );
};

// Authentic historical medieval miniatures for each card
const SCENE_META = {
  market: {
    src: '/images/card_market.jpg',
    alt: 'Gran bazar de Samarcanda con mercaderes, sedas preciosas, porcelanas y camellos',
    title: 'Llegada de la caravana al gran mercado de Samarcanda',
    source: 'Iluminación medieval estilo siglo XIV — El Emporio de Ultramar'
  },
  paper: {
    src: '/images/card_paper.jpg',
    alt: 'Taller artesanal de fabricación de papel con tina, mazos hidráulicos y secado',
    title: 'Taller del maestro papelero y tinas de fibra',
    source: 'Miniatura iluminada de los gremios medievales (Siglo XIV)'
  },
  math: {
    src: '/images/card_math.jpg',
    alt: 'El debate de las cifras indoarábigas con el cero (sifr) frente al ábaco tradicional',
    title: 'La disputa del cálculo: Cifras Indoarábigas y Astrolabio',
    source: 'Tratado de aritmética y astronomía medieval (Siglo XIV)'
  },
  medicine: {
    src: '/images/card_medicine.jpg',
    alt: 'Bimaristan y casa de la sabiduría con médicos, boticarios y códices botánicos',
    title: 'La Casa de la Sabiduría: Bimaristán y Tratados de Medicina',
    source: 'Manuscrito iluminado médico de Oriente y Occidente (Siglo XIV)'
  },
  port: {
    src: '/images/card_port.jpg',
    alt: 'Galeras y naves de vela latina en puerto mediterráneo cargando especias y sedas',
    title: 'Galeras mercantes y aduana marítima en el puerto mediterráneo',
    source: 'Crónicas de los puertos y rutas marítimas medievales (Siglo XIV)'
  },
  plague: {
    src: '/images/card_plague.jpg',
    alt: 'El puerto en cuarentena con naves selladas, teas humeantes y el aviso de la peste',
    title: 'El heraldo de la Gran Peste Negra (1347-1348)',
    source: 'Códice histórico de las grandes epidemias y cuarentenas (Siglo XIV)'
  },
  monsoon: {
    src: '/images/card_monsoon.jpg',
    alt: 'Naves árabes e indias con velas latinas navegando el Océano Índico con astrolabio',
    title: 'Navegación oceánica: Los Vientos del Monzón y los Dhows',
    source: 'Tratado de navegación astronómica y mareas del Océano Índico (Siglo XIV)'
  },
  'ship-customs': {
    src: '/images/card_customs.jpg',
    alt: 'Gran aduana marítima de Ormuz con pesaje de especias, fardos y navíos fondeados',
    title: 'El emporio marítimo de Ormuz y las leyes aduaneras del mar',
    source: 'Crónicas del comercio de ultramar y aduanas de Oriente (Siglo XIV)'
  },
  quarantine: {
    src: '/images/card_quarantine.jpg',
    alt: 'Galeras mercantes en cuarentena fondeadas frente a las murallas con guardias y teas',
    title: 'El puerto en cuarentena (Quarantena): Alerta sanitaria de 1347',
    source: 'Leyes marítimas y bandos sanitarios de los puertos de Occidente (Siglo XIV)'
  }
};

export const CardSceneIllustration: React.FC<{
  type: 'market' | 'paper' | 'math' | 'medicine' | 'port' | 'plague' | 'monsoon' | 'ship-customs' | 'quarantine';
  className?: string;
}> = ({ type, className = '' }) => {
  const meta = SCENE_META[type];
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsZoomed(true)}
        className={`group relative overflow-hidden rounded-xl border-3 border-[#5b412d] bg-[#dfceaa] p-2.5 shadow-lg transition-transform hover:scale-[1.01] cursor-pointer ${className}`}
      >
        {/* Antique manuscript image frame */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border-2 border-[#5b412d]/60 bg-[#25231f]">
          <img
            src={meta.src}
            alt={meta.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Decorative parchment overlay vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(42,33,24,0.4)]" />

          {/* Zoom hint badge */}
          <div className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-serif font-bold text-[#fff6df] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
            🔍 Click para ampliar miniatura
          </div>
        </div>

        {/* Caption */}
        <div className="mt-2 text-center">
          <div className="font-serif font-bold text-xs sm:text-sm text-[#35271e] leading-snug">
            {meta.title}
          </div>
          <div className="font-serif text-[11px] text-[#713c3d] italic">
            {meta.source}
          </div>
        </div>
      </div>

      {/* Lightbox Modal on click to examine in full detail */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-4xl rounded-2xl border-4 border-[#713c3d] bg-[#dfceaa] p-4 shadow-2xl text-center"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-serif text-sm font-bold text-[#713c3d]">{meta.title}</span>
              <button
                onClick={() => setIsZoomed(false)}
                className="rounded-lg border border-[#5b412d] bg-[#eadbb8] px-2.5 py-1 text-xs font-bold text-[#35271e] hover:bg-[#d5c298] cursor-pointer"
              >
                ✕ Cerrar
              </button>
            </div>
            <img
              src={meta.src}
              alt={meta.alt}
              className="max-h-[75vh] w-auto mx-auto rounded-lg border-2 border-[#5b412d] object-contain shadow-md"
            />
            <p className="mt-2 text-xs font-serif italic text-[#443224]">{meta.source}</p>
          </div>
        </div>
      )}
    </>
  );
};

// Character portrait mappings using Potion Craft style art
const CHAR_PORTRAIT_MAP: Record<string, { src: string; alt: string }> = {
  merchant: { src: '/images/char_merchant.jpg', alt: 'El Mercader' },
  scale: { src: '/images/char_merchant.jpg', alt: 'El Mercader' },
  traveler: { src: '/images/char_traveler.jpg', alt: 'La Viajera' },
  compass: { src: '/images/char_traveler.jpg', alt: 'La Viajera' },
  medic: { src: '/images/char_medic.jpg', alt: 'El Aprendiz de Médico' },
  flask: { src: '/images/char_medic.jpg', alt: 'El Aprendiz de Médico' },
  scholar: { src: '/images/char_scholar.jpg', alt: 'El Estudioso' },
  scroll: { src: '/images/char_scholar.jpg', alt: 'El Estudioso' }
};

// Character portrait with Potion Craft & Illuminated Manuscript aesthetic
export const CharacterPortraitIcon: React.FC<{
  type: string;
  size?: number;
  className?: string;
  rounded?: 'full' | 'lg' | '2xl';
}> = ({ type, size = 72, className = '', rounded = 'full' }) => {
  const item = CHAR_PORTRAIT_MAP[type] || CHAR_PORTRAIT_MAP.merchant;
  const roundedClass = rounded === 'full' ? 'rounded-full' : rounded === '2xl' ? 'rounded-2xl' : 'rounded-lg';

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden border-3 border-[#5b412d] bg-[#eadbb8] shadow-md ${roundedClass} ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="h-full w-full object-cover object-top"
        loading="lazy"
      />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_12px_rgba(42,33,24,0.35)]" />
    </div>
  );
};
