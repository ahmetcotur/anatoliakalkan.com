import React, { useState } from 'react';
import { Sun, Moon, Check, Wind, Heart, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { ATMOSPHERE_POINTS, VERIFIED_REVIEWS } from '../data/restaurantData';
import { VisualCard } from './VisualCard';

interface AtmosphereProps {
  currentLang: Language;
}

export const Atmosphere: React.FC<AtmosphereProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'day' | 'evening'>('evening');

  const activePoint =
    ATMOSPHERE_POINTS.find((p) => p.id === activeTab) || ATMOSPHERE_POINTS[1];

  const review = VERIFIED_REVIEWS[0];

  return (
    <section id="atmosphere" className="py-20 lg:py-28 bg-[#F8F2DF] text-[#201E19] border-b border-[#DECFA5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#DECFA5]">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold mb-2 flex items-center gap-2">
              <Wind className="w-3.5 h-3.5" />
              <span>{currentLang === 'tr' ? 'Mekân & Deneyim' : 'Space & Ambiance'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-[#201E19] text-balance">
              {currentLang === 'tr' ? 'Günün Ritminde Anatolia' : 'The Rhythm of the Day'}
            </h2>
            <p className="mt-2 text-[#524B3A] text-sm sm:text-base font-normal max-w-xl">
              {currentLang === 'tr'
                ? "Şehitler Caddesi'nde gün boyu yaşayan, akşamı uzatan masalar. Gündüzün esintili ferahlığından gecenin samimi sohbetlerine."
                : 'A welcoming space on Şehitler Street that lives through the day and extends into easy-going evenings.'}
            </p>
          </div>

          {/* Day / Evening Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-[#EDE1B7] border border-[#DECFA5]">
            <button
              onClick={() => setActiveTab('day')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'day'
                  ? 'bg-[#FAF4DC] text-[#201E19] shadow-xs'
                  : 'text-[#615641] hover:text-[#201E19]'
              }`}
            >
              <Sun className="w-4 h-4 text-[#D4A343]" />
              <span>{currentLang === 'tr' ? 'Gündüz Avlusu' : 'Daytime Courtyard'}</span>
            </button>
            <button
              onClick={() => setActiveTab('evening')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'evening'
                  ? 'bg-[#201E19] text-[#FAF4DC] shadow-xs'
                  : 'text-[#615641] hover:text-[#201E19]'
              }`}
            >
              <Moon className="w-4 h-4 text-[#DECFA5]" />
              <span>{currentLang === 'tr' ? 'Akşam Sohbeti' : 'Evening Intimacy'}</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6">
            <VisualCard
              type={activeTab === 'day' ? 'day-terrace' : 'evening-terrace'}
              className="shadow-xl border-2 border-[#DECFA5]"
            />
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A32]">
                {activeTab === 'day'
                  ? currentLang === 'tr'
                    ? '09.00 – 18.00 Saatleri Arasında'
                    : 'From 09:00 to 18:00'
                  : currentLang === 'tr'
                  ? '18.00 – 00.00 Saatleri Arasında'
                  : 'From 18:00 to Midnight'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#201E19] mt-1">
                {activePoint.title[currentLang]}
              </h3>
            </div>

            <p className="text-[#4E4738] text-sm sm:text-base leading-relaxed font-normal">
              {activePoint.description[currentLang]}
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {activePoint.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF4DC] border border-[#DECFA5] text-xs font-medium text-[#201E19] shadow-2xs"
                >
                  <Check className="w-4 h-4 text-[#C85A32] shrink-0" />
                  <span>{item[currentLang]}</span>
                </div>
              ))}
            </div>

            {/* Verified Guest Observation Card (Grounded in 10 Sept Tripadvisor review) */}
            <div className="p-5 rounded-2xl bg-[#FAF4DC] border border-[#DECFA5] shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 text-[#C85A32] fill-[#C85A32]" />
                  <span className="font-semibold text-[#201E19]">
                    {review.title[currentLang]}
                  </span>
                </div>
                {/* Zero-Pill text separator */}
                <div className="text-[#7A6F5A] text-[11px]">
                  <span>{review.source}</span>
                  <span className="mx-1">·</span>
                  <span>{review.date}</span>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#4E4738] italic font-normal leading-relaxed">
                "{review.content[currentLang]}"
              </blockquote>

              <div className="text-[11px] text-[#7A6F5A] pt-1 border-t border-[#DECFA5]/60 flex items-center justify-between">
                <span>{currentLang === 'tr' ? 'Doğrulanmış Misafir Yorumu' : 'Verified Guest Impression'}</span>
                <span className="text-[#C85A32] font-semibold">★ 5.0 / 5.0</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
