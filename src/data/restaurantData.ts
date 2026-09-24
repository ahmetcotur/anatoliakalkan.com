import { MenuItem, SignatureCocktail } from '../types';

export const RESTAURANT_INFO = {
  brandName: 'Anatolia Food & Drink',
  tagline: {
    tr: "Kalkan'da güzel bir masa, iyi bir akşam.",
    en: "A good table. A great evening in Kalkan.",
  },
  heroSubtext: {
    tr: "Anatolia Food & Drink'te gün, özenle hazırlanan lezzetlerle başlar; akşam, taş fırın lezzetleri, taze deniz ürünleri ve imza kokteyllerle devam eder.",
    en: "Join us for thoughtfully prepared food, stone-oven classics, daily fresh seafood, signature cocktails and an unhurried evening in Kalkan.",
  },
  aboutShort: {
    tr: "Şehitler Caddesi'nde günün farklı saatlerine eşlik eden bir buluşma noktasıyız. Kahvaltı için uğrayın, taş fırın lezzetlerini tadın, bir imza kokteylle akşamı kendi ritminizde yaşayın.",
    en: "Find us on Şehitler Street for wholesome breakfasts, stone-oven pizzas, fresh seafood, and craft cocktails. Drop in for a meal, stay for a drink and make the night your own.",
  },
  aboutStory: {
    tr: "Kalkan'ın tarihi taş dokusu ve Akdeniz esintilerinin buluştuğu Şehitler Caddesi'nde yer alan Anatolia Food & Drink; güler yüzlü bir aile işletmesi sıcaklığıyla zengin Akdeniz mutfağını bir araya getiriyor. Sabahları zengin Türk ve İngiliz kahvaltılarıyla güne başlarken, öğlen taş fırından yeni çıkmış çıtır pizzalar, sulu burgerler ve hafif taze salatalar sunuyoruz. Gün batımıyla birlikte masalarımız; özenle kurgulanmış imza kokteyller, kömür ateşinde taze levrek, çipura, orfoz ve 230g özel dinlendirilmiş bonfilelerle unutulmaz Kalkan akşamlarına ev sahipliği yapıyor.",
    en: "Located on Şehitler Street where historic Kalkan character meets the Mediterranean breeze, Anatolia Food & Drink pairs warm, family-run hospitality with authentic dining. We welcome mornings with rich breakfast spreads, serve freshly baked stone-oven pizzas, smash burgers and crisp salads by day, and transition into twilight with bespoke signature cocktails, charcoal-grilled catch of the day, and succulent 230g fillet steaks.",
  },
  address: "Kalkan, Şehitler Cd. No: 41, 07960 Kaş/Antalya",
  phone: "+90 543 408 82 84",
  phoneRaw: "905434088284",
  email: "anatoliakalkan@gmail.com",
  openingHours: "Her gün / Daily: 09.00 – 00.00",
  openingHoursStructured: [
    { dayTr: "Pazartesi", dayEn: "Monday", hours: "09:00 – 00:00" },
    { dayTr: "Salı", dayEn: "Tuesday", hours: "09:00 – 00:00" },
    { dayTr: "Çarşamba", dayEn: "Wednesday", hours: "09:00 – 00:00" },
    { dayTr: "Perşembe", dayEn: "Thursday", hours: "09:00 – 00:00" },
    { dayTr: "Cuma", dayEn: "Friday", hours: "09:00 – 00:00" },
    { dayTr: "Cumartesi", dayEn: "Saturday", hours: "09:00 – 00:00" },
    { dayTr: "Pazar", dayEn: "Sunday", hours: "09:00 – 00:00" },
  ],
  socials: {
    instagram: "https://www.instagram.com/anatoliakalkan/",
    facebook: "https://www.facebook.com/anatoliakalkan/",
    googleMaps: "https://share.google/BuPAalYPOC18KsQv9",
    tripadvisorPrimary: "https://www.tripadvisor.com.tr/Restaurant_Review-g297965-d34688854-Reviews-Anatolia_Food_Drink-Kas_Turkish_Mediterranean_Coast.html",
    tripadvisorSecondary: "https://www.tripadvisor.com.tr/Restaurant_Review-g297965-d34688609-Reviews-Anatolia_Food_Drink-Kas_Turkish_Mediterranean_Coast.html",
  }
};

export const SIGNATURE_COCKTAILS: SignatureCocktail[] = [
  {
    id: 'kuytu-sunset',
    name: "Kuytu Sunset",
    subtitle: {
      tr: "Gordon's Cin, Campari, Çarkıfelek & Taze Limon",
      en: "Gordon's Gin, Campari, Passion Fruit & Fresh Lemon"
    },
    description: {
      tr: "Kalkan semalarındaki gün batımı renklerinden ilham alan imza içeceğimiz; egzotik çarkıfelek meyvesi ile Campari'nin acı-tatlı asaletini cinle buluşturur.",
      en: "Inspired by Kalkan's breathtaking sunset horizons, blending aromatic gin, bittersweet Campari, passion fruit nectar and fresh lemon juice."
    },
    ingredients: {
      tr: "Gordon's Gin, Campari, Çarkıfelek Meyvesi (Passion Fruit), Limon Suyu, Şeker Şurubu",
      en: "Gordon's Gin, Campari, Passion Fruit Purée, Fresh Lemon Juice, Simple Syrup"
    },
    flavorProfile: {
      tr: "Mayhoş, tropikal, hafif acı-tatlı ve son derece ferahlatıcı",
      en: "Bittersweet, tart passionfruit notes, crisp and vibrant finish"
    },
    glass: "Stemmed Coupe Glass",
    baseAlcohol: "Gordon's Gin & Campari",
    price: 450,
    accentColor: "#E0533C"
  },
  {
    id: 'anatolia-sunset',
    name: "Anatolia Sunset",
    subtitle: {
      tr: "Ege & Akdeniz Narenciyesi ile Nar Dengesi",
      en: "Pomegranate & Bergamot Citrus Harmony"
    },
    description: {
      tr: "Taze sıkılmış yerel nar suyu, Akdeniz bergamotu ve aromatik botanik cin ile hazırlanan kırmızı yakut ışıltılı imza kokteylimiz.",
      en: "A sparkling ruby signature featuring pressed local pomegranate, wild Mediterranean bergamot, artisanal gin and fresh rosemary."
    },
    ingredients: {
      tr: "Cin, İtalyan Bergamot Likörü, Taze Nar Suyu, Limon, Maden Suyu, Biberiye",
      en: "Artisanal Gin, Bergamot Liqueur, Fresh Pomegranate Juice, Lemon, Sparkling Soda, Rosemary Sprig"
    },
    flavorProfile: {
      tr: "Canlandırıcı, mayhoş nar notaları, bitkisel bergamot ferahlığı",
      en: "Crisp, gently tart, botanical citrus with ruby pomegranate finish"
    },
    glass: "Coupette Glass",
    baseAlcohol: "Gin & Bergamot",
    price: 450,
    accentColor: "#C84B31"
  },
  {
    id: 'mediterranean-breeze',
    name: "Mediterranean Breeze",
    subtitle: {
      tr: "Smirnoff Votka, Blue Curaçao & Misket Limonu",
      en: "Smirnoff Vodka, Blue Curaçao & Crisp Lime"
    },
    description: {
      tr: "Akdeniz'in masmavi sularını kadehinize taşıyan, sıcak Kalkan gecelerinin en serinletici ve ferahlatıcı yudumu.",
      en: "Capturing the turquoise waters of Kalkan bay in a vibrant cooling glass, crafted with premium vodka, blue curaçao and sparkling citrus."
    },
    ingredients: {
      tr: "Smirnoff Vodka, Blue Curaçao, Taze Lime Suyu, Sprite",
      en: "Smirnoff Vodka, Blue Curaçao, Fresh Lime Juice, Sprite Splash"
    },
    flavorProfile: {
      tr: "Buz gibi, turunçgil aromalı, canlı ve tatlı-ekşi dengeli",
      en: "Ice-cold, electric citrus aroma, crisp and effervescent"
    },
    glass: "Highball / Hurricane Glass",
    baseAlcohol: "Smirnoff Vodka",
    price: 420,
    accentColor: "#0284C7"
  },
  {
    id: 'thyme-garden',
    name: "Thyme Garden",
    subtitle: {
      tr: "Tekila, Kekik Likörü & Organik Agave",
      en: "Tequila, Thyme Liqueur & Mountain Agave"
    },
    description: {
      tr: "Toros Dağları'nın yabani dağ kekiği infüzyonu, agave nektarı ve premium tekilanın aromatik Akdeniz buluşması.",
      en: "Crafted with wild mountain thyme harvested from the nearby Taurus slopes, rounded by golden agave nectar and crisp lime."
    },
    ingredients: {
      tr: "Tequila, Kekik Likörü, Taze Lime Suyu, Agave Şurubu",
      en: "Tequila, House Thyme Liqueur, Fresh Lime Juice, Agave Nectar"
    },
    flavorProfile: {
      tr: "Odunsu, taze kekik kokulu, dengeli tatlı-ekşi gövde",
      en: "Aromatic herbal, wild thyme mist, balanced botanical body"
    },
    glass: "Old Fashioned Rocks Glass",
    baseAlcohol: "Tequila",
    price: 460,
    accentColor: "#B58434"
  },
  {
    id: 'fig-and-oat',
    name: "Fig & Oat",
    subtitle: {
      tr: "Viski, İncir Likörü & Kavrulmuş Yulaf",
      en: "Whiskey, Fig Liqueur & Toasted Oat Milk"
    },
    description: {
      tr: "Güneşte olgunlaşmış Ege incirinin bal tadı, kavrulmuş yulaf şurubunun kadifemsi ipeksiliği ve yıllanmış viskinin meşe sıcaklığı.",
      en: "Velvety rich cocktail celebrating sun-dried Aegean figs, toasted house oat syrup and smooth oak-aged whiskey."
    },
    ingredients: {
      tr: "Whiskey, İncir Likörü, Yulaf Şurubu, Angostura Bitters",
      en: "Whiskey, Fig Liqueur, Oat Milk Syrup, Angostura Aromatic Bitters"
    },
    flavorProfile: {
      tr: "Kadifemsi, karamelize kuru incir, fındıksı ve zengin",
      en: "Velvety, caramelized fruit, nutty warmth and rounded depth"
    },
    glass: "Tumbler on Hand-Carved Ice",
    baseAlcohol: "Whiskey",
    price: 470,
    accentColor: "#8C4A32"
  },
  {
    id: 'anatolian-gold',
    name: "Anatolian Gold",
    subtitle: {
      tr: "Koyu Rom, Kayısı Püresi & Baharat Şurubu",
      en: "Dark Rum, Apricot Purée & Spiced Nectar"
    },
    description: {
      tr: "Anadolu güneşiyle kurutulmuş Malatya kayısısı, koyu romun karamel nüansları ve özel baharat infüzyonuyla altın renkli bir şaheser.",
      en: "Golden sun-dried Anatolian apricots paired with aromatic dark rum, spiced syrup and fresh lime touch."
    },
    ingredients: {
      tr: "Dark Rum, Kayısı Püresi, Misket Limonu Suyu, Baharatlı Şeker Şurubu",
      en: "Dark Rum, Sun-Dried Apricot Purée, Fresh Lime Juice, House Spiced Syrup"
    },
    flavorProfile: {
      tr: "Meyvemsi, hafif baharatlı, derin karamel ve turunç dengesi",
      en: "Rich apricot fruitiness, spiced warmth and luscious finish"
    },
    glass: "Chilled Snifter / Coupe",
    baseAlcohol: "Dark Rum",
    price: 460,
    accentColor: "#D48B38"
  },
  {
    id: 'relax-orange',
    name: "Relax Orange",
    subtitle: {
      tr: "Aperol, Prosecco & Taze Akdeniz Portakalı",
      en: "Aperol, Prosecco & Fresh Mediterranean Orange"
    },
    description: {
      tr: "Akşamüstü terasta Kalkan gün batımını karşılarken; İtalyan Prosecco köpüğü, Aperol ve taze sıkılmış tatlı portakal dilimleriyle mükemmel bir aperitif.",
      en: "The quintessential golden hour aperitivo on our terrace: bubbly Prosecco, Aperol, splash of sparkling soda and sliced sweet oranges."
    },
    ingredients: {
      tr: "Aperol, İtalyan Prosecco, Soda, Taze Portakal Dilimleri",
      en: "Aperol, Italian Prosecco, Sparkling Soda, Fresh Orange Slices"
    },
    flavorProfile: {
      tr: "Köpüklü, narenciye tatlılığı, canlandırıcı ve hafif",
      en: "Sparkling, bittersweet citrus, effervescent and easy-drinking"
    },
    glass: "Large Wine Goblet with Ice",
    baseAlcohol: "Aperol & Prosecco",
    price: 430,
    accentColor: "#F97316"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // ===================== BREAKFASTS =====================
  {
    id: 'bf-english',
    category: 'breakfast',
    name: {
      tr: "İngiliz Kahvaltısı (English Breakfast)",
      en: "Full English Breakfast"
    },
    description: {
      tr: "Dana bacon/pastırma, sosis, mantar sote, ızgara domates, sahanda yumurta, fırınlanmış kuru fasulye ve kızarmış tereyağlı ekmek.",
      en: "Bacon, savory sausages, sautéed mushrooms, grilled tomatoes, fried eggs, baked beans, and buttered toast."
    },
    price: 950,
    popular: true,
    ingredients: {
      tr: "Bacon, sosis, mantar, domates, yumurta, fasulye, kızarmış ekmek",
      en: "Bacon, sausages, mushrooms, tomatoes, eggs, baked beans, toasted bread"
    }
  },
  {
    id: 'bf-turkish',
    category: 'breakfast',
    name: {
      tr: "Geleneksel Türk Kahvaltısı",
      en: "Traditional Turkish Breakfast"
    },
    description: {
      tr: "Sahanda köy yumurtası, Kaş beyaz peyniri ve kaşar, söğüş domates & salatalık, siyah & yeşil zeytinler, petek bal, ev yapımı reçeller, salam ve sıcak ekmek sepeti.",
      en: "Farm-fresh eggs, local cheeses, garden tomatoes, crisp cucumbers, olives, honeycomb, house jams, salami, and freshly baked bread basket."
    },
    price: 750,
    popular: true,
    dietary: ['chef-choice'],
    ingredients: {
      tr: "Yumurta, domates, salatalık, beyaz peynir, kaşar, zeytin, bal, ev reçeli, salam, ekmek",
      en: "Eggs, tomatoes, cucumbers, artisanal cheeses, olives, honey, house jam, cold cuts, fresh bread"
    }
  },
  {
    id: 'bf-avocado-toast',
    category: 'breakfast',
    name: {
      tr: "Kızarmış Ekmek Üzeri Avokado & Labne",
      en: "Avocado on Artisan Toast"
    },
    description: {
      tr: "Kızarmış taş fırın ekşi mayalı ekmek üzerinde hafif labne kreması, ezilmiş taze avokado, sızma zeytinyağı ve baharatlar.",
      en: "Toasted artisan sourdough bread layered with velvety mild cream cheese, seasoned fresh mashed avocado, and extra virgin olive oil."
    },
    price: 550,
    dietary: ['vegetarian'],
    ingredients: {
      tr: "Labne kreması, taze avokado, kızarmış ekmek, çörek otu, zeytinyağı",
      en: "Cream cheese, mashed avocado, artisan toast, nigella seeds, olive oil"
    }
  },
  {
    id: 'bf-scrambled-toast',
    category: 'breakfast',
    name: {
      tr: "Kızarmış Ekmek Üzeri Çırpılmış Yumurta",
      en: "Scrambled Eggs on Toast"
    },
    description: {
      tr: "Tereyağında kremamsı kıvamda çırpılmış köy yumurtası, kızarmış çıtır ekmek dilimleri, çeri domates ve taze yeşillikler.",
      en: "Silky scrambled farm eggs on golden toasted bread, served with cherry tomatoes and garden greens."
    },
    price: 400,
    dietary: ['vegetarian']
  },
  {
    id: 'bf-fried-egg-toast',
    category: 'breakfast',
    name: {
      tr: "Kızarmış Ekmek Üzerinde Sahanda Yumurta",
      en: "Fried Egg on Toast"
    },
    description: {
      tr: "Kızarmış ekmek dilimleri üzerinde göz yumurta, taze Akdeniz yeşillikleri ve baharatlı tereyağı gezdirilmiş.",
      en: "Sunny-side-up fried eggs over toasted bread with garden greens and a touch of melted butter."
    },
    price: 400,
    dietary: ['vegetarian']
  },
  {
    id: 'bf-blt-sandwich',
    category: 'breakfast',
    name: {
      tr: "BLT Gurme Sandviç",
      en: "Classic BLT Sandwich"
    },
    description: {
      tr: "Çıtır ızgara pastırma/bacon dilimleri, sulu tarla domatesi, taze gevrek marul ve özel Anatolia sosu ile sıcak sandviç ekmeğinde.",
      en: "Crispy grilled bacon slices, ripe heirloom tomatoes, crisp iceberg lettuce and house sauce served in warm artisan bread."
    },
    price: 600,
    ingredients: {
      tr: "Pastırma/bacon, domates, marul, sandviç ekmeği, sos",
      en: "Bacon, fresh tomatoes, crisp lettuce, artisan bread, sauce"
    }
  },
  {
    id: 'bf-beans-toast',
    category: 'breakfast',
    name: {
      tr: "Kızarmış Ekmek Üzeri Fırın Fasulye",
      en: "Baked Beans on Toast"
    },
    description: {
      tr: "Özel domates sosunda fırınlanmış tatlı İngiliz fasulyeleri, tereyağlı kızarmış ekmek üzerinde.",
      en: "Savory baked beans in rich tomato sauce served steaming over buttered golden toast."
    },
    price: 400,
    dietary: ['vegetarian']
  },
  {
    id: 'bf-menemen',
    category: 'breakfast',
    name: {
      tr: "Geleneksel Bakır Tavada Menemen",
      en: "Traditional Menemen"
    },
    description: {
      tr: "Ağır ateşte pişen köy yumurtaları, tarla domatesi, tatlı biber ve taze kekik ile bakır tavada sıcak servis.",
      en: "Free-range eggs gently scrambled with sautéed ripe tomatoes, mild sweet peppers, herbs, and farm butter."
    },
    price: 550,
    popular: true,
    dietary: ['vegetarian']
  },
  {
    id: 'bf-omlet-sucuk-peynir',
    category: 'breakfast',
    name: {
      tr: "Sucuklu & Kaşarlı Omlet",
      en: "Turkish Sausage & Cheese Omelette"
    },
    description: {
      tr: "Kasap sucuğu, eriyen kaşar peyniri ve çırpılmış 3 köy yumurtası; patates ve yeşillik garnitürü ile.",
      en: "Grilled spiced Turkish sucuk sausage folded into melted aged kashar cheese and fluffy farm eggs."
    },
    price: 600,
    popular: true
  },
  {
    id: 'bf-omlet-mantar-peynir',
    category: 'breakfast',
    name: {
      tr: "Mantarlı & Peynirli Omlet",
      en: "Mushroom & Cheese Omelette"
    },
    description: {
      tr: "Sotelenmiş taze kültür mantarı, eriyen peynir ve taze baharatlarla kabarık omlet.",
      en: "Sautéed forest mushrooms, melted cheese and fresh garden herbs."
    },
    price: 550,
    dietary: ['vegetarian']
  },
  {
    id: 'bf-omlet-pastirma',
    category: 'breakfast',
    name: {
      tr: "Pastırmalı / Bacon Omlet",
      en: "Crispy Bacon & Pastırma Omelette"
    },
    description: {
      tr: "Tavada hafif çıtırlaştırılmış pastırma dilimleri ile hazırlanan zengin kahvaltı omleti.",
      en: "Fluffy omelette filled with sizzled artisan cured pastırma/bacon slices."
    },
    price: 650
  },
  {
    id: 'bf-crepe-lemon',
    category: 'breakfast',
    name: {
      tr: "Limon & Şekerli Fransız Krepi",
      en: "Lemon & Sugar Crepe"
    },
    description: {
      tr: "Tavada taze dökülen ince krep, Kaş limonu suyu ve pudra şekeri serpiştirmesi ile.",
      en: "Freshly griddled delicate thin crepe dusted with fine sugar and freshly squeezed local lemon."
    },
    price: 400,
    dietary: ['vegetarian']
  },
  {
    id: 'bf-crepe-chocolate-banana',
    category: 'breakfast',
    name: {
      tr: "Çikolatalı & Muzlu Krep",
      en: "Chocolate & Banana Crepe"
    },
    description: {
      tr: "Eriyen sıcak Belçika çikolatası sosu, dilimlenmiş yerli muz ve fındık parçacıkları.",
      en: "Warm thin crepe smothered in rich melted chocolate sauce, fresh sliced banana and roasted hazelnuts."
    },
    price: 400,
    dietary: ['vegetarian']
  },
  {
    id: 'bf-crepe-strawberry-banana',
    category: 'breakfast',
    name: {
      tr: "Çilekli & Muzlu Krep",
      en: "Strawberry & Banana Crepe"
    },
    description: {
      tr: "Taze çilek ve muz dilimleri, çikolata sosu ve pudra şekeri ile katlanmış krep.",
      en: "Fresh sliced strawberries and sweet bananas layered with chocolate drizzle."
    },
    price: 400,
    dietary: ['vegetarian']
  },

  // ===================== MEZZE & STARTERS =====================
  {
    id: 'mz-mixed-plate',
    category: 'mezze',
    name: {
      tr: "Karışık Ege & Akdeniz Meze Tabağı",
      en: "Anatolia Mixed Meze Platter"
    },
    description: {
      tr: "Günün en taze 5 soğuk mezesi: İpeksi humus, haydari, şakşuka, atom ve köz patlıcan salatası; ılık taş fırın pidesi eşliğinde.",
      en: "Chef's daily selection of 5 signature cold mezzes: silky hummus, creamy haydari, spiced atom, shakshuka and smoked eggplant, served with warm oven pita."
    },
    price: 680,
    popular: true,
    dietary: ['vegetarian', 'chef-choice']
  },
  {
    id: 'mz-haydari',
    category: 'mezze',
    name: {
      tr: "Süzme Yoğurtlu Haydari",
      en: "Traditional Haydari"
    },
    description: {
      tr: "Koyu kıvamlı süzme yoğurt, dövülmüş taze sarımsak, dereotu, taze nane ve soğuk sıkım zeytinyağı.",
      en: "Strained thick farm yoghurt whipped with garlic, fresh dill, garden mint and cold-pressed olive oil."
    },
    price: 280,
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: 'mz-hummus',
    category: 'mezze',
    name: {
      tr: "Taş Fırında Ilık Humus",
      en: "Warm Stone-Oven Hummus"
    },
    description: {
      tr: "Kremamsı nohut püresi, kaliteli tahin, kimyon ve sarımsak; fırında ısıtılarak tereyağlı pul biberle servis edilir.",
      en: "Silky smooth chickpea purée, premium sesame tahini, cumin, garlic, baked warm and drizzled with pepper butter."
    },
    price: 290,
    popular: true,
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: 'mz-atom',
    category: 'mezze',
    name: {
      tr: "Acı Biberli Tereyağlı Atom",
      en: "Spicy Atom (Whipped Yoghurt & Dried Chillies)"
    },
    description: {
      tr: "Kızgın tereyağında kavrulmuş kurutulmuş Arnavut acı biberleri, soğuk süzme yoğurt yatağında.",
      en: "Crisp sun-dried chillies quickly sizzled in foaming butter over a chilled bed of thick strained garlic yoghurt."
    },
    price: 280,
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: 'mz-shakshuka',
    category: 'mezze',
    name: {
      tr: "Akdeniz Şakşuka",
      en: "Mediterranean Shakshuka"
    },
    description: {
      tr: "Küp doğranmış kızarmış patlıcan, patates ve biberlerin sarımsaklı domates sosuyla buluşması.",
      en: "Lightly fried aubergine, potatoes and sweet peppers tossed in a rich, slow-simmered garlic tomato reduction."
    },
    price: 280,
    dietary: ['vegetarian', 'vegan']
  },
  {
    id: 'mz-mucver',
    category: 'mezze',
    name: {
      tr: "Çıtır Kabak Mücveri",
      en: "Crispy Zucchini Patties (Mücver)"
    },
    description: {
      tr: "Rendelenmiş taze kabak, dereotu, taze soğan ve beyaz peynir ile altın sarısı kızartılmış; ev yapımı tartar sos ile.",
      en: "Golden crispy courgette fritters packed with fresh dill, scallions and feta, served with house tartar sauce."
    },
    price: 360,
    popular: true,
    dietary: ['vegetarian']
  },
  {
    id: 'mz-calamari',
    category: 'mezze',
    name: {
      tr: "Çıtır Kalamar Tava",
      en: "Deep-Fried Calamari Rings"
    },
    description: {
      tr: "Özel baharatlı harçla çıtır kızartılmış yumuşacık taze kalamar halkaları, taze yeşillikler ve limonlu tartar sos ile.",
      en: "Tender calamari rings coated in seasoned batter and flash-fried to golden crispness, served with house tartar sauce and lemon wedge."
    },
    price: 520,
    popular: true,
    dietary: ['chef-choice']
  },
  {
    id: 'mz-garlic-prawns',
    category: 'mezze',
    name: {
      tr: "Tereyağlı & Sarımsaklı Karides Güveç",
      en: "Sizzling Garlic Prawns"
    },
    description: {
      tr: "Güveçte cızırdayan taze karidesler, bol tereyağı, sarımsak, pul biber ve taze maydanoz.",
      en: "Plump prawns sautéed in foaming butter, crushed garlic, chilli flakes and fresh parsley served bubbling hot."
    },
    price: 580,
    popular: true
  },
  {
    id: 'mz-cheese-rolls',
    category: 'mezze',
    name: {
      tr: "Çıtır Sigara Böreği",
      en: "Crispy Feta Cheese Rolls"
    },
    description: {
      tr: "İncecik el açması yufkaya sarılı beyaz peynir ve maydanoz, altın renginde çıtır çıtır servis edilir.",
      en: "Crispy rolled filo pastry cigars stuffed with seasoned feta cheese and parsley, served piping hot."
    },
    price: 320,
    dietary: ['vegetarian']
  },
  {
    id: 'mz-fried-halloumi',
    category: 'mezze',
    name: {
      tr: "Kızarmış Hellim Peyniri",
      en: "Pan-Fried Halloumi Cheese"
    },
    description: {
      tr: "Tavada ızgaralanmış altın sarısı Kıbrıs hellim dilimleri, kekikli sızma zeytinyağı ve nar ekşisi ile.",
      en: "Thick slices of Cypriot halloumi pan-seared until golden, finished with wild oregano and pomegranate glaze."
    },
    price: 380,
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: 'mz-stuffed-mushroom',
    category: 'mezze',
    name: {
      tr: "Fırında Sarımsaklı Dolgulu Mantar",
      en: "Oven-Baked Stuffed Garlic Mushrooms"
    },
    description: {
      tr: "Taş fırında sarımsaklı tereyağı ve eriyen kaşar peyniriyle graten yapılmış dolgulu mantarlar.",
      en: "Plump mushroom caps baked with garlic butter, fresh herbs, and bubbling golden cheese."
    },
    price: 340,
    dietary: ['vegetarian']
  },

  // ===================== SALADS =====================
  {
    id: 'sl-halloumi',
    category: 'mezze',
    name: {
      tr: "Izgara Hellim Peynirli Akdeniz Salatası",
      en: "Grilled Halloumi Salad"
    },
    description: {
      tr: "Izgara sıcak hellim peyniri, çıtır marul, körpe roka, tarla domatesi, salatalık, kırmızı soğan, maydanoz ve tatlı mısır.",
      en: "Golden grilled halloumi cheese over crisp lettuce, wild rocket, tomatoes, cucumbers, red onion, parsley and sweetcorn."
    },
    price: 550,
    dietary: ['vegetarian']
  },
  {
    id: 'sl-avocado',
    category: 'mezze',
    name: {
      tr: "Kalkan Avokado Salatası",
      en: "Fresh Avocado Salad"
    },
    description: {
      tr: "Olgun taze avokado dilimleri, göbek marul, roka, kırmızı soğan, çeri domates, salatalık, mısır ve narenciye zeytinyağı sosu.",
      en: "Ripe avocado slices, mixed crisp greens, rocket, red onions, cherry tomatoes, sweetcorn and citrus-vinaigrette."
    },
    price: 650,
    dietary: ['vegetarian', 'vegan', 'gluten-free']
  },
  {
    id: 'sl-greek',
    category: 'mezze',
    name: {
      tr: "Klasik Yunan Salatası (Greek Salad)",
      en: "Traditional Greek Salad"
    },
    description: {
      tr: "Kaba doğranmış sulu domates, çıtır salatalık, kaliteli beyaz peynir bloğu, Kalamata zeytini, kırmızı soğan ve kekikli sızma zeytinyağı.",
      en: "Vine tomatoes, cucumbers, thick block of feta cheese, kalamata olives, red onions, oregano and extra virgin olive oil."
    },
    price: 450,
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: 'sl-seafood',
    category: 'mezze',
    name: {
      tr: "Taze Deniz Ürünleri Salatası",
      en: "Mediterranean Seafood Salad"
    },
    description: {
      tr: "Sotelenmiş taze karidesler, enginar kalbi, kırmızı yapraklı kıvırcık, roka, mor soğan ve limonlu zeytinyağı sosu.",
      en: "Succulent pan-seared prawns, tender artichoke hearts, mixed baby greens, rocket, shaved red onions and lemon-herb vinaigrette."
    },
    price: 850,
    popular: true,
    dietary: ['chef-choice']
  },
  {
    id: 'sl-rocket',
    category: 'mezze',
    name: {
      tr: "Cevizli & Parmesanlı Roka Salatası",
      en: "Rocket, Walnut & Parmesan Salad"
    },
    description: {
      tr: "Körpe Akdeniz rokası, çeri domates, kırmızı soğan, ince traşlanmış parmesan peyniri, kıtır ceviz ve taze nar taneleri.",
      en: "Fresh baby rocket leaves, cherry tomatoes, shaved aged parmesan, toasted walnuts and sweet pomegranate arils."
    },
    price: 450,
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: 'sl-tuna',
    category: 'mezze',
    name: {
      tr: "Ton Balıklı Salata",
      en: "Classic Tuna Salad"
    },
    description: {
      tr: "Lezzetli ton balığı parçaları, kıvırcık marul, domates, tatlı mısır, salatalık, kornişon turşu ve mor soğan.",
      en: "Flaked premium tuna, crisp lettuce, juicy tomatoes, sweetcorn, cucumbers, rocket, pickled gherkins and red onion."
    },
    price: 650
  },
  {
    id: 'sl-chicken',
    category: 'mezze',
    name: {
      tr: "Portakal Soslu Izgara Tavuk Salatası",
      en: "Grilled Chicken & Orange Glaze Salad"
    },
    description: {
      tr: "Kömürde ızgaralanmış tavuk göğsü dilimleri, kıvırcık marul, kırmızı kapya biber, soğan, sızma zeytinyağı ve taze portakal sosu.",
      en: "Grilled chicken breast strips, mixed greens, sweet red peppers, sliced onions, extra virgin olive oil and house orange-citrus dressing."
    },
    price: 700
  },

  // ===================== STONE OVEN PIZZAS =====================
  {
    id: 'pz-margherita',
    category: 'pizza_pide',
    name: {
      tr: "Taş Fırın Pizza Margherita",
      en: "Stone-Oven Pizza Margherita"
    },
    description: {
      tr: "İtalyan domates sosu, bol mozzarella peyniri, sızma zeytinyağı ve taze fesleğen yaprakları.",
      en: "Slow-simmered San Marzano tomato sauce, fior di latte mozzarella, cold-pressed olive oil, and fresh garden basil."
    },
    price: 520,
    popular: true,
    dietary: ['vegetarian']
  },
  {
    id: 'pz-four-cheese',
    category: 'pizza_pide',
    name: {
      tr: "Dört Peynirli Pizza (Quattro Formaggi)",
      en: "Four Cheese Pizza (Quattro Formaggi)"
    },
    description: {
      tr: "Mozzarella, gorgonzola/rokfor, parmesan ve yöresel tulum peynirinin muhteşem taş fırın uyumu.",
      en: "Mozzarella, rich gorgonzola blue cheese, aged parmesan, and regional goat cheese on crisp charred crust."
    },
    price: 620,
    dietary: ['vegetarian']
  },
  {
    id: 'pz-akdeniz',
    category: 'pizza_pide',
    name: {
      tr: "Akdeniz Spesiyal Pizza",
      en: "Mediterranean Garden Pizza"
    },
    description: {
      tr: "Beyaz peynir, tarla domatesi, yeşil ve kırmızı kapya biber, siyah zeytin ve taze maydanoz.",
      en: "Crumbled white feta, vine tomatoes, sweet green and red peppers, black olives, and garden parsley."
    },
    price: 580,
    dietary: ['vegetarian']
  },
  {
    id: 'pz-seafood',
    category: 'pizza_pide',
    name: {
      tr: "Deniz Mahsüllü Taş Fırın Pizza",
      en: "Seafood Pizza (Prawns & Calamari)"
    },
    description: {
      tr: "Domates sosu ve mozzarella üzerinde taze karides parçaları, kalamar halkaları ve sarımsaklı zeytinyağı dokunuşu.",
      en: "Mozzarella crust topped with tender succulent prawns, calamari rings, garlic-infused olive oil, and fresh herbs."
    },
    price: 750,
    popular: true,
    dietary: ['chef-choice']
  },
  {
    id: 'pz-mixed',
    category: 'pizza_pide',
    name: {
      tr: "Karışık Süper Pizza",
      en: "House Mixed Pizza"
    },
    description: {
      tr: "Dana salam, sosis, siyah zeytin, mısır, kırmızı & yeşil biber, mantar ve bol mozzarella.",
      en: "Generously topped with salami, sausages, black olives, sweetcorn, red & green peppers, fresh mushrooms and mozzarella."
    },
    price: 640,
    popular: true
  },
  {
    id: 'pz-meaty',
    category: 'pizza_pide',
    name: {
      tr: "Et Aşkı Pizza (Meaty Pizza)",
      en: "Meaty Pizza (Salami, Sucuk & Sausage)"
    },
    description: {
      tr: "Baharatlı Türk sucuğu, kaliteli dana salam, sosis ve eriyen fırın peyniri.",
      en: "Spiced traditional Turkish sucuk, beef salami, savory sausages and bubbling melted mozzarella."
    },
    price: 680
  },
  {
    id: 'pz-mexican',
    category: 'pizza_pide',
    name: {
      tr: "Meksika Usulü Acılı Pizza",
      en: "Spicy Mexican Pizza"
    },
    description: {
      tr: "Özel baharatlı dana kıyma, acılı sosis, jalapeno biber, mısır ve domates sosu.",
      en: "Seasoned minced beef, spicy sliced sausages, fiery jalapeno chilli peppers, sweetcorn and molten cheese."
    },
    price: 640
  },
  {
    id: 'pz-chicken',
    category: 'pizza_pide',
    name: {
      tr: "Tavuklu & Mısırlı Pizza",
      en: "Roast Chicken Pizza"
    },
    description: {
      tr: "Marine edilmiş tavuk göğsü parçaları, domates, tatlı yeşil biber, mısır ve mozzarella.",
      en: "Herb-marinated chicken breast, sweet green peppers, sweetcorn, diced tomatoes and mozzarella."
    },
    price: 580
  },
  {
    id: 'pz-mushroom',
    category: 'pizza_pide',
    name: {
      tr: "Mantarlı & Soğanlı Pizza",
      en: "Mushroom & Caramelized Onion Pizza"
    },
    description: {
      tr: "Taze dilimlenmiş mantarlar, ince doğranmış soğan, kekik ve bol fırın peyniri.",
      en: "Fresh sliced button mushrooms, delicate onions, fragrant oregano and molten mozzarella."
    },
    price: 520,
    dietary: ['vegetarian']
  },

  // ===================== BURGERS & WRAPS =====================
  {
    id: 'bg-cheeseburger',
    category: 'burgers_wraps',
    name: {
      tr: "Klasik Cheddar Cheeseburger",
      en: "Classic Cheddar Cheeseburger"
    },
    description: {
      tr: "120g dinlendirilmiş el yapımı dana burger köftesi, eriyen sarı cheddar peyniri, domates, marul, kornişon turşu ve çıtır patates kızartması.",
      en: "120g handcrafted beef patty, melted cheddar cheese, ripe tomato, crisp lettuce, pickles and skin-on crispy chips."
    },
    price: 650,
    popular: true
  },
  {
    id: 'bg-bacon-cheeseburger',
    category: 'burgers_wraps',
    name: {
      tr: "Pastırmalı & Cheddarlı Gurme Burger",
      en: "Bacon Cheeseburger"
    },
    description: {
      tr: "120g sulu dana köfte, çıtır ızgara pastırma/bacon dilimleri, çift kat cheddar, domates, marul, turşu ve patates kızartması.",
      en: "120g prime beef patty, sizzled crispy bacon strips, double cheddar cheese, tomato, lettuce, house sauce and chips."
    },
    price: 850,
    popular: true,
    dietary: ['chef-choice']
  },
  {
    id: 'bg-mexican-burger',
    category: 'burgers_wraps',
    name: {
      tr: "Meksika Usulü Acılı Burger",
      en: "Spicy Mexican Burger"
    },
    description: {
      tr: "120g dana köfte, cheddar peyniri, özel acı jalapeno salsa sosu, turşu, marul, domates ve patates kızartması.",
      en: "120g beef patty, melted cheddar, fiery spicy Mexican chilli relish, pickles, lettuce, tomato and chips."
    },
    price: 700
  },
  {
    id: 'bg-chicken-burger',
    category: 'burgers_wraps',
    name: {
      tr: "Çıtır Tavuk Burger (Chicken Burger)",
      en: "Crispy Chicken Burger"
    },
    description: {
      tr: "120g özel pane harçlı çıtır tavuk filetosu, cheddar peyniri, domates, marul, mayonez ve patates kızartması.",
      en: "120g seasoned crispy chicken patty, cheddar cheese, fresh tomato, crisp lettuce, house mayo and chips."
    },
    price: 650
  },
  {
    id: 'wp-chicken',
    category: 'burgers_wraps',
    name: {
      tr: "Özel Soslu Tavuk Dürüm Wrap",
      en: "Grilled Chicken Wrap"
    },
    description: {
      tr: "Izgara tavuk şeritleri, soğan, sulu domates, çıtır turşu, taze marul ve özel kokteyl sosuyla sıcak lavaşta sarılmış.",
      en: "Tender grilled chicken strips, onions, tomatoes, pickles, crisp lettuce and house cocktail sauce rolled in warm tortilla."
    },
    price: 600,
    popular: true
  },
  {
    id: 'wp-meatball',
    category: 'burgers_wraps',
    name: {
      tr: "Izgara Köfte Dürüm Wrap",
      en: "Grilled Meatball Wrap"
    },
    description: {
      tr: "Baharatlı ev yapımı ızgara köfteler, soğan piyazı, domates, turşu, marul ve kokteyl sos ile.",
      en: "Spiced grilled Turkish meatballs, seasoned onions, ripe tomatoes, pickles, lettuce and cocktail sauce in toasted wrap."
    },
    price: 650
  },

  // ===================== PASTAS =====================
  {
    id: 'ps-fettuccine-seafood',
    category: 'mains',
    name: {
      tr: "Deniz Ürünlü Fettuccine",
      en: "Seafood Fettuccine"
    },
    description: {
      tr: "Taze karidesler, kalamar parçaları, kültür mantarı, sarımsak, taze krema ve parmesan ile harmanlanmış taze makarna.",
      en: "Al dente fettuccine tossed with succulent prawns, tender calamari, sautéed mushrooms, garlic and white wine cream sauce."
    },
    price: 950,
    popular: true,
    dietary: ['chef-choice']
  },
  {
    id: 'ps-fettuccine-alfredo',
    category: 'mains',
    name: {
      tr: "Tavuklu & Mantarlı Fettuccine Alfredo",
      en: "Chicken & Mushroom Fettuccine Alfredo"
    },
    description: {
      tr: "Izgara tavuk göğsü dilimleri, tereyağında sotelenmiş mantarlar, sarımsak, kıvamlı krema ve parmesan peyniri.",
      en: "Tender grilled chicken breast, sautéed mushrooms, garlic and velvety parmesan cream reduction."
    },
    price: 850,
    popular: true
  },
  {
    id: 'ps-carbonara',
    category: 'mains',
    name: {
      tr: "Spaghetti Carbonara",
      en: "Classic Spaghetti Carbonara"
    },
    description: {
      tr: "Dana jambon, soğan, maydanoz, ipeksi krema, yumurta sarısı ve taze çekilmiş karabiber.",
      en: "Spaghetti tossed with cured beef ham, sweet onion, fresh parsley, egg yolk and creamy parmesan emulsion."
    },
    price: 850
  },
  {
    id: 'ps-arrabbiata',
    category: 'mains',
    name: {
      tr: "Penne Arrabbiata (Acılı)",
      en: "Penne all\'Arrabbiata"
    },
    description: {
      tr: "Acı kırmızı biberler, sarımsak ve sızma zeytinyağı ile tatlandırılmış geleneksel İtalyan domates soslu penne.",
      en: "Penne pasta in a spicy fiery tomato sauce with crushed garlic, dried red chillies and fresh basil."
    },
    price: 750,
    dietary: ['vegetarian']
  },
  {
    id: 'ps-bolognese',
    category: 'mains',
    name: {
      tr: "Geleneksel Spaghetti Bolognese",
      en: "Slow-Cooked Spaghetti Bolognese"
    },
    description: {
      tr: "Saatlerce kısık ateşte pişen dana kıymalı, taze sebzeli ve domatesli zengin İtalyan sosu ile spaghetti.",
      en: "Spaghetti coated in rich slow-simmered minced beef, root vegetables and herb-infused tomato ragù."
    },
    price: 750
  },

  // ===================== GRILLS & MAINS =====================
  {
    id: 'mn-lamb-shank',
    category: 'mains',
    name: {
      tr: "Fırında Ağır Ateşte Kuzu İncik",
      en: "Slow-Braised Lamb Shank"
    },
    description: {
      tr: "Fırında kemiğinden ayrılacak yumuşaklıkta saatlerce pişen kuzu incik; kadife patates püresi ve kendi demi-glace sosuyla.",
      en: "Fork-tender lamb shank slow-braised for hours until falling off the bone, served over buttery potato mash and rich reduction jus."
    },
    price: 980,
    popular: true,
    dietary: ['chef-choice']
  },
  {
    id: 'mn-lamb-chops',
    category: 'mains',
    name: {
      tr: "Kömür Ateşinde Kuzu Pirzola",
      en: "Charcoal-Grilled Lamb Chops"
    },
    description: {
      tr: "Kekikle marine edilmiş sulu kuzu pirzolalar, közlenmiş domates ve biber, tereyağlı pilav ve patates eşliğinde.",
      en: "Prime tender lamb cutlets marinated in wild thyme and garlic, char-grilled over embers, served with rice and roasted vegetables."
    },
    price: 950,
    popular: true
  },
  {
    id: 'mn-lamb-shish',
    category: 'mains',
    name: {
      tr: "Marine Kuzu Şiş",
      en: "Marinated Lamb Shish Kebab"
    },
    description: {
      tr: "Özel baharat harcında dinlendirilmiş lokum gibi kuzu şiş, közlenmiş biberler, lavaş ve pirinç pilavı ile.",
      en: "Tender skewered marinated lamb cubes flame-grilled to perfection, served with warm flatbread, rice, and roasted peppers."
    },
    price: 880
  },
  {
    id: 'mn-mixed-grill',
    category: 'mains',
    name: {
      tr: "Anatolia Karışık Izgara Ziyafeti",
      en: "Anatolia Mixed Grill Platter"
    },
    description: {
      tr: "Kuzu pirzola, kuzu şiş, tavuk şiş ve ızgara köfte; tereyağlı pilav, közlenmiş sebzeler ve patates cips ile doyurucu tabak.",
      en: "A grand feast featuring lamb chop, lamb shish, chicken skewer, and traditional meatball, served with rice, chips and grilled vegetables."
    },
    price: 1100,
    popular: true,
    dietary: ['chef-choice']
  },
  {
    id: 'mn-meatballs',
    category: 'mains',
    name: {
      tr: "Geleneksel Izgara Köfte",
      en: "Traditional Grilled Meatballs (Köfte)"
    },
    description: {
      tr: "Özel kıyma harcından hazırlanan leziz ızgara köfteler, tereyağlı pirinç pilavı, közlenmiş biber-domates ve patates kızartması ile.",
      en: "Succulent grilled Turkish meatballs seasoned with regional spices, served with buttered rice, chips, and ember-roasted peppers."
    },
    price: 680
  },
  {
    id: 'mn-beef-stroganoff',
    category: 'mains',
    name: {
      tr: "Dana Stroganoff (Beef Stroganoff)",
      en: "Classic Beef Stroganoff"
    },
    description: {
      tr: "İnce şerit dana bonfile dilimleri, mantar, kornişon turşu ve kremsi hardallı demi-glace sos; pirinç pilavı eşliğinde.",
      en: "Tender beef tenderloin strips sautéed with mushrooms and gherkins in a rich sour cream and mustard-infused demi-glace, with rice."
    },
    price: 890,
    popular: true
  },
  {
    id: 'mn-beef-fajita',
    category: 'mains',
    name: {
      tr: "Cızırdayan Döküm Tavada Et Fajita",
      en: "Sizzling Beef Fajitas"
    },
    description: {
      tr: "Döküm tavada cızırdayan marine dana bonfile şeritleri, rengarenk biberler, karamelize soğan, salsa, ekşi krema ve sıcak tortillalar.",
      en: "Sizzling skillet of marinated beef strips, bell peppers, sweet caramelized onions, served with salsa, sour cream and warm flour tortillas."
    },
    price: 890
  },
  {
    id: 'mn-moussaka',
    category: 'mains',
    name: {
      tr: "Fırında Geleneksel Patlıcan Musakka",
      en: "Traditional Aubergine Moussaka"
    },
    description: {
      tr: "Közlenmiş patlıcan, baharatlı dana kıyması ve domates sosunun fırında ağır ağır pişmesiyle oluşan eşsiz Akdeniz lezzeti.",
      en: "Layers of roasted eggplant and savory spiced minced beef in a fragrant tomato-herb sauce, oven-baked and served with rice."
    },
    price: 620
  },
  {
    id: 'mn-chicken-shish',
    category: 'mains',
    name: {
      tr: "Marine Tavuk Şiş",
      en: "Marinated Chicken Shish Kebab"
    },
    description: {
      tr: "Yoğurt ve kekikle marine edilmiş yumuşacık tavuk göğsü şişleri, tereyağlı pilav, ızgara sebzeler ve cips ile.",
      en: "Tender yoghurt and herb-marinated chicken breast skewers grilled over embers, served with rice, chips and grilled vegetables."
    },
    price: 650
  },
  {
    id: 'mn-chicken-curry',
    category: 'mains',
    name: {
      tr: "Köri Soslu Tavuk",
      en: "Chicken Curry & Cream Sauce"
    },
    description: {
      tr: "Doğranmış tavuk göğsü, kültür mantarı, soğan, renkli biberler, aromatik köri ve krema sosu; pirinç pilavı ile.",
      en: "Succulent chicken breast pieces simmered with mushrooms, sweet peppers and onions in aromatic creamy curry sauce, with rice."
    },
    price: 680
  },
  {
    id: 'mn-chicken-schnitzel',
    category: 'mains',
    name: {
      tr: "Altın Sarısı Tavuk Şnitzel",
      en: "Crispy Chicken Schnitzel"
    },
    description: {
      tr: "Özel çıtır pane harçlı tavuk göğsü filetosu, tereyağı, patates kızartması ve ızgara sebzelerle.",
      en: "Breaded and golden-fried tender chicken breast cutlet served with melted butter, crispy chips and grilled vegetables."
    },
    price: 650
  },
  {
    id: 'mn-apricot-chicken',
    category: 'mains',
    name: {
      tr: "Kuru Kayısılı & Kremalı Tavuk",
      en: "Anatolian Apricot Chicken"
    },
    description: {
      tr: "Güneşte kurutulmuş Malatya kayısıları, krema sosu, renkli biberler ve tavuk filetosu; pirinç pilavı ile.",
      en: "Chicken breast simmered with sweet sun-dried apricots, aromatic spices and velvety cream sauce, served with rice."
    },
    price: 720,
    dietary: ['chef-choice']
  },

  // ===================== STEAKS (230gr) =====================
  {
    id: 'st-plain-fillet',
    category: 'mains',
    name: {
      tr: "Kömürde Sade Bonfile (230gr)",
      en: "Char-Grilled Plain Fillet Steak (230g)"
    },
    description: {
      tr: "230 gram özel dinlendirilmiş dana bonfile; buharda pişirilmiş mevsim sebzeleri, kremamsı patates püresi ve et jus sosu ile.",
      en: "230g prime aged tenderloin fillet grilled over wood embers to your liking, served with steamed vegetables and smooth potato mash."
    },
    price: 1100,
    popular: true,
    dietary: ['chef-choice', 'gluten-free']
  },
  {
    id: 'st-pepper',
    category: 'mains',
    name: {
      tr: "Tane Karabiber Soslu Bonfile (230gr)",
      en: "Green Peppercorn Fillet Steak (230g)"
    },
    description: {
      tr: "230g dinlendirilmiş bonfile, konyakla alevlendirilmiş tane karabiberli krema sosu, buharda sebzeler ve patates püresi.",
      en: "230g prime fillet steak pan-finished with flamed brandy and crushed green peppercorn cream sauce, vegetables and potato mash."
    },
    price: 1150,
    popular: true
  },
  {
    id: 'st-mushroom',
    category: 'mains',
    name: {
      tr: "Yabani Mantar Soslu Bonfile (230gr)",
      en: "Wild Mushroom Fillet Steak (230g)"
    },
    description: {
      tr: "230g kömürde bonfile, taze sotelenmiş mantarlar, sarımsak, taze kekik ve kremsi demi-glace sos.",
      en: "230g tenderloin steak smothered in wild forest mushroom cream sauce, steamed vegetables and velvet mash."
    },
    price: 1150
  },
  {
    id: 'st-blue-cheese',
    category: 'mains',
    name: {
      tr: "Rokfor Peynirli Bonfile (230gr)",
      en: "Blue Cheese Fillet Steak (230g)"
    },
    description: {
      tr: "230g sıcak bonfile üzerinde eritilmiş İtalyan gorgonzola / rokfor peyniri sosu, sebze garnitürü ve patates püresi.",
      en: "230g prime fillet steak topped with molten rich blue cheese cream reduction, fresh vegetables and potato purée."
    },
    price: 1200,
    dietary: ['chef-choice']
  },

  // ===================== SEAFOOD =====================
  {
    id: 'sf-sea-bass',
    category: 'seafood',
    name: {
      tr: "Kömür Ateşinde Levrek Fileto",
      en: "Fillet of Fresh Sea Bass"
    },
    description: {
      tr: "Kalkan sularının taze levreği, kemiksiz ızgara fileto; haşlanmış bebek patates, taze Akdeniz yeşillikleri ve balık sosu ile.",
      en: "Crispy skin pan-seared sea bass fillet, served with tender boiled baby potatoes, dressed mixed leaves and delicate fish velouté."
    },
    price: 850,
    popular: true,
    dietary: ['chef-choice', 'gluten-free']
  },
  {
    id: 'sf-sea-bream',
    category: 'seafood',
    name: {
      tr: "Izgara Çipura Fileto",
      en: "Filleted Sea Bream"
    },
    description: {
      tr: "Izgara taze çipura filetosu, limonlu sızma zeytinyağı sosu, haşlanmış patates ve taze bahçe yeşillikleri.",
      en: "Fresh Mediterranean sea bream fillet delicately grilled, dressed with cold-pressed olive oil, lemon, potatoes and greens."
    },
    price: 850,
    dietary: ['gluten-free']
  },
  {
    id: 'sf-prawn-casserole',
    category: 'seafood',
    name: {
      tr: "Fırında Karides Güveci (Prawn Casserole)",
      en: "Oven-Baked Prawn Casserole"
    },
    description: {
      tr: "Taze karidesler, mantar, domates, sarımsak, krema ve eriyen fırın peyniri; tereyağlı pirinç pilavı ile fırından yeni çıkmış servis.",
      en: "Plump prawns baked in a clay dish with mushrooms, tomatoes, garlic, rich cream and molten golden cheese, served with rice."
    },
    price: 880,
    popular: true,
    dietary: ['chef-choice']
  },
  {
    id: 'sf-white-grouper',
    category: 'seafood',
    name: {
      tr: "Beyaz Orfoz Fileto (White Grouper)",
      en: "Mediterranean White Grouper"
    },
    description: {
      tr: "Akdeniz'in en seçkin beyaz eti: Izgara orfoz fileto, haşlanmış patates, limonlu yeşillikler ve özel balık sosu ile.",
      en: "Prized Mediterranean white grouper steak delicately grilled over charcoal, accompanied by boiled potatoes and herb sauce."
    },
    price: 980,
    popular: true
  },
  {
    id: 'sf-anatolia-stuffed-seabass',
    category: 'seafood',
    name: {
      tr: "Anatolia Usulü Levrek Dolma",
      en: "Anatolian Stuffed Sea Bass"
    },
    description: {
      tr: "İçi sotelenmiş karides, mantar ve domatesli krema harcıyla doldurulup fırınlanan özel imza levrek balığımız.",
      en: "House specialty: Whole filleted sea bass stuffed with prawns, mushrooms and tomato cream stuffing, oven-roasted to perfection."
    },
    price: 960,
    dietary: ['chef-choice']
  },
  {
    id: 'sf-salmon',
    category: 'seafood',
    name: {
      tr: "Dereotu Soslu Izgara Somon",
      en: "Grilled Salmon with Dill Sauce"
    },
    description: {
      tr: "Izgara somon fileto, taze dereotlu hafif krema sosu, haşlanmış taze patates ve bahçe yeşillikleri.",
      en: "Pan-seared Atlantic salmon fillet glazed in fragrant dill-cream sauce, served with steamed potatoes and fresh greens."
    },
    price: 920,
    dietary: ['gluten-free']
  },

  // ===================== DESSERTS =====================
  {
    id: 'ds-san-sebastian',
    category: 'desserts',
    name: {
      tr: "San Sebastian Yanık Cheesecake",
      en: "San Sebastian Burnt Cheesecake"
    },
    description: {
      tr: "İçi kremamsı ve akışkan kıvamlı ev yapımı İspanyol klasiği; sıcak Belçika çikolatası sosu eşliğinde.",
      en: "House-made Basque burnt cheesecake with a luscious molten cream center, served with warm Belgian chocolate glaze."
    },
    price: 360,
    popular: true,
    dietary: ['vegetarian', 'chef-choice']
  },
  {
    id: 'ds-lemon-cheesecake',
    category: 'desserts',
    name: {
      tr: "Kaş Limonlu Cheesecake",
      en: "Kalkan Lemon Cheesecake"
    },
    description: {
      tr: "Kıtır bisküvi tabanı üzerinde ipeksi limon kreması ve taze Kaş limonu jölesi.",
      en: "Crispy biscuit crust topped with velvety cream cheese and refreshing local citrus lemon curd."
    },
    price: 340,
    dietary: ['vegetarian']
  },
  {
    id: 'ds-brownie',
    category: 'desserts',
    name: {
      tr: "Sıcak Çikolatalı Brownie & Dondurma",
      en: "Warm Chocolate Fudge Brownie"
    },
    description: {
      tr: "Yoğun çikolatalı fırın brownie, vanilyalı Maraş dondurması ve çikolata sosu ile.",
      en: "Warm rich chocolate brownie loaded with cocoa, served with a scoop of vanilla bean ice cream."
    },
    price: 350,
    popular: true,
    dietary: ['vegetarian']
  },
  {
    id: 'ds-baklava',
    category: 'desserts',
    name: {
      tr: "Çıtır Antep Fıstıklı Baklava",
      en: "Traditional Pistachio Baklava"
    },
    description: {
      tr: "İncecik 40 kat yufka, halis Antep fıstığı, doğal şeker şerbeti ve dondurma eşliğinde.",
      en: "Golden crispy filo layers packed with green Gaziantep pistachios and pure syrup, served with vanilla ice cream."
    },
    price: 380,
    popular: true,
    dietary: ['vegetarian']
  },
  {
    id: 'ds-ice-cream-cup',
    category: 'desserts',
    name: {
      tr: "Dondurma Kupı (3 Top)",
      en: "Artisan Ice Cream Cup (3 Scoops)"
    },
    description: {
      tr: "Vanilya, taze çilek ve çikolata dondurma topları, gofret ve fındık parçacıkları ile.",
      en: "Choice of vanilla, fresh strawberry, and chocolate ice cream scoops garnished with wafer and crushed nuts."
    },
    price: 280,
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: 'ds-fruit-plate',
    category: 'desserts',
    name: {
      tr: "Mevsim Meyveleri Tabağı",
      en: "Fresh Seasonal Fruit Platter"
    },
    description: {
      tr: "Mevsimin en taze dilimlenmiş sulu Akdeniz meyveleri.",
      en: "Selection of sliced fresh seasonal Mediterranean fruits."
    },
    price: 320,
    dietary: ['vegetarian', 'vegan', 'gluten-free']
  },

  // ===================== WINES & BEERS =====================
  {
    id: 'wn-vinkara-quattro-red',
    category: 'wine_drinks',
    name: {
      tr: "Vinkara Quattro Red (Öküzgözü & Boğazkere)",
      en: "Vinkara Quattro Red"
    },
    description: {
      tr: "Öküzgözü, Boğazkere ve Kalecik Karası kupajı. Burunda mürdüm eriği, vişne ve biber notaları; gövdeli ve ızgara etlerle kusursuz uyum.",
      en: "Blend of native grapes: Öküzgözü, Boğazkere and Kalecik Karası. Ripe plum, cherry and pepper spice. Pairs remarkably with steaks and grills."
    },
    price: 420
  },
  {
    id: 'wn-vinkara-narince-white',
    category: 'wine_drinks',
    name: {
      tr: "Vinkara Narince Beyaz Şarap",
      en: "Vinkara Narince White Wine"
    },
    description: {
      tr: "Anadolu'nun yerli asil üzümü Narince. Burunda beyaz çiçekler, taze kayısı ve tropikal esintiler; deniz ürünleri ve mezelere eşlik eder.",
      en: "Native Anatolian Narince grape. Crisp white flowers, apricot notes, refreshing acidity. Ideal accompaniment to sea bass, calamari and mezes."
    },
    price: 420
  },
  {
    id: 'wn-itinera-prosecco',
    category: 'wine_drinks',
    name: {
      tr: "İtalyan İtinera Prosecco DOC Brut",
      en: "Italian Itinera Prosecco DOC Brut"
    },
    description: {
      tr: "İnce ve kalıcı baloncuklar; yeşil elma, armut ve beyaz şeftali buketi ile mükemmel kutlama ve gün batımı kadehi.",
      en: "Fine persistent bubbles, crisp green apple, pear and white peach aromatics. Elegant celebration bubbles."
    },
    price: 520
  },
  {
    id: 'wn-efes-special',
    category: 'wine_drinks',
    name: {
      tr: "Efes Özel Seri / Tuborg Gold (50cl)",
      en: "Efes Reserve / Tuborg Gold Beer (50cl)"
    },
    description: {
      tr: "Buz gibi servis edilen yerel soğuk biralar.",
      en: "Ice-cold bottled draft beer served in chilled glassware."
    },
    price: 240
  },
  {
    id: 'dr-fresh-lemonade',
    category: 'wine_drinks',
    name: {
      tr: "Ev Yapımı Taze Nane Limonata",
      en: "House-Made Mint Lemonade"
    },
    description: {
      tr: "Kaş limonları, ezilmiş taze bahçe nanesi, doğal şeker dengesi ve bol kırık buz.",
      en: "Fresh squeezed Mediterranean lemons, crushed garden mint, natural sweetness and cracked ice."
    },
    price: 180,
    dietary: ['vegetarian', 'vegan', 'gluten-free']
  },
  {
    id: 'dr-fresh-orange',
    category: 'wine_drinks',
    name: {
      tr: "Taze Sıkılmış Portakal Suyu",
      en: "Freshly Squeezed Orange Juice"
    },
    description: {
      tr: "Sipariş anında taze sıkılan Finike & Kaş tatlı portakalları.",
      en: "Pure 100% freshly pressed local sweet oranges."
    },
    price: 190,
    dietary: ['vegetarian', 'vegan', 'gluten-free']
  }
];

export const ATMOSPHERE_POINTS = [
  {
    id: 'day',
    title: {
      tr: "Gündüz: Ferah, Sakin ve Serin Avlu",
      en: "Daytime: Airy, Calm & Shaded Courtyard"
    },
    description: {
      tr: "Kalkan'ın sıcak saatlerinde Şehitler Caddesi'nin gölgeli esintisinde mola verin. Taze sıkılmış meyve suları, zengin Türk ve İngiliz kahvaltıları veya taş fırından sıcak çıtır pizzalarla günün keyfini çıkarın.",
      en: "Take a restful pause in the breezy shade of Şehitler Street. Savor rich breakfast spreads, freshly squeezed orange juice, and crisp stone-oven pizzas during the warm daylight hours."
    },
    highlights: [
      { tr: 'Geniş gölgeli pergola oturumu', en: 'Shaded pergola courtyard seating' },
      { tr: 'Taze sıkılmış meyve suları & soğuk kahveler', en: 'Fresh juices & specialty iced coffees' },
      { tr: 'Hafif Akdeniz öğle yemekleri & çıtır pizzalar', en: 'Light Mediterranean lunches & stone-oven pizzas' },
      { tr: 'Sakin ve rahat bir atmosfer', en: 'Peaceful and welcoming ambiance' }
    ]
  },
  {
    id: 'evening',
    title: {
      tr: "Akşam: Sıcak Masalar, İmza Kokteyller & Kalkan Işıkları",
      en: "Evening: Intimate Tables, Signature Cocktails & Twilight"
    },
    description: {
      tr: "Güneş alçalırken Anatolia'nın atmosferi dönüşür. Kadehler tokuşturulur, 7 özel imza kokteylimiz hazırlanır, kömür ateşinde taze levrekler ve 230g bonfileler masaya gelir. Acele ettirmeyen samimi bir Akdeniz gecesi.",
      en: "As twilight sets over Kalkan, our terrace glows with candlelight. 7 bespoke signature cocktails are mixed at the bar, prime steaks and daily catch seafood arrive sizzling from the coals, and the night unfolds at its own gracious pace."
    },
    highlights: [
      { tr: '7 özel imza kokteyl reçetesi', en: '7 bespoke signature cocktail creations' },
      { tr: 'Mum ışığında samimi masa düzeni', en: 'Candlelit tables & ambient music' },
      { tr: 'Kömürde taze deniz ürünleri & 230g bonfile', en: 'Daily catch seafood & 230g prime steaks' },
      { tr: 'Güler yüzlü aile işletmesi konukseverliği', en: 'Warm, sincere family-run hospitality' }
    ]
  }
];

export const VERIFIED_REVIEWS = [
  {
    source: 'Tripadvisor',
    author: 'Doğrulanmış Misafir',
    date: '10 Eylül 2026',
    title: {
      tr: "Yenilenmiş, ferah ve güler yüzlü bir işletme",
      en: "Refreshed, breezy and welcoming family gem"
    },
    content: {
      tr: "Mekân yenilenmiş; ferah, serin ve çok keyifli bir ortamı var. Güler yüzlü bir aile işletmesi hissini ilk andan itibaren yaşıyorsunuz. Yemekler, sunum ve kokteyller özenle hazırlanmış, servis son derece ilgiliydi. Kalkan’da akşam için harika bir durak.",
      en: "The space is beautifully refreshed—airy, cool, and inviting. You feel the warmth of a smiling family-run team right away. The food, presentation, and craft cocktails were meticulously prepared, with attentive service. A wonderful spot for an evening in Kalkan."
    },
    highlightTag: {
      tr: "Misafir Deneyimi",
      en: "Verified Visit"
    }
  }
];
