import { t } from '../i18n';
import React from 'react';
import { ArrowUpRight, Wine } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_MENUS } from '../data/menuData';

interface SignatureCocktailsProps { currentLang: Language; onOpenReservation: () => void }
const cocktails = RESTAURANT_MENUS.find((menu) => menu.id === 'drinks')!.groups.find((group) => group.id === 'signature')!.items;

export const SignatureCocktails: React.FC<SignatureCocktailsProps> = ({ currentLang, onOpenReservation }) => {
  return <section id="cocktails" className="py-20 lg:py-28 bg-[#2F3529] text-[#FAF5E8]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-xs tracking-[.22em] uppercase text-[#D7C59A] mb-3 flex items-center gap-2"><Wine className="w-4 h-4" aria-hidden="true" />Anatolia · Bar</p>
      <h2 className="font-serif text-3xl sm:text-5xl mb-4">{t(currentLang, 'anatoliaSignatureCocktails')}</h2>
      <p className="text-[#D6CBB2] max-w-xl leading-relaxed mb-10">{t(currentLang, 'sevenSignatureCocktailsSevenDistinctiveTastes')}</p>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 list-none">
        {cocktails.map((cocktail) => <li key={cocktail.id} className="border-t border-[#D7C59A]/25 py-6"><h3 className="font-serif text-2xl mb-3">{cocktail.name[currentLang]}</h3><p className="text-sm text-[#D6CBB2] leading-relaxed">{cocktail.description[currentLang]}</p></li>)}
      </ul>
      <button onClick={onOpenReservation} className="mt-6 inline-flex items-center gap-2 bg-[#F5ECC8] text-[#2F3529] rounded-full px-5 py-3 text-sm font-semibold hover:bg-[#FAF5E8]">{t(currentLang, 'bookATable2')}<ArrowUpRight className="w-4 h-4" aria-hidden="true" /></button>
    </div>
  </section>;
};
