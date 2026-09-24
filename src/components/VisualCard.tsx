import React from 'react';

interface VisualCardProps {
  type: 'hero' | 'cocktail' | 'dish' | 'day-terrace' | 'evening-terrace' | 'pizza';
  title?: string;
  subtitle?: string;
  className?: string;
}

export const VisualCard: React.FC<VisualCardProps> = ({ type, title, subtitle, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl select-none ${className}`}>
      {type === 'hero' && (
        <div className="relative w-full h-full min-h-[480px] lg:min-h-[580px] flex flex-col justify-end p-8 md:p-14 text-white overflow-hidden group">
          {/* Real Terrace Night High-Res Photo */}
          <img
            src="/images/exterior/terrace-night.jpg"
            alt="Anatolia Food & Drink Terrace at Night"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle gradient vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#14120E] via-[#14120E]/55 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />

          {/* Vignette bottom content */}
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-[#FAF4DC]/20 backdrop-blur-md border border-[#DECFA5]/40 text-xs text-[#FAF4DC] tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse" />
              Kalkan · Şehitler Cd. No: 41
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#FAF4DC] leading-tight font-medium drop-shadow-md">
              Akdeniz Esintisi, Samimi Masa ve İmza Kokteyller
            </h2>
            <p className="mt-2 text-sm md:text-base text-[#EBE3D0] font-light max-w-lg drop-shadow-sm">
              Yenilenmiş ferah terasımızda, günün telaşından uzak, kendi ritminizde keyifli bir akşam.
            </p>
          </div>
        </div>
      )}

      {type === 'cocktail' && (
        <div className="relative w-full aspect-[4/3] flex flex-col justify-between p-6 text-white overflow-hidden group">
          <img
            src="/images/atmosphere/cocktail-toast.jpg"
            alt="Anatolia Signature Cocktails Toast"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="text-xs uppercase tracking-widest text-amber-200 font-medium px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              İmza Kokteyl / Signature
            </span>
            <span className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xs text-[#F2ECE4]">
              ✦
            </span>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/20">
            <div className="font-serif text-lg text-white font-medium drop-shadow-sm">{title || 'Anatolia Sunset'}</div>
            <div className="text-xs text-amber-100 font-light drop-shadow-sm">{subtitle || 'Cin · Bergamot · Taze Nar · Biberiye'}</div>
          </div>
        </div>
      )}

      {type === 'dish' && (
        <div className="relative w-full aspect-[4/3] flex flex-col justify-between p-6 text-white overflow-hidden group">
          <img
            src="/images/atmosphere/wine-dinner.jpg"
            alt="Akdeniz Sofrası ve Akşam Yemeği"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="text-xs uppercase tracking-widest text-amber-200 font-medium px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              Akdeniz Mutfağı / Cuisine
            </span>
            <span className="text-xs text-amber-200 font-serif italic">Kalkan Masası</span>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/20">
            <div className="font-serif text-lg text-white font-medium drop-shadow-sm">{title || 'Kömür Ateşinde Levrek'}</div>
            <div className="text-xs text-amber-100 font-light drop-shadow-sm">{subtitle || 'Taze Ege Otları · Sızma Zeytinyağı · Köz Patates'}</div>
          </div>
        </div>
      )}

      {type === 'day-terrace' && (
        <div className="relative w-full aspect-[4/3] flex flex-col justify-between p-6 text-[#1A2530] overflow-hidden group">
          <img
            src="/images/exterior/terrace-day.jpg"
            alt="Anatolia Gündüz Terası"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A13]/90 via-[#1F1A13]/30 to-black/20" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="text-xs uppercase tracking-wider text-amber-200 font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              Gündüz Avlusu · 09:00 - 18:00
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/90 text-[#423C2D] font-semibold">
              Ferah & Gölgeli
            </span>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/20 text-white">
            <div className="font-serif text-xl font-medium drop-shadow-md">{title || 'Gölgede Kahvaltı & Taş Fırın'}</div>
            <div className="text-xs text-[#EAE2D8] font-normal drop-shadow-sm">{subtitle || 'Zengin Köy Kahvaltısı · Sıcak Pizzalar · Soğuk İçecekler'}</div>
          </div>
        </div>
      )}

      {type === 'evening-terrace' && (
        <div className="relative w-full aspect-[4/3] flex flex-col justify-between p-6 text-[#FAF5E8] overflow-hidden group">
          <img
            src="/images/atmosphere/terrace-dining-1.jpg"
            alt="Anatolia Akşam Terası ve Misafirler"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14120E]/90 via-[#14120E]/40 to-black/20" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="text-xs uppercase tracking-wider text-amber-200 font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              Akşam Buluşmaları · 18:00 - 00:00
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#FAF4DC]/90 text-[#201E19] font-semibold">
              Mum Işığı &amp; Sohbet
            </span>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/20 text-white">
            <div className="font-serif text-xl font-medium drop-shadow-md">{title || 'Uzun Akdeniz Akşamları'}</div>
            <div className="text-xs text-[#EAE2D8] font-light drop-shadow-sm">{subtitle || 'İmza Kokteyller · Kömürde Izgara · Kalkan Esintisi'}</div>
          </div>
        </div>
      )}

      {type === 'pizza' && (
        <div className="relative w-full aspect-[4/3] flex flex-col justify-between p-6 text-white overflow-hidden group">
          <img
            src="/images/brand/gridpost.jpg"
            alt="Taş Fırın ve Akdeniz Lezzetleri"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="text-xs uppercase tracking-widest text-amber-200 font-medium px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              Taş Fırın & Lezzet
            </span>
            <span className="text-xs text-amber-200 font-medium">Odun Ateşi</span>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/20">
            <div className="font-serif text-lg text-white font-medium drop-shadow-sm">{title || 'Taş Fırın Lezzetleri'}</div>
            <div className="text-xs text-amber-100 font-light drop-shadow-sm">{subtitle || 'Çıtır İtalyan Pizzalar & Taze Akdeniz Tabakları'}</div>
          </div>
        </div>
      )}
    </div>
  );
};
