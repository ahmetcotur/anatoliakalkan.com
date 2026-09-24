import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'terracotta';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Anatolia Food & Drink Olive Branch Motif
 * Recreated from the official brand artwork
 */
export const OliveBranchIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-16 h-8',
  color = 'currentColor',
}) => (
  <svg
    viewBox="0 0 400 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Main central stem */}
    <path
      d="M 20 62 Q 130 52 230 60 Q 320 68 385 64"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    
    {/* Top leaves */}
    {/* Leftmost small top leaf */}
    <path
      d="M 60 58 Q 75 35 105 32 Q 95 55 60 58 Z"
      fill={color}
    />
    <path
      d="M 115 54 Q 135 22 170 20 Q 155 48 115 54 Z"
      fill={color}
    />
    <path
      d="M 180 56 Q 200 15 240 18 Q 225 50 180 56 Z"
      fill={color}
    />
    <path
      d="M 245 60 Q 265 24 305 30 Q 290 56 245 60 Z"
      fill={color}
    />
    <path
      d="M 310 63 Q 330 38 365 44 Q 350 62 310 63 Z"
      fill={color}
    />

    {/* Bottom leaves */}
    <path
      d="M 45 62 Q 35 85 20 100 Q 40 85 55 64 Z"
      fill={color}
    />
    <path
      d="M 95 58 Q 80 92 60 110 Q 90 95 105 60 Z"
      fill={color}
    />
    <path
      d="M 150 56 Q 140 95 130 115 Q 160 95 165 60 Z"
      fill={color}
    />
    <path
      d="M 215 58 Q 210 98 205 116 Q 230 92 230 62 Z"
      fill={color}
    />
    <path
      d="M 280 62 Q 285 96 300 112 Q 305 88 290 64 Z"
      fill={color}
    />
    <path
      d="M 345 64 Q 355 90 380 100 Q 375 80 355 66 Z"
      fill={color}
    />
  </svg>
);

/**
 * Anatolia Monogram "A" with entwined olive branch
 * Based on ANATOLIAMONOGRAM-2.png
 */
export const AnatoliaMonogram: React.FC<LogoProps> = ({
  variant = 'dark',
  className = 'w-10 h-10',
}) => {
  const isWhite = variant === 'white' || variant === 'light';
  return (
    <div className={`inline-flex items-center justify-center select-none overflow-hidden ${className}`}>
      <img
        src={isWhite ? '/images/brand/monogram-transparent.png' : '/images/brand/monogram.png'}
        alt="Anatolia Monogram"
        className="w-full h-full object-contain filter drop-shadow-xs"
        loading="eager"
      />
    </div>
  );
};

/**
 * Anatolia Food & Drink Full Logo (Branch + ANATOLIA + FOOD & DRINK)
 * Based on official anatolialogo.png & white transparent version
 */
export const AnatoliaFullLogo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
}) => {
  const isWhite = variant === 'white' || variant === 'light';
  const sizeClasses = {
    sm: 'max-w-[140px]',
    md: 'max-w-[200px]',
    lg: 'max-w-[280px]',
    xl: 'max-w-[360px]',
  };

  return (
    <div className={`flex flex-col items-center justify-center select-none ${sizeClasses[size]} ${className}`}>
      <img
        src={isWhite ? '/images/brand/logo-white.png' : '/images/brand/logo.png'}
        alt="Anatolia Food & Drink"
        className="w-full h-auto object-contain filter drop-shadow-sm"
        loading="eager"
      />
    </div>
  );
};

/**
 * Anatolia Physical Signboard ("Tabela") Component
 * Recreates the exact physical sign in Kalkan with the warm cream-yellow tone,
 * elegant dark typography and olive branch emblem.
 */
export const AnatoliaSignboard: React.FC<{
  className?: string;
  subtext?: string;
}> = ({
  className = '',
  subtext = 'Kalkan · Şehitler Cd. No: 41',
}) => {
  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-8 bg-[#F6ECC8] border-2 border-[#DECFA5] shadow-[0_12px_36px_rgba(45,35,15,0.12)] text-center select-none overflow-hidden ${className}`}
    >
      {/* Subtle weathered brass screw rivets at corners for authentic signboard feel */}
      <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-[#B89C62] border border-[#8C7441] shadow-inner" />
      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#B89C62] border border-[#8C7441] shadow-inner" />
      <div className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-[#B89C62] border border-[#8C7441] shadow-inner" />
      <div className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-[#B89C62] border border-[#8C7441] shadow-inner" />

      {/* Inner thin border frame */}
      <div className="absolute inset-2 sm:inset-3 border border-[#DECFA5]/80 rounded-xl pointer-events-none" />

      {/* Signboard content */}
      <div className="relative z-10 py-1">
        {/* Botanical Olive Branch Emblem */}
        <div className="flex justify-center mb-2">
          <OliveBranchIcon className="w-24 sm:w-28 h-8 sm:h-10 text-[#201E19]" color="#201E19" />
        </div>

        {/* Brand Name */}
        <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[0.12em] text-[#201E19] uppercase leading-none">
          Anatolia
        </div>

        {/* Sub-label */}
        <div className="text-[11px] sm:text-xs font-sans tracking-[0.35em] text-[#423C2D] font-bold uppercase mt-2.5">
          Food &amp; Drink
        </div>

        {/* Street location subtitle */}
        {subtext && (
          <div className="mt-3 pt-2 border-t border-[#DECFA5]/70 text-[10px] sm:text-[11px] tracking-wider text-[#695F4A] font-medium">
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};
