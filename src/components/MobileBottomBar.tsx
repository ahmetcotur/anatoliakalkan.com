import React from 'react';
import { Phone, MessageCircle, Utensils, Calendar } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileBottomBarProps {
  currentLang: Language;
  onOpenReservation: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currentLang,
  onOpenReservation,
}) => {
  const whatsappMessage = encodeURIComponent(
    currentLang === 'tr'
      ? 'Merhaba Anatolia Food & Drink, masa rezervasyonu için yazıyorum.'
      : 'Hello Anatolia Food & Drink, I would like to make a table reservation.'
  );

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F6ECC8]/95 backdrop-blur-md border-t border-[#DECFA5] px-2 py-2 shadow-[0_-4px_20px_rgba(45,35,15,0.12)]">
      <div className="grid grid-cols-4 gap-1 items-center max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#3E382A] hover:text-[#201E19] hover:bg-[#FAF4DC] active:bg-[#EDE1B7] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#C85A32] mb-1" />
          <span className="text-[10px] font-semibold leading-none">
            {currentLang === 'tr' ? 'Ara' : 'Call'}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#3E382A] hover:text-[#201E19] hover:bg-[#FAF4DC] active:bg-[#EDE1B7] transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-1" />
          <span className="text-[10px] font-semibold leading-none">WhatsApp</span>
        </a>

        {/* Menu Anchor */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#3E382A] hover:text-[#201E19] hover:bg-[#FAF4DC] active:bg-[#EDE1B7] transition-colors"
        >
          <Utensils className="w-4 h-4 text-[#C85A32] mb-1" />
          <span className="text-[10px] font-semibold leading-none">
            {currentLang === 'tr' ? 'Menü' : 'Menu'}
          </span>
        </a>

        {/* Reserve Action Button */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#C85A32] text-white hover:bg-[#B34D28] active:scale-95 transition-all shadow-xs"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold leading-none">
            {currentLang === 'tr' ? 'Ayırt' : 'Book'}
          </span>
        </button>

      </div>
    </div>
  );
};
