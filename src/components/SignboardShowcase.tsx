import React from 'react';
import { MapPin, Navigation, Sparkles, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { AnatoliaSignboard } from './AnatoliaLogo';

interface SignboardShowcaseProps {
  currentLang: Language;
}

export const SignboardShowcase: React.FC<SignboardShowcaseProps> = ({ currentLang }) => {
  const [photoMode, setPhotoMode] = React.useState<'day' | 'night'>('day');

  return (
    <section className="py-12 sm:py-16 bg-[#F8F2DF] border-b border-[#DECFA5] relative overflow-hidden">
      {/* Warm ambient sunbeam */}
      <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full bg-[#F5ECC8]/70 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Signboard Real Photo Showcase */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#DECFA5] aspect-[16/10] group">
              <img
                src={photoMode === 'day' ? '/images/exterior/signboard-day.jpg' : '/images/exterior/signboard-night.jpg'}
                alt="Anatolia Food & Drink Tabela - Kalkan"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Photo toggle on top right */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-md p-1 rounded-xl border border-white/20 z-10">
                <button
                  onClick={() => setPhotoMode('day')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                    photoMode === 'day' ? 'bg-[#FAF4DC] text-[#201E19] font-bold shadow-xs' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {currentLang === 'tr' ? 'Gündüz' : 'Day'}
                </button>
                <button
                  onClick={() => setPhotoMode('night')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                    photoMode === 'night' ? 'bg-[#FAF4DC] text-[#201E19] font-bold shadow-xs' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {currentLang === 'tr' ? 'Gece' : 'Night'}
                </button>
              </div>

              {/* Bottom location badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs z-10">
                <span className="font-medium drop-shadow-md">
                  {currentLang === 'tr' ? 'Şehitler Caddesi Girişimiz' : 'Şehitler Street Storefront'}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm border border-white/20 text-[11px] text-amber-200">
                  {photoMode === 'day' ? (currentLang === 'tr' ? 'Taş Duvar Dokusu' : 'Stone Wall Heritage') : (currentLang === 'tr' ? 'Akşam Işıkları' : 'Evening Ambiance')}
                </span>
              </div>
            </div>
          </div>

          {/* Context & Welcoming Description */}
          <div className="lg:col-span-6 space-y-4 lg:pl-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE3BE] border border-[#DECFA5] text-xs font-semibold text-[#4A412F]">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>
                {currentLang === 'tr' ? 'Mekân & Karşılama Kimliği' : 'Atmosphere & Warm Welcome'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#201E19] leading-snug">
              {currentLang === 'tr'
                ? "Kalkan'ın Sıcak Taş Dokusu ve Krem Sarısı Sokak Havası"
                : 'Warm Cream Stone & Mediterranean Street Life in Kalkan'}
            </h2>

            <p className="text-sm sm:text-base text-[#4C4435] font-normal leading-relaxed">
              {currentLang === 'tr'
                ? "Şehitler Caddesi'nden geçerken gözünüze çarpan sıcak krem sarısı tabelamız, içeri adım attığınız andan itibaren sizi saran ferah, güler yüzlü ve acele ettirmeyen Akdeniz sofrasının davetidir."
                : 'Our distinctive warm cream sign on Şehitler Street is an open invitation to an unhurried, welcoming Mediterranean table with genuine family hospitality.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={RESTAURANT_INFO.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#201E19] text-[#F5ECC8] hover:bg-[#343026] text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#C85A32]" />
                <span>{currentLang === 'tr' ? 'Yol Tarifi Al' : 'Get Directions'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <span className="text-xs text-[#6B604B] flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{RESTAURANT_INFO.address}</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
