import { t } from '../i18n';
import React from 'react';
import { Heart, Compass, Clock, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF5E8] text-[#201E19] relative border-b border-[#DECFA5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{t(currentLang, 'ourStoryPhilosophy')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-[#201E19] leading-tight text-balance">
              {t(currentLang, 'aWelcomingTableThatTakesIts')}
            </h2>

            <p className="text-lg text-[#3E382B] font-normal leading-relaxed">
              {RESTAURANT_INFO.aboutShort[currentLang]}
            </p>

            <p className="text-sm sm:text-base text-[#524B3A] font-normal leading-relaxed">
              {RESTAURANT_INFO.aboutStory[currentLang]}
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#FAF4DC] border border-[#DECFA5] space-y-1.5 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#C85A32]/15 flex items-center justify-center text-[#C85A32]">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#201E19]">
                  {t(currentLang, 'warmHospitality')}
                </h3>
                <p className="text-xs text-[#524B3A] font-normal">
                  {t(currentLang, 'attentiveSmilingServiceThatMakesYou')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF4DC] border border-[#DECFA5] space-y-1.5 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#C85A32]/15 flex items-center justify-center text-[#C85A32]">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#201E19]">
                  {t(currentLang, 'unhurriedEvenings')}
                </h3>
                <p className="text-xs text-[#524B3A] font-normal">
                  {t(currentLang, 'aRelaxingDiningPaceWhereDinner')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF4DC] border border-[#DECFA5] space-y-1.5 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#C85A32]/15 flex items-center justify-center text-[#C85A32]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#201E19]">
                  {t(currentLang, 'thoughtfulFood')}
                </h3>
                <p className="text-xs text-[#524B3A] font-normal">
                  {t(currentLang, 'freshStoneOvenBakingSeasonalMediterranean')}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Brand Gridpost & Quote & Info Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Official Anatolia Brand Photo Collage */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#DECFA5] group">
              <img
                src="/images/brand/gridpost.jpg"
                alt={t(currentLang, 'collageAlt')}
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#F6ECC8] via-[#FAF4DC] to-[#EFE2BA] border-2 border-[#DECFA5] space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C85A32]/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-mono uppercase tracking-widest text-[#C85A32] font-semibold">
                Anatolia Food &amp; Drink · Kalkan
              </span>

              <blockquote className="font-serif text-xl sm:text-2xl text-[#201E19] font-medium italic leading-snug">
                {t(currentLang, 'goodFoodThoughtfulDrinksAndThe')}
              </blockquote>

              <div className="space-y-2 text-xs text-[#4C4435] pt-4 border-t border-[#DECFA5]">
                <div className="flex justify-between py-1 border-b border-[#DECFA5]/60">
                  <span className="text-[#6B604B] font-medium">{t(currentLang, 'address')}</span>
                  <span className="font-semibold text-[#201E19] text-right">Şehitler Cd. No: 41, Kalkan</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#DECFA5]/60">
                  <span className="text-[#6B604B] font-medium">{t(currentLang, 'phone')}</span>
                  <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="font-bold text-[#C85A32] hover:underline">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div className="flex justify-between py-1 border-b border-[#DECFA5]/60">
                  <span className="text-[#6B604B] font-medium">{t(currentLang, 'hours')}</span>
                  <span className="font-semibold text-[#201E19]">{RESTAURANT_INFO.openingHours[currentLang]}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#6B604B] font-medium">{t(currentLang, 'cuisine')}</span>
                  <span className="font-semibold text-[#201E19]">{t(currentLang, 'cuisineValue')}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
