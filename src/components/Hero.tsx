import React from 'react';
import { ArrowDown, Clock, MapPin, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { VisualCard } from './VisualCard';
import { OliveBranchIcon } from './AnatoliaLogo';

interface HeroProps {
  currentLang: Language;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenReservation }) => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#F5ECC8] via-[#FAF4DC] to-[#FAF5E8] text-[#201E19] overflow-hidden border-b border-[#E5D5A6]">
      {/* Background warm radial atmosphere */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-[#EAD9A4]/35 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C85A32]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Copy */}
          <div className="lg:col-span-7 space-y-6 lg:pr-4">
            
            {/* Brand Botanical Olive Branch Monogram Motif */}
            <div className="flex items-center gap-3">
              <OliveBranchIcon className="w-20 h-7 text-[#201E19]" color="#201E19" />
            </div>

            {/* Subtle editorial kicker styled in tabela cream */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE3BD] border border-[#DECFA5] text-xs text-[#4A412F] tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              <span className="font-semibold">
                {currentLang === 'tr' ? 'Kalkan, Kaş / Antalya' : 'Kalkan, Antalya Riviera'}
              </span>
              <span className="text-[#8C7D64]">·</span>
              <span className="text-[#5A513E] font-medium">
                {currentLang === 'tr' ? 'Akdeniz & Taş Fırın & Kokteyl' : 'Mediterranean & Cocktail Bar'}
              </span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-[#201E19] leading-[1.14] text-balance">
              {RESTAURANT_INFO.tagline[currentLang]}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#473F30] font-normal leading-relaxed max-w-2xl">
              {RESTAURANT_INFO.heroSubtext[currentLang]}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#C85A32] hover:bg-[#B34D28] active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-[#C85A32]/25 whitespace-nowrap cursor-pointer"
              >
                {currentLang === 'tr' ? 'Rezervasyon Yap' : 'Book a Table'}
              </button>

              <a
                href="#menu"
                className="px-6 py-3.5 text-sm font-semibold text-[#201E19] hover:text-[#C85A32] bg-[#FAF4DC] hover:bg-[#EDE1B7] border border-[#DECFA5] rounded-xl transition-all whitespace-nowrap flex items-center gap-2 shadow-2xs"
              >
                <span>{currentLang === 'tr' ? 'Menüyü Gör' : 'Explore the Menu'}</span>
                <ArrowDown className="w-4 h-4 text-[#C85A32]" />
              </a>
            </div>

            {/* Practical visit quick bar */}
            <div className="pt-6 border-t border-[#DECFA5] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#524B3A]">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span>
                  <strong className="text-[#201E19] font-semibold">
                    {currentLang === 'tr' ? 'Çalışma Saatleri:' : 'Opening Hours:'}
                  </strong>{' '}
                  {RESTAURANT_INFO.openingHours}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span>
                  <strong className="text-[#201E19] font-semibold">
                    {currentLang === 'tr' ? 'Konum:' : 'Location:'}
                  </strong>{' '}
                  {RESTAURANT_INFO.address}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Carrier */}
          <div className="lg:col-span-5 relative">
            <VisualCard
              type="hero"
              className="shadow-[0_20px_50px_rgba(45,35,15,0.15)] border-2 border-[#E5D5A6]"
            />
            {/* Ambient small floating badge in authentic cream-yellow */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-[#FAF4DC]/95 backdrop-blur-md border border-[#DECFA5] px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C85A32]/15 border border-[#C85A32]/25 flex items-center justify-center text-lg">
                🍸
              </div>
              <div>
                <p className="text-xs font-bold text-[#201E19]">Anatolia Sunset</p>
                <p className="text-[11px] text-[#5A513E]">
                  {currentLang === 'tr' ? 'Özel Reçete İmza Kokteyl' : 'House Signature Cocktail'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
