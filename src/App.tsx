import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SignboardShowcase } from './components/SignboardShowcase';
import { SignatureCocktails } from './components/SignatureCocktails';
import { MenuSection } from './components/MenuSection';
import { Atmosphere } from './components/Atmosphere';
import { Gallery } from './components/Gallery';
import { AboutSection } from './components/AboutSection';
import { VisitAndMap } from './components/VisitAndMap';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('tr');
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5E8] text-[#201E19]">
      {/* Top Bar Navigation */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Physical Signboard & Street Front Presence ("Tabela & Mekân Kimliği") */}
        <SignboardShowcase currentLang={currentLang} />

        {/* Signature Cocktails Spotlight (Anatolia Sunset, Mediterranean Breeze, etc.) */}
        <SignatureCocktails
          currentLang={currentLang}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Full Interactive Menu (Categorized, Searchable, Filterable) */}
        <MenuSection
          currentLang={currentLang}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Atmosphere & Space (Day vs. Evening Experience) */}
        <Atmosphere currentLang={currentLang} />

        {/* Photo Gallery with Lightbox */}
        <Gallery currentLang={currentLang} />

        {/* About & Philosophy */}
        <AboutSection currentLang={currentLang} />

        {/* Location, Map & Visit */}
        <VisitAndMap
          currentLang={currentLang}
          onOpenReservation={() => setIsReservationOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Mobile Sticky Quick Action Bar (<= 15% viewport height) */}
      <MobileBottomBar
        currentLang={currentLang}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}

