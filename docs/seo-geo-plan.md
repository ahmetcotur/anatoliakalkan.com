# Kalkan yemek aramaları için SEO ve GEO planı

## Denetim kapsamı

Yerel proje incelendi: index.html, src/App.tsx, src/i18n.ts, src/components, public ve Caddyfile. Canlı https://anatoliakalkan.com/ adresi web aracıyla açılamadı. Dolayısıyla aşağıdaki bulgular yayınlanan sürümün veya Google indeksinin doğrulaması değildir. Search Console, Analytics ve Google Business Profile verilerine erişilmedi; sıralama, arama hacmi veya trafik tahmini yapılmadı.

## Mevcut durum

- Site TR / EN / RU içeriklerini, gerçek kaynaklardan aktarılmış 249 menü kaydını, adres/telefon/saatleri ve fotoğrafları içeriyor.
- Ana sayfanın ilk HTML yanıtı boş bir root ve JavaScript girişinden oluşuyor. Google JavaScript render edebilir, ancak statik/önceden oluşturulmuş içerik arama motorları ve farklı tarayıcılar için daha sağlam bir temel sağlar.
- Dil seçimi localStorage ile aynı URL'de gerçekleşiyor. Başlık, açıklama ve HTML lang JavaScript üzerinden değişiyor. Ayrı dil URL'leri ve hreflang yok.
- public/menu.html tam metinli, fiyat içermeyen statik bir menü; kategori aç/kapat içeriği DOM'da tutuyor. Bu dosya güçlü bir içerik kaynağı, ancak ana sayfadan normal bir HTML bağlantısıyla keşfedilebilirliği artırılmalı.
- Ana sayfa ve bağımsız menüde canonical, hreflang ve Restaurant JSON-LD yok. public altında robots.txt ve sitemap.xml yok. robots.txt eksikliği tek başına indekslemeyi engellemez.
- Öğünlere ayrılmış arama niyetine özgü URL ve sayfalar yok. Ana sayfa başlığı Kalkan/restoran içeriyor; H1 ağırlıklı olarak marka sloganı.
- og:image ve og:url yok; paylaşım kartları tamamlanmalı.
- Caddyfile tüm bulunamayan yolları index.html'e yönlendiriyor. Yeni statik sayfa yapısında geçersiz adreslerin doğru 404 yanıtı vermesi sağlanmalı.

## Hedef arama kümeleri

| Niyet | Türkçe | İngilizce | Rusça |
| --- | --- | --- | --- |
| Restoran | Kalkan restoran, Kalkan yemek | Kalkan restaurant, places to eat in Kalkan | ресторан в Калкане, где поесть в Калкане |
| Kahvaltı | Kalkan kahvaltı, Kalkan Türk kahvaltısı | breakfast in Kalkan, Turkish breakfast Kalkan | завтрак в Калкане, турецкий завтрак в Калкане |
| Öğle yemeği | Kalkan öğle yemeği, Kalkan lunch | lunch in Kalkan, Kalkan lunch restaurant | обед в Калкане, где пообедать в Калкане |
| Akşam yemeği | Kalkan akşam yemeği, Kalkan akşam yemeği restoranı | dinner in Kalkan, Kalkan dinner restaurant | ужин в Калкане, где поужинать в Калкане |

Bu kümeler içerik hedefleridir, ölçülmüş arama hacimleri değildir. Teras, pizza, deniz ürünleri ve kokteyl gibi alt konular mevcut menüyle ilişkili yerlerde doğal biçimde işlenmeli. Doğrulanmamış en iyi, ödüllü, deniz manzaralı gibi iddialar eklenmemeli.

## Önerilen sayfa mimarisi

Türkçe ana sayfa `/`, İngilizce `/en/`, Rusça `/ru/`. Her sayfa doğrudan ziyaret edildiğinde kendi dilinde HTML üretmeli; URL dili kayıtlı tercihten öncelikli olmalı. Dil seçimi eşdeğer sayfaya normal href bağlantısıyla gitmeli.

- `/kalkan-kahvalti/`, `/en/breakfast-in-kalkan/`, `/ru/zavtrak-v-kalkane/`
- `/kalkan-ogle-yemegi/`, `/en/lunch-in-kalkan/`, `/ru/obed-v-kalkane/`
- `/kalkan-aksam-yemegi/`, `/en/dinner-in-kalkan/`, `/ru/uzhin-v-kalkane/`

Her öğün sayfası farklı ziyaret amacını karşılamalı: o öğünün gerçek ürünleri, ilgili fotoğraflar, konum, rezervasyon ve menü bağlantısı. Aynı metnin yalnızca anahtar kelimelerini değiştirerek çoğaltılmış sayfalar hazırlanmamalı. Kahvaltı/lunch/dinner menülerinin bulunması belirli servis saatleri anlamına gelmez; öğün servis aralıkları işletmeden doğrulanmadan yazılmamalı. Mevcut genel çalışma saatleri dışında saat bilgisi türetilmemeli.

## Uygulama sırası

1. Mevcut Vite yapısında derleme sırasında HTML üretimi/ön render uygula. Ana sayfa, dil sürümleri ve öğün sayfalarının başlıkları, metinleri ve bağlantıları ilk HTML'de bulunmalı. Menü bileşeninin arama ve toggle etkileşimlerini koru.
2. Her sayfaya özgün title, description, H1, self-canonical; karşılıklı tr/en/ru hreflang ve uygun x-default ekle. Örnek kahvaltı title: `Kalkan Kahvaltı | Türk & İngiliz Kahvaltısı – Anatolia`.
3. Gerçek işletme bilgileriyle Restaurant JSON-LD ekle: kalıcı @id, ad, URL, telefon, PostalAddress, mevcut çalışma saatleri, mutfak ve menü bağlantısı. Koordinatları doğrulanmadan geo üretme. Sitedeki örnek yorumlardan aggregateRating/review türetme; işletmenin kendisi hakkındaki yorumlar için Google'ın self-serving review kısıtlarını dikkate al.
4. Yeni URL'leri sitemap.xml'e ekle, robots.txt içinde sitemap adresini belirt. Geçersiz URL'lerde 404, tek HTTPS/alan adı sürümü için uygun yönlendirmeleri yayın ortamında doğrula. Sosyal paylaşım URL ve görselini tamamla.
5. Yerel SEO: Google Business Profile'da gerçek kategori, adres, telefon, saatler, site/menü bağlantısı ve fotoğrafları tutarlı tut. Gerçek misafirlerden yorum iste; teşvikli/sahte yorum kullanma. Profil düzenlemeleri için hesap erişimi gerekir.
6. GEO: önemli işletme bilgilerini açık metinle sun; gerçek sorulara kısa, doğrulanabilir cevaplar ekle. Örneğin konum, hangi öğünlerin sunulduğu ve nasıl rezervasyon yapılacağı. Google AI Overviews/AI Mode için özel AI dosyası veya özel schema zorunlu değildir. İndekslenebilir, güvenilir içerik temel önceliktir. Diğer AI ürünlerinde tarama politikaları ayrı değerlendirilmelidir; hiçbir dosya atıf garantisi vermez.
7. Yayından sonra Search Console'da mülk doğrulama ve sitemap gönderimi; URL Inspection ile HTML/indeks kontrolü; Rich Results Test ve mobil performans ölçümü. Sorgu kümelerini ülke, dil ve açılış sayfası bazında izle. Telefon, WhatsApp, rezervasyon ve menü tıklamalarını ölç; dış platforma geçişi kesinleşmiş rezervasyon sayma.

## Başarı ölçümü ve sınırlar

Öncelik: ilgili sorgularda gösterim, ardından nitelikli tıklama ve rezervasyon talebi. Başlangıç verisi alınmadan iyileşme yüzdesi veya tarih sözü verilmez. Yerel sıralama yalnızca site ayarlarıyla belirlenmez; alaka, arayana uzaklık ve bilinirlik de etkilidir. SEO/GEO çalışmaları belirli bir sırayı veya AI yanıtlarında gösterilmeyi garanti etmez.

## Resmî kaynaklar

- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/appearance/ai-features
- https://support.google.com/business/answer/7091?hl=en

Bu turda denetim ve uygulama planı hazırlandı. SEO sayfa mimarisi veya canlı hesap ayarları henüz değiştirilmedi.
