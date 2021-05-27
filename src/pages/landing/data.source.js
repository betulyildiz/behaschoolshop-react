import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    
    children: require('../../assets/images/logo1.png'),
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '/app/shop/canta',
          children: [{ children: 'Çanta', name: 'text' }],
        },
        /*subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Çanta',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'Okul Çantası',
                },
              ],
            },
          }
        ],*/
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '/app/shop/matara',
          children: [{ children: 'Matara', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: { 
          href: '/app/shop/yazi-gerecleri',
          children: [{ children: 'Yazı Gerçeleri', name: 'text' }],
        },
      }      
    ],
  },
  Menu2: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '/app/shop/canta',
          children: [{ children: 'Çanta', name: 'text' }],
        },
       
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '/app/shop/matara',
          children: [{ children: 'Matara', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: { 
          href: '/app/shop/yazi-gerecleri',
          children: [{ children: 'Yazı Gerçeleri', name: 'text' }],
        },
      }      
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: require('../../assets/images/logos.png'),
  },
  content: {
    className: 'banner0-content',
    children: 'Akıllı Okul Alışverişi',
  },
  button: {href: '/app', className: 'banner0-button', children: 'Alışverişe Başla' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式业务接入',
            },
            { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式事中风险监控',
            },
            {
              name: 'content',
              children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式数据运营',
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Portfolyo', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: 'Çanta ve matara ürünlerimizi gördünüz mü ?',
        href: '/app/shop/canta'
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          category : 'Çanta > Sırt Çantası',
          wrapper: { className: 'content5-block-content' },
          href: '/app/shop/canta',
          img: {
            children:
            require('../../assets/images/backpack.svg'),
              href : '/app/shop/canta'
          },
          
          content: { children: 'Sırt Çantası' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          category : 'Çanta > Postacı Çanta',
          wrapper: { className: 'content5-block-content' },
          href: '/app/shop/canta',
          img: {
            children:
            require('../../assets/images/messenger-bag.svg'),
          },
          content: { children: 'Postacı Çanta' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          category : 'Çanta > Çekçekli Çanta',
          wrapper: { className: 'content5-block-content' },
          href: '/app/shop/canta',
          img: {
            children:
            require('../../assets/images/travel.svg'),
          },
          content: { children: 'Çekçekli Çanta' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          category : 'Çanta > Beslenme Çantası',
          wrapper: { className: 'content5-block-content' },
          href: '/app/shop/canta',
          img: {
            children:
            require('../../assets/images/food.svg'),
          },
          content: { children: 'Beslenme Çantası' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          category : 'Matara > Çelik Matara',
          wrapper: { className: 'content5-block-content' },
          href: '/app/shop/matara',
          img: {
            children:
            require('../../assets/images/thermos.svg'),
          },
          content: { children: 'Çelik Termos' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          category : 'Matara > Plastik Matara',
          wrapper: { className: 'content5-block-content' },
          href: '/app/shop/matara',
          img: {
            children:
            require('../../assets/images/sumatara.svg'),
          },
          content: { children: 'Matara' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          category : 'Çanta > Kalem Çantası',
          wrapper: { className: 'content5-block-content' },
          href: '/app/shop/canta',
          img: {
            children:
            require('../../assets/images/pencilcase.svg'),
          },
          content: { children: 'Kalem Çantası' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          category : 'Yazı Gereçleri > Versatil Kalem ve Minler',
          wrapper: { className: 'content5-block-content' },
          href: '/app/shop/yazi-gerecleri',
          img: {
            children: require('../../assets/images/pencil.svg'),
            
          },
          content: { children: 'Yazı Gerçeleri' },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于阿里云强大的基础资源',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '企业资源管理' },
          content: {
            className: 'content3-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云安全' },
          content: {
            className: 'content3-content',
            children:
              '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云监控' },
          content: {
            className: 'content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children:
              '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '分布式中间件' },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children:
              '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
             require('../../assets/images/behaslogo.png')
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: "Kazançlı Okul, BEHA Kırtasiye Sanayi ve Ticaret AŞ markasıdır.\
              BEHA Kırtasiye AŞ, Bursa Ticaret Sanayi Odası üyesidir.",
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Bilgiler' },
        childWrapper: {
          children: [ 
            { name: 'hakkimizda', href: '/app/hakkimizda', children: 'Hakkımızda' },
            { name: 'hizmet-politikasi', href: '/app/hizmet-politikasi', children: 'Hizmet Politikası' },
            { name: 'iptal-iade-sartlari', href: '/app/iptal-iade-sartlari', children: 'İptal ve İade Şartları' },
            { name: 'kullanim-sartlari', href: '/app/mesafeli-satis-sozlesmesi', children: 'Mesafeli Satış Sözleşmesi' },
            
            { name: 'kvkk', href: '/app/kvkk', children: 'Kişisel Verilerin Korunması' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'İletişim' },
        childWrapper: {
          children: [
            {name: 'link0', children: 'Konak Mahallesi Beşevler Caddesi No:72/A Nilüfer/Bursa' },
            { name: 'link1', children: 'info@behakirtasiyeas.com' },
          ],
        },
      },{
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            require('../../assets/images/logo_odeme.png')
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: "İyzico ödeme yöntemiyle güvenli alışveriş.",
            },
          ],
        },
      }
     /* {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: require('../../assets/images/behaslogo.png') },
        childWrapper: {
          children: [
            { name: 'link0', children: 'İyzico' },
            {  name: 'link1', children: 'Güvenli Ödeme' },
            
          ],
        },
      }*/,
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        2020 <a href=""><img style={{width:"11%"}} src={require('../../assets/images/logo1.png')}></img> KazançlıOkul </a> Tüm Hakları Saklıdır.
      </span>
    ),
  },
};
