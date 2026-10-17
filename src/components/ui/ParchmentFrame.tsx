import React from 'react';
import { ManuscriptFlourish } from '../illustrations/MedievalIcons';

interface ParchmentFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'normal' | 'aged' | 'royal';
}

export const ParchmentFrame: React.FC<ParchmentFrameProps> = ({
  children,
  className = '',
  variant = 'normal'
}) => {
  const borderStyles = {
    normal: 'border-[#5b412d] bg-[#dfceaa]',
    aged: 'border-[#443224] bg-[#d5c39b]',
    royal: 'border-[#713c3d] bg-[#eadbb8]'
  }[variant];

  return (
    <div
      className={`relative mx-auto w-full max-w-5xl rounded-2xl border-4 ${borderStyles} p-6 sm:p-10 shadow-2xl transition-all duration-300 text-[#2a2118] ${className}`}
      style={{
        boxShadow: '0 20px 40px -15px rgba(37, 35, 31, 0.45), inset 0 0 45px rgba(91, 65, 45, 0.22)'
      }}
    >
      {/* Corner Manuscript Flourishes */}
      <div className="absolute top-2 left-2 text-[#5b412d]/70 pointer-events-none">
        <ManuscriptFlourish position="tl" size={44} />
      </div>
      <div className="absolute top-2 right-2 text-[#5b412d]/70 pointer-events-none">
        <ManuscriptFlourish position="tr" size={44} />
      </div>
      <div className="absolute bottom-2 left-2 text-[#5b412d]/70 pointer-events-none">
        <ManuscriptFlourish position="bl" size={44} />
      </div>
      <div className="absolute bottom-2 right-2 text-[#5b412d]/70 pointer-events-none">
        <ManuscriptFlourish position="br" size={44} />
      </div>

      {/* Decorative double ink hairline inside */}
      <div className="absolute inset-3.5 rounded-xl border border-[#5b412d]/30 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
