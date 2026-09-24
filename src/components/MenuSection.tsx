import React, { useState, useMemo } from 'react';
import { Search, Utensils, Star, Flame, Sparkles, ChevronDown } from 'lucide-react';
import { Language, MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

interface MenuSectionProps {
  currentLang: Language;
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ currentLang, onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories: { id: MenuCategory; labelTr: string; labelEn: string }[] = [
    { id: 'all', labelTr: 'Tümü', labelEn: 'All Dishes' },
    { id: 'breakfast', labelTr: 'Kahvaltı & Brunch', labelEn: 'Breakfast & Brunch' },
    { id: 'mezze', labelTr: 'Meze & Başlangıç', labelEn: 'Mezzes & Starters' },
    { id: 'pizza_pide', labelTr: 'Taş Fırın & Pizza', labelEn: 'Stone Oven & Pizza' },
    { id: 'burgers_wraps', labelTr: 'Burger & Dürüm', labelEn: 'Burgers & Wraps' },
    { id: 'mains', labelTr: 'Izgaralar & Bonfile', labelEn: 'Grills & Steaks' },
    { id: 'seafood', labelTr: 'Deniz Ürünleri', labelEn: 'Fish & Seafood' },
    { id: 'desserts', labelTr: 'Ev Tatlıları', labelEn: 'Desserts' },
    { id: 'wine_drinks', labelTr: 'Şarap & İçecekler', labelEn: 'Wine & Refreshments' },
  ];

  // Accordion state: closed by default
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (catId: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    categories.forEach((c) => {
      if (c.id !== 'all') allOpen[c.id] = true;
    });
    setOpenCategories(allOpen);
  };

  const collapseAll = () => {
    setOpenCategories({});
  };

  const isCategoryOpen = (catId: string) => {
    // If searching or filtering by diet, automatically expand matching categories
    if (searchQuery.trim() !== '' || dietaryFilter !== 'all') return true;
    return Boolean(openCategories[catId]);
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Dietary match
      if (dietaryFilter !== 'all') {
        if (!item.dietary || !item.dietary.includes(dietaryFilter as any)) {
          return false;
        }
      }
      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const nameMatch =
          item.name.tr.toLowerCase().includes(query) ||
          item.name.en.toLowerCase().includes(query);
        const descMatch =
          item.description.tr.toLowerCase().includes(query) ||
          item.description.en.toLowerCase().includes(query);
        const ingMatch =
          item.ingredients?.tr.toLowerCase().includes(query) ||
          item.ingredients?.en.toLowerCase().includes(query);
        return nameMatch || descMatch || Boolean(ingMatch);
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FAF5E8] text-[#201E19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#DECFA5]">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold mb-2 flex items-center gap-2">
              <Utensils className="w-3.5 h-3.5" />
              <span>{currentLang === 'tr' ? 'Seçkin Mutfak' : 'Culinary Selection'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-[#201E19] text-balance">
              {currentLang === 'tr' ? 'Menümüz' : 'Our Menu'}
            </h2>
            <p className="mt-2 text-[#524B3A] text-sm sm:text-base font-normal max-w-xl">
              {currentLang === 'tr'
                ? "Sabah köy kahvaltısından odun ateşinde taş fırın lezzetlerine, taze mezelerden kömürde ızgaraya uzanan lezzetler."
                : 'From slow-baked stone oven creations and morning village spreads to fresh coastal mezze and ember-grilled mains.'}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B34D28] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm shadow-[#C85A32]/20 cursor-pointer"
            >
              {currentLang === 'tr' ? 'Masa Ayırt' : 'Reserve Table'}
            </button>
          </div>
        </div>

        {/* Search + Dietary Filters in Normal Section Flow */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 p-3 rounded-2xl bg-[#FAF4DC] border border-[#DECFA5]">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#8C7D64] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                currentLang === 'tr'
                  ? 'Yemek, malzeme veya içerik ara...'
                  : 'Search dish, ingredient or keyword...'
              }
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF5E8] border border-[#DECFA5] text-[#201E19] placeholder-[#8C7D64] focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7D64] hover:text-[#201E19]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dietary Filter Segmented Control */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto overflow-x-auto pb-0.5">
            <span className="text-xs text-[#6B604B] font-semibold mr-1 whitespace-nowrap">
              {currentLang === 'tr' ? 'Filtre:' : 'Dietary:'}
            </span>
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                dietaryFilter === 'all'
                  ? 'bg-[#EFE3BE] text-[#201E19] font-bold border border-[#DECFA5]'
                  : 'text-[#524B3A] hover:text-[#201E19] bg-[#FAF5E8]'
              }`}
            >
              {currentLang === 'tr' ? 'Hepsi' : 'All'}
            </button>
            <button
              onClick={() => setDietaryFilter('vegetarian')}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                dietaryFilter === 'vegetarian'
                  ? 'bg-[#EFE3BE] text-[#201E19] font-bold border border-[#DECFA5]'
                  : 'text-[#524B3A] hover:text-[#201E19] bg-[#FAF5E8]'
              }`}
            >
              {currentLang === 'tr' ? 'Vejetaryen' : 'Vegetarian'}
            </button>
            <button
              onClick={() => setDietaryFilter('gluten-free')}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                dietaryFilter === 'gluten-free'
                  ? 'bg-[#EFE3BE] text-[#201E19] font-bold border border-[#DECFA5]'
                  : 'text-[#524B3A] hover:text-[#201E19] bg-[#FAF5E8]'
              }`}
            >
              {currentLang === 'tr' ? 'Glütensiz' : 'Gluten-Free'}
            </button>
            <button
              onClick={() => setDietaryFilter('chef-choice')}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                dietaryFilter === 'chef-choice'
                  ? 'bg-[#EFE3BE] text-[#201E19] font-bold border border-[#DECFA5]'
                  : 'text-[#524B3A] hover:text-[#201E19] bg-[#FAF5E8]'
              }`}
            >
              {currentLang === 'tr' ? 'Şefin Seçimi' : "Chef's Choice"}
            </button>
          </div>
        </div>

        {/* Sticky Category Navigation Bar - Slim & Lightweight */}
        <div className="sticky top-[54px] sm:top-[64px] z-30 py-2.5 bg-[#FAF5E8]/95 backdrop-blur-md border-y border-[#DECFA5]/80 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-8 transition-all shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    if (cat.id !== 'all') {
                      setOpenCategories((prev) => ({ ...prev, [cat.id]: true }));
                      setTimeout(() => {
                        const targetEl = document.getElementById(`cat-accordion-${cat.id}`);
                        if (targetEl) {
                          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 40);
                    } else {
                      const menuEl = document.getElementById('menu-content-start');
                      if (menuEl) {
                        menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#201E19] text-[#FAF4DC] shadow-sm font-semibold scale-[1.02]'
                      : 'bg-[#FAF4DC] text-[#423C2D] hover:text-[#201E19] border border-[#DECFA5] hover:bg-[#EDE1B7]'
                  }`}
                >
                  {currentLang === 'tr' ? cat.labelTr : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scroll anchor for smooth jump with proper offset */}
        <div id="menu-content-start" className="scroll-mt-36" />

        {/* Menu Items: Accordion by Default */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-[#FAF4DC] rounded-2xl border border-[#DECFA5]">
            <Utensils className="w-8 h-8 text-[#8C7D64] mx-auto mb-3" />
            <p className="text-[#524B3A] font-medium text-sm">
              {currentLang === 'tr'
                ? 'Aradığınız kriterlere uygun lezzet bulunamadı.'
                : 'No dishes found matching your current filter.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-3 text-xs text-[#C84B31] font-semibold underline underline-offset-4 cursor-pointer"
            >
              {currentLang === 'tr' ? 'Filtreleri Temizle' : 'Reset Filters'}
            </button>
          </div>
        ) : activeCategory === 'all' && searchQuery.trim() === '' ? (
          /* Accordion List for All Categories (Closed by Default) */
          <div className="space-y-4">
            {/* Quick Accordion Controls: Expand / Collapse All */}
            <div className="flex items-center justify-between px-1 pb-1">
              <span className="text-xs text-[#7A6F5A] font-medium">
                {currentLang === 'tr'
                  ? 'Kategoriye dokunarak lezzetleri açıp kapatabilirsiniz'
                  : 'Tap any category to view or collapse dishes'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={expandAll}
                  className="text-xs text-[#C85A32] hover:text-[#B34D28] font-semibold underline underline-offset-2 cursor-pointer"
                >
                  {currentLang === 'tr' ? 'Tümünü Aç' : 'Expand All'}
                </button>
                <span className="text-[#DECFA5]">|</span>
                <button
                  onClick={collapseAll}
                  className="text-xs text-[#7A6F5A] hover:text-[#201E19] font-medium cursor-pointer"
                >
                  {currentLang === 'tr' ? 'Tümünü Kapat' : 'Collapse All'}
                </button>
              </div>
            </div>

            {categories
              .filter((c) => c.id !== 'all')
              .map((cat) => {
                const catItems = filteredItems.filter((i) => i.category === cat.id);
                if (catItems.length === 0) return null;
                const isOpen = isCategoryOpen(cat.id);

                return (
                  <div
                    key={cat.id}
                    id={`cat-accordion-${cat.id}`}
                    className="scroll-mt-32 rounded-2xl bg-[#FAF4DC] border border-[#DECFA5] overflow-hidden transition-all duration-200 shadow-2xs"
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full px-4 sm:px-6 py-3.5 sm:py-4.5 flex items-center justify-between text-left hover:bg-[#F3E7C4] transition-colors cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            isOpen ? 'bg-[#C85A32]' : 'bg-[#DECFA5]'
                          }`}
                        />
                        <h3 className="font-serif text-base sm:text-2xl font-semibold text-[#201E19]">
                          {currentLang === 'tr' ? cat.labelTr : cat.labelEn}
                        </h3>
                        <span className="text-[11px] sm:text-xs font-semibold text-[#7A6F5A] px-2 sm:px-2.5 py-0.5 rounded-full bg-[#EFE3BE] border border-[#DECFA5]">
                          {catItems.length} {currentLang === 'tr' ? 'Çeşit' : 'Items'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-[#7A6F5A]">
                        <span className="text-xs font-medium hidden sm:inline">
                          {isOpen
                            ? currentLang === 'tr'
                              ? 'Kapat'
                              : 'Collapse'
                            : currentLang === 'tr'
                            ? 'Menüyü Gör'
                            : 'View Items'}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-[#C85A32] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Accordion Body: 2-Column Grid on Mobile */}
                    {isOpen && (
                      <div className="p-2.5 sm:p-6 pt-1 sm:pt-2 border-t border-[#DECFA5]/60 bg-[#FAF5E8]/60">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-6">
                          {catItems.map((item) => (
                            <div
                              key={item.id}
                              onClick={() => setSelectedItem(item)}
                              className="bg-[#FAF4DC] rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-[#DECFA5] hover:border-[#C85A32]/60 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-2xs"
                            >
                              <div className="space-y-1 sm:space-y-2">
                                <div className="space-y-0.5 sm:space-y-1">
                                  <h4 className="font-serif text-xs sm:text-base lg:text-lg font-semibold text-[#201E19] group-hover:text-[#C85A32] transition-colors leading-snug line-clamp-2">
                                    {item.name[currentLang]}
                                  </h4>
                                  <div className="flex flex-wrap items-center gap-1 text-[10px] sm:text-xs text-[#6B604B] font-normal">
                                    {item.dietary?.includes('vegetarian') && (
                                      <span className="px-1.5 py-0.5 rounded bg-[#EFE3BE]/80 border border-[#DECFA5]/60">
                                        {currentLang === 'tr' ? 'Vejetaryen' : 'Veg'}
                                      </span>
                                    )}
                                    {item.dietary?.includes('gluten-free') && (
                                      <span className="px-1.5 py-0.5 rounded bg-[#EFE3BE]/80 border border-[#DECFA5]/60">
                                        {currentLang === 'tr' ? 'Glütensiz' : 'GF'}
                                      </span>
                                    )}
                                    {item.popular && (
                                      <span className="text-[#C85A32] font-semibold">
                                        ★ {currentLang === 'tr' ? 'Öne Çıkan' : 'Favorite'}
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <p className="text-[11px] sm:text-sm text-[#4E4738] leading-snug sm:leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                                  {item.description[currentLang]}
                                </p>
                              </div>

                              <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#DECFA5]/60 flex items-center justify-between text-[10px] sm:text-xs text-[#7A6F5A]">
                                <span className="group-hover:text-[#201E19] transition-colors font-medium">
                                  {item.ingredients ? (currentLang === 'tr' ? 'İçindekiler' : 'Ingredients') : ''}
                                </span>
                                <span className="text-[#C85A32] text-[10px] sm:text-[11px] font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                                  {currentLang === 'tr' ? 'Detay →' : 'Details →'}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          /* Focused single category or search results: Also 2-Column Grid on Mobile */
          <div className="space-y-6">
            {activeCategory !== 'all' && (
              <div className="flex items-center justify-between pb-3 border-b border-[#DECFA5]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]" />
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#201E19]">
                    {categories.find((c) => c.id === activeCategory)?.[currentLang === 'tr' ? 'labelTr' : 'labelEn']}
                  </h3>
                  <span className="text-xs font-semibold text-[#7A6F5A] px-2.5 py-0.5 rounded-full bg-[#EFE3BE] border border-[#DECFA5]">
                    {filteredItems.length} {currentLang === 'tr' ? 'Çeşit' : 'Items'}
                  </span>
                </div>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="text-xs text-[#C85A32] font-semibold hover:underline cursor-pointer"
                >
                  {currentLang === 'tr' ? '← Tüm Kategorileri Göster' : '← Show All Categories'}
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="bg-[#FAF4DC] rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-[#DECFA5] hover:border-[#C85A32]/60 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-2xs"
                >
                  <div className="space-y-1 sm:space-y-2">
                    <div className="space-y-0.5 sm:space-y-1">
                      <h4 className="font-serif text-xs sm:text-base lg:text-lg font-semibold text-[#201E19] group-hover:text-[#C85A32] transition-colors leading-snug line-clamp-2">
                        {item.name[currentLang]}
                      </h4>
                      <div className="flex flex-wrap items-center gap-1 text-[10px] sm:text-xs text-[#6B604B] font-normal">
                        {item.dietary?.includes('vegetarian') && (
                          <span className="px-1.5 py-0.5 rounded bg-[#EFE3BE]/80 border border-[#DECFA5]/60">
                            {currentLang === 'tr' ? 'Vejetaryen' : 'Veg'}
                          </span>
                        )}
                        {item.dietary?.includes('gluten-free') && (
                          <span className="px-1.5 py-0.5 rounded bg-[#EFE3BE]/80 border border-[#DECFA5]/60">
                            {currentLang === 'tr' ? 'Glütensiz' : 'GF'}
                          </span>
                        )}
                        {item.popular && (
                          <span className="text-[#C85A32] font-semibold">
                            ★ {currentLang === 'tr' ? 'Öne Çıkan' : 'Favorite'}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-[11px] sm:text-sm text-[#4E4738] leading-snug sm:leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                      {item.description[currentLang]}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#DECFA5]/60 flex items-center justify-between text-[10px] sm:text-xs text-[#7A6F5A]">
                    <span className="group-hover:text-[#201E19] transition-colors font-medium">
                      {item.ingredients ? (currentLang === 'tr' ? 'İçindekiler' : 'Ingredients') : ''}
                    </span>
                    <span className="text-[#C85A32] text-[10px] sm:text-[11px] font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                      {currentLang === 'tr' ? 'Detay →' : 'Details →'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Menu Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF4DC] border border-[#DECFA5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#524B3A] shadow-2xs">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#C85A32] shrink-0" />
            <span>
              {currentLang === 'tr'
                ? 'Tüm yemeklerimiz sipariş anında taze olarak hazırlanır. Alerjen ve gıda hassasiyetlerinizi lütfen servis personelimize belirtiniz.'
                : 'All dishes are freshly prepared upon order. Please inform our team of any food sensitivities or allergies.'}
            </span>
          </div>
          <button
            onClick={onOpenReservation}
            className="shrink-0 px-4 py-2 rounded-lg bg-[#C84B31] text-white font-medium hover:bg-[#D95338] transition-colors whitespace-nowrap cursor-pointer"
          >
            {currentLang === 'tr' ? 'Rezervasyon Yap' : 'Book a Table'}
          </button>
        </div>

      </div>

      {/* Modal for Item Details */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 text-sm font-semibold"
            >
              ✕
            </button>

            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C84B31] font-semibold">
                  Anatolia Food & Drink
                </span>
                <h3 className="text-2xl font-serif font-medium text-[#0B1B2B] mt-1">
                  {selectedItem.name[currentLang]}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedItem.description[currentLang]}
              </p>

              {selectedItem.ingredients && (
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFE8DE] space-y-1">
                  <span className="text-xs font-semibold text-slate-700 block">
                    {currentLang === 'tr' ? 'Öne Çıkan Malzemeler:' : 'Key Ingredients:'}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {selectedItem.ingredients[currentLang]}
                  </p>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Şehitler Cd. No: 41, Kalkan
                </span>
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenReservation();
                  }}
                  className="px-4 py-2 rounded-lg bg-[#C84B31] hover:bg-[#D95338] text-white text-xs font-medium transition-colors"
                >
                  {currentLang === 'tr' ? 'Masa Ayırt' : 'Book Table'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
