import { t, LOCALES } from '../i18n';
import React, { useEffect, useState } from 'react';
import { X, Calendar, Clock, Users, Phone, CheckCircle, MessageCircle, Utensils } from 'lucide-react';
import { Language, ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  const [formData, setFormData] = useState<ReservationData>({
    fullName: '',
    phone: '',
    email: '',
    date: today,
    time: '19:30',
    guests: 2,
    seatingPreference: 'terrace',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { if (!isOpen) setSubmitted(false); }, [isOpen]);
  const formatDate = (date: string) => new Intl.DateTimeFormat(LOCALES[currentLang], { dateStyle: 'long' }).format(new Date(`${date}T12:00:00`));

  if (!isOpen) return null;

  const timeSlots = [
    '09:30', '10:30', '11:30', '12:30', '13:30', '14:30',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    const seatingLabel =
      formData.seatingPreference === 'terrace'
        ? t(currentLang, 'outdoorTerrace')
        : formData.seatingPreference === 'indoor'
        ? t(currentLang, 'indoorDining')
        : t(currentLang, 'noPreference');

    const message = [
      t(currentLang, 'reservationIntro'), '',
      `👤 ${t(currentLang, 'reservationName')}: ${formData.fullName}`,
      `📞 ${t(currentLang, 'reservationPhone')}: ${formData.phone}`,
      `📅 ${t(currentLang, 'reservationDate')}: ${formatDate(formData.date)}`,
      `⏰ ${t(currentLang, 'reservationTime')}: ${formData.time}`,
      `👥 ${t(currentLang, 'reservationGuests')}: ${formData.guests}`,
      `🌿 ${t(currentLang, 'reservationSeating')}: ${seatingLabel}`,
      ...(formData.specialRequests ? [`📝 ${t(currentLang, 'reservationNote')}: ${formData.specialRequests}`] : []),
    ].join('\n');

    const waUrl = `https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        role="dialog" aria-modal="true" aria-labelledby="reservation-heading"
        className="bg-[#FAF5E8] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#DECFA5] relative max-h-[90vh] overflow-y-auto text-[#201E19]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EDE1B7] hover:bg-[#DECFA5] flex items-center justify-center text-[#201E19] transition-colors cursor-pointer"
          aria-label={t(currentLang, 'close')}
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold">
                Anatolia Food &amp; Drink · Kalkan
              </span>
              <h2 id="reservation-heading" className="text-2xl sm:text-3xl font-serif font-semibold text-[#201E19]">
                {t(currentLang, 'bookATable4')}
              </h2>
              <p className="text-xs sm:text-sm text-[#524B3A] font-normal">
                {t(currentLang, 'yourRequestWillBeSentDirectly')}
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="reservation-full-name" className="block text-xs font-semibold text-[#201E19] mb-1">
                    {t(currentLang, 'fullName')}
                  </label>
                  <input
                    type="text"
                    required
                    id="reservation-full-name"
                    onInvalid={(e) => e.currentTarget.setCustomValidity(t(currentLang, 'requiredName'))}
                    onInput={(e) => e.currentTarget.setCustomValidity('')}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t(currentLang, 'eGJohnDoe')}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF4DC] border border-[#DECFA5] text-[#201E19] placeholder-[#8C7D64] focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="reservation-phone" className="block text-xs font-semibold text-[#201E19] mb-1">
                    {t(currentLang, 'phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    required
                    id="reservation-phone"
                    onInvalid={(e) => e.currentTarget.setCustomValidity(t(currentLang, 'requiredPhone'))}
                    onInput={(e) => e.currentTarget.setCustomValidity('')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF4DC] border border-[#DECFA5] text-[#201E19] placeholder-[#8C7D64] focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
                  />
                </div>
              </div>

              {/* Date, Time & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="reservation-date" className="block text-xs font-semibold text-[#201E19] mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>{t(currentLang, 'date')}</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={today}
                    id="reservation-date"
                    onInvalid={(e) => e.currentTarget.setCustomValidity(t(currentLang, 'requiredDate'))}
                    onInput={(e) => e.currentTarget.setCustomValidity('')}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF4DC] border border-[#DECFA5] text-[#201E19] focus:border-[#C85A32] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="reservation-time" className="block text-xs font-semibold text-[#201E19] mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>{t(currentLang, 'time')}</span>
                  </label>
                  <select
                    id="reservation-time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF4DC] border border-[#DECFA5] text-[#201E19] focus:border-[#C85A32] outline-none"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="reservation-guests" className="block text-xs font-semibold text-[#201E19] mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>{t(currentLang, 'guests')}</span>
                  </label>
                  <select
                    id="reservation-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF4DC] border border-[#DECFA5] text-[#201E19] focus:border-[#C85A32] outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map((num) => (
                      <option key={num} value={num}>
                        {num} {t(currentLang, 'guests')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs font-semibold text-[#201E19] mb-1.5">
                  {t(currentLang, 'seatingPreference')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, seatingPreference: 'terrace' })}
                    className={`py-2 px-2 text-xs rounded-xl border font-semibold transition-all cursor-pointer ${
                      formData.seatingPreference === 'terrace'
                        ? 'border-[#C85A32] bg-[#EFE3BE] text-[#C85A32]'
                        : 'border-[#DECFA5] bg-[#FAF4DC] text-[#524B3A] hover:bg-[#EDE1B7]'
                    }`}
                  >
                    {t(currentLang, 'terrace')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, seatingPreference: 'indoor' })}
                    className={`py-2 px-2 text-xs rounded-xl border font-semibold transition-all cursor-pointer ${
                      formData.seatingPreference === 'indoor'
                        ? 'border-[#C85A32] bg-[#EFE3BE] text-[#C85A32]'
                        : 'border-[#DECFA5] bg-[#FAF4DC] text-[#524B3A] hover:bg-[#EDE1B7]'
                    }`}
                  >
                    {t(currentLang, 'indoor')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, seatingPreference: 'any' })}
                    className={`py-2 px-2 text-xs rounded-xl border font-semibold transition-all cursor-pointer ${
                      formData.seatingPreference === 'any'
                        ? 'border-[#C85A32] bg-[#EFE3BE] text-[#C85A32]'
                        : 'border-[#DECFA5] bg-[#FAF4DC] text-[#524B3A] hover:bg-[#EDE1B7]'
                    }`}
                  >
                    {t(currentLang, 'noPref')}
                  </button>
                </div>
              </div>

              {/* Special Note */}
              <div>
                <label htmlFor="reservation-notes" className="block text-xs font-semibold text-[#201E19] mb-1">
                  {t(currentLang, 'specialRequestOptional')}
                </label>
                <input
                  type="text"
                  id="reservation-notes"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder={
                    t(currentLang, 'eGBirthdayCelebrationHighChair')
                  }
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF4DC] border border-[#DECFA5] text-[#201E19] placeholder-[#8C7D64] focus:border-[#C85A32] outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {t(currentLang, 'sendRequestViaWhatsapp')}
                  </span>
                </button>

                <div className="text-center">
                  <span className="text-[11px] text-[#7A6F5A]">
                    {t(currentLang, 'orCallDirectly')}
                  </span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="block text-xs font-bold text-[#201E19] hover:text-[#C85A32] mt-0.5"
                  >
                    📞 {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-serif font-semibold text-[#201E19]">
              {t(currentLang, 'reservationOpened')}
            </h3>

            <p className="text-xs sm:text-sm text-[#524B3A] max-w-sm mx-auto leading-relaxed">
              {t(currentLang, 'reservationNextStep')}
            </p>

            <div className="p-4 rounded-xl bg-[#FAF4DC] border border-[#DECFA5] text-xs text-left space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-[#6B604B]">{t(currentLang, 'dateTime')}</span>
                <span className="font-semibold text-[#201E19]">{formatDate(formData.date)} · {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B604B]">{t(currentLang, 'guests2')}</span>
                <span className="font-semibold text-[#201E19]">{formData.guests} {t(currentLang, 'guests')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B604B]">{t(currentLang, 'contact')}</span>
                <span className="font-semibold text-[#201E19]">{formData.phone}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#201E19] text-[#FAF4DC] text-xs font-semibold hover:bg-[#343026] transition-colors shadow-2xs cursor-pointer"
              >
                {t(currentLang, 'done')}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
