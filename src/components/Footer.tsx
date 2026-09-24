import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ExternalLink, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { AnatoliaFullLogo } from './AnatoliaLogo';

interface FooterProps {
  currentLang: Language;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1814] text-[#D8CFBC] pt-16 pb-28 md:pb-16 border-t border-[#DECFA5]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#DECFA5]/20">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <AnatoliaFullLogo variant="white" size="md" className="items-start text-left" />
            </div>

            <p className="text-sm text-[#BFB39B] font-light leading-relaxed max-w-sm">
              {currentLang === 'tr'
                ? "Kalkan Şehitler Caddesi'nde iyi yemek, özenli kokteyller ve acele ettirmeyen samimi bir Akdeniz masası."
                : 'Thoughtfully prepared food, craft cocktails and an unhurried Mediterranean table on Şehitler Street, Kalkan.'}
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#FAF4DC]/10 hover:bg-[#C85A32] text-[#FAF4DC] hover:text-white flex items-center justify-center transition-colors border border-[#DECFA5]/20"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#FAF4DC]/10 hover:bg-[#C85A32] text-[#FAF4DC] hover:text-white flex items-center justify-center transition-colors border border-[#DECFA5]/20"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.socials.tripadvisorPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-9 rounded-xl bg-[#FAF4DC]/10 hover:bg-[#C85A32] text-xs text-[#FAF4DC] hover:text-white flex items-center gap-1.5 transition-colors border border-[#DECFA5]/20"
                title="Tripadvisor Kaydı"
              >
                <span>Tripadvisor</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={RESTAURANT_INFO.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-9 rounded-xl bg-[#FAF4DC]/10 hover:bg-[#C85A32] text-xs text-[#FAF4DC] hover:text-white flex items-center gap-1.5 transition-colors border border-[#DECFA5]/20"
                title="Google Haritalar"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF4DC]">
              {currentLang === 'tr' ? 'Keşfedin' : 'Explore'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-[#FAF4DC] transition-colors">
                  {currentLang === 'tr' ? 'Menümüz' : 'Our Menu'}
                </a>
              </li>
              <li>
                <a href="#cocktails" className="hover:text-[#FAF4DC] transition-colors">
                  {currentLang === 'tr' ? 'İmza Kokteyller' : 'Signature Cocktails'}
                </a>
              </li>
              <li>
                <a href="#atmosphere" className="hover:text-[#FAF4DC] transition-colors">
                  {currentLang === 'tr' ? 'Mekân & Atmosfer' : 'The Space'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FAF4DC] transition-colors">
                  {currentLang === 'tr' ? 'Fotoğraf Galerisi' : 'Photo Gallery'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF4DC] transition-colors">
                  {currentLang === 'tr' ? 'Hakkımızda' : 'Our Story'}
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#FAF4DC] transition-colors">
                  {currentLang === 'tr' ? 'Ulaşım & İletişim' : 'Location & Hours'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF4DC]">
              {currentLang === 'tr' ? 'İletişim & Konum' : 'Contact & Visit'}
            </h4>
            <div className="space-y-2 text-xs text-[#BFB39B]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-[#FAF4DC] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-[#FAF4DC] transition-colors">
                  {RESTAURANT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                <span>{RESTAURANT_INFO.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Reservation CTA (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF4DC]">
              {currentLang === 'tr' ? 'Rezervasyon' : 'Reservations'}
            </h4>
            <p className="text-xs text-[#9E937D] font-light">
              {currentLang === 'tr'
                ? 'Akşam saatleri için teras masalarınızı önceden ayırtabilirsiniz.'
                : 'Book ahead to secure your preferred table for dinner.'}
            </p>
            <button
              onClick={onOpenReservation}
              className="w-full py-2.5 px-3 rounded-xl bg-[#C85A32] hover:bg-[#B34D28] text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer shadow-[#C85A32]/25"
            >
              {currentLang === 'tr' ? 'Masa Ayırt' : 'Book a Table'}
            </button>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C826D]">
          <div>
            © {new Date().getFullYear()} {RESTAURANT_INFO.brandName}. {currentLang === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Kalkan · Kaş / Antalya</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>{currentLang === 'tr' ? 'Başa Dön' : 'Back to top'}</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
