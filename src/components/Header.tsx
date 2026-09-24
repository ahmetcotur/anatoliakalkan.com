import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: currentLang === 'tr' ? 'Menü' : 'Menu' },
    { href: '#cocktails', label: currentLang === 'tr' ? 'Kokteyller' : 'Cocktails' },
    { href: '#atmosphere', label: currentLang === 'tr' ? 'Mekân' : 'Atmosphere' },
    { href: '#gallery', label: currentLang === 'tr' ? 'Galeri' : 'Gallery' },
    { href: '#about', label: currentLang === 'tr' ? 'Hakkımızda' : 'About' },
    { href: '#visit', label: currentLang === 'tr' ? 'Ziyaret' : 'Visit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#F6ECC8]/95 backdrop-blur-md border-b border-[#DECFA5] py-3 shadow-[0_4px_20px_rgba(45,35,15,0.08)]'
          : 'bg-[#F6ECC8]/90 md:bg-[#F6ECC8]/80 md:backdrop-blur-sm border-b border-[#E5D5A6] py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Site Logo using the authentic transparent logo */}
          <a
            href="#"
            className="flex items-center transition-transform hover:scale-[1.02] duration-200"
            aria-label="Anatolia Food & Drink"
          >
            <img
              src="/images/brand/logo.png"
              alt="Anatolia Food & Drink"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#423C2D]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#201E19] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C85A32] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLang === 'tr' ? 'en' : 'tr')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#3B3527] hover:text-[#201E19] bg-[#FAF4DC] hover:bg-[#EDE1B7] border border-[#DECFA5] transition-colors whitespace-nowrap shadow-2xs"
              aria-label="Dil Değiştir / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>{currentLang === 'tr' ? 'EN' : 'TR'}</span>
            </button>

            {/* Quick Call desktop */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#3B3527] hover:text-[#201E19] border border-[#DECFA5] bg-[#FAF4DC] hover:bg-[#EDE1B7] transition-colors whitespace-nowrap shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            {/* Book Table Primary CTA */}
            <button
              onClick={onOpenReservation}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C85A32] hover:bg-[#B54A25] active:scale-[0.98] rounded-xl transition-all shadow-sm shadow-[#C85A32]/25 whitespace-nowrap cursor-pointer"
            >
              {currentLang === 'tr' ? 'Rezervasyon Yap' : 'Book a Table'}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#201E19] hover:bg-[#EDE1B7]"
              aria-label="Menüyü aç"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF4DC] border-b border-[#DECFA5] px-4 pt-3 pb-5 space-y-3 shadow-md">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-[#201E19] hover:bg-[#EDE1B7] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#DECFA5] flex items-center justify-between text-xs text-[#524B3A]">
            <span>Şehitler Cd. No: 41, Kalkan</span>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="text-[#C85A32] font-semibold underline underline-offset-2"
            >
              {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
