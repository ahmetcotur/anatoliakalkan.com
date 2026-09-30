import { t, UI_MESSAGES } from '../i18n';
import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface GalleryItem {
  id: string;
  src: string;
  category: 'terrace_exterior' | 'atmosphere' | 'cocktails_bar';
  title: {
    tr: string;
    en: string;
    ru: string;
  };
  subtitle: {
    tr: string;
    en: string;
    ru: string;
  };
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    src: '/images/gallery/signboard-day.jpg',
    category: 'terrace_exterior',
    title: { ...UI_MESSAGES.ehitlerStreetEntrance },
    subtitle: { ...UI_MESSAGES.historicStoneWallSign },
  },
  {
    id: 'g-2',
    src: '/images/gallery/terrace-evening.jpg',
    category: 'terrace_exterior',
    title: { ...UI_MESSAGES.twilightTerraceDining },
    subtitle: { ...UI_MESSAGES.candlelightWoodenTables },
  },
  {
    id: 'g-3',
    src: '/images/gallery/cocktail-cheers.jpg',
    category: 'cocktails_bar',
    title: { ...UI_MESSAGES.signatureCocktailsToast },
    subtitle: { ...UI_MESSAGES.artisanalBarMixology },
  },
  {
    id: 'g-4',
    src: '/images/gallery/terrace-diners-1.jpg',
    category: 'atmosphere',
    title: { ...UI_MESSAGES.warmEveningConversations },
    subtitle: { ...UI_MESSAGES.unhurriedCoastalDining },
  },
  {
    id: 'g-5',
    src: '/images/gallery/bar-cocktail-craft.jpg',
    category: 'cocktails_bar',
    title: { ...UI_MESSAGES.cocktailCraftBar },
    subtitle: { ...UI_MESSAGES.freshBotanicalIngredients },
  },
  {
    id: 'g-6',
    src: '/images/gallery/wine-and-friends.jpg',
    category: 'atmosphere',
    title: { ...UI_MESSAGES.wineDinnerGathering },
    subtitle: { ...UI_MESSAGES.memorableTableGatherings },
  },
  {
    id: 'g-7',
    src: '/images/gallery/signboard-night.jpg',
    category: 'terrace_exterior',
    title: { ...UI_MESSAGES.anatoliaByNight },
    subtitle: { ...UI_MESSAGES.illuminatedKalkanStreet },
  },
  {
    id: 'g-8',
    src: '/images/gallery/candlelit-night.jpg',
    category: 'atmosphere',
    title: { ...UI_MESSAGES.candlelitMediterraneanNight },
    subtitle: { ...UI_MESSAGES.ambientTerraceSetting },
  },
  {
    id: 'g-9',
    src: '/images/gallery/terrace-sunlight.jpg',
    category: 'terrace_exterior',
    title: { ...UI_MESSAGES.shadedDaytimeCourtyard },
    subtitle: { ...UI_MESSAGES.airyMorningBrunchSetup },
  },
  {
    id: 'g-10',
    src: '/images/gallery/dinner-gathering.jpg',
    category: 'atmosphere',
    title: { ...UI_MESSAGES.familyFriendsGathering },
    subtitle: { ...UI_MESSAGES.warmWelcomingSpirit },
  },
  {
    id: 'g-11',
    src: '/images/gallery/guest-toast.jpg',
    category: 'cocktails_bar',
    title: { ...UI_MESSAGES.sunsetToastsInKalkan },
    subtitle: { ...UI_MESSAGES.refreshingSummerCoolers },
  },
  {
    id: 'g-12',
    src: '/images/gallery/table-conversation.jpg',
    category: 'atmosphere',
    title: { ...UI_MESSAGES.delightfulDinnerExperience },
    subtitle: { ...UI_MESSAGES.mediterraneanFlavors },
  },
  {
    id: 'g-13',
    src: '/images/gallery/terrace-cozy.jpg',
    category: 'terrace_exterior',
    title: { ...UI_MESSAGES.timberPergolaStoneWall },
    subtitle: { ...UI_MESSAGES.kalkanHeritageArchitecture },
  },
  {
    id: 'g-14',
    src: '/images/gallery/smiling-guests.jpg',
    category: 'atmosphere',
    title: { ...UI_MESSAGES.smilesFondMemories },
    subtitle: { ...UI_MESSAGES.specialMomentsAtAnatolia },
  },
  {
    id: 'g-15',
    src: '/images/gallery/summer-night-drinks.jpg',
    category: 'cocktails_bar',
    title: { ...UI_MESSAGES.summerNightRefreshments },
    subtitle: { ...UI_MESSAGES.handcraftedDrinks },
  },
  {
    id: 'g-16',
    src: '/images/gallery/facade-stone.jpg',
    category: 'terrace_exterior',
    title: { ...UI_MESSAGES.historicStoneFacade },
    subtitle: { ...UI_MESSAGES.ehitlerStreetNo41 },
  },
];

interface GalleryProps {
  currentLang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'terrace_exterior' | 'atmosphere' | 'cocktails_bar'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: UI_MESSAGES.galleryAll },
    { id: 'terrace_exterior', label: UI_MESSAGES.galleryTerrace },
    { id: 'atmosphere', label: UI_MESSAGES.galleryEvening },
    { id: 'cocktails_bar', label: UI_MESSAGES.galleryCocktails },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F6ECC8] text-[#201E19] border-b border-[#DECFA5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#DECFA5]">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold mb-2 flex items-center gap-2">
              <Camera className="w-3.5 h-3.5" />
              <span>{t(currentLang, 'visualGallery')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-[#201E19]">
              {t(currentLang, 'momentsAtAnatolia')}
            </h2>
            <p className="mt-2 text-[#524B3A] text-sm sm:text-base font-normal max-w-xl">
              {t(currentLang, 'fromSunlitPergolaMorningsToCandlelit')}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#201E19] text-[#FAF4DC] shadow-sm font-semibold'
                    : 'bg-[#FAF4DC] text-[#423C2D] hover:text-[#201E19] border border-[#DECFA5] hover:bg-[#EDE1B7]'
                }`}
              >
                {cat.label[currentLang]}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#EAE2D8] border border-[#DECFA5] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title[currentLang]}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Title & Subtitle */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-serif text-sm sm:text-base font-semibold drop-shadow-sm leading-tight">
                  {item.title[currentLang]}
                </h3>
                <p className="text-[11px] text-amber-200 font-light mt-0.5 drop-shadow-xs">
                  {item.subtitle[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 select-none animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
              aria-label={t(currentLang, 'close')}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
              aria-label={t(currentLang, 'previous')}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
              aria-label={t(currentLang, 'next')}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Container */}
            <div
              className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title[currentLang]}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center text-white">
                <p className="font-serif text-lg font-medium">
                  {filteredItems[lightboxIndex].title[currentLang]}
                </p>
                <p className="text-xs text-amber-200 mt-1">
                  {filteredItems[lightboxIndex].subtitle[currentLang]}
                </p>
                <span className="text-[11px] text-white/50 mt-1 inline-block">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
