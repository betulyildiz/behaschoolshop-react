import React, {useState} from "react";
import Widget from "components/Widget";

const Kvkk = () => {

      
return (
    <Widget styleName="gx-card-profile">
    <div className="ant-card-head">
      <span className="ant-card-head-title gx-mb-2">Kişisel Verilerin Korunması</span>
       </div>
    <p>
    Beha Kırtasiye Sanayi ve Ticaret Anonim Şirketi olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Kazançlı Okul olarak ürün ve hizmetlerimizden faydalanan kişiler dahil, Kazançlı Okul ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (“KVKK”) uygun olarak işlenerek, muhafaza edilmesine önem vermekteyiz. Bu sorumluluğumuzun tam bilinci ile KVKK uyarınca “Veri Sorumlusu” sıfatıyla, kişisel verilerinizi aşağıda yer alan kapsamda ve şartlarda işlemekteyiz.
 
Kazançlı Okul tarafından kişisel verilerinizin ne tür yöntemler aracılığıyla ve hangi amaçlar doğrultusunda işlendiği ve saklandığı hakkında daha detaylı bilgi için aşağıdaki metne gözatınız.

    </p>
   <ul>
    <li><b>Kişisel Veri Nedir?</b>
     <p>
     Kişisel veri, KVKK’da kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi olarak tanımlanmıştır. Buna göre bizimle paylaştığınız adınız, soyadınız, doğum tarihiniz, kimlik numaranız, elektronik posta adresiniz, telefon numaranız ve benzeri bilgiler kişisel veri olarak adlandırılmaktadır.
     Kazançlı Okul, kişisel verilerinizi, Kazançlı Okul ile doğrudan paylaştığınız hallerde, otomatik yollarla veya üçüncü şahıs platformları gibi başka kaynaklar aracılığıyla toplamaktadır.
     </p>
    </li>
    <li><b>Kişisel verilerinizin işlenme amacı ve dayanağı nedir?</b>
     <p>
      Kazançlı Okul ile olan ürün ve hizmet ilişkiniz dolayısıyla yasal yükümlülüklerimizi yerine getirebilmek ve sizi kampanyalar ve avantajlardan haberdar edebilmek için Kazançlı Okul, kişisel bilgilerinizi toplamaktadır ve bu kapsamda işlemektedir.Bu doğrultuda; kişisel verilerinizi, her türlü şikâyetinizi değerlendirmek ve işleme almak, ödemelerinizi işleme almak, ürünlerimizi, hizmetlerimizi, iletişim yöntemlerimizi ve internet sitelerimizin işlevselliğini geliştirmek ve sizin için kişiselleştirilmiş ürünler, iletişim içerikleri ve hedefe yönelik reklamlar ve ayrıca ürün tavsiyeleri sunmak için toplamakta ve işlemektedir.Yukarıda sayılan amaçlar doğrultusunda, kişisel verilerinizi, açık rızanıza istinaden, veya sizinle yaptığımız sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması halinde veya temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatimizin gerektirdiği hallerde, burada belirtilen amaçlar ve kapsam dahilinde işlemekte ve saklamaktadır.
     </p>
    </li>
    <li><b>Kişisel verilerinizi hangi amaçla, kimlere aktarıyoruz?</b>
     <p>
     Kişisel verileriniz Kazançlı Okul hissedarlarıyla, doğrudan/dolaylı iştiraklerimizle, iş ilişkisinin devamı esnasında birlikte bizi temsil eden ve/veya faaliyetlerimizi yürütebilmek için işbirliği yaptığımız iş ortağımız olan yurtiçi/yurtdışı kişi ve kurumlarla (kargo, gönderi, çağrı merkezi, veri tabanı, bulut vb. hizmetleri sunan şirketlerle) paylaşılabilmektedir. Ayrıca, yasal yükümlülüklerimiz nedeniyle ve bunlarla sınırlı olmak üzere mahkemeler ve diğer kamu kurumları ile kişisel veriler paylaşılmaktadır. Ayrıca, Kazançlı Okul internet sitelerini ziyaretinize ilişkin kişisel verilerinizi ve gezinme bilgileriniz gibi trafik bilgilerinizi; güvenliğiniz ve ilgili mevzuat kapsamındaki yükümlülüklerinin ifası amacıyla yasal olarak bu bilgileri kanunen talep etmeye yetkili olan kamu kurum ve kuruluşları ile paylaşabilecektir.
     </p>  
    </li>
    <li><b>Kişisel verilerinizi nasıl saklıyoruz?</b>
     <p>
     Şirketimiz ile paylaşılan kişisel verileriniz Kazançlı Okul'un yurtiçi güvenli sunucularında ilgili yasal düzenlemelere, KVKK hükümlerine ve Beha Kırtasiye Sanayi ve Ticaret Anonim Şirketi standartlarına uygun olarak saklanmaktadır. Bu kapsamda, kişisel verilerinizin güvenliğini sağlamak adına yasal mevzuat ile belirlenen gerekli teknik ve idari güvenlik önlemlerini almaktadır.
     </p>
    </li>
    <li><b>Kişisel verilerinizi ne kadar süre ile tutuyoruz?</b>
     <p>KVKK Madde 7/f.1. hükmü uyarınca, kişisel verilerinizin işlenmesi gerektiren amaç ortadan kalktığında ve/veya ilgili mevzuat uyarınca verilerinizi saklamakla yükümlü kılındığımız yasal süreler dolduğunda, kişisel verileriniz tarafımızca silinecek, yok edilecek veya anonim hale getirilecektir.</p>
    </li>
    <li><b>Kişisel Verilerin Korunması Kanunu’ndan doğan haklarınız nelerdir?</b>
     <p>
     KVKK Madde 11 uyarınca, kişisel verilerinizin işlendiği Kazançlı Okul tarafından veri sorumlusu sıfatı ile işlediği ölçüde;
     Başvurunuzda yer alan talepleriniz, talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde sonuçlandırılacaktır.
     <ul>
      <li>Herhangi bir kişisel verinizin işlenip işlenmediğini öğrenme;</li>
      <li>Kişisel verilerinizin işlenme faaliyetlerine ilişkin olarak bilgi talep etme;</li>
      <li>Kişisel verilerinizin işlenme amaçlarını öğrenme;</li>
      <li>Kişisel verilerin yurt içinde veya yurt dışında üçüncü kişilere aktarılmış olması durumunda bu kişileri öğrenme;</li>
      <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme;</li>
      <li>Kişisel verilerin işlenmesini gerektiren sebeplerin ortadan kalkması halinde kişisel verilerin silinmesini veya yok edilmesini isteme;</li>
      <li>Silme ve düzeltme işlemlerinin, verilerin aktarıldığını üçüncü kişilere bildirilmesi isteme;</li>
      <li>Kişisel verilerin otomatik sistemler vasıtasıyla işlenmesi sonucu ortaya çıkabilecek aleyhte sonuçlara itiraz etme; ve</li>
      <li>Kişisel verilerinizin kanuna aykırı bir şekilde işlenmesi sebebiyle zarara uğramanız halinde bu zararın tazmin edilmesini isteme hakkına sahipsiniz.</li>
     </ul>
     </p></li>
     <li>
     <b>Tarafımıza bildirmiş olduğunuz kişisel verilerinize ilişkin haklarınızı ne şekilde kullanabilirsiniz?</b>
     <p>KVKK Madde 11'de yer alan ve yukarıda sayılan haklarınızı kazancliokul.com, behakirtasiyeas.com adresindeki iletişim formu aracılığıyla veya 0224 452 64 64 no'lu telefona ulaşarak kullanabilirsiniz.</p> </li>
     
   </ul>
  
<p>BEHA KIRTASİYE SANAYİ VE TİCARET ANONİM ŞİRKETİ</p>
<p>Konak Mahallesi Beşevler Caddesi 72/A Nilüfer, Bursa</p>
<p>0.224 452 64 64</p>

  </Widget>
    );

    
                }
export default Kvkk;