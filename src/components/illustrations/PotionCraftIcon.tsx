import React from 'react';

export type PotionCraftIconType =
  | 'map'
  | 'silk'
  | 'spices'
  | 'porcelain'
  | 'paper'
  | 'gold'
  | 'medicine'
  | 'astrolabe'
  | 'camel'
  | 'lute'
  | 'quill'
  | 'scale'
  | 'ship';

interface PotionCraftIconProps {
  name: PotionCraftIconType | string;
  size?: number | string;
  className?: string;
  title?: string;
}

export const PotionCraftIcon: React.FC<PotionCraftIconProps> = ({
  name,
  size = 32,
  className = '',
  title
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  // The 'map' icon is the Gemini-generated Potion Craft artwork
  if (name === 'map') {
    return (
      <span
        title={title || 'Mapa Antiguo'}
        className={`inline-block overflow-hidden rounded-md border border-[#5b412d]/70 bg-[#eedebc] shadow-xs select-none shrink-0 ${className}`}
        style={{ width: pixelSize, height: pixelSize }}
      >
        <img
          src="/images/icon_map.jpg"
          alt="Icono Mapa Potion Craft"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </span>
    );
  }

  // Pure Potion Craft Engraving Vector Icons (woodcut line work, warm sepia, parchment texture)
  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 select-none ${className}`}
    >
      {title && <title>{title}</title>}
      {/* Background Parchment Seal Circle */}
      <circle cx="32" cy="32" r="30" fill="#f4ebd4" stroke="#5b412d" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="27.5" fill="none" stroke="#ab8841" strokeWidth="1" strokeDasharray="3 2" />

      {name === 'silk' && (
        <g transform="translate(8, 8) scale(0.75)">
          {/* Folded Silk Bolt & Spool */}
          <path
            d="M8 20 C18 10, 46 10, 56 20 L52 46 C42 36, 14 36, 4 46 Z"
            fill="#a13337"
            stroke="#3a1e12"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M8 20 C18 28, 46 28, 56 20"
            fill="none"
            stroke="#ffd573"
            strokeWidth="2"
            strokeDasharray="2 3"
          />
          <path
            d="M4 46 C14 36, 42 36, 52 46 C42 56, 14 56, 4 46 Z"
            fill="#b84347"
            stroke="#3a1e12"
            strokeWidth="2"
          />
          {/* Golden Spool */}
          <ellipse cx="48" cy="46" rx="10" ry="14" fill="#ab8841" stroke="#3a1e12" strokeWidth="2" />
          <line x1="42" y1="36" x2="42" y2="56" stroke="#3a1e12" strokeWidth="1.5" />
          <line x1="48" y1="34" x2="48" y2="58" stroke="#ffd573" strokeWidth="2" />
          <line x1="54" y1="36" x2="54" y2="56" stroke="#3a1e12" strokeWidth="1.5" />
          {/* Silk fold hatching */}
          <line x1="16" y1="28" x2="26" y2="38" stroke="#501213" strokeWidth="1.5" />
          <line x1="24" y1="26" x2="34" y2="36" stroke="#501213" strokeWidth="1.5" />
          <line x1="32" y1="24" x2="42" y2="34" stroke="#501213" strokeWidth="1.5" />
        </g>
      )}

      {name === 'spices' && (
        <g transform="translate(8, 8) scale(0.75)">
          {/* Stone Mortar & Pestle */}
          {/* Pestle */}
          <path
            d="M20 8 L44 38 L38 44 L14 14 Z"
            fill="#8c6e54"
            stroke="#2b1a0d"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <line x1="19" y1="12" x2="39" y2="37" stroke="#dfceaa" strokeWidth="1.5" />
          {/* Mortar Bowl */}
          <path
            d="M8 30 C8 30, 4 54, 32 56 C60 54, 56 30, 56 30 C56 30, 48 36, 32 36 C16 36, 8 30, 8 30 Z"
            fill="#d2b887"
            stroke="#2b1a0d"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Powder / Herbs */}
          <path d="M14 32 Q32 40 50 32 Q32 35 14 32" fill="#58793b" />
          {/* Mortar Base */}
          <path d="M22 56 L42 56 L46 60 L18 60 Z" fill="#755a43" stroke="#2b1a0d" strokeWidth="2" />
          {/* Hatching */}
          <line x1="18" y1="42" x2="26" y2="50" stroke="#5b412d" strokeWidth="1.5" />
          <line x1="24" y1="44" x2="32" y2="52" stroke="#5b412d" strokeWidth="1.5" />
          <line x1="32" y1="44" x2="40" y2="52" stroke="#5b412d" strokeWidth="1.5" />
        </g>
      )}

      {name === 'porcelain' && (
        <g transform="translate(10, 8) scale(0.72)">
          {/* Imperial Ceramic Vase with Cobalt Patterns */}
          <path
            d="M22 6 L42 6 L38 16 C48 24, 54 36, 50 48 C46 56, 18 56, 14 48 C10 36, 16 24, 26 16 Z"
            fill="#f9f7f0"
            stroke="#1d2e3f"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Rim & Base */}
          <ellipse cx="32" cy="6" rx="10" ry="2.5" fill="#d8e5ef" stroke="#1d2e3f" strokeWidth="2" />
          <path d="M20 54 L44 54 L42 58 L22 58 Z" fill="#b9c9d6" stroke="#1d2e3f" strokeWidth="2" />
          {/* Cobalt Blue Ornamental Floral Swirl */}
          <path
            d="M24 32 C26 26, 38 26, 40 32 C38 38, 26 38, 24 32"
            fill="#274b78"
            stroke="#142a47"
            strokeWidth="1.5"
          />
          <circle cx="32" cy="32" r="3.5" fill="#6ba2db" />
          <path d="M32 20 Q36 24 32 28 Q28 24 32 20" fill="#274b78" />
          <path d="M32 36 Q36 40 32 44 Q28 40 32 36" fill="#274b78" />
          {/* Glaze sheen */}
          <path d="M20 22 C18 28, 18 40, 22 46" stroke="#d5e8f5" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}

      {name === 'paper' && (
        <g transform="translate(8, 8) scale(0.75)">
          {/* Rolled Manuscript Scroll & Ink Quill */}
          {/* Scroll */}
          <path
            d="M10 18 C16 12, 42 12, 48 18 L44 48 C38 54, 12 54, 6 48 Z"
            fill="#e8d8b5"
            stroke="#3a2215"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <ellipse cx="10" cy="18" rx="5" ry="8" fill="#dfceaa" stroke="#3a2215" strokeWidth="2" />
          <ellipse cx="44" cy="48" rx="5" ry="8" fill="#cfbd96" stroke="#3a2215" strokeWidth="2" />
          {/* Text lines */}
          <line x1="18" y1="24" x2="38" y2="24" stroke="#5b412d" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="16" y1="30" x2="36" y2="30" stroke="#5b412d" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="14" y1="36" x2="34" y2="36" stroke="#5b412d" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Feather Quill */}
          <path
            d="M52 4 C48 14, 38 30, 26 44 L32 42 C42 28, 48 16, 54 8 Z"
            fill="#f7f3e8"
            stroke="#3a2215"
            strokeWidth="1.8"
          />
          <line x1="52" y1="4" x2="24" y2="46" stroke="#ab8841" strokeWidth="1.5" />
        </g>
      )}

      {name === 'gold' && (
        <g transform="translate(8, 8) scale(0.75)">
          {/* Hammered Medieval Gold Coins & Bullion */}
          {/* Bottom Bar */}
          <path
            d="M12 42 L42 42 L52 52 L4 52 Z"
            fill="#c4973b"
            stroke="#3a230c"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Coin 1 */}
          <ellipse cx="26" cy="32" rx="14" ry="10" fill="#e5b84c" stroke="#3a230c" strokeWidth="2" />
          <ellipse cx="26" cy="32" rx="10" ry="7" fill="none" stroke="#ab7b26" strokeWidth="1.5" strokeDasharray="2 2" />
          {/* Coin 2 */}
          <ellipse cx="40" cy="24" rx="12" ry="9" fill="#f5ce62" stroke="#3a230c" strokeWidth="2" />
          <circle cx="40" cy="24" r="3" fill="#ab7b26" />
          {/* Sparkle glint */}
          <path d="M46 10 L48 16 L54 18 L48 20 L46 26 L44 20 L38 18 L44 16 Z" fill="#fff6d1" stroke="#3a230c" strokeWidth="1" />
        </g>
      )}

      {name === 'medicine' && (
        <g transform="translate(10, 8) scale(0.72)">
          {/* Apothecary Glass Flask with Emerald Potion & Herbs */}
          <path
            d="M26 8 L38 8 L38 18 L48 36 C54 46, 46 56, 32 56 C18 56, 10 46, 16 36 L26 18 Z"
            fill="#d8e8dc"
            stroke="#213326"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Potion Liquid Fill */}
          <path
            d="M18 38 C24 36, 40 36, 46 38 C50 46, 44 54, 32 54 C20 54, 14 46, 18 38 Z"
            fill="#4e8c56"
          />
          {/* Cork stopper */}
          <path d="M28 4 L36 4 L34 9 L30 9 Z" fill="#9c6d48" stroke="#213326" strokeWidth="2" />
          {/* Bubbles */}
          <circle cx="28" cy="44" r="2.5" fill="#a4dfaa" />
          <circle cx="36" cy="42" r="3" fill="#a4dfaa" />
          <circle cx="32" cy="48" r="2" fill="#a4dfaa" />
          {/* Medicinal Herb Sprig */}
          <path d="M42 22 Q48 16 52 20 Q48 24 42 22" fill="#36663c" stroke="#213326" strokeWidth="1.2" />
        </g>
      )}

      {name === 'astrolabe' && (
        <g transform="translate(8, 8) scale(0.75)">
          {/* Brass Medieval Astrolabe */}
          <circle cx="32" cy="34" r="22" fill="#d9aa43" stroke="#3d270f" strokeWidth="2.5" />
          <circle cx="32" cy="34" r="17" fill="#ebd084" stroke="#3d270f" strokeWidth="1.5" />
          {/* Suspension ring at top */}
          <circle cx="32" cy="8" r="6" fill="none" stroke="#3d270f" strokeWidth="2.5" />
          {/* Rete and Alidade (Cross needles) */}
          <line x1="32" y1="12" x2="32" y2="56" stroke="#3d270f" strokeWidth="2" />
          <line x1="10" y1="34" x2="54" y2="34" stroke="#3d270f" strokeWidth="2" />
          <line x1="17" y1="19" x2="47" y2="49" stroke="#78501c" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="17" y1="49" x2="47" y2="19" stroke="#78501c" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="32" cy="34" r="4" fill="#694011" stroke="#fff3cf" strokeWidth="1" />
        </g>
      )}

      {name === 'camel' && (
        <g transform="translate(8, 8) scale(0.75)">
          {/* Desert Caravan Camel */}
          <path
            d="M12 48 L14 36 C14 30, 18 28, 22 30 C24 24, 28 24, 30 30 C32 24, 38 24, 40 30 C44 28, 48 32, 48 40 L46 48 L42 48 L42 38 L34 38 L34 48 L30 48 L30 38 L22 38 L22 48 Z"
            fill="#ba8e59"
            stroke="#3a2211"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Camel Head & Long Neck */}
          <path
            d="M14 36 C12 28, 10 20, 8 16 C8 12, 14 10, 16 14 C16 18, 18 26, 22 30"
            fill="#ba8e59"
            stroke="#3a2211"
            strokeWidth="2.2"
          />
          {/* Pack / Saddlebags */}
          <rect x="25" y="27" width="14" height="10" rx="2" fill="#713c3d" stroke="#3a2211" strokeWidth="1.8" />
          <line x1="29" y1="27" x2="29" y2="37" stroke="#ab8841" strokeWidth="1.5" />
          <line x1="35" y1="27" x2="35" y2="37" stroke="#ab8841" strokeWidth="1.5" />
        </g>
      )}

      {name === 'lute' && (
        <g transform="translate(8, 8) scale(0.75)">
          {/* Medieval Wooden Lute */}
          <path
            d="M14 42 C14 30, 24 20, 36 20 C48 20, 52 32, 50 44 C48 54, 26 56, 14 42 Z"
            fill="#af7943"
            stroke="#331e0f"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Soundhole Rosette */}
          <circle cx="34" cy="38" r="6" fill="#291509" stroke="#d5aa6d" strokeWidth="1.5" />
          {/* Neck & Pegbox */}
          <path d="M24 24 L14 14 L12 16 L22 26 Z" fill="#784924" stroke="#331e0f" strokeWidth="2" />
          <path d="M14 14 L8 10 L10 7 L16 11 Z" fill="#543015" stroke="#331e0f" strokeWidth="1.8" />
          {/* Strings */}
          <line x1="12" y1="12" x2="34" y2="48" stroke="#f6ebd2" strokeWidth="1" />
          <line x1="14" y1="14" x2="36" y2="48" stroke="#f6ebd2" strokeWidth="1" />
        </g>
      )}

      {name === 'ship' && (
        <g transform="translate(8, 8) scale(0.75)">
          {/* Medieval Caravel / Galley */}
          <path
            d="M6 42 C16 48, 48 48, 58 40 L50 48 C36 54, 20 54, 6 42 Z"
            fill="#6d4928"
            stroke="#2b1a0d"
            strokeWidth="2.5"
          />
          {/* Main Mast & Lateen / Square Sail */}
          <line x1="32" y1="10" x2="32" y2="44" stroke="#2b1a0d" strokeWidth="2.5" />
          <path
            d="M32 14 C44 16, 48 28, 32 34 C42 36, 44 40, 32 42"
            fill="#f6efe1"
            stroke="#2b1a0d"
            strokeWidth="1.8"
          />
          {/* Fore Mast */}
          <line x1="18" y1="20" x2="18" y2="42" stroke="#2b1a0d" strokeWidth="2" />
          <path d="M18 22 C26 24, 28 32, 18 36" fill="#eedebc" stroke="#2b1a0d" strokeWidth="1.5" />
          {/* Sea waves */}
          <path d="M4 50 Q12 46 20 50 T36 50 T52 50 T60 50" fill="none" stroke="#325a75" strokeWidth="2" />
        </g>
      )}
    </svg>
  );
};
