/* Uygulama kataloğu — tek kaynak. tur: 'yerel' = uygulamanın içinde çalışır, 'site' = şimdilik cagataygulumser.com'dan açılır (taşınacak) */
window.KATALOG = (function () {
  var S = 'https://www.cagataygulumser.com/p/';
  function y(id, ad, kim, grup, kisa, dosya, kok, pro) { return { id: id, ad: ad, kim: kim, grup: grup, kisa: kisa, tur: 'yerel', dosya: dosya, kok: kok, pro: !!pro }; }
  function s(id, ad, kim, grup, kisa, slug, pro) { return { id: id, ad: ad, kim: kim, grup: grup, kisa: kisa, tur: 'site', url: S + slug + '.html', pro: !!pro }; }
  var K = 'araclar/klinik/', A = 'araclar/';
  /* Araç kodu tek kaynaktan gelir: sitedeki araçlarla aynı depo (blog-font). */
  var KOK = 'https://cdn.jsdelivr.net/gh/cagataygulumser/blog-font@main/';
  return {
    kok: KOK,
    gruplar: [
      ['magaza', 'Mağazada gösterin'], ['olcu', 'Ölçü ve hesap'], ['egitim', 'Eğitim ve sınav'], ['mevzuat', 'Mevzuat'],
      ['muayene', 'Muayene araçları'], ['sasilik', 'Şaşılık ve nöro'], ['cerrahi', 'Katarakt ve retina'], ['kayit', 'Kayıt ve kodlama'], ['test', 'Göz testleri']
    ],
    araclar: [
      y('studyo', 'Cam Gösterim Stüdyosu', 'opt', 'magaza', 'Kaplama, kalınlık, progresif ve renkli camı canlı gösterin', 'cam-gosterim/cgs.js', 'cgs'),
      s('simulator', 'Gözlük Camı Simülatörü', 'opt', 'magaza', 'PD, montaj yüksekliği, prizmatik etki ve kenar kalınlığı', 'pd-ve-montaj-yuksekligi-simulatoru'),
      s('pdolcer', 'PD ve Montaj Yüksekliği Ölçer', 'opt', 'magaza', 'Kamerayla, gözlük yüzdeyken ölçüm', 'pd-ve-montaj-yuksekligi-olcer'),
      y('tarayici', 'Çerçeve Tarayıcı', 'opt', 'magaza', 'Fotoğraftan cam şekli ve 3B kalınlık önizlemesi', A + 'tarayici.js', 'cgt-tarayici'),
      y('deneme', 'Sanal Gözlük Deneme', 'opt', 'magaza', 'Kamerada gerçek ölçekli çerçeve', A + 'deneme.js', 'cgt-deneme'),
      y('gorus', 'Böyle Görüyor', 'ikisi', 'magaza', 'Miyopi, astigmat, katarakt… nasıl görünür?', A + 'gorus.js', 'cgt-gorus'),
      s('mavi', 'Mavi Işık Simülatörü', 'opt', 'magaza', 'Filtreli camın görsel farkı', 'mavi-isik-filtreli-cam-simulatoru'),
      s('surucu', 'Sürücü Camı Simülatörü', 'opt', 'magaza', 'Gece sürüşünde parlama ve kontrast', 'surucu-cami-simulatoru'),
      s('polarize', 'Polarize Testi', 'opt', 'magaza', 'Camın polarize olup olmadığını gösterin', 'polarize-gozluk-testi'),
      s('yuzsekli', 'Yüz Şekli Testi', 'opt', 'magaza', 'Yüz şekline göre çerçeve formu', 'yuz-sekline-gore-gozluk-testi'),

      s('formuller', 'Hesaplama Araçları', 'ikisi', 'olcu', 'Verteks, transpozisyon, prizma, sagitta ve daha fazlası', 'formuller'),
      y('atolye', 'Atölye Simülatörü', 'opt', 'olcu', 'Merkezleme ve ham cam çapı', A + 'atolye.js', 'cgt-atolye'),
      y('foko', 'Fokometre Simülatörü', 'ikisi', 'olcu', 'Lensmetre okuma alıştırması', A + 'foko.js', 'cgt-foko'),
      s('cerceve', 'Çerçeve Ölçüsü Okuyucu', 'opt', 'olcu', '52□18-140 ne demek?', 'gozluk-cerceve-olcusu-okuyucu'),
      s('receteoku', 'Reçete Okuyucu', 'ikisi', 'olcu', 'Reçete değerlerinin açıklaması', 'gozluk-receteni-oku'),
      s('lenskutu', 'Lens Kutusu Okuyucu', 'opt', 'olcu', 'BC, DIA, PWR, CYL, AX', 'kontakt-lens-kutusu-okuyucu'),
      s('guneskat', 'Güneş Gözlüğü Kategorisi', 'opt', 'olcu', 'Kategori 0–4 ve işaretler', 'gunes-gozlugu-kategori-okuyucu'),
      s('sgk', 'SGK Katkı Payı Hesaplayıcı', 'opt', 'olcu', 'Çerçeve ve cam katkı tutarı', 'sgk-gozluk-katki-payi-hesaplayici'),
      y('mesafe', 'Ekran Mesafesi Ölçer', 'ikisi', 'olcu', 'Kamerayla çalışma mesafesi', A + 'mesafe.js', 'cgt-mesafe'),

      y('akademi', 'Optisyen Akademi', 'opt', 'egitim', 'Kısa dersler ve sorular', A + 'akademi.js', 'cgt-akademi'),
      y('recete', 'Reçete Yazma Alıştırması', 'ikisi', 'egitim', 'Rastgele durum, hata türünü yakalayan kontrol', A + 'recete.js', 'cgt-recete'),
      y('formul', 'Formül Kartları', 'opt', 'egitim', 'Çevrilebilir çalışma kartları', A + 'formul.js', 'cgt-formul'),
      y('anatomi', 'Göz Anatomisi Bulmacası', 'ikisi', 'egitim', 'Parçaları yerine koyun', A + 'anatomi.js', 'cgt-anatomi'),
      y('torik', 'Torik Lens Rotasyonu', 'ikisi', 'egitim', 'LARS kuralı alıştırması', A + 'torik.js', 'cgt-torik'),
      y('isin', 'Işın Laboratuvarı', 'ikisi', 'egitim', 'Mercek, prizma ve göz modeli', A + 'isin.js', 'cgt-isin'),
      s('sinav', 'Sınav Merkezi', 'opt', 'egitim', '12 dersin sınavları', 'snav-merkezi_0210972478'),
      s('sozluk', 'Optik Sözlük', 'ikisi', 'egitim', 'Terimler, sade açıklamalar', 'optik-sozluk'),
      s('atlas', 'Canlı Göz Atlası', 'ikisi', 'egitim', 'Kamerada kendi gözünüz üstünde anatomi', 'canl-goz-atlas'),
      y('tarih', 'Optik ve Göz Sağlığı Tarihi', 'ikisi', 'egitim', 'Zaman çizelgesi', A + 'tarih.js', 'cgt-tarih'),

      s('ehliyet', 'Ehliyet Göz Şartı ve Kodları', 'ikisi', 'mevzuat', 'Görme şartı kontrolü ve göz kodları', 'ehliyet-goz-sarti-ve-goz-kodlari'),
      s('meslek', 'Meslek Göz Şartı', 'ikisi', 'mevzuat', 'Mesleklere göre görme koşulları', 'meslek-icin-goz-sarti'),
      s('engel', 'Görme Engel Oranı', 'ikisi', 'mevzuat', 'Oran hesaplama', 'gorme-engel-orani-hesaplama'),

      y('esel', 'Görme Eşeli', 'dr', 'muayene', 'Ayarlanabilir mesafe, kalibre optotip', K + 'esel.js', 'cgt-esel'),
      y('fiks', 'Fiksasyon Hedefi', 'dr', 'muayene', 'Çocuklar için dikkat çekici hedefler', K + 'fiksasyon.js', 'cgt-fiks'),
      y('pupil', 'Pupilla Cetveli ve Işık', 'dr', 'muayene', 'Muayene ışığı ve çap cetveli', K + 'pupil.js', 'cgt-pupil'),
      y('alan', 'Görme Alanı Taraması', 'dr', 'muayene', 'Eşik üstü tarama', K + 'alan.js', 'cgt-alan'),
      y('okn', 'OKN Tamburu', 'dr', 'sasilik', 'Optokinetik nistagmus şeritleri', K + 'okn.js', 'cgt-okn'),
      y('worth', 'Worth 4 Nokta', 'dr', 'sasilik', 'Füzyon ve supresyon', K + 'worth.js', 'cgt-worth'),
      y('parks', 'Parks Üç Adım Testi', 'dr', 'sasilik', 'Parks-Bielschowsky karar yardımcısı', K + 'parks.js', 'cgt-parks'),
      y('sasilik', 'Örtme Testi Simülatörü', 'dr', 'sasilik', 'Şaşılık ve örtme-açma eğitimi', K + 'sasilik.js', 'cgt-sasilik'),
      y('iol', 'IOL Simülatörü', 'dr', 'cerrahi', 'Göz içi mercek görüşünü hastaya gösterin', K + 'iol.js', 'cgt-iol'),
      y('reksis', 'Kapsüloreksis Alıştırması', 'dr', 'cerrahi', 'El becerisi alıştırması', K + 'reksis.js', 'cgt-reksis'),
      y('indirekt', 'İndirekt Oftalmoskopi', 'dr', 'cerrahi', 'Ters görüntü alıştırması', K + 'indirekt.js', 'cgt-indirekt'),
      y('kamera', 'Biyomikroskop Kamera', 'dr', 'kayit', 'Slit lamba fotoğraf yardımcısı', K + 'kamera.js', 'cgt-kamera'),
      y('icd', 'ICD-10 Göz Kodları', 'dr', 'kayit', 'Tanı kodu arama', K + 'icd.js', 'cgt-icd'),

      s('t-renk', 'Renk Körlüğü Testi', 'ikisi', 'test', '', 'renk-korlugu-testi'),
      s('t-astigmat', 'Astigmat Testi', 'ikisi', 'test', '', 'astigmat-testi'),
      s('t-amsler', 'Amsler (Sarı Nokta) Testi', 'ikisi', 'test', '', 'amsler-testi'),
      s('t-keskinlik', 'Görme Keskinliği Testi', 'ikisi', 'test', '', 'gorme-keskinligi-testi'),
      s('t-yakin', 'Yakın Okuma Testi', 'ikisi', 'test', '', 'yakin-okuma-testi'),
      s('t-kontrast', 'Kontrast Duyarlılığı Testi', 'ikisi', 'test', '', 'kontrast-duyarliligi-testi'),
      s('t-duokrom', 'Kırmızı-Yeşil (Duokrom) Testi', 'ikisi', 'test', '', 'kirmizi-yesil-testi'),
      s('t-siralama', 'Renk Sıralama Testi', 'ikisi', 'test', '', 'renk-siralama-testi'),
      s('t-kuru', 'Kuru Göz Testi', 'ikisi', 'test', '', 'kuru-goz-testi'),
      s('t-yorgunluk', 'Dijital Göz Yorgunluğu Testi', 'ikisi', 'test', '', 'goz-yorgunlugu-testi'),
      s('t-miyopi', 'Çocuk Miyopi Risk Testi', 'ikisi', 'test', '', 'miyopi-risk-testi'),
      s('t-glokom', 'Glokom Risk Testi', 'ikisi', 'test', '', 'glokom-risk-testi'),
      s('t-muayene', 'Ne Zaman Göz Muayenesi?', 'ikisi', 'test', '', 'goz-muayenesi-ne-zaman'),
      s('t-kornokta', 'Kör Nokta Testi', 'ikisi', 'test', '', 'kor-nokta-testi'),
      s('t-baskin', 'Baskın Göz Testi', 'ikisi', 'test', '', 'baskin-goz-testi'),
      s('t-ardil', 'Ardıl Görüntü Testi', 'ikisi', 'test', '', 'ardil-goruntu-testi'),
      s('t-yarisma', 'Göz Sağlığı Bilgi Yarışması', 'ikisi', 'test', '', 'goz-sagligi-bilgi-yarismasi')
    ]
  };
})();
