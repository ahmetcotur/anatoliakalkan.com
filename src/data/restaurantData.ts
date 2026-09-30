import { UI_MESSAGES } from '../i18n';
export const RESTAURANT_INFO = {
  brandName: 'Anatolia Food & Drink',
  tagline: {
    ...UI_MESSAGES.aGoodTableAGreatEvening,
  },
  heroSubtext: {
    ...UI_MESSAGES.joinUsForThoughtfullyPreparedFood,
  },
  aboutShort: {
    ...UI_MESSAGES.findUsOnEhitlerStreetFor,
  },
  aboutStory: {
    ...UI_MESSAGES.locatedOnEhitlerStreetWhereHistoric,
  },
  address: "Kalkan, Şehitler Cd. No: 41, 07960 Kaş/Antalya",
  phone: "+90 543 408 82 84",
  phoneRaw: "905434088284",
  email: "anatoliakalkan@gmail.com",
  openingHours: { tr: 'Her gün: 09.00 – 00.00', en: 'Daily: 09.00 – 00.00', ru: 'Ежедневно: 09:00 – 00:00' },
  openingHoursStructured: [
    { day: { tr: "Pazartesi", en: "Monday", ru: "Понедельник" }, hours: "09:00 – 00:00" },
    { day: { tr: "Salı", en: "Tuesday", ru: "Вторник" }, hours: "09:00 – 00:00" },
    { day: { tr: "Çarşamba", en: "Wednesday", ru: "Среда" }, hours: "09:00 – 00:00" },
    { day: { tr: "Perşembe", en: "Thursday", ru: "Четверг" }, hours: "09:00 – 00:00" },
    { day: { tr: "Cuma", en: "Friday", ru: "Пятница" }, hours: "09:00 – 00:00" },
    { day: { tr: "Cumartesi", en: "Saturday", ru: "Суббота" }, hours: "09:00 – 00:00" },
    { day: { tr: "Pazar", en: "Sunday", ru: "Воскресенье" }, hours: "09:00 – 00:00" },
  ],
  socials: {
    instagram: "https://www.instagram.com/anatoliakalkan/",
    facebook: "https://www.facebook.com/anatoliakalkan/",
    googleMaps: "https://share.google/BuPAalYPOC18KsQv9",
    tripadvisorPrimary: "https://www.tripadvisor.com.tr/Restaurant_Review-g297965-d34688854-Reviews-Anatolia_Food_Drink-Kas_Turkish_Mediterranean_Coast.html",
    tripadvisorSecondary: "https://www.tripadvisor.com.tr/Restaurant_Review-g297965-d34688609-Reviews-Anatolia_Food_Drink-Kas_Turkish_Mediterranean_Coast.html",
  }
};

export const ATMOSPHERE_POINTS = [
  {
    id: 'day',
    title: {
      ...UI_MESSAGES.daytimeAiryCalmShadedCourtyard
    },
    description: {
      ...UI_MESSAGES.takeARestfulPauseInThe
    },
    highlights: [
      { ...UI_MESSAGES.shadedPergolaCourtyardSeating },
      { ...UI_MESSAGES.freshJuicesSpecialtyIcedCoffees },
      { ...UI_MESSAGES.lightMediterraneanLunchesStoneOvenPizzas },
      { ...UI_MESSAGES.peacefulAndWelcomingAmbiance }
    ]
  },
  {
    id: 'evening',
    title: {
      ...UI_MESSAGES.eveningIntimateTablesSignatureCocktailsTwilight
    },
    description: {
      ...UI_MESSAGES.asTwilightSetsOverKalkanOur
    },
    highlights: [
      { ...UI_MESSAGES.sevenSignatureCocktails },
      { ...UI_MESSAGES.candlelitTablesAmbientMusic },
      { ...UI_MESSAGES.dailyCatchSeafood230GPrimeSteaks },
      { ...UI_MESSAGES.warmSincereFamilyRunHospitality }
    ]
  }
];

export const VERIFIED_REVIEWS = [
  {
    source: 'Tripadvisor',
    author: UI_MESSAGES.guestName,
    date: UI_MESSAGES.reviewDate,
    title: {
      ...UI_MESSAGES.refreshedBreezyAndWelcomingFamilyGem
    },
    content: {
      ...UI_MESSAGES.theSpaceIsBeautifullyRefreshedAiry
    },
    highlightTag: {
      ...UI_MESSAGES.verifiedVisit
    }
  }
];
