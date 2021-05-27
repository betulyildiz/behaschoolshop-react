import React, {useState} from "react";
import Widget from "components/Widget";

const AboutUs = () => {

      
return (
    <Widget styleName="gx-card-profile">
    <div className="ant-card-head">
      <span className="ant-card-head-title gx-mb-2">Hakkımızda</span>
      <p className="gx-text-grey gx-fs-sm gx-mb-0">Biz Kimiz?</p>
    </div>
    <h3 className="gx-font-weight-light">Kazançlı Okul, Beha Kırtasiye AŞ kuruluşudur.</h3>
    <p>1990 yılında Bursa'da kurulmuş köklü bir perakende satış mağazasıdır. Türkiye'nin en iyi kırtasiyeleri 
    arasında gösterilen markamız halihazırda 1200 metrekare alanda müşterilerine hizmet veriyor. 
    BEHA'da yaklaşık 60 bin çeşit ürün bulunuyor ve 4 ana 20 alt kategoride bu ürünler müşterilerimize sunuluyor.
    </p>
    <p>2009 yılında açılan Beşevler mağazamız, Bursa'da sektörün ilk büyük mağazacılık örneğidir. 
    Kırtasiye, kitap, hediyelik ürünler ve Premium ürünler departmanlarıyla son tüketiciye; BEHA Kurumsal Satış sistemimizle 
    ise kurumsal işletmelere hizmet veriyoruz.
    BEHA Kırtasiye olarak hepsiburada, Trendyol, Amazon ve n11 gibi başlıca alışveriş sitelerinde de satışlarımız devam ediyor.
    </p>
    <p>Kazançlı Okul projesi, BEHA Kırtasiye AŞ’nin yazılım departmanı olan BEHA SSS tarafından hayata geçirilen özgün bir projedir. 
    Bu sistem okulların öğrencilerden talep ettiği kırtasiye, kitap vb. ürünlerin tek noktadan tedariğini sağlamak 
    amacıyla kurulmuştur. 
    BEHA Kırtasiye A.Ş. Bursa Ticaret Sanayi Odası ve TÜKİD üyesidir.
    Daha fazla bilgi için <a href={'https://www.behasss.com/'} target="_blank">kurumsal web sitemizi</a> ziyaret edin.

</p>

  </Widget>
    );

    
                }
export default AboutUs;