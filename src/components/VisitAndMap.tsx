import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Copy, Check, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface VisitAndMapProps {
  currentLang: Language;
  onOpenReservation: () => void;
}

export const VisitAndMap: React.FC<VisitAndMapProps> = ({ currentLang, onOpenReservation }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    currentLang === 'tr'
      ? 'Merhaba Anatolia Food & Drink, rezervasyon hakkında bilgi almak istiyorum.'
      : 'Hello Anatolia Food & Drink, I would like to inquire about a table reservation.'
  );

  return (
    <section id="visit" className="py-20 lg:py-28 bg-[#FAF5E8] text-[#201E19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold mb-2 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{currentLang === 'tr' ? 'Ulaşım & Ziyaret' : 'Location & Visit'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-[#201E19] text-balance">
            {currentLang === 'tr'
              ? 'Şehitler Caddesi’nde Bizi Ziyaret Edin'
              : 'Visit Us on Şehitler Street'}
          </h2>
          <p className="mt-3 text-[#524B3A] text-base sm:text-lg font-normal leading-relaxed">
            {currentLang === 'tr'
              ? "Kalkan merkezinde, Şehitler Caddesi üzerinde ferah bir buluşma noktası. Rezervasyon veya yol tarifi için bize dilediğiniz zaman ulaşabilirsiniz."
              : 'Conveniently located on Şehitler Street in central Kalkan. Reach out for table inquiries, directions, or walk right in.'}
          </p>
        </div>

        {/* 2-Column Grid: Contact/Hours + Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#FAF4DC] border border-[#DECFA5] space-y-3 shadow-2xs">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EFE3BE] flex items-center justify-center text-[#C85A32]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#201E19]">
                      {currentLang === 'tr' ? 'Mekân Adresi' : 'Address'}
                    </h3>
                    <p className="text-xs text-[#7A6F5A]">Kalkan / Kaş / Antalya</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-lg text-[#615641] hover:text-[#201E19] hover:bg-[#EDE1B7] transition-colors cursor-pointer"
                  title={currentLang === 'tr' ? 'Adresi Kopyala' : 'Copy Address'}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-sm text-[#3E382B] font-medium pl-10.5">
                {RESTAURANT_INFO.address}
              </p>

              <div className="pt-2 pl-10.5 flex flex-wrap items-center gap-2">
                <a
                  href={RESTAURANT_INFO.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C85A32] font-semibold hover:underline"
                >
                  <span>{currentLang === 'tr' ? 'Google Haritalar’da Aç' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {copied && (
                  <span className="text-[11px] text-emerald-600 font-medium">
                    ✓ {currentLang === 'tr' ? 'Kopyalandı' : 'Copied'}
                  </span>
                )}
              </div>
            </div>

            {/* Quick Contact & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#FAF4DC] border border-[#DECFA5] space-y-4 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EFE3BE] flex items-center justify-center text-[#C85A32]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#201E19]">
                    {currentLang === 'tr' ? 'Rezervasyon & İletişim' : 'Reservations & Phone'}
                  </h3>
                  <p className="text-xs text-[#7A6F5A]">Doğrudan Arama veya WhatsApp</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6ECC8] border border-[#DECFA5]">
                  <div className="flex items-center gap-2 text-xs text-[#201E19] font-semibold">
                    <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>{RESTAURANT_INFO.phone}</span>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#201E19] text-[#FAF4DC] hover:bg-[#343026] transition-colors shadow-2xs"
                  >
                    {currentLang === 'tr' ? 'Hemen Ara' : 'Call'}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6ECC8] border border-[#DECFA5]">
                  <div className="flex items-center gap-2 text-xs text-[#201E19] font-semibold">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </div>
                  <a
                    href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-2xs"
                  >
                    {currentLang === 'tr' ? 'Mesaj Gönder' : 'WhatsApp'}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6ECC8] border border-[#DECFA5]">
                  <div className="flex items-center gap-2 text-xs text-[#201E19] font-medium truncate max-w-[200px]">
                    <Mail className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span className="truncate">{RESTAURANT_INFO.email}</span>
                  </div>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#EDE1B7] text-[#201E19] hover:bg-[#DECFA5] transition-colors"
                  >
                    E-Posta
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Schedule */}
            <div className="p-6 rounded-2xl bg-[#FAF4DC] border border-[#DECFA5] space-y-3 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EFE3BE] flex items-center justify-center text-[#C85A32]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#201E19]">
                    {currentLang === 'tr' ? 'Hizmet Saatleri' : 'Service Hours'}
                  </h3>
                  <p className="text-xs text-[#7A6F5A]">Kahvaltı, Öğle & Akşam Servisi</p>
                </div>
              </div>

              <div className="divide-y divide-[#DECFA5]/60 text-xs text-[#4C4435] pt-1">
                {RESTAURANT_INFO.openingHoursStructured.map((slot, index) => (
                  <div key={index} className="py-1.5 flex items-center justify-between">
                    <span className="font-medium">
                      {currentLang === 'tr' ? slot.dayTr : slot.dayEn}
                    </span>
                    <span className="font-mono text-[#201E19] font-semibold tabular-nums">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Preview & Directions Card (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Visual Map Anchor Card */}
            <div className="rounded-2xl border border-[#DECFA5] bg-[#FAF4DC] p-6 sm:p-8 space-y-6 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C85A32] font-semibold">
                    Google Maps · Kaş / Antalya
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#201E19] mt-0.5">
                    Anatolia Food &amp; Drink
                  </h3>
                  <p className="text-xs text-[#6B604B]">
                    Şehitler Cd. No: 41, 07960 Kalkan
                  </p>
                </div>

                <a
                  href={RESTAURANT_INFO.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#201E19] hover:bg-[#343026] text-[#FAF4DC] text-xs font-semibold flex items-center gap-2 shadow-sm transition-colors whitespace-nowrap"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>{currentLang === 'tr' ? 'Yol Tarifi Al' : 'Get Directions'}</span>
                  <ExternalLink className="w-3 h-3 text-[#DECFA5]" />
                </a>
              </div>

              {/* Real Google Maps Embed */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#DECFA5] shadow-md bg-[#EFE3BE]">
                <iframe
                  title="Anatolia Food & Drink Google Maps"
                  src="https://maps.google.com/maps?q=Anatolia+Food+%26+Drink,+%C5%9Eehitler+Cd.+No:+41,+07960+Ka%C5%9F%2FAntalya&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Transportation & Parking Guidance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFE8DE]">
                  <strong className="text-slate-800 block mb-1">
                    {currentLang === 'tr' ? 'Yürüyüş Mesafesi:' : 'Walking Access:'}
                  </strong>
                  <span>
                    {currentLang === 'tr'
                      ? 'Kalkan çarşı ve sahil bandına sadece birkaç dakikalık keyifli yürüme mesafesindedir.'
                      : 'Just a few minutes leisurely walk from Kalkan harbor and central market.'}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFE8DE]">
                  <strong className="text-slate-800 block mb-1">
                    {currentLang === 'tr' ? 'Rezervasyon Önerisi:' : 'Booking Tip:'}
                  </strong>
                  <span>
                    {currentLang === 'tr'
                      ? 'Akşam servisi için teras masalarımızda önceden rezervasyon yaptırmanızı öneririz.'
                      : 'For evening dining on the terrace, advance reservation is recommended.'}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
