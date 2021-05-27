import React, {useState} from "react";
import Widget from "components/Widget";

const CancelAndRefund = () => {

      
return (
    <Widget styleName="gx-card-profile">
    <div className="ant-card-head">
      <span className="ant-card-head-title gx-mb-2">İptal ve İade Koşulları</span>
       </div>
    <p><b>GENEL</b></p>
   <ol>
    <li>Kullanmakta olduğunuz web sitesi üzerinden elektronik ortamda sipariş verdiğiniz takdirde, size sunulan ön bilgilendirme formunu ve mesafeli satış sözleşmesini kabul etmiş sayılırsınız.
    </li>
    <li>Alıcılar, satın aldıkları ürünün satış ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği (RG:27.11.2014/29188) hükümleri ile yürürlükteki diğer yasalara tabidir.     </li>
    <li>Ürün sevkiyat masrafı olan kargo ücretleri alıcılar tarafından ödenecektir.    </li>
    <li>Satın alınan her bir ürün, 30 günlük yasal süreyi aşmamak kaydı ile  alıcının gösterdiği adresteki kişi ve/veya kuruluşa teslim edilir. Bu süre içinde ürün teslim edilmez ise,  Alıcılar sözleşmeyi sona erdirebilir.     </li>
    <li>Satın alınan ürün, eksiksiz ve siparişte belirtilen niteliklere uygun ve varsa garanti belgesi, kullanım klavuzu gibi belgelerle teslim edilmek zorundadır. </li>
    <li>Satın alınan ürünün satılmasının imkansızlaşması durumunda, satıcı bu durumu öğrendiğinden itibaren 3 gün içinde yazılı olarak alıcıya bu durumu bildirmek zorundadır. 14 gün içinde de toplam bedel Alıcı’ya iade edilmek zorundadır. </li>
    <b>SATIN ALINAN ÜRÜN BEDELİ ÖDENMEZ İSE</b>
    <li>Alıcı, satın aldığı ürün bedelini ödemez veya banka kayıtlarında iptal ederse, Satıcının ürünü teslim yükümlülüğü sona erer.</li>
    <b>KREDİ KARTININ YETKİSİZ KULLANIMI İLE YAPILAN ALIŞVERİŞLER</b>
    <li>Ürün teslim edildikten sonra, alıcının ödeme yaptığı kredi kartının yetkisiz kişiler tarafından haksız olarak kullanıldığı tespit edilirse ve satılan ürün bedeli ilgili banka veya finans kuruluşu tarafından Satıcı'ya ödenmez ise, Alıcı, sözleşme konusu ürünü 3 gün içerisinde nakliye gideri SATICI’ya ait olacak şekilde SATICI’ya iade etmek zorundadır.</li>
    <b>ÖNGÖRÜLEMEYEN SEBEPLERLE ÜRÜN SÜRESİNDE TESLİM EDİLEMEZ İSE</b>
    <li>Satıcı’nın öngöremeyeceği mücbir sebepler oluşursa ve ürün süresinde teslim edilemez ise, durum Alıcı’ya bildirilir. Alıcı, siparişin iptalini, ürünün benzeri ile değiştirilmesini veya engel ortadan kalkana dek teslimatın ertelenmesini talep edebilir. Alıcı siparişi iptal ederse; ödemeyi nakit ile yapmış ise iptalinden itibaren 14 gün içinde kendisine nakden bu ücret ödenir. Alıcı, ödemeyi kredi kartı ile yapmış ise ve iptal ederse, bu iptalden itibaren yine 14 gün içinde ürün bedeli bankaya iade edilir, ancak bankanın alıcının hesabına 2-3 hafta içerisinde aktarması olasıdır. </li>
    <b>ALICININ ÜRÜNÜ KONTROL ETME YÜKÜMLÜLÜĞÜ</b>
    <li>Alıcı, sözleşme konusu mal/hizmeti teslim almadan önce muayene edecek; ezik, kırık, ambalajı yırtılmış vb. hasarlı ve ayıplı mal/hizmeti kargo şirketinden teslim almayacaktır. Teslim alınan mal/hizmetin hasarsız ve sağlam olduğu kabul edilecektir. ALICI , Teslimden sonra mal/hizmeti özenle korunmak zorundadır. Cayma hakkı kullanılacaksa mal/hizmet kullanılmamalıdır. Ürünle birlikte Fatura da iade edilmelidir.</li>
    <b>CAYMA HAKKI</b>
    <li>ALICI; satın aldığı ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa teslim tarihinden itibaren 14 (on dört) gün içerisinde, SATICI’ya aşağıdaki iletişim bilgileri üzerinden bildirmek şartıyla hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı reddederek sözleşmeden cayma hakkını kullanabilir.</li>
    <b>SATICININ CAYMA HAKKI BİLDİRİMİ YAPILACAK İLETİŞİM BİLGİLERİ</b>
    <li>BEHA KIRTASİYE SANAYİ VE TİCARET ANONİM ŞİRKETİ / Konak Mahallesi Beşevler Caddesi 72/A Nilüfer, Bursa / 0.224 452 64 64
    </li>
    <b>CAYMA HAKKININ SÜRESİ</b>
    <li>Alıcı, satın aldığı eğer bir hizmet  ise, bu 14 günlük süre sözleşmenin imzalandığı tarihten itibaren başlar. Cayma hakkı süresi sona ermeden önce, tüketicinin onayı ile hizmetin ifasına başlanan hizmet sözleşmelerinde cayma hakkı kullanılamaz. </li>
    <li>Cayma hakkının kullanımından kaynaklanan masraflar SATICI’ ya aittir.</li>
    <li>Cayma hakkının kullanılması için 14 (ondört) günlük süre içinde SATICI' ya iadeli taahhütlü posta, faks veya eposta ile yazılı bildirimde bulunulması ve ürünün işbu sözleşmede düzenlenen "Cayma Hakkı Kullanılamayacak Ürünler" hükümleri çerçevesinde kullanılmamış olması şarttır. </li>
    <b>CAYMA HAKKININ KULLANIMI</b>
    <li>3. kişiye veya ALICI’ ya teslim edilen ürünün faturası, (İade edilmek istenen ürünün faturası kurumsal ise, iade ederken kurumun düzenlemiş olduğu iade faturası ile birlikte gönderilmesi gerekmektedir. Faturası kurumlar adına düzenlenen sipariş iadeleri İADE FATURASI kesilmediği takdirde tamamlanamayacaktır.)</li>
    <li>İade formu, İade edilecek ürünlerin kutusu, ambalajı, varsa standart aksesuarları ile birlikte eksiksiz ve hasarsız olarak teslim edilmesi gerekmektedir.</li>
    <b>İADE KOŞULLARI</b>
    <li>SATICI, cayma bildiriminin kendisine ulaşmasından itibaren en geç 10 günlük süre içerisinde toplam bedeli ve ALICI’yı borç altına sokan belgeleri ALICI’ ya iade etmek ve 20 günlük süre içerisinde malı iade almakla yükümlüdür.</li>
    <li>ALICI’ nın kusurundan kaynaklanan bir nedenle malın değerinde bir azalma olursa veya iade imkânsızlaşırsa ALICI kusuru oranında SATICI’ nın zararlarını tazmin etmekle yükümlüdür. Ancak cayma hakkı süresi içinde malın veya ürünün usulüne uygun kullanılması sebebiyle meydana gelen değişiklik ve bozulmalardan ALICI sorumlu değildir. </li>
    <li>Cayma hakkının kullanılması nedeniyle SATICI tarafından düzenlenen kampanya limit tutarının altına düşülmesi halinde kampanya kapsamında faydalanılan indirim miktarı iptal edilir.</li>
    <b>CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER</b>
    <li>ALICI’nın isteği veya açıkça kişisel ihtiyaçları doğrultusunda hazırlanan ve geri gönderilmeye müsait olmayan, iç giyim alt parçaları, mayo ve bikini altları, makyaj malzemeleri, tek kullanımlık ürünler, çabuk bozulma tehlikesi olan veya son kullanma tarihi geçme ihtimali olan mallar, ALICI’ya teslim edilmesinin ardından ALICI tarafından ambalajı açıldığı takdirde iade edilmesi sağlık ve hijyen açısından uygun olmayan ürünler, teslim edildikten sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan ürünler, Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi süreli yayınlara ilişkin mallar, Elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim edilen gayrimaddi mallar, ile ses veya görüntü kayıtlarının, kitap, dijital içerik, yazılım programlarının, veri kaydedebilme ve veri depolama cihazlarının, bilgisayar sarf malzemelerinin, ambalajının ALICI tarafından açılmış olması halinde iadesi Yönetmelik gereği mümkün değildir. Ayrıca Cayma hakkı süresi sona ermeden önce, tüketicinin onayı ile ifasına başlanan hizmetlere ilişkin cayma hakkının kullanılması da Yönetmelik gereği mümkün değildir.</li>
    <li>Kozmetik ve kişisel bakım ürünleri, iç giyim ürünleri, mayo, bikini, kitap, kopyalanabilir yazılım ve programlar, DVD, VCD, CD ve kasetler ile kırtasiye sarf malzemeleri (toner, kartuş, şerit vb.) iade edilebilmesi için ambalajlarının açılmamış, denenmemiş, bozulmamış ve kullanılmamış olmaları gerekir. </li>
    <b>TEMERRÜT HALİ VE HUKUKİ SONUÇLARI</b>
    <li>ALICI, ödeme işlemlerini  kredi kartı ile yaptığı durumda temerrüde düştüğü takdirde, kart sahibi banka ile arasındaki kredi kartı sözleşmesi çerçevesinde faiz ödeyeceğini ve bankaya karşı sorumlu olacağını kabul, beyan ve taahhüt eder. Bu durumda ilgili banka hukuki yollara başvurabilir; doğacak masrafları ve vekâlet ücretini ALICI’dan talep edebilir ve her koşulda ALICI’nın borcundan dolayı temerrüde düşmesi halinde, ALICI, borcun gecikmeli ifasından dolayı SATICI’nın uğradığı zarar ve ziyanını ödeyeceğini kabul eder. </li>
    <b>ÖDEME VE TESLİMAT</b>
    <li>Banka Havalesi veya EFT (Elektronik Fon Transferi) yapar<b>AKBANK Bursa Şubesi</b>'nde bulunan <b>TR84 0004 6000 4388 8000 3926 26</b> no'lu hesaba<b> BEHA KIRTASİYE SANAYİ VE TİCARET AŞ</b> adına ödeme yapabilirsiniz.</li>
    <li>Sitemiz üzerinden kredi kartlarınız ile, Her türlü kredi kartınıza online tek ödeme ya da online taksit imkânlarından yararlanabilirsiniz. Online ödemelerinizde siparişiniz sonunda kredi kartınızdan tutar çekim işlemi gerçekleşecektir.</li>
   </ol>


  </Widget>
    );

    
                }
export default CancelAndRefund;