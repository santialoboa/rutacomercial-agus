import React from 'react';
import { sounds } from '../../utils/audio';

interface MedievalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'royal' | 'subtle' | 'gold';
  size?: 'normal' | 'large' | 'huge';
  icon?: React.ReactNode;
}

export const MedievalButton: React.FC<MedievalButtonProps> = ({
  children,
  variant = 'primary',
  size = 'normal',
  icon,
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-serif font-bold tracking-wide transition-all duration-200 select-none cursor-pointer rounded-xl border-2 shadow-md active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    normal: 'px-5 py-2.5 text-base sm:text-lg gap-2',
    large: 'px-7 py-3.5 text-lg sm:text-xl gap-3 shadow-lg',
    huge: 'px-9 py-4.5 text-xl sm:text-2xl gap-3 shadow-xl'
  }[size];

  const variantClasses = {
    primary:
      'border-[#501213] bg-gradient-to-b from-[#8f2d30] to-[#6d1f22] text-[#fff6df] hover:from-[#9f3438] hover:to-[#7c2327] hover:shadow-xl shadow-[#501213]/40',
    secondary:
      'border-[#5b412d] bg-gradient-to-b from-[#dfceaa] to-[#c9b78e] text-[#2a2118] hover:from-[#eadbb8] hover:to-[#d5c298] hover:border-[#443224] shadow-[#5b412d]/30',
    royal:
      'border-[#5f4618] bg-gradient-to-b from-[#ab8841] to-[#88692c] text-[#fffcf2] hover:from-[#ba974c] hover:to-[#997633] shadow-[#5f4618]/40',
    gold:
      'border-[#785412] bg-gradient-to-b from-[#d97706] to-[#b45309] text-[#fffdf5] hover:from-[#f59e0b] hover:to-[#d97706] shadow-[#785412]/50 ring-1 ring-[#fef3c7]/30',
    subtle:
      'border-[#5b412d]/40 bg-[#eadbb8]/60 text-[#35271e] hover:bg-[#eadbb8] hover:border-[#5b412d]'
  }[variant];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    sounds.playWoodClick();
    if (onClick) onClick(e);
  };

  const handleMouseEnter = () => {
    // subtle tactile feedback on hover
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
