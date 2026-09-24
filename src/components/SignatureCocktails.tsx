import React, { useState } from 'react';
import { Sparkles, Wine, Info, Check } from 'lucide-react';
import { Language } from '../types';
import { SIGNATURE_COCKTAILS } from '../data/restaurantData';

interface SignatureCocktailsProps {
  currentLang: Language;
  onOpenReservation: () => void;
}

export const SignatureCocktails: React.FC<SignatureCocktailsProps> = ({
  currentLang,
  onOpenReservation,
}) => {
  const [selectedCocktailId, setSelectedCocktailId] = useState<string>(SIGNATURE_COCKTAILS[0].id);

  const selectedCocktail =
    SIGNATURE_COCKTAILS.find((c) => c.id === selectedCocktailId) || SIGNATURE_COCKTAILS[0];

  return (
    <section id="cocktails" className="py-20 lg:py-28 bg-[#201E19] text-[#FAF5E8] relative overflow-hidden">
      {/* Warm amber & terracotta glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#D4A343]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#C85A32]/12 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#E5B55E] font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>{currentLang === 'tr' ? 'Barda Sanat & Karışım' : 'Mixology & Craft'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#FAF4DC] text-balance">
            {currentLang === 'tr'
              ? 'Anatolia İmza Kokteylleri'
              : 'Anatolia Signature Cocktails'}
          </h2>
          <p className="mt-3 text-[#D6CBB2] text-base sm:text-lg font-light leading-relaxed">
            {currentLang === 'tr'
              ? "Akdeniz'in taze narenciyeleri, Toros dağ kekiği ve yerel lezzetlerle kurgulanmış 7 özgün imza reçetemiz."
              : 'Crafted with fresh Mediterranean botanicals, wild Taurus thyme, and sun-ripened fruits. 7 bespoke recipes with distinct character.'}
          </p>
        </div>

        {/* Cocktails Interactive Grid / Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cocktail List Tabs (Left 5 columns) */}
          <div className="lg:col-span-5 space-y-3">
            {SIGNATURE_COCKTAILS.map((cocktail) => {
              const isSelected = cocktail.id === selectedCocktailId;
              return (
                <button
                  key={cocktail.id}
                  onClick={() => setSelectedCocktailId(cocktail.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#FAF4DC]/15 border-[#DECFA5] shadow-lg shadow-[#D4A343]/10'
                      : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-[#DECFA5]/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: cocktail.accentColor }}
                      />
                      <h3 className="font-serif text-lg font-medium text-[#FAF4DC] group-hover:text-amber-100 transition-colors">
                        {cocktail.name}
                      </h3>
                    </div>
                    <p className="text-xs text-[#D6CBB2] line-clamp-1 pl-4.5">
                      {cocktail.subtitle[currentLang]}
                    </p>
                  </div>

                  <div className="text-right shrink-0 pl-3">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white/10 text-xs text-[#F5ECC8] font-medium">
                      {cocktail.baseAlcohol}
                    </span>
                  </div>
                </button>
              );
            })}

            <div className="pt-3">
              <button
                onClick={onOpenReservation}
                className="w-full py-3.5 px-4 rounded-xl bg-[#C85A32] hover:bg-[#B34D28] text-white text-sm font-semibold transition-colors shadow-sm shadow-[#C85A32]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Wine className="w-4 h-4" />
                <span>
                  {currentLang === 'tr'
                    ? 'Bu Akşam İçin Masa Ayırın'
                    : 'Reserve a Table for Drinks & Dinner'}
                </span>
              </button>
            </div>
          </div>

          {/* Active Cocktail Spotlight Details (Right 7 columns) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#2D2A22] to-[#1C1A15] border border-[#DECFA5]/30 rounded-2xl p-6 sm:p-8 relative shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DECFA5]/20">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E5B55E]">
                  {selectedCocktail.baseAlcohol} · {selectedCocktail.glass}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#FAF4DC] mt-1">
                  {selectedCocktail.name}
                </h3>
                <p className="text-sm text-[#D6CBB2] mt-1 italic">
                  "{selectedCocktail.subtitle[currentLang]}"
                </p>
              </div>

              <div className="text-right">
                <span className="px-3 py-1.5 rounded-full bg-[#FAF4DC]/10 border border-[#DECFA5]/30 text-xs text-[#F5ECC8] font-medium">
                  {currentLang === 'tr' ? 'İmza Reçete' : 'House Signature'}
                </span>
              </div>
            </div>

            {/* Cocktail Description & Story */}
            <div className="py-6 space-y-4">
              <p className="text-sm sm:text-base text-[#EDE4CF] leading-relaxed">
                {selectedCocktail.description[currentLang]}
              </p>

              {/* Ingredients Box */}
              <div className="bg-[#FAF4DC]/5 border border-[#DECFA5]/20 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F5ECC8] uppercase tracking-wider">
                  <Check className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>{currentLang === 'tr' ? 'İçerik & Reçete' : 'Ingredients & Recipe'}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D6CBB2] leading-relaxed font-light">
                  {selectedCocktail.ingredients[currentLang]}
                </p>
              </div>

              {/* Flavor Profile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-black/20 border border-[#DECFA5]/15 text-xs">
                  <span className="text-[#A69980] block mb-1">
                    {currentLang === 'tr' ? 'Tat & Karakter:' : 'Flavor Profile:'}
                  </span>
                  <span className="text-[#FAF4DC] font-medium">
                    {selectedCocktail.flavorProfile[currentLang]}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-black/20 border border-[#DECFA5]/15 text-xs">
                  <span className="text-[#A69980] block mb-1">
                    {currentLang === 'tr' ? 'Servis Sunumu:' : 'Glassware:'}
                  </span>
                  <span className="text-[#FAF4DC] font-medium">
                    {selectedCocktail.glass}
                  </span>
                </div>
              </div>
            </div>

            {/* Cocktail note from brief */}
            <div className="pt-4 border-t border-[#DECFA5]/20 flex items-start gap-2.5 text-xs text-[#A69980]">
              <Info className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
              <span>
                {currentLang === 'tr'
                  ? 'Kokteyllerimiz taze meyve püreleri ve günlük hazırlanan bitkisel infüzyonlarla servis edilir. Alerjen hassasiyetlerinizi lütfen barmenimize iletiniz.'
                  : 'Cocktails are crafted with fresh cold-pressed fruits and daily botanical infusions. Please inform our team of any allergies.'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
