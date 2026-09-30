import type { Language } from './types';

export const LANGUAGES: Language[] = ['tr', 'en', 'ru'];
export const LANGUAGE_NAMES: Record<Language, string> = { tr: 'Türkçe', en: 'English', ru: 'Русский' };
export const LANGUAGE_STORAGE_KEY = 'anatolia-language';
export const LOCALES: Record<Language, string> = { tr: 'tr-TR', en: 'en-GB', ru: 'ru-RU' };
export const UI_MESSAGES = {
  "visualGallery": {
    "tr": "Fotoğraf Galerisi",
    "en": "Visual Gallery",
    "ru": "Фотогалерея"
  },
  "momentsAtAnatolia": {
    "tr": "Anatolia’dan Kareler",
    "en": "Moments at Anatolia",
    "ru": "Моменты в Anatolia"
  },
  "fromSunlitPergolaMorningsToCandlelit": {
    "tr": "Gündüzün huzurlu gölgesinden geceyi aydınlatan sıcak masalara, imza kokteyllerden keyifli buluşmalara gerçek fotoğraflarımız.",
    "en": "From sunlit pergola mornings to candlelit evening celebrations, explore genuine moments captured at our Kalkan terrace.",
    "ru": "От утренней тени перголы до вечерних встреч при свечах — настоящие фотографии нашей террасы в Калкане."
  },
  "ehitlerStreetEntrance": {
    "tr": "Şehitler Caddesi Girişi",
    "en": "Şehitler Street Entrance",
    "ru": "Вход с улицы Şehitler"
  },
  "historicStoneWallSign": {
    "tr": "Gündüz Taş Duvar & Tabela",
    "en": "Historic Stone Wall & Sign",
    "ru": "Старинная каменная стена и вывеска"
  },
  "twilightTerraceDining": {
    "tr": "Akşamüstü Teras Masaları",
    "en": "Twilight Terrace Dining",
    "ru": "Ужин на террасе в сумерках"
  },
  "candlelightWoodenTables": {
    "tr": "Mum Işığı & Ahşap Masalar",
    "en": "Candlelight & Wooden Tables",
    "ru": "Свечи и деревянные столы"
  },
  "signatureCocktailsToast": {
    "tr": "İmza Kokteyller & Kutlama",
    "en": "Signature Cocktails & Toast",
    "ru": "Авторские коктейли и тосты"
  },
  "artisanalBarMixology": {
    "tr": "Teras Barından Renkli Kadehler",
    "en": "Artisanal Bar Mixology",
    "ru": "Искусство приготовления коктейлей"
  },
  "warmEveningConversations": {
    "tr": "Sıcak Akşam Sohbetleri",
    "en": "Warm Evening Conversations",
    "ru": "Тёплые вечерние беседы"
  },
  "unhurriedCoastalDining": {
    "tr": "Akdeniz Esintisinde Uzun Masalar",
    "en": "Unhurried Coastal Dining",
    "ru": "Неспешный ужин у моря"
  },
  "cocktailCraftBar": {
    "tr": "Bar Şefi & Karışımlar",
    "en": "Cocktail Craft & Bar",
    "ru": "Коктейли и бар"
  },
  "freshBotanicalIngredients": {
    "tr": "Özenle Hazırlanan Reçeteler",
    "en": "Fresh Botanical Ingredients",
    "ru": "Свежие растительные ингредиенты"
  },
  "wineDinnerGathering": {
    "tr": "Şarap Eşliğinde Akşam Yemeği",
    "en": "Wine & Dinner Gathering",
    "ru": "Ужин с вином"
  },
  "memorableTableGatherings": {
    "tr": "Samimi Dostluk Masaları",
    "en": "Memorable Table Gatherings",
    "ru": "Незабываемые встречи за столом"
  },
  "anatoliaByNight": {
    "tr": "Gece Işıklarında Anatolia",
    "en": "Anatolia by Night",
    "ru": "Ночная Anatolia"
  },
  "illuminatedKalkanStreet": {
    "tr": "Işıltılı Sokak Atmosferi",
    "en": "Illuminated Kalkan Street",
    "ru": "Огни улиц Калкана"
  },
  "candlelitMediterraneanNight": {
    "tr": "Mum Işığında Akdeniz Gecesi",
    "en": "Candlelit Mediterranean Night",
    "ru": "Средиземноморская ночь при свечах"
  },
  "ambientTerraceSetting": {
    "tr": "Romantik & Sakin Masa Düzeni",
    "en": "Ambient Terrace Setting",
    "ru": "Уютная атмосфера террасы"
  },
  "shadedDaytimeCourtyard": {
    "tr": "Gündüz Gölgeli Avlu",
    "en": "Shaded Daytime Courtyard",
    "ru": "Тенистый дворик днём"
  },
  "airyMorningBrunchSetup": {
    "tr": "Ferah Teras & Kahvaltı Düzeni",
    "en": "Airy Morning & Brunch Setup",
    "ru": "Завтрак и бранч на свежем воздухе"
  },
  "familyFriendsGathering": {
    "tr": "Aile & Dost Masaları",
    "en": "Family & Friends Gathering",
    "ru": "Встречи с семьёй и друзьями"
  },
  "warmWelcomingSpirit": {
    "tr": "Güler Yüzlü Misafirperverlik",
    "en": "Warm Welcoming Spirit",
    "ru": "Тёплый приём"
  },
  "sunsetToastsInKalkan": {
    "tr": "Kalkan Gün Batımı Kadehleri",
    "en": "Sunset Toasts in Kalkan",
    "ru": "Тосты на закате в Калкане"
  },
  "refreshingSummerCoolers": {
    "tr": "Ferahlatıcı Yaz İçecekleri",
    "en": "Refreshing Summer Coolers",
    "ru": "Освежающие летние напитки"
  },
  "delightfulDinnerExperience": {
    "tr": "Keyifli Akşam Yemeği",
    "en": "Delightful Dinner Experience",
    "ru": "Приятный вечер за ужином"
  },
  "mediterraneanFlavors": {
    "tr": "Zengin Akdeniz Menüsü",
    "en": "Mediterranean Flavors",
    "ru": "Средиземноморские вкусы"
  },
  "timberPergolaStoneWall": {
    "tr": "Ahşap Pergola & Taş Doku",
    "en": "Timber Pergola & Stone Wall",
    "ru": "Деревянная пергола и каменная стена"
  },
  "kalkanHeritageArchitecture": {
    "tr": "Kalkan Mimarisinin Sıcaklığı",
    "en": "Kalkan Heritage Architecture",
    "ru": "Традиционная архитектура Калкана"
  },
  "smilesFondMemories": {
    "tr": "Güler Yüzler & Anılar",
    "en": "Smiles & Fond Memories",
    "ru": "Улыбки и приятные воспоминания"
  },
  "specialMomentsAtAnatolia": {
    "tr": "Unutulmaz Kalkan Hatıraları",
    "en": "Special Moments at Anatolia",
    "ru": "Особенные моменты в Anatolia"
  },
  "summerNightRefreshments": {
    "tr": "Yaz Gecesi İçecekleri",
    "en": "Summer Night Refreshments",
    "ru": "Напитки летним вечером"
  },
  "handcraftedDrinks": {
    "tr": "Buz Gibi Kokteyller & İkramlar",
    "en": "Handcrafted Drinks",
    "ru": "Напитки ручного приготовления"
  },
  "historicStoneFacade": {
    "tr": "Tarihi Taş Bina Cephesi",
    "en": "Historic Stone Facade",
    "ru": "Старинный каменный фасад"
  },
  "ehitlerStreetNo41": {
    "tr": "Şehitler Caddesi No: 41",
    "en": "Şehitler Street No: 41",
    "ru": "Улица Şehitler, дом 41"
  },
  "kalkanAntalyaRiviera": {
    "tr": "Kalkan, Kaş / Antalya",
    "en": "Kalkan, Antalya Riviera",
    "ru": "Калкан, Анталийская ривьера"
  },
  "mediterraneanCocktailBar": {
    "tr": "Akdeniz & Taş Fırın & Kokteyl",
    "en": "Mediterranean & Cocktail Bar",
    "ru": "Средиземноморская кухня и коктейльный бар"
  },
  "bookATable": {
    "tr": "Rezervasyon Yap",
    "en": "Book a Table",
    "ru": "Забронировать столик"
  },
  "exploreTheMenu": {
    "tr": "Menüyü Gör",
    "en": "Explore the Menu",
    "ru": "Посмотреть меню"
  },
  "openingHours": {
    "tr": "Çalışma Saatleri:",
    "en": "Opening Hours:",
    "ru": "Часы работы:"
  },
  "location": {
    "tr": "Konum:",
    "en": "Location:",
    "ru": "Адрес:"
  },
  "houseSignatureCocktail": {
    "tr": "Özel Reçete İmza Kokteyl",
    "en": "House Signature Cocktail",
    "ru": "Авторский коктейль"
  },
  "ourStoryPhilosophy": {
    "tr": "Hikâyemiz & Felsefemiz",
    "en": "Our Story & Philosophy",
    "ru": "Наша история и философия"
  },
  "aWelcomingTableThatTakesIts": {
    "tr": "Kalkan’ın Gün Boyu Yaşayan, Akşamı Uzatan Masası.",
    "en": "A Welcoming Table that Takes Its Time in Kalkan.",
    "ru": "Гостеприимный стол в Калкане, за которым можно не спешить."
  },
  "warmHospitality": {
    "tr": "Sıcak Aile Dokusu",
    "en": "Warm Hospitality",
    "ru": "Тёплое гостеприимство"
  },
  "attentiveSmilingServiceThatMakesYou": {
    "tr": "Misafirini evinde gibi hissettiren samimi ve güler yüzlü servis.",
    "en": "Attentive, smiling service that makes you feel genuinely cared for.",
    "ru": "Внимательное обслуживание с улыбкой, чтобы вы чувствовали себя как дома."
  },
  "unhurriedEvenings": {
    "tr": "Acele Ettirmeyen Masa",
    "en": "Unhurried Evenings",
    "ru": "Неспешные вечера"
  },
  "aRelaxingDiningPaceWhereDinner": {
    "tr": "Yemeğin, içkinin ve sohbetin kendi doğal ritminde aktığı bir ortam.",
    "en": "A relaxing dining pace where dinner turns into great conversation.",
    "ru": "Спокойная атмосфера, в которой ужин естественно переходит в приятную беседу."
  },
  "thoughtfulFood": {
    "tr": "Özenli Tabaklar",
    "en": "Thoughtful Food",
    "ru": "Блюда, приготовленные с заботой"
  },
  "freshStoneOvenBakingSeasonalMediterranean": {
    "tr": "Taş fırından çıkan çıtır hamurlar, taze Akdeniz mezeleri ve imza kokteyller.",
    "en": "Fresh stone-oven baking, seasonal Mediterranean mezze and craft drinks.",
    "ru": "Выпечка из каменной печи, сезонные средиземноморские мезе и авторские напитки."
  },
  "goodFoodThoughtfulDrinksAndThe": {
    "tr": "“İyi yemek, özenli içecekler ve acele ettirmeyen samimi bir Akdeniz masası.”",
    "en": "“Good food, thoughtful drinks, and the kind of unhurried Mediterranean table you remember.”",
    "ru": "«Вкусная еда, напитки, приготовленные с заботой, и неспешные встречи за средиземноморским столом»."
  },
  "address": {
    "tr": "Adres:",
    "en": "Address:",
    "ru": "Адрес:"
  },
  "phone": {
    "tr": "Telefon:",
    "en": "Phone:",
    "ru": "Телефон:"
  },
  "hours": {
    "tr": "Çalışma Saatleri:",
    "en": "Hours:",
    "ru": "Часы работы:"
  },
  "cuisine": {
    "tr": "Mutfak:",
    "en": "Cuisine:",
    "ru": "Кухня:"
  },
  "spaceAmbiance": {
    "tr": "Mekân & Deneyim",
    "en": "Space & Ambiance",
    "ru": "Пространство и атмосфера"
  },
  "theRhythmOfTheDay": {
    "tr": "Günün Ritminde Anatolia",
    "en": "The Rhythm of the Day",
    "ru": "Anatolia в ритме дня"
  },
  "aWelcomingSpaceOnEhitlerStreet": {
    "tr": "Şehitler Caddesi'nde gün boyu yaşayan, akşamı uzatan masalar. Gündüzün esintili ferahlığından gecenin samimi sohbetlerine.",
    "en": "A welcoming space on Şehitler Street that lives through the day and extends into easy-going evenings.",
    "ru": "Гостеприимное место на улице Şehitler, где дневные встречи плавно переходят в неспешные вечера."
  },
  "daytimeCourtyard": {
    "tr": "Gündüz Avlusu",
    "en": "Daytime Courtyard",
    "ru": "Дворик днём"
  },
  "eveningIntimacy": {
    "tr": "Akşam Sohbeti",
    "en": "Evening Intimacy",
    "ru": "Уютный вечер"
  },
  "from0900To1800": {
    "tr": "09.00 – 18.00 Saatleri Arasında",
    "en": "From 09:00 to 18:00",
    "ru": "С 09:00 до 18:00"
  },
  "from1800ToMidnight": {
    "tr": "18.00 – 00.00 Saatleri Arasında",
    "en": "From 18:00 to Midnight",
    "ru": "С 18:00 до полуночи"
  },
  "verifiedGuestImpression": {
    "tr": "Doğrulanmış Misafir Yorumu",
    "en": "Verified Guest Impression",
    "ru": "Отзыв гостя"
  },
  "anatoliaSignatureCocktails": {
    "tr": "Anatolia İmza Kokteylleri",
    "en": "Anatolia Signature Cocktails",
    "ru": "Авторские коктейли Anatolia"
  },
  "sevenSignatureCocktailsSevenDistinctiveTastes": {
    "tr": "Yedi imza kokteyl, yedi farklı tat. Akşamınıza eşlik edecek favorinizi keşfedin.",
    "en": "Seven signature cocktails, seven distinctive tastes. Find your favourite for the evening.",
    "ru": "Семь авторских коктейлей, семь разных вкусов. Найдите любимый напиток для своего вечера."
  },
  "bookATable2": {
    "tr": "Masa ayırt",
    "en": "Book a table",
    "ru": "Забронировать столик"
  },
  "helloAnatoliaFoodDrinkIWould": {
    "tr": "Merhaba Anatolia Food & Drink, rezervasyon hakkında bilgi almak istiyorum.",
    "en": "Hello Anatolia Food & Drink, I would like to inquire about a table reservation.",
    "ru": "Здравствуйте, Anatolia Food & Drink! Хочу узнать о бронировании столика."
  },
  "locationVisit": {
    "tr": "Ulaşım & Ziyaret",
    "en": "Location & Visit",
    "ru": "Как нас найти"
  },
  "visitUsOnEhitlerStreet": {
    "tr": "Şehitler Caddesi’nde Bizi Ziyaret Edin",
    "en": "Visit Us on Şehitler Street",
    "ru": "Ждём вас на улице Şehitler"
  },
  "convenientlyLocatedOnEhitlerStreetIn": {
    "tr": "Kalkan merkezinde, Şehitler Caddesi üzerinde ferah bir buluşma noktası. Rezervasyon veya yol tarifi için bize dilediğiniz zaman ulaşabilirsiniz.",
    "en": "Conveniently located on Şehitler Street in central Kalkan. Reach out for table inquiries, directions, or walk right in.",
    "ru": "Мы находимся на улице Şehitler в центре Калкана. Свяжитесь с нами, чтобы забронировать столик, узнать дорогу, или просто заходите."
  },
  "address2": {
    "tr": "Mekân Adresi",
    "en": "Address",
    "ru": "Адрес"
  },
  "copyAddress": {
    "tr": "Adresi Kopyala",
    "en": "Copy Address",
    "ru": "Скопировать адрес"
  },
  "openInGoogleMaps": {
    "tr": "Google Haritalar’da Aç",
    "en": "Open in Google Maps",
    "ru": "Открыть в Google Картах"
  },
  "copied": {
    "tr": "Kopyalandı",
    "en": "Copied",
    "ru": "Скопировано"
  },
  "reservationsPhone": {
    "tr": "Rezervasyon & İletişim",
    "en": "Reservations & Phone",
    "ru": "Бронирование и телефон"
  },
  "call": {
    "tr": "Hemen Ara",
    "en": "Call",
    "ru": "Позвонить"
  },
  "whatsapp": {
    "tr": "Mesaj Gönder",
    "en": "WhatsApp",
    "ru": "WhatsApp"
  },
  "serviceHours": {
    "tr": "Hizmet Saatleri",
    "en": "Service Hours",
    "ru": "Часы работы"
  },
  "getDirections": {
    "tr": "Yol Tarifi Al",
    "en": "Get Directions",
    "ru": "Проложить маршрут"
  },
  "walkingAccess": {
    "tr": "Yürüyüş Mesafesi:",
    "en": "Walking Access:",
    "ru": "Пешком:"
  },
  "justAFewMinutesLeisurelyWalk": {
    "tr": "Kalkan çarşı ve sahil bandına sadece birkaç dakikalık keyifli yürüme mesafesindedir.",
    "en": "Just a few minutes leisurely walk from Kalkan harbor and central market.",
    "ru": "Всего несколько минут приятной прогулки от гавани и центрального рынка Калкана."
  },
  "bookingTip": {
    "tr": "Rezervasyon Önerisi:",
    "en": "Booking Tip:",
    "ru": "Совет по бронированию:"
  },
  "forEveningDiningOnTheTerrace": {
    "tr": "Akşam servisi için teras masalarımızda önceden rezervasyon yaptırmanızı öneririz.",
    "en": "For evening dining on the terrace, advance reservation is recommended.",
    "ru": "Для вечернего ужина на террасе рекомендуем бронировать столик заранее."
  },
  "thoughtfullyPreparedFoodCraftCocktailsAnd": {
    "tr": "Kalkan Şehitler Caddesi'nde iyi yemek, özenli kokteyller ve acele ettirmeyen samimi bir Akdeniz masası.",
    "en": "Thoughtfully prepared food, craft cocktails and an unhurried Mediterranean table on Şehitler Street, Kalkan.",
    "ru": "Вкусная еда, авторские коктейли и неспешные встречи за средиземноморским столом на улице Şehitler в Калкане."
  },
  "explore": {
    "tr": "Keşfedin",
    "en": "Explore",
    "ru": "Откройте для себя"
  },
  "ourMenu": {
    "tr": "Menümüz",
    "en": "Our Menu",
    "ru": "Наше меню"
  },
  "signatureCocktails": {
    "tr": "İmza Kokteyller",
    "en": "Signature Cocktails",
    "ru": "Авторские коктейли"
  },
  "theSpace": {
    "tr": "Mekân & Atmosfer",
    "en": "The Space",
    "ru": "Наш ресторан"
  },
  "photoGallery": {
    "tr": "Fotoğraf Galerisi",
    "en": "Photo Gallery",
    "ru": "Фотогалерея"
  },
  "ourStory": {
    "tr": "Hakkımızda",
    "en": "Our Story",
    "ru": "Наша история"
  },
  "locationHours": {
    "tr": "Ulaşım & İletişim",
    "en": "Location & Hours",
    "ru": "Адрес и часы работы"
  },
  "contactVisit": {
    "tr": "İletişim & Konum",
    "en": "Contact & Visit",
    "ru": "Контакты и адрес"
  },
  "reservations": {
    "tr": "Rezervasyon",
    "en": "Reservations",
    "ru": "Бронирование"
  },
  "bookAheadToSecureYourPreferred": {
    "tr": "Akşam saatleri için teras masalarınızı önceden ayırtabilirsiniz.",
    "en": "Book ahead to secure your preferred table for dinner.",
    "ru": "Забронируйте заранее, чтобы выбрать удобный столик для ужина."
  },
  "bookATable3": {
    "tr": "Masa Ayırt",
    "en": "Book a Table",
    "ru": "Забронировать столик"
  },
  "allRightsReserved": {
    "tr": "Tüm hakları saklıdır.",
    "en": "All rights reserved.",
    "ru": "Все права защищены."
  },
  "backToTop": {
    "tr": "Başa Dön",
    "en": "Back to top",
    "ru": "Наверх"
  },
  "outdoorTerrace": {
    "tr": "Açık Hava / Teras",
    "en": "Outdoor Terrace",
    "ru": "Открытая терраса"
  },
  "indoorDining": {
    "tr": "İç Salon",
    "en": "Indoor Dining",
    "ru": "Внутренний зал"
  },
  "noPreference": {
    "tr": "Fark Etmez",
    "en": "No Preference",
    "ru": "Без предпочтений"
  },
  "bookATable4": {
    "tr": "Masa Rezervasyonu",
    "en": "Book a Table",
    "ru": "Забронировать столик"
  },
  "yourRequestWillBeSentDirectly": {
    "tr": "Talebiniz anında WhatsApp veya telefon üzerinden işletmemize iletilir.",
    "en": "Your request will be sent directly to our restaurant team via WhatsApp or phone.",
    "ru": "Заявку можно отправить нашей команде через WhatsApp или обсудить по телефону."
  },
  "fullName": {
    "tr": "Adınız Soyadınız *",
    "en": "Full Name *",
    "ru": "Имя и фамилия *"
  },
  "eGJohnDoe": {
    "tr": "Örn: Ahmet Yılmaz",
    "en": "e.g. John Doe",
    "ru": "Например: Иван Иванов"
  },
  "phoneNumber": {
    "tr": "Telefon Numaranız *",
    "en": "Phone Number *",
    "ru": "Номер телефона *"
  },
  "date": {
    "tr": "Tarih",
    "en": "Date",
    "ru": "Дата"
  },
  "time": {
    "tr": "Saat",
    "en": "Time",
    "ru": "Время"
  },
  "guests": {
    "tr": "Kişi",
    "en": "Guests",
    "ru": "Гостей"
  },
  "seatingPreference": {
    "tr": "Masa & Alan Tercihi",
    "en": "Seating Preference",
    "ru": "Где вы хотите сидеть?"
  },
  "terrace": {
    "tr": "Açık Teras",
    "en": "Terrace",
    "ru": "Терраса"
  },
  "indoor": {
    "tr": "İç Salon",
    "en": "Indoor",
    "ru": "Зал"
  },
  "noPref": {
    "tr": "Fark Etmez",
    "en": "No Pref.",
    "ru": "Любое место"
  },
  "specialRequestOptional": {
    "tr": "Özel Not / İstek (Opsiyonel)",
    "en": "Special Request (Optional)",
    "ru": "Особые пожелания (необязательно)"
  },
  "eGBirthdayCelebrationHighChair": {
    "tr": "Örn: Doğum günü masası, bebek sandalyesi, sessiz köşe...",
    "en": "e.g. Birthday celebration, high chair, quiet corner...",
    "ru": "Например: день рождения, детский стульчик, тихий уголок…"
  },
  "sendRequestViaWhatsapp": {
    "tr": "WhatsApp ile Rezervasyon İlet",
    "en": "Send Request via WhatsApp",
    "ru": "Отправить заявку в WhatsApp"
  },
  "orCallDirectly": {
    "tr": "veya doğrudan arayarak ayırtın:",
    "en": "or call directly:",
    "ru": "или позвоните нам:"
  },
  "reservationRequestSent": {
    "tr": "Rezervasyon Talebiniz İletildi",
    "en": "Reservation Request Sent",
    "ru": "Заявка на бронирование"
  },
  "dateTime": {
    "tr": "Tarih & Saat:",
    "en": "Date & Time:",
    "ru": "Дата и время:"
  },
  "guests2": {
    "tr": "Kişi Sayısı:",
    "en": "Guests:",
    "ru": "Гостей:"
  },
  "contact": {
    "tr": "İletişim:",
    "en": "Contact:",
    "ru": "Контакт:"
  },
  "done": {
    "tr": "Kapat",
    "en": "Done",
    "ru": "Готово"
  },
  "helloAnatoliaFoodDrinkIWould2": {
    "tr": "Merhaba Anatolia Food & Drink, masa rezervasyonu için yazıyorum.",
    "en": "Hello Anatolia Food & Drink, I would like to make a table reservation.",
    "ru": "Здравствуйте, Anatolia Food & Drink! Хочу забронировать столик."
  },
  "call2": {
    "tr": "Ara",
    "en": "Call",
    "ru": "Позвонить"
  },
  "menu": {
    "tr": "Menü",
    "en": "Menu",
    "ru": "Меню"
  },
  "book": {
    "tr": "Ayırt",
    "en": "Book",
    "ru": "Бронь"
  },
  "welcomeToOurTable": {
    "tr": "Soframıza hoş geldiniz",
    "en": "Welcome to our table",
    "ru": "Добро пожаловать к нашему столу"
  },
  "fromBreakfastToDinnerFromCoffee": {
    "tr": "Kahvaltıdan akşam yemeğine, kahveden kokteyle. Anatolia’nın tüm lezzetlerini keşfedin.",
    "en": "From breakfast to dinner, from coffee to cocktails. Discover the complete Anatolia menu.",
    "ru": "От завтрака до ужина, от кофе до коктейлей. Откройте для себя все вкусы Anatolia."
  },
  "chooseAMenu": {
    "tr": "Menü seçimi",
    "en": "Choose a menu",
    "ru": "Выберите меню"
  },
  "searchAllMenus": {
    "tr": "Tüm menülerde ara",
    "en": "Search all menus",
    "ru": "Поиск по всем меню"
  },
  "searchAllMenusForADish": {
    "tr": "Tüm menülerde ürün veya içerik ara…",
    "en": "Search all menus for a dish or ingredient…",
    "ru": "Найти блюдо или ингредиент во всех меню…"
  },
  "clearSearch": {
    "tr": "Aramayı temizle",
    "en": "Clear search",
    "ru": "Очистить поиск"
  },
  "menuCategories": {
    "tr": "Menü kategorileri",
    "en": "Menu categories",
    "ru": "Категории меню"
  },
  "noItemsMatchYourSearch": {
    "tr": "Aramanızla eşleşen ürün bulunamadı.",
    "en": "No items match your search.",
    "ru": "По вашему запросу ничего не найдено."
  },
  "backToTheMenu": {
    "tr": "Menüye dön",
    "en": "Back to the menu",
    "ru": "Вернуться к меню"
  },
  "pleaseInformOurTeamOfAny": {
    "tr": "Alerjilerinizi ve gıda hassasiyetlerinizi lütfen servis ekibimize bildiriniz.",
    "en": "Please inform our team of any food allergies or sensitivities.",
    "ru": "Пожалуйста, сообщите нашей команде об аллергиях и пищевой непереносимости."
  },
  "allCategories": {
    "tr": "Tüm kategoriler",
    "en": "All categories",
    "ru": "Все категории"
  },
  "cocktails": {
    "tr": "Kokteyller",
    "en": "Cocktails",
    "ru": "Коктейли"
  },
  "atmosphere": {
    "tr": "Mekân",
    "en": "Atmosphere",
    "ru": "Атмосфера"
  },
  "gallery": {
    "tr": "Galeri",
    "en": "Gallery",
    "ru": "Галерея"
  },
  "about": {
    "tr": "Hakkımızda",
    "en": "About",
    "ru": "О нас"
  },
  "visit": {
    "tr": "Ziyaret",
    "en": "Visit",
    "ru": "Как нас найти"
  },
  "day": {
    "tr": "Gündüz",
    "en": "Day",
    "ru": "День"
  },
  "night": {
    "tr": "Gece",
    "en": "Night",
    "ru": "Ночь"
  },
  "ehitlerStreetStorefront": {
    "tr": "Şehitler Caddesi Girişimiz",
    "en": "Şehitler Street Storefront",
    "ru": "Вход с улицы Şehitler"
  },
  "stoneWallHeritage": {
    "tr": "Taş Duvar Dokusu",
    "en": "Stone Wall Heritage",
    "ru": "Старинная каменная кладка"
  },
  "eveningAmbiance": {
    "tr": "Akşam Işıkları",
    "en": "Evening Ambiance",
    "ru": "Вечерние огни"
  },
  "atmosphereWarmWelcome": {
    "tr": "Mekân & Karşılama Kimliği",
    "en": "Atmosphere & Warm Welcome",
    "ru": "Атмосфера и тёплый приём"
  },
  "warmCreamStoneMediterraneanStreetLife": {
    "tr": "Kalkan'ın Sıcak Taş Dokusu ve Krem Sarısı Sokak Havası",
    "en": "Warm Cream Stone & Mediterranean Street Life in Kalkan",
    "ru": "Тёплые оттенки камня и средиземноморская жизнь Калкана"
  },
  "ourDistinctiveWarmCreamSignOn": {
    "tr": "Şehitler Caddesi'nden geçerken gözünüze çarpan sıcak krem sarısı tabelamız, içeri adım attığınız andan itibaren sizi saran ferah, güler yüzlü ve acele ettirmeyen Akdeniz sofrasının davetidir.",
    "en": "Our distinctive warm cream sign on Şehitler Street is an open invitation to an unhurried, welcoming Mediterranean table with genuine family hospitality.",
    "ru": "Наша вывеска тёплого кремового цвета на улице Şehitler приглашает вас к неспешному средиземноморскому столу и радушному семейному приёму."
  },
  "aGoodTableAGreatEvening": {
    "tr": "Kalkan'da güzel bir masa, iyi bir akşam.",
    "en": "A good table. A great evening in Kalkan.",
    "ru": "Уютный столик. Прекрасный вечер в Калкане."
  },
  "joinUsForThoughtfullyPreparedFood": {
    "tr": "Anatolia Food & Drink'te gün, özenle hazırlanan lezzetlerle başlar; akşam, taş fırın lezzetleri, taze deniz ürünleri ve imza kokteyllerle devam eder.",
    "en": "Join us for thoughtfully prepared food, stone-oven classics, daily fresh seafood, signature cocktails and an unhurried evening in Kalkan.",
    "ru": "Начните день со вкусных блюд, а вечером насладитесь выпечкой из каменной печи, свежими морепродуктами, авторскими коктейлями и неспешной атмосферой Anatolia Food & Drink."
  },
  "findUsOnEhitlerStreetFor": {
    "tr": "Şehitler Caddesi'nde günün farklı saatlerine eşlik eden bir buluşma noktasıyız. Kahvaltı için uğrayın, taş fırın lezzetlerini tadın, bir imza kokteylle akşamı kendi ritminizde yaşayın.",
    "en": "Find us on Şehitler Street for wholesome breakfasts, stone-oven pizzas, fresh seafood, and craft cocktails. Drop in for a meal, stay for a drink and make the night your own.",
    "ru": "На улице Şehitler вас ждут сытные завтраки, пицца из каменной печи, свежие морепродукты и авторские коктейли. Заходите поесть, оставайтесь за бокалом и проведите вечер в своём ритме."
  },
  "locatedOnEhitlerStreetWhereHistoric": {
    "tr": "Kalkan'ın tarihi taş dokusu ve Akdeniz esintilerinin buluştuğu Şehitler Caddesi'nde yer alan Anatolia Food & Drink; güler yüzlü bir aile işletmesi sıcaklığıyla zengin Akdeniz mutfağını bir araya getiriyor. Sabahları zengin Türk ve İngiliz kahvaltılarıyla güne başlarken, öğlen taş fırından yeni çıkmış çıtır pizzalar, sulu burgerler ve hafif taze salatalar sunuyoruz. Gün batımıyla birlikte masalarımız; özenle kurgulanmış imza kokteyller, kömür ateşinde taze levrek, çipura, orfoz ve 230g özel dinlendirilmiş bonfilelerle unutulmaz Kalkan akşamlarına ev sahipliği yapıyor.",
    "en": "Located on Şehitler Street where historic Kalkan character meets the Mediterranean breeze, Anatolia Food & Drink pairs warm, family-run hospitality with authentic dining. We welcome mornings with rich breakfast spreads, serve freshly baked stone-oven pizzas, smash burgers and crisp salads by day, and transition into twilight with bespoke signature cocktails, charcoal-grilled catch of the day, and succulent 230g fillet steaks.",
    "ru": "На улице Şehitler, среди исторической каменной архитектуры Калкана и средиземноморского бриза, Anatolia Food & Drink сочетает тепло семейного ресторана с богатством средиземноморской кухни. Утро начинается с турецких и английских завтраков, днём мы подаём пиццу из каменной печи, сочные бургеры и свежие салаты. С закатом на столах появляются авторские коктейли, свежая рыба на углях и филе-стейки по 230 г."
  },
  "daytimeAiryCalmShadedCourtyard": {
    "tr": "Gündüz: Ferah, Sakin ve Serin Avlu",
    "en": "Daytime: Airy, Calm & Shaded Courtyard",
    "ru": "Днём: прохладный и спокойный тенистый дворик"
  },
  "takeARestfulPauseInThe": {
    "tr": "Kalkan'ın sıcak saatlerinde Şehitler Caddesi'nin gölgeli esintisinde mola verin. Taze sıkılmış meyve suları, zengin Türk ve İngiliz kahvaltıları veya taş fırından sıcak çıtır pizzalarla günün keyfini çıkarın.",
    "en": "Take a restful pause in the breezy shade of Şehitler Street. Savor rich breakfast spreads, freshly squeezed orange juice, and crisp stone-oven pizzas during the warm daylight hours.",
    "ru": "Отдохните в прохладной тени на улице Şehitler. В тёплые дневные часы вас ждут сытные завтраки, свежевыжатый апельсиновый сок и хрустящая пицца из каменной печи."
  },
  "shadedPergolaCourtyardSeating": {
    "tr": "Geniş gölgeli pergola oturumu",
    "en": "Shaded pergola courtyard seating",
    "ru": "Столики в тени перголы"
  },
  "freshJuicesSpecialtyIcedCoffees": {
    "tr": "Taze sıkılmış meyve suları & soğuk kahveler",
    "en": "Fresh juices & specialty iced coffees",
    "ru": "Свежие соки и фирменный холодный кофе"
  },
  "lightMediterraneanLunchesStoneOvenPizzas": {
    "tr": "Hafif Akdeniz öğle yemekleri & çıtır pizzalar",
    "en": "Light Mediterranean lunches & stone-oven pizzas",
    "ru": "Лёгкие средиземноморские обеды и пицца из каменной печи"
  },
  "peacefulAndWelcomingAmbiance": {
    "tr": "Sakin ve rahat bir atmosfer",
    "en": "Peaceful and welcoming ambiance",
    "ru": "Спокойная и гостеприимная атмосфера"
  },
  "eveningIntimateTablesSignatureCocktailsTwilight": {
    "tr": "Akşam: Sıcak Masalar, İmza Kokteyller & Kalkan Işıkları",
    "en": "Evening: Intimate Tables, Signature Cocktails & Twilight",
    "ru": "Вечером: уютные столики, авторские коктейли и сумерки"
  },
  "asTwilightSetsOverKalkanOur": {
    "tr": "Güneş alçalırken Anatolia'nın atmosferi dönüşür. Kadehler tokuşturulur, 7 özel imza kokteylimiz hazırlanır, kömür ateşinde taze levrekler ve 230g bonfileler masaya gelir. Acele ettirmeyen samimi bir Akdeniz gecesi.",
    "en": "As twilight sets over Kalkan, our terrace glows with candlelight. 7 bespoke signature cocktails are mixed at the bar, prime steaks and daily catch seafood arrive sizzling from the coals, and the night unfolds at its own gracious pace.",
    "ru": "Когда над Калканом сгущаются сумерки, терраса озаряется свечами. В баре готовят семь авторских коктейлей, на столы подают стейки и свежие морепродукты с углей, а вечер идёт своим неспешным чередом."
  },
  "sevenSignatureCocktails": {
    "tr": "7 özel imza kokteyl reçetesi",
    "en": "7 bespoke signature cocktail creations",
    "ru": "7 авторских коктейлей"
  },
  "candlelitTablesAmbientMusic": {
    "tr": "Mum ışığında samimi masa düzeni",
    "en": "Candlelit tables & ambient music",
    "ru": "Столики при свечах и приятная музыка"
  },
  "dailyCatchSeafood230GPrimeSteaks": {
    "tr": "Kömürde taze deniz ürünleri & 230g bonfile",
    "en": "Daily catch seafood & 230g prime steaks",
    "ru": "Свежие морепродукты и филе-стейки по 230 г"
  },
  "warmSincereFamilyRunHospitality": {
    "tr": "Güler yüzlü aile işletmesi konukseverliği",
    "en": "Warm, sincere family-run hospitality",
    "ru": "Тёплое семейное гостеприимство"
  },
  "refreshedBreezyAndWelcomingFamilyGem": {
    "tr": "Yenilenmiş, ferah ve güler yüzlü bir işletme",
    "en": "Refreshed, breezy and welcoming family gem",
    "ru": "Обновлённый, уютный семейный ресторан"
  },
  "theSpaceIsBeautifullyRefreshedAiry": {
    "tr": "Mekân yenilenmiş; ferah, serin ve çok keyifli bir ortamı var. Güler yüzlü bir aile işletmesi hissini ilk andan itibaren yaşıyorsunuz. Yemekler, sunum ve kokteyller özenle hazırlanmış, servis son derece ilgiliydi. Kalkan’da akşam için harika bir durak.",
    "en": "The space is beautifully refreshed—airy, cool, and inviting. You feel the warmth of a smiling family-run team right away. The food, presentation, and craft cocktails were meticulously prepared, with attentive service. A wonderful spot for an evening in Kalkan.",
    "ru": "Ресторан прекрасно обновлён: просторно, прохладно и уютно. Тепло семейной команды чувствуешь с первых минут. Блюда, подача и коктейли приготовлены с заботой, обслуживание очень внимательное. Замечательное место для вечера в Калкане."
  },
  "verifiedVisit": {
    "tr": "Misafir Deneyimi",
    "en": "Verified Visit",
    "ru": "Впечатления гостя"
  },
  "language": {
    "tr": "Dil",
    "en": "Language",
    "ru": "Язык"
  },
  "openMenu": {
    "tr": "Menüyü aç",
    "en": "Open navigation",
    "ru": "Открыть навигацию"
  },
  "closeMenu": {
    "tr": "Menüyü kapat",
    "en": "Close navigation",
    "ru": "Закрыть навигацию"
  },
  "close": {
    "tr": "Kapat",
    "en": "Close",
    "ru": "Закрыть"
  },
  "previous": {
    "tr": "Önceki fotoğraf",
    "en": "Previous photo",
    "ru": "Предыдущее фото"
  },
  "next": {
    "tr": "Sonraki fotoğraf",
    "en": "Next photo",
    "ru": "Следующее фото"
  },
  "galleryAll": {
    "tr": "Tümü",
    "en": "All Photos",
    "ru": "Все фотографии"
  },
  "galleryTerrace": {
    "tr": "Mekân & Teras",
    "en": "Terrace & Architecture",
    "ru": "Терраса и архитектура"
  },
  "galleryEvening": {
    "tr": "Akşam & Atmosfer",
    "en": "Evening Atmosphere",
    "ru": "Вечерняя атмосфера"
  },
  "galleryCocktails": {
    "tr": "Kokteyl & Bar",
    "en": "Cocktails & Bar",
    "ru": "Коктейли и бар"
  },
  "directContact": {
    "tr": "Doğrudan Arama veya WhatsApp",
    "en": "Call directly or use WhatsApp",
    "ru": "Позвоните или напишите в WhatsApp"
  },
  "email": {
    "tr": "E-Posta",
    "en": "Email",
    "ru": "Эл. почта"
  },
  "mealService": {
    "tr": "Kahvaltı, Öğle & Akşam Servisi",
    "en": "Breakfast, lunch & dinner",
    "ru": "Завтрак, обед и ужин"
  },
  "cuisineValue": {
    "tr": "Akdeniz · Taş Fırın · Kokteyl Bar",
    "en": "Mediterranean · Stone Oven · Cocktail Bar",
    "ru": "Средиземноморская кухня · Каменная печь · Коктейльный бар"
  },
  "googleMaps": {
    "tr": "Google Haritalar",
    "en": "Google Maps",
    "ru": "Google Карты"
  },
  "mapTitle": {
    "tr": "Anatolia Food & Drink konumu",
    "en": "Anatolia Food & Drink location",
    "ru": "Расположение Anatolia Food & Drink"
  },
  "listingTripadvisor": {
    "tr": "Tripadvisor Kaydı",
    "en": "Tripadvisor Listing",
    "ru": "Страница на Tripadvisor"
  },
  "signboardAlt": {
    "tr": "Anatolia Food & Drink Tabela - Kalkan",
    "en": "Anatolia Food & Drink sign in Kalkan",
    "ru": "Вывеска Anatolia Food & Drink в Калкане"
  },
  "collageAlt": {
    "tr": "Anatolia Food & Drink Mekân, Yemekler ve İçecekler",
    "en": "Anatolia Food & Drink Ambiance, Dishes and Drinks",
    "ru": "Атмосфера, блюда и напитки Anatolia Food & Drink"
  },
  "searchResults": {
    "tr": "“{query}” için {count} sonuç · Tüm menüler",
    "en": "{count} results for “{query}” · All menus",
    "ru": "Результаты по запросу «{query}»: {count} · Все меню"
  },
  "guestName": {
    "tr": "Doğrulanmış Misafir",
    "en": "Verified Guest",
    "ru": "Гость ресторана"
  },
  "reviewDate": {
    "tr": "10 Eylül 2026",
    "en": "10 September 2026",
    "ru": "10 сентября 2026"
  },
  "reservationIntro": {
    "tr": "Merhaba Anatolia Food & Drink, rezervasyon talebim:",
    "en": "Hello Anatolia Food & Drink, table reservation request:",
    "ru": "Здравствуйте, Anatolia Food & Drink! Заявка на бронирование столика:"
  },
  "reservationName": {
    "tr": "İsim",
    "en": "Name",
    "ru": "Имя"
  },
  "reservationPhone": {
    "tr": "Telefon",
    "en": "Phone",
    "ru": "Телефон"
  },
  "reservationDate": {
    "tr": "Tarih",
    "en": "Date",
    "ru": "Дата"
  },
  "reservationTime": {
    "tr": "Saat",
    "en": "Time",
    "ru": "Время"
  },
  "reservationGuests": {
    "tr": "Kişi Sayısı",
    "en": "Guests",
    "ru": "Количество гостей"
  },
  "reservationSeating": {
    "tr": "Alan Tercihi",
    "en": "Seating",
    "ru": "Размещение"
  },
  "reservationNote": {
    "tr": "Not",
    "en": "Special Note",
    "ru": "Пожелания"
  },
  "reservationOpened": {
    "tr": "WhatsApp açıldı",
    "en": "WhatsApp opened",
    "ru": "WhatsApp открыт"
  },
  "reservationNextStep": {
    "tr": "Talebinizi iletmek için WhatsApp’ta Gönder’e dokunun. Rezervasyonunuz işletmenin yanıtıyla kesinleşir.",
    "en": "Tap Send in WhatsApp to submit your request. Your reservation is confirmed when the restaurant replies.",
    "ru": "Нажмите «Отправить» в WhatsApp, чтобы передать заявку. Бронирование будет подтверждено после ответа ресторана."
  },
  "requiredName": {
    "tr": "Lütfen adınızı ve soyadınızı girin.",
    "en": "Please enter your full name.",
    "ru": "Пожалуйста, укажите имя и фамилию."
  },
  "requiredPhone": {
    "tr": "Lütfen telefon numaranızı girin.",
    "en": "Please enter your phone number.",
    "ru": "Пожалуйста, укажите номер телефона."
  },
  "requiredDate": {
    "tr": "Lütfen geçerli bir tarih seçin.",
    "en": "Please select a valid date.",
    "ru": "Пожалуйста, выберите допустимую дату."
  },
  "pageTitle": {
    "tr": "Anatolia Food & Drink | Kalkan Restoran & Kokteyl Bar",
    "en": "Anatolia Food & Drink | Kalkan Restaurant & Cocktail Bar",
    "ru": "Anatolia Food & Drink | Ресторан и коктейльный бар в Калкане"
  },
  "pageDescription": {
    "tr": "Kalkan’da kahvaltı, lunch ve dinner menüleri, imza kokteyller ve samimi Akdeniz sofraları. Anatolia Food & Drink menüsünü keşfedin ve masa ayırtın.",
    "en": "Breakfast, lunch and dinner, signature cocktails and welcoming Mediterranean dining in Kalkan. Explore the Anatolia Food & Drink menu and book a table.",
    "ru": "Завтраки, обеды и ужины, авторские коктейли и средиземноморская кухня в Калкане. Откройте меню Anatolia Food & Drink и забронируйте столик."
  },
  "heroVisualTitle": {
    "tr": "Akdeniz Esintisi, Samimi Masa ve İmza Kokteyller",
    "en": "Mediterranean Breeze, Welcoming Tables & Signature Cocktails",
    "ru": "Средиземноморский бриз, уютные столики и авторские коктейли"
  },
  "heroVisualText": {
    "tr": "Yenilenmiş ferah terasımızda, günün telaşından uzak, kendi ritminizde keyifli bir akşam.",
    "en": "Enjoy an evening at your own pace on our refreshed, airy terrace, away from the bustle of the day.",
    "ru": "Приятный вечер в вашем ритме на обновлённой просторной террасе, вдали от дневной суеты."
  },
  "heroVisualAlt": {
    "tr": "Anatolia Food & Drink Gece Terası",
    "en": "Anatolia Food & Drink Terrace at Night",
    "ru": "Терраса Anatolia Food & Drink вечером"
  },
  "cocktailVisualAlt": {
    "tr": "Anatolia İmza Kokteylleri",
    "en": "Anatolia Signature Cocktails Toast",
    "ru": "Авторские коктейли Anatolia"
  },
  "cocktailVisualLabel": {
    "tr": "İmza Kokteyl",
    "en": "Signature Cocktail",
    "ru": "Авторский коктейль"
  },
  "cocktailVisualIngredients": {
    "tr": "Cin · Bergamot · Nar · Limon · Soda",
    "en": "Gin · Bergamot · Pomegranate · Lemon · Mineral Water",
    "ru": "Джин · Бергамот · Гранат · Лимон · Минеральная вода"
  },
  "dishVisualAlt": {
    "tr": "Akdeniz Sofrası ve Akşam Yemeği",
    "en": "Mediterranean Table & Dinner",
    "ru": "Средиземноморский стол и ужин"
  },
  "dishVisualLabel": {
    "tr": "Akdeniz Mutfağı",
    "en": "Mediterranean Cuisine",
    "ru": "Средиземноморская кухня"
  },
  "dishVisualBadge": {
    "tr": "Kalkan Masası",
    "en": "A Table in Kalkan",
    "ru": "Столик в Калкане"
  },
  "dishVisualTitle": {
    "tr": "Kömür Ateşinde Levrek",
    "en": "Charcoal-grilled Sea Bass",
    "ru": "Сибас на углях"
  },
  "dishVisualIngredients": {
    "tr": "Taze Ege Otları · Sızma Zeytinyağı · Köz Patates",
    "en": "Fresh Aegean Herbs · Extra Virgin Olive Oil · Roasted Potatoes",
    "ru": "Свежие эгейские травы · Оливковое масло · Печёный картофель"
  },
  "dayVisualAlt": {
    "tr": "Anatolia Gündüz Terası",
    "en": "Anatolia Daytime Terrace",
    "ru": "Терраса Anatolia днём"
  },
  "dayVisualLabel": {
    "tr": "Gündüz Avlusu · 09:00 – 18:00",
    "en": "Daytime Courtyard · 09:00 – 18:00",
    "ru": "Дворик днём · 09:00 – 18:00"
  },
  "dayVisualBadge": {
    "tr": "Ferah & Gölgeli",
    "en": "Airy & Shaded",
    "ru": "Прохлада и тень"
  },
  "dayVisualTitle": {
    "tr": "Gölgede Kahvaltı & Taş Fırın",
    "en": "Breakfast in the Shade & Stone Oven",
    "ru": "Завтрак в тени и блюда из каменной печи"
  },
  "dayVisualText": {
    "tr": "Zengin Köy Kahvaltısı · Sıcak Pizzalar · Soğuk İçecekler",
    "en": "Hearty Breakfast · Hot Pizza · Cold Drinks",
    "ru": "Сытный завтрак · Горячая пицца · Холодные напитки"
  },
  "eveningVisualAlt": {
    "tr": "Anatolia Akşam Terası ve Misafirler",
    "en": "Anatolia Evening Terrace & Guests",
    "ru": "Терраса Anatolia и гости вечером"
  },
  "eveningVisualLabel": {
    "tr": "Akşam Buluşmaları · 18:00 – 00:00",
    "en": "Evening Gatherings · 18:00 – 00:00",
    "ru": "Вечерние встречи · 18:00 – 00:00"
  },
  "eveningVisualBadge": {
    "tr": "Mum Işığı & Sohbet",
    "en": "Candlelight & Conversation",
    "ru": "Свечи и беседы"
  },
  "eveningVisualTitle": {
    "tr": "Uzun Akdeniz Akşamları",
    "en": "Unhurried Mediterranean Evenings",
    "ru": "Неспешные средиземноморские вечера"
  },
  "eveningVisualText": {
    "tr": "İmza Kokteyller · Kömürde Izgara · Kalkan Esintisi",
    "en": "Signature Cocktails · Charcoal Grill · Kalkan Breeze",
    "ru": "Авторские коктейли · Гриль на углях · Бриз Калкана"
  },
  "pizzaVisualAlt": {
    "tr": "Taş Fırın ve Akdeniz Lezzetleri",
    "en": "Stone Oven & Mediterranean Flavours",
    "ru": "Каменная печь и средиземноморские вкусы"
  },
  "pizzaVisualLabel": {
    "tr": "Taş Fırın & Lezzet",
    "en": "Stone Oven Flavours",
    "ru": "Блюда из каменной печи"
  },
  "pizzaVisualBadge": {
    "tr": "Odun Ateşi",
    "en": "Wood-fired",
    "ru": "Дровяная печь"
  },
  "pizzaVisualTitle": {
    "tr": "Taş Fırın Lezzetleri",
    "en": "Stone Oven Classics",
    "ru": "Блюда из каменной печи"
  },
  "pizzaVisualText": {
    "tr": "Çıtır İtalyan Pizzalar & Taze Akdeniz Tabakları",
    "en": "Crisp Italian Pizza & Fresh Mediterranean Dishes",
    "ru": "Хрустящая итальянская пицца и свежие средиземноморские блюда"
  },
  "expandCategories": { "tr": "Tümünü aç", "en": "Expand all", "ru": "Развернуть все" },
  "collapseCategories": { "tr": "Tümünü kapat", "en": "Collapse all", "ru": "Свернуть все" },
  "agencyCredit": { "tr": "Web tasarım & yazılım", "en": "Website design & development", "ru": "Дизайн и разработка сайта" }
} as const;

export type MessageKey = keyof typeof UI_MESSAGES;
export function t(language: Language, key: MessageKey, values: Record<string, string | number> = {}): string {
  return UI_MESSAGES[key][language].replace(/\{(\w+)\}/g, (match, name: string) => String(values[name] ?? match));
}

export function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (LANGUAGES.includes(saved as Language)) return saved as Language;
  } catch { /* Keep the site usable when browser storage is unavailable. */ }
  return 'tr';
}
