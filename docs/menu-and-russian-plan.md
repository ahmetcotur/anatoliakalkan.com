# Anatolia menü aktarımı ve Rusça planı

## Tamamlanan menü aktarımı

| Menü | Kaynak | Kategori | Kayıt |
| --- | --- | ---: | ---: |
| Kahvaltı & Lunch | RestoranMenu/lunch1.jpg ve lunch2.jpg | 10 | 53 |
| Dinner | RestoranMenu/Dinnermenu.pdf | 10 | 66 |
| İçecekler | RestoranMenu/icecekmenusu.pdf | 17 | 130 |
| Toplam | | 37 | 249 |

Kayıt sayısı, farklı menülerde tekrar eden yemekleri de içerir. Lunch ve dinner sürümleri ayrı tutulur; örneğin lunch roka salatasında nar, dinner sürümünde nar yoktur. Kaynakta açıklaması bulunmayan ürünlere yeni içerik yazılmadı. Fiyatlar kullanıcı talebiyle veri modeline ve HTML'e alınmadı. Porsiyonlar, 230 g bonfile bilgisi, 120 g burger bilgisi, garnitürler ve şarap tadım/yemek eşleşmesi açıklamaları korundu. İngilizce şarap açıklamaları Türkçeye çevrildi. Belirgin yazım hataları (Cappucino, Turkish Coffe, Grey Soose, Crepe Chooses, Angostra, Stranagof) standart yazımla aktarıldı.

Tek veri kaynağı: `src/data/menuData.ts`. Site menüsü ve imza kokteyller bu veriyi kullanır. Eski örnek menü ve kaynakla uyuşmayan kokteyl tarifleri kaldırıldı.

Bağımsız HTML: `public/menu.html`. Doğrudan tarayıcıda açılabilir; harici dosya veya internet bağlantısı gerektirmez. Türkçe/İngilizce/Rusça geçişi, tüm ürünlerde arama ve yazdırma stili içerir. Güncellemek için `npm run menu:html`; `npm run build` öncesinde otomatik oluşturulur. Üretilen dosyayı elle değiştirmek yerine veri kaynağını güncelleyin. Sitede `/menu.html` adresinde sunulur.

Doğrulama: TypeScript kontrolü ve üretim derlemesi; gerçek tarayıcıda menü sayıları, kategori seçimi, menüler arasında arama, boş sonuç, dil geçişi, 390 px mobil genişlikte taşma kontrolü, HTML dosyasındaki 249 kayıt ve fiyat bulunmaması. PDF içerikleri metin ve görsel sayfa kontrolleriyle karşılaştırıldı.

## Tamamlanan Rusça uygulaması

- `Language` artık `tr / en / ru` içerir; menüdeki her `MenuText` alanında Rusça zorunludur. Tüm 249 kaydın adları, açıklamaları, kategori ve porsiyon bilgileri çevrildi. Marka, şarap ve imza kokteyl adları korundu.
- `src/i18n.ts`, 234 site metninin üç dildeki ortak sözlüğüdür. Navigasyon, galeri başlık/alt metinleri, rezervasyon, ziyaret, açılış günleri, erişilebilirlik etiketleri ve görsel üzerindeki metinler bu yapıyı kullanır.
- Üst bölümdeki TR / EN / RU seçimi `anatolia-language` anahtarıyla saklanır. Sayfanın `lang`, başlık, açıklama ve Open Graph metinleri dile göre güncellenir. Tarayıcı depolaması kullanılamadığında site Türkçe açılır.
- Rusçada tam Kiril desteği olan Georgia/Arial sistem fontları kullanılır. Menü araması üç dilin bütün alanlarını tarar; Rusça е/ё varyantlarını eşdeğer kabul eder.
- Rezervasyon formu etiketleri, doğrulama mesajları ve WhatsApp taslak mesajı seçilen dildedir. Tarih yerelleştirilir. WhatsApp açılması gönderim/onay anlamına gelmediği için son ekran kullanıcıdan WhatsApp'ta Gönder'e dokunmasını ister.
- Bağımsız `public/menu.html` de üç dili, Rusça aramayı ve saklanan dil seçimini destekler. Dosya çevrimdışı açılabilir.
- Kullanıcı isteğiyle site ve bağımsız menünün altına `https://voyn.tr` bağlantılı küçük ajans imzası eklendi; açıklaması seçilen dile uyumludur.

Doğrulama: `npm run check:translations`, `npm run lint`, `npm run build`. Gerçek Chrome'da üç dilin tüm ürün adları ve menü sayıları, Rusça arama, е/ё eşleşmesi, boş sonuç, dilin yenileme sonrasında korunması, metadata, rezervasyon doğrulaması ve WhatsApp taslağı kontrol edildi. Test sırasında WhatsApp gönderimi yapılmadı. 320, 390, 768, 1024, 1280 ve 1536 px genişliklerde taşma kontrolü yapıldı. Bağımsız HTML ve voyn.tr bağlantısı da doğrulandı.

Menü kategorileri başlangıçta kapalıdır; başlık düğmesiyle açılıp kapanır. Üç dilde Tümünü aç / Tümünü kapat kontrolleri vardır. Kategori seçimi ilgili içeriği açar, arama eşleşmeleri otomatik açılır ve önceki aç/kapat seçimi arama temizlendiğinde korunur. Bağımsız HTML menüde aynı etkileşim native details/summary ile sağlanır; yazdırmada tüm kategoriler açılır. Tarayıcıda klavye kontrolü, üç dilde toplu aç/kapat, kategori seçimi, arama, mobil görünüm ve yazdırma durumu kontrol edildi.

Çalışma yerel proje dosyalarındadır; canlı siteye yayın yapılmadı.
