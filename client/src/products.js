
// const response = await fetch("http://localhost:3000/products");
// const products = await response.json();
const products = [
  {
    id: 1,
    title: 'Nike Flight Legacy',
    desc: 'Flight Legacy Sneakers For Men  (White)',
    thumbnail: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/y/h/m/8-bq4212-100-8-nike-white-original-imagqzkv6gyupkuh.jpeg?q=70',
    price: 6875.00,
    rating: 4.45,
    discount: 0,
    category: 'Sneakers',
    link: '/products/1',
    tags: 'Heavily-Discounted',
    tokenValue:100
  },
  {
    id: 2,
    title: 'APPLE MacBook Pro',
    desc: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
    thumbnail: 'https://rukminim2.flixcart.com/image/312/312/kuyf8nk0/computer/3/n/s/mk183hn-a-laptop-apple-original-imag7yzkbgbwvwq3.jpeg?q=70',
    price: 120000.00,
    rating: 4.57,
    discount: 0,
    category: 'Electronics',
    link: '/products/2',
    tags: 'Top',
  },
  {
    id: 3,
    title: 'APPLE iPhone X',
    desc: 'An apple mobile which is nothing like apple',
    thumbnail: 'https://m.media-amazon.com/images/I/61it7aqB-HL.jpg',
    price: 70000.00,
    rating: 4.45,
    discount: 15,
    category: 'Mobiles',
    link: '/products/3',
    tags: 'Top',
  },
  {
    id: 4,
    title: 'Puma Sneakers',
    desc: 'Rebound LayUp SL Sneakers For Men',
    thumbnail: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/l/r/v/10-369573-10-puma-parisian-night-high-risk-red-white-original-imaghbgnufgqtrgt.jpeg?q=70',
    price: 5000,
    rating: 4.50,
    discount: 20,
    category: 'Sneakers',
    link: '/products/4',
    tags: 'Best-Seller',
  },
  {
    id: 5,
    title: 'Puma Glory Sneakers',
    desc: 'Puma Glory Sneakers For Men',
    thumbnail: 'https://rukminim2.flixcart.com/image/832/832/kxtaxzk0/shoe/6/a/j/9-387965-9-puma-black-white-yellow-alert-original-imaga6hm8jnagyay.jpeg?q=70',
    price: 3000.00,
    rating: 4.3,
    discount: 20,
    category: 'Sneakers',
    link: '/products/5',
    tags: 'Top',
  },
  {
    id: 6,
    title: 'APPLE iPhone 14',
    desc: 'APPLE iPhone 14 (Blue, 128 GB)',
    thumbnail: 'https://imagineonline.store/cdn/shop/products/MPUR3HN_A_1.jpg?v=1662718728',
    price: 79900.00,
    rating: 4.6,
    discount: 14,
    category: 'Mobiles',
    link: '/products/6',
    tags: 'Top',
  },
  {
    id: 7,
    title: 'APPLE iPhone 13',
    desc: 'APPLE iPhone 13 (Starlight, 128 GB)',
    thumbnail: 'https://m.media-amazon.com/images/I/315vs3rLEZL.jpg',
    price: 60000.00,
    rating: 4.7,
    discount: 14,
    category: 'Mobiles',
    link: '/products/7',
    tags: 'Best-Seller',
  },  
  {
    id: 8,
    title: 'MONSIEUR WATCH',
    desc: 'Platinum and Grand Feu enamel dial with jumping hour and 240° retrograde minute',
    thumbnail: 'https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/monsieur-watch-black-platinum-calfskin-packshot-default-h6597-8833228242974.jpg',
    price: 150000.00,
    rating: 4.3,
    discount: 0,
    category: 'Fashion',
    link: '/products/8',
    tags: 'Best-Seller',
  },
  {
    id: 9,
    title: 'PREMIÈRE GOURMETTE CHAIN WATCH',
    desc: 'Small version, steel and diamonds, black dial',
    thumbnail: 'https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/premiere-gourmette-chain-watch-black-silver-steel-diamond-packshot-default-h7021-9527990485022.jpg',
    price: 112500.00,
    rating: 4.8,
    discount: 0,
    category: 'Fashion',
    link: '/products/9',
    tags: 'Top',
  },
  {
    id: 10,
    title: 'J12 CYBERNETIC WATCH, 38 MM',
    desc: 'Black and white highly resistant ceramic and steel',
    thumbnail: 'https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/j12-cybernetic-watch-38-mm-black-white-black-ceramic-steel-white-ceramic-packshot-default-h7988-9527970201630.jpg',
    price: 200000.00,
    rating: 4.9,
    discount: 0,
    category: 'Fashion',
    link: '/products/10',
    tags: 'Best-Seller',
  },
  {
    id: 11,
    title: 'ADIDAS ULTRABOOST 1.0 SHOES',
    desc: 'Light Solid Grey / Light Solid Grey / Bold Gold',
    thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8821e194e24a44c08447af2c0123077a_9366/Ultraboost_1.0_Shoes_Grey_GY7479_01_standard.jpg',
    price: 17999.00,
    rating: 3.5,
    discount: 0,
    category: 'Sneakers',
    link: '/products/11',
    tags: 'Heavily-Discounted',
    tokenValue:500
  },
  {
    id: 12,
    title: 'ADIDAS NMD_R1 PRIMEBLUE SHOES',
    desc: 'Cloud White / Cloud White / Gum',
    thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c3bd9dda9fdd4a7cbc9aad1e00dd0045_9366/NMD_R1_Primeblue_Shoes_White_GZ9260_01_standard.jpg',
    price: 14999.00,
    rating: 3.9,
    discount: 0,
    category: 'Sneakers',
    link: '/products/12',
    tags: 'Best-Seller',
  },
  {
    id: 13,
    title: 'Nike Vaporfly 3',
    desc: 'Men\'s Road Racing Shoes',
    thumbnail: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1af9c87c-6e11-4bc6-ad66-648558bc49b7/vaporfly-3-road-racing-shoes-xsDgvM.png',
    price: 20695.00,
    rating: 3.9,
    discount: 0,
    category: 'Sneakers',
    link: '/products/13',
    tags: 'Best-Seller',
  },
  {
    id: 14,
    title: 'Jordan Retro 6 G NRG',
    desc: 'Men\'s Golf Shoes',
    thumbnail: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/81c57e35-2f71-467d-89df-3b73fc8c3608/jordan-retro-6-g-nrg-golf-shoes-wrVjdt.png',
    price: 18395.00,
    rating: 4.6,
    discount: 0,
    category: 'Sneakers',
    link: '/products/14',
    tags: 'Best-Seller',
  },
  {
    id: 15,
    title: 'Air Jordan 7 Retro',
    desc: 'Men\'s Shoes',
    thumbnail: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b23ceacd-c912-4d0f-adc4-2c078e3bd3e9/air-jordan-7-retro-shoes-xbNFP8.png',
    price: 19695.00,
    rating: 4.4,
    discount: 0,
    category: 'Sneakers',
    link: '/products/15',
    tags: 'Top',
  },
  {
    id: 16,
    title: 'NMD_R1 SHOES',
    desc: 'Shadow Navy / Grey Two / Core Black',
    thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a32d9c0ac4f14c1fa5c0af8c00d2dac4_9366/NMD_R1_Shoes_Blue_HQ4462_01_standard.jpg',
    price: 14999.00,
    rating: 3.2,
    discount: 0,
    category: 'Sneakers',
    link: '/products/16',
    tags: 'Best-Seller',
  },
  {
    id: 17,
    title: 'LV First Pilot Sunglasses',
    desc: 'Golden Frame Brown Arms',
    thumbnail: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-first-pilot-sunglasses-s00-sunglasses--Z2049U_PM2_Front%20view.png?wid=1090&hei=1090',
    price: 59000.00,
    rating: 3.8,
    discount: 0,
    category: 'Fashion',
    link: '/products/17',
    tags: 'Top',
  },
  {
    id: 18,
    title: 'LV Olympia Sandal',
    desc: 'White Heal Sandals',
    thumbnail: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-olympia-sandal-shoes--AP5S1HLK01_PM2_Front%20view.png?wid=1090&hei=1090',
    price: 101000.00,
    rating: 4.5,
    discount: 0,
    category: 'Fashion',
    link: '/products/18',
    tags: 'Best-Seller',
  },
  {
    id: 19,
    title: 'LV Felted Wool High Neck Knit Mini Dress',
    desc: 'Red/Blue Wool Knitted Dress with Black Belt',
    thumbnail: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-felted-wool-high-neck-knit-mini-dress-for-women--FPKW89DPK506_PM2_Front%20view.png?wid=1090&hei=1090',
    price: 169000.00,
    rating: 4.2,
    discount: 0,
    category: 'Fashion',
    link: '/products/19',
    tags: 'Heavily-Discounted',
    tokenValue:1000
  },
  {
    id: 20,
    title: 'LV Leather Lapel Blazer',
    desc: 'Black Blazer',
    thumbnail: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-leather-lapel-blazer%20-ready-to-wear--FPVE31BAH900_PM2_Front%20view.png?wid=2400&hei=2400',
    price: 475000.00,
    rating: 4.1,
    discount: 0,
    category: 'Fashion',
    link: '/products/20',
    tags: 'Heavily-Discounted',
    tokenValue:400
  },
  {
    id: 21,
    title: 'LV 3D Bustier Velvet Hem Dress',
    desc: 'Black Long Dress',
    thumbnail: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-3d-bustier-velvet-hem-dress-ready-to-wear--FPRO43CQF900_PM2_Front%20view.png?wid=1090&hei=1090',
    price: 510000.00,
    rating: 4.5,
    discount: 0,
    category: 'Fashion',
    link: '/products/21',
    tags: 'Top',
  },
  {
    id: 22,
    title: 'Samsung Galaxy S23 Ultra',
    desc: '1TB | 12GB',
    thumbnail: 'https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/product_color_green.png?imwidth=480',
    price: 154999.00,
    rating: 4.3,
    discount: 0,
    category: 'Mobiles',
    link: '/products/22',
    tags: 'Best-Seller',
  },
  {
    id: 23,
    title: 'Samsung Galaxy S23+',
    desc: '512GB | 8GB',
    thumbnail: 'https://images.samsung.com/in/smartphones/galaxy-s23/buy/product_color_phantom_black.png?imwidth=480',
    price: 85999.00,
    rating: 4.2,
    discount: 0,
    category: 'Mobiles',
    link: '/products/23',
    tags: 'Top',
  },
  {
    id: 24,
    title: 'Samsung Galaxy Z Fold5',
    desc: 'Unlocked  |  512GB  |  Phantom Black',
    thumbnail: 'https://image-us.samsung.com/us/smartphones/galaxy-z-fold5/PhantomBlack/1.jpg?$product-details-jpg$',
    price: 150000.00,
    rating: 3.8,
    discount: 0,
    category: 'Mobiles',
    link: '/products/24',
    tags: 'Top',
  },
  {
    id: 25,
    title: 'APPLE iPad Pro',
    desc: '32.77 cm-12.9-inch-display',
    thumbnail: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202212?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1667594167534',
    price: 112900.00,
    rating: 4.0,
    discount: 0,
    category: 'Electronics',
    link: '/products/25',
    tags: 'Best-Seller',
  },
  {
    id: 26,
    title: 'Samsung Galaxy Z Flip5',
    desc: 'Unlocked  |  256GB  |  Mint',
    thumbnail: 'https://image-us.samsung.com/us/smartphones/galaxy-z-flip5/Mint/1.jpg?$product-details-jpg$',
    price: 85000.00,
    rating: 4.1,
    discount: 0,
    category: 'Mobiles',
    link: '/products/26',
    tags: 'Top',
  },
  {
    id: 27,
    title: 'APPLE Watch Ultra',
    desc: 'Ocean Band | Trail Loop | Alpine Loop',
    thumbnail: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ultra-band-unselect-gallery-1-202307_GEO_IN?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1688678680715',
    price: 89900.00,
    rating: 4.2,
    discount: 0,
    category: 'Electronics',
    link: '/products/27',
    tags: 'Top',
  },
  {
    id: 28,
    title: 'Galaxy Watch6',
    desc: '(LTE, 40mm)',
    thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-r935-469950-sm-r935fzeains-537406654?$1300_1038_PNG$',
    price: 33999.00,
    rating: 3.5,
    discount: 0,
    category: 'Electronics',
    link: '/products/28',
    tags: 'Heavily-Discounted',
    tokenValue:300
  },
  {
    id: 29,
    title: 'APPLE Watch Series 8',
    desc: 'Stainless Steel | Aluminium',
    thumbnail: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/s8-case-unselect-gallery-1-202307_GEO_IN?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1688682678442',
    price: 45900.00,
    rating: 4.2,
    discount: 0,
    category: 'Electronics',
    link: '/products/29',
    tags: 'Heavily-Discounted',
    tokenValue:600
  },
  {
    id: 30,
    title: 'Nothing Phone (2)',
    desc: 'Uniquely designed Nothing OS 2.0 New Glyph Interface 50 MP dual rear camera + 32 MP front camera 6.7” flexible LTPO OLED display Snapdragon® 8+ Gen 1',
    thumbnail: 'https://cdn.shopifycdn.net/s/files/1/0692/5988/6904/files/BA_ALAK_200.1001.png?v=1688611423',
    price: 44999.00,
    rating: 4.8,
    discount: 0,
    category: 'Mobiles',
    link: '/products/#',
    tags: 'Top',
  },
  {
    id: 31,
    title: 'STANMORE II BLUETOOTH',
    desc: 'Classic Marshall details such as a textured vinyl covering, salt & pepper fret and the iconic script logo',
    thumbnail: 'https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw7f9fec3d/images/marshall/speakers/stanmore-ii-bt/black/large/pos-marshall-stanmore-ii-bt-black-01.png?sw=1240&sh=1240&sm=fit',
    price: 39999.00,
    rating: 4.0,
    discount: 0,
    category: 'Electronics',
    link: '/products/31',
    tags: 'Heavily-Discounted',
    tokenValue:150
  },
  {
    id: 32,
    title: 'MOMENTUM 4 Wireless',
    desc: 'Headband stereo headphones Bluetooth 5.2 compliant, class 1, 10 mW (max)',
    thumbnail: 'https://media.graphassets.com/resize=w:1000,fit:crop/quality=value:65/auto_image/compress/OSPP5N0Sd2j4ND4xjMMJ',
    price: 34990.00,
    rating: 4.0,
    discount: 0,
    category: 'Electronics',
    link: '/products/32',
    tags: 'Heavily-Discounted',
    tokenValue:700
  },
  {
    id: 33,
    title: 'HD 800 S',
    desc: 'The audiophile headphones all others are measured against',
    thumbnail: 'https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/smB47X7oRYu5p5iRVVUF',
    price: 169990.00,
    rating: 4.6,
    discount: 0,
    category: 'Electronics',
    link: '/products/33',
    tags: 'Heavily-Discounted',
    tokenValue:1200
  },
];

export default products;