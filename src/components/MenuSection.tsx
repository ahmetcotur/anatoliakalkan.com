import { t, UI_MESSAGES } from '../i18n';
import React, { useMemo, useState } from 'react';
import { ArrowUpRight, ChevronDown, Coffee, Search, Sun, Utensils, Wine, X } from 'lucide-react';
import { Language } from '../types';
import { MenuId, RESTAURANT_MENUS } from '../data/menuData';

interface MenuSectionProps {
  currentLang: Language;
  onOpenReservation: () => void;
}

const menuIcons = { lunch: Sun, dinner: Utensils, drinks: Wine };
const normalize = (value: string) => value.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i').replace(/ё/g, 'е');

export const MenuSection: React.FC<MenuSectionProps> = ({ currentLang, onOpenReservation }) => {
  const [activeMenu, setActiveMenu] = useState<MenuId>('lunch');
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const menu = RESTAURANT_MENUS.find((entry) => entry.id === activeMenu)!;
  const search = normalize(query.trim());
  // Search spans all three menus; a category selection scopes the active menu only.
  const results = useMemo(() => {
    const candidates = search ? RESTAURANT_MENUS : [menu];
    return candidates.map((entry) => ({
      ...entry,
      groups: entry.groups.filter((group) => search || activeCategory === 'all' || group.id === activeCategory)
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => !search || normalize([
            item.name.tr, item.name.en, item.name.ru, item.description.tr, item.description.en, item.description.ru,
            group.title.tr, group.title.en, group.title.ru, group.note?.tr, group.note?.en, group.note?.ru,
          ].join(' ')).includes(search)),
        })).filter((group) => group.items.length > 0),
    })).filter((entry) => entry.groups.length > 0);
  }, [menu, activeCategory, search]);
  const count = results.reduce((total, entry) => total + entry.groups.reduce((sum, group) => sum + group.items.length, 0), 0);

  return (
    <section id="menu" className="restaurant-menu py-20 lg:py-28 bg-[#FAF5E8] text-[#201E19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#C85A32] mb-3">Anatolia · Food & Drink</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif">{t(currentLang, 'welcomeToOurTable')}</h2>
            <p className="mt-4 text-[#625A49] max-w-xl leading-relaxed">{t(currentLang, 'fromBreakfastToDinnerFromCoffee')}</p>
          </div>
          <button onClick={onOpenReservation} className="self-start shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#2F3529] text-[#FAF5E8] text-sm font-semibold hover:bg-[#444B38] transition-colors">
            {t(currentLang, 'bookATable2')}<ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mb-6" role="group" aria-label={t(currentLang, 'chooseAMenu')}>
          {RESTAURANT_MENUS.map((entry, index) => {
            const Icon = menuIcons[entry.id];
            const selected = activeMenu === entry.id;
            return <button key={entry.id} aria-pressed={selected} onClick={() => { setActiveMenu(entry.id); setActiveCategory('all'); setQuery(''); }}
              className={`text-left p-5 sm:p-6 rounded-2xl border transition-colors flex items-center gap-4 ${selected ? 'bg-[#2F3529] text-[#FAF5E8] border-[#2F3529]' : 'bg-[#F5EDD6] text-[#423C2D] border-[#DECFA5] hover:border-[#68734A]'}`}>
              <Icon className="w-6 h-6 shrink-0" strokeWidth={1.4} aria-hidden="true" />
              <span className="flex-1"><span className={`block text-[10px] uppercase tracking-[.2em] mb-1 ${selected ? 'text-[#D7C59A]' : 'text-[#8C7753]'}`}>0{index + 1} · Anatolia</span><span className="font-serif text-lg sm:text-xl">{entry.title[currentLang]}</span></span>
            </button>;
          })}
        </div>

        <div className="relative mb-6 max-w-xl">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#68734A]" aria-hidden="true" />
          <label htmlFor="restaurant-menu-search" className="sr-only">{t(currentLang, 'searchAllMenus')}</label>
          <input id="restaurant-menu-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t(currentLang, 'searchAllMenusForADish')} className="w-full bg-[#FBF8EE] border border-[#DECFA5] rounded-full pl-11 pr-12 py-3 text-sm outline-none focus:ring-2 focus:ring-[#68734A]" />
          {query && <button onClick={() => setQuery('')} aria-label={t(currentLang, 'clearSearch')} className="absolute right-3 top-1/2 -translate-y-1/2 p-2"><X className="w-4 h-4" /></button>}
        </div>

        {!search && <nav className="menu-category-nav sticky top-[64px] z-20 bg-[#FAF5E8]/95 backdrop-blur-md py-3 border-y border-[#DECFA5] mb-8" aria-label={t(currentLang, 'menuCategories')}>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {[{ id: 'all', title: { ...UI_MESSAGES.allCategories } }, ...menu.groups].map((group) => <button key={group.id} aria-pressed={activeCategory === group.id} onClick={() => { setActiveCategory(group.id); if (group.id !== 'all') setOpenCategories((previous) => ({ ...previous, [`${menu.id}-${group.id}`]: true })); }} className={`rounded-full px-4 py-2 text-xs sm:text-sm whitespace-nowrap border transition-colors ${activeCategory === group.id ? 'bg-[#C85A32] text-white border-[#C85A32]' : 'bg-[#FBF8EE] text-[#524B3A] border-[#DECFA5] hover:border-[#C85A32]'}`}>{group.title[currentLang]}</button>)}
          </div>
        </nav>}

        <p role="status" aria-live="polite" className="text-xs text-[#766C58] mb-8">{search ? t(currentLang, 'searchResults', { query: query.trim(), count }) : menu.subtitle[currentLang]}</p>

        {!search && count > 0 && <div className="flex flex-wrap gap-4 mb-6 text-xs font-semibold text-[#68734A]">
          <button type="button" onClick={() => setOpenCategories((previous) => ({ ...previous, ...Object.fromEntries(results.flatMap((entry) => entry.groups.map((group) => [`${entry.id}-${group.id}`, true]))) }))} className="hover:text-[#C85A32] underline underline-offset-4">{t(currentLang, 'expandCategories')}</button>
          <button type="button" onClick={() => setOpenCategories((previous) => ({ ...previous, ...Object.fromEntries(results.flatMap((entry) => entry.groups.map((group) => [`${entry.id}-${group.id}`, false]))) }))} className="hover:text-[#C85A32] underline underline-offset-4">{t(currentLang, 'collapseCategories')}</button>
        </div>}
        <div className="space-y-8">
          {results.map((entry) => <div key={entry.id} className="space-y-10">
            {search && <h3 className="font-serif text-2xl border-b border-[#DECFA5] pb-4">{entry.title[currentLang]}</h3>}
            {entry.groups.map((group, index) => {
              const key = `${entry.id}-${group.id}`;
              const isOpen = Boolean(search) || Boolean(openCategories[key]);
              const panelId = `menu-panel-${key}`;
              return <section key={group.id} aria-labelledby={`menu-heading-${key}`} className="border-b border-[#DECFA5]">
              <h3 id={`menu-heading-${key}`}>
                <button type="button" aria-expanded={isOpen} aria-controls={panelId} aria-disabled={Boolean(search)} onClick={() => { if (!search) setOpenCategories((previous) => ({ ...previous, [key]: !previous[key] })); }} className="w-full text-left flex items-center gap-3 sm:gap-4 py-5 text-[#2F3529] hover:text-[#C85A32] transition-colors focus-visible:outline-2 focus-visible:outline-[#C85A32] focus-visible:outline-offset-4">
                  <span className="text-xs tracking-widest text-[#A58950] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-xl sm:text-3xl flex-1">{group.title[currentLang]}</span>
                  <span className="text-xs text-[#8A7654] tabular-nums">{group.items.length}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </h3>
              <div id={panelId} hidden={!isOpen} className="pb-6">
              {group.note && <p className="mb-5 text-sm italic text-[#6B604B]">{group.note[currentLang]}</p>}
              <ul className="grid md:grid-cols-2 gap-x-12 list-none">
                {group.items.map((item) => <li key={item.id} className="border-b border-[#DECFA5]/70 py-5">
                  <h4 className="font-serif text-lg sm:text-xl leading-snug text-[#201E19]">{item.name[currentLang]}</h4>
                  {item.name[currentLang] !== item.name[currentLang === 'en' ? 'tr' : 'en'] && <p lang={currentLang === 'en' ? 'tr' : 'en'} className="text-xs mt-1 text-[#8A7654]">{item.name[currentLang === 'en' ? 'tr' : 'en']}</p>}
                  {item.description[currentLang] && <p className="text-sm leading-relaxed text-[#625A49] mt-2">{item.description[currentLang]}</p>}
                </li>)}
              </ul>
              </div>
            </section>; })}
          </div>)}
        </div>
        {count === 0 && <div className="text-center py-16 rounded-2xl border border-[#DECFA5] bg-[#F5EDD6]"><Coffee className="mx-auto mb-4 text-[#68734A]" aria-hidden="true" /><p>{t(currentLang, 'noItemsMatchYourSearch')}</p><button onClick={() => { setQuery(''); setActiveCategory('all'); }} className="mt-4 text-[#C85A32] underline underline-offset-4">{t(currentLang, 'backToTheMenu')}</button></div>}
        <p className="mt-12 pt-6 border-t border-[#DECFA5] text-xs leading-relaxed text-[#766C58]">{t(currentLang, 'pleaseInformOurTeamOfAny')}</p>
      </div>
    </section>
  );
};
