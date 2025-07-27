import n1 from '../img/20.webp'
import n2 from '../img/17.webp'
import n3 from '../img/6.webp'
import w1 from '../img/1.webp'
import w2 from '../img/15.webp'
import w3 from '../img/14.webp'
import w4 from '../img/23.webp'
import m1 from '../img/21.webp'
import m2 from '../img/5.webp'
import m3 from '../img/11.webp'
import m4 from '../img/12.webp'
import e1 from '../img/2.webp'
import e2 from '../img/22.webp'
import e3 from '../img/7.webp'
import k1 from '../img/28.webp'
import k2 from '../img/29.webp'
import k3 from '../img/30.webp'
import s1 from '../img/19.webp'
import s2 from '../img/4.webp'
import s3 from '../img/24.webp'
const categories = [
    {
      name: 'New',
      path: '/new',
      subcategories: [
        {
          name: 'New',
          path: '/new/new',
          image: n1,
          nested: [
            { name: 'Women', path: '/new/new/women' },
            { name: 'Men', path: '/new/new/men' },
            { name: 'essentials', path: '/new/new/essentials' },
          ],
        },
        {
          name: 'Featured',
          path: '/new/featured',
          image: n2,
          nested: [
            { name: 'Best Sellers', path: '/new/featured/best-sellers' },
            { name: 'Street Style', path: '/new/featured/street-style-summer' },
            { name: 'Summer Edit', path: '/new/featured/summer-edit' },
            { name: 'Summer Nights', path: '/new/featured/summer-nights' },
            { name: 'Vacation Shop', path: '/new/featured/vacation-shop' },
            { name: 'Pride Collection', path: '/new/featured/pride-collection' },
            { name: 'Linen Collection', path: '/new/featured/linen-collection' },
            { name: 'Icon Cotton', path: '/new/featured/icon-cotton' },
            { name: 'Shapewear', path: '/new/featured/shapewear-guide' },
            { name: 'Runway', path: '/new/featured/runway' },
          ],
        },
        {
          name: 'Campaigns',
          path: '/new/campaigns',
          image: n3,
          nested: [
            { name: 'Elena Voss', path: '/new/campaigns/elena-voss' },
            { name: 'Marcus Laine', path: '/new/campaigns/marcus-laine' },
            { name: 'Sofia Renard', path: '/new/campaigns/sofia-renard' },
            { name: 'Julian Holt', path: '/new/campaigns/julian-holt' },
            { name: 'Amara Kline', path: '/new/campaigns/amara-kline' },
            { name: 'Theo Moreau', path: '/new/campaigns/theo-moreau' },
          ],
        },
      ],
    },
    {
        name: 'Women',
        path: '/women',
        subcategories: [
          {
            name: 'Apparel',
            path: '/women/apparel',
            image: w1,
            nested: [
              { name: 'Shop All', path: '/women/apparel/shop-all' },
              { name: 'Tops', path: '/women/apparel/tops' },
              { name: 'Dresses', path: '/women/apparel/dresses' },
              { name: 'Bottoms', path: '/women/apparel/bottoms' },
              { name: 'Denim', path: '/women/apparel/denim' },
              { name: 'Activewear', path: '/women/apparel/activewear' },
              { name: 'Outerwear', path: '/women/apparel/outerwear' },
              { name: 'Swim', path: '/women/apparel/swim' },
              { name: 'Suiting', path: '/women/apparel/suiting' },
            ],
          },
          {
            name: 'Essentials',
            path: '/women/essentials',
            image: w2,
            nested: [
              { name: 'Shop All', path: '/women/essentials/shop-all' },
              { name: 'Panties', path: '/women/essentials/panties' },
              { name: 'Bras', path: '/women/essentials/bras-bralettes' },
              { name: 'Shapewear', path: '/women/essentials/shapewear' },
              { name: 'Loungewear', path: '/women/essentials/loungewear' },
              { name: 'essentials Sets', path: '/women/essentials/essentials-sets' },
              { name: 'Socks', path: '/women/essentials/socks' },
            ],
          },
          {
            name: 'Accessories',
            path: '/women/accessories',
            image: w3,
            nested: [
              { name: 'Shop All', path: '/women/accessories/shop-all' },
              { name: 'Bags', path: '/women/accessories/bags' },
              { name: 'Watches', path: '/women/accessories/watches' },
              { name: 'Jewelry', path: '/women/accessories/jewelry' },
              { name: 'Wallets', path: '/women/accessories/wallets-small-goods' },
              { name: 'Hats', path: '/women/accessories/hats' },
              { name: 'Socks', path: '/women/accessories/socks' },
              { name: 'Belts', path: '/women/accessories/belts' },
              { name: 'Sunglasses', path: '/women/accessories/sunglasses' },
            ],
          },
          {
            name: 'Shoes',
            path: '/women/shoes',
            image: w4,
            nested: [
              { name: 'Shop All', path: '/women/shoes/shop-all' },
              { name: 'Sneakers', path: '/women/shoes/sneakers' },
              { name: 'Sandals', path: '/women/shoes/sandals-slides' },
              { name: 'Heels', path: '/women/shoes/heels' },
              { name: 'Flats', path: '/women/shoes/flats' },
            ],
          },
        ],
      },
      {
        name: 'Men',
        path: '/men',
        subcategories: [
          {
            name: 'Apparel',
            path: '/men/apparel',
            image: m1,
            nested: [
              { name: 'Shop All', path: '/men/apparel/shop-all' },
              { name: 'Tops', path: '/men/apparel/tops' },
              { name: 'Bottoms', path: '/men/apparel/bottoms' },
              { name: 'Denim', path: '/men/apparel/denim' },
              { name: 'Outerwear', path: '/men/apparel/outerwear' },
              { name: 'Swim', path: '/men/apparel/swim' },
              { name: 'Suiting', path: '/men/apparel/suiting' },
              { name: 'Activewear', path: '/men/apparel/activewear' },
            ],
          },
          {
            name: 'Essentials',
            path: '/men/essentials',
            image: m2,
            nested: [
              { name: 'Shop All', path: '/men/essentials/shop-all' },
              { name: 'Boxer Briefs', path: '/men/essentials/boxer-briefs' },
              { name: 'Trunks', path: '/men/essentials/trunks' },
              { name: 'Briefs', path: '/men/essentials/briefs' },
              { name: 'Boxers', path: '/men/essentials/boxers' },
              { name: 'Multipacks', path: '/men/essentials/multipacks' },
              { name: 'Loungewear', path: '/men/essentials/loungewear' },
              { name: 'Undershirts', path: '/men/essentials/undershirts' },
              { name: 'Socks', path: '/men/essentials/socks' },
            ],
          },
          {
            name: 'Accessories',
            path: '/men/accessories',
            image: m3,
            nested: [
              { name: 'Shop All', path: '/men/accessories/shop-all' },
              { name: 'Hats', path: '/men/accessories/hats' },
              { name: 'Bags', path: '/men/accessories/bags' },
              { name: 'Wallets', path: '/men/accessories/wallets-small-goods' },
              { name: 'Socks', path: '/men/accessories/socks' },
              { name: 'Belts', path: '/men/accessories/belts' },
              { name: 'Watches', path: '/men/accessories/watches' },
              { name: 'Jewelry', path: '/men/accessories/jewelry' },
              { name: 'Sunglasses', path: '/men/accessories/sunglasses' },
            ],
          },
          {
            name: 'Shoes',
            path: '/men/shoes',
            image: m4,
            nested: [
              { name: 'Shop All', path: '/men/shoes/shop-all' },
              { name: 'Sneakers', path: '/men/shoes/sneakers' },
              { name: 'Sandals', path: '/men/shoes/sandals-slides' },
              { name: 'Dress Shoes', path: '/men/shoes/dress-shoes' },
            ],
          },
        ],
      },
      {
        name: 'Essentials',
        path: '/essentials',
        subcategories: [
            {
            name: 'New Arrivals',
            path: '/essentials/new-arrivals',
            image: e3,
            nested: [
              { name: 'Logo Collection', path: '/essentials/new-arrivals/logo-collection' },
            ],
          },
          {
            name: 'Women',
            path: '/essentials/women',
            image: e1,
            nested: [
              { name: 'Shop All', path: '/essentials/women/shop-all' },
              { name: 'Panties', path: '/essentials/women/panties' },
              { name: 'Bras', path: '/essentials/women/bras-bralettes' },
              { name: 'Shapewear', path: '/essentials/women/shapewear' },
              { name: 'Loungewear', path: '/essentials/women/loungewear' },
              { name: 'essentials Sets', path: '/essentials/women/essentials-sets' },
              { name: 'Socks', path: '/essentials/women/socks' },
            ],
          },
          {
            name: 'Men',
            path: '/essentials/men',
            image: e2,
            nested: [
              { name: 'Shop All', path: '/essentials/men/shop-all' },
              { name: 'Boxer Briefs', path: '/essentials/men/boxer-briefs' },
              { name: 'Trunks', path: '/essentials/men/trunks' },
              { name: 'Briefs', path: '/essentials/men/briefs' },
              { name: 'Boxers', path: '/essentials/men/boxers' },
              { name: 'Multipacks', path: '/essentials/men/multipacks' },
              { name: 'Loungewear', path: '/essentials/men/loungewear' },
              { name: 'Undershirts', path: '/essentials/men/undershirts' },
              { name: 'Socks', path: '/essentials/men/socks' },
            ],
          },
         
        ],
      },
      {
        name: 'Kids',
        path: '/kids',
        subcategories: [
          {
            name: 'New Arrivals',
            path: '/kids/new-arrivals',
            image: k1,
            nested: [
              { name: 'Logo Collection', path: '/kids/new-arrivals/logo-collection' },
            ],
          },
          {
            name: 'Girls',
            path: '/kids/girls',
            image: k2,
            nested: [
              { name: 'Shop All', path: '/kids/girls/shop-all' },
              { name: 'Apparel', path: '/kids/girls/apparel' },
              { name: 'essentials', path: '/kids/girls/essentials' },
            ],
          },
          {
            name: 'Boys',
            path: '/kids/boys',
            image: k3,
            nested: [
              { name: 'Shop All', path: '/kids/boys/shop-all' },
              { name: 'Apparel', path: '/kids/boys/apparel' },
              { name: 'essentials', path: '/kids/boys/essentials' },
              { name: 'Suiting', path: '/kids/boys/suiting' },
            ],
          },
        ],
      },
      {
        name: 'Sale',
        path: '/sale',
        subcategories: [
          
          {
            name: 'Women',
            path: '/sale/women',
            image: s1,
            nested: [
              { name: 'Shop All', path: '/sale/women/shop-all' },
              { name: 'Dresses', path: '/sale/women/dresses' },
              { name: 'Activewear', path: '/sale/women/activewear' },
              { name: 'Tops', path: '/sale/women/tops' },
              { name: 'Bottoms', path: '/sale/women/bottoms' },
              { name: 'Outerwear', path: '/sale/women/outerwear' },
              { name: 'Denim', path: '/sale/women/denim' },
              { name: 'Loungewear', path: '/sale/women/loungewear' },
              { name: 'Swim', path: '/sale/women/swim' },
              { name: 'Accessories', path: '/sale/women/accessories' },
            ],
          },
          {
            name: 'Men',
            path: '/sale/men',
            image: s2,
            nested: [
              { name: 'Shop All', path: '/sale/men/shop-all' },
              { name: 'Essentials', path: '/sale/men/essentials' },
              { name: 'Tops', path: '/sale/men/tops' },
              { name: 'Bottoms', path: '/sale/men/bottoms' },
              { name: 'Outerwear', path: '/sale/men/outerwear' },
              { name: 'Denim', path: '/sale/men/denim' },
              { name: 'Loungewear', path: '/sale/men/loungewear' },
              { name: 'Swim', path: '/sale/men/swim' },
              { name: 'Accessories', path: '/sale/men/accessories' },
            ],
          },
          {
            name: 'Essentials',
            path: '/sale/essentials',
            image: s3,
            nested: [
              { name: 'Shop All', path: '/sale/essentials/shop-all' },
              { name: 'Women', path: '/sale/essentials/women' },
              { name: 'Men', path: '/sale/essentials/men' },
              { name: 'Kids', path: '/sale/essentials/kids' },
            ],
          },
        ],
      }
];

export default categories;