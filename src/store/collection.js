export default {
    namespaced: true,
    state: {
        collections: [
            {
                id: 1,
                name: 'Clobug logo Collection Embroider',
                img: 'img/collection/one.webp',
                price: '1190'
            },
            {
                id: 2,
                name: 'Clobug logo Collection Embroider',
                img: 'img/collection/two.webp',
                price: '1590'
            },
            {
                id: 3,
                name: 'Clobug logo Collection Recycled',
                img: 'img/collection/three.webp',
                price: '1290'
            },
            {
                id: 4,
                name: 'Clobug logo Collection Printed',
                img: 'img/collection/four.webp',
                price: '1790'
            },
            {
                id: 5,
                name: 'Clobug logo Collection Bucket Hat',
                img: 'img/collection/five.webp',
                price: '2190'
            },
            {
                id: 6,
                name: 'Clobug logo Collection Cropped',
                img: 'img/collection/six.webp',
                price: '1990'
            },
        ],
        categories: [
            {
                id: 1,
                name: 'Knitwear',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Knitwear.webp',
                bgColor: '#9CA9BE',
            },
            {
                id: 2,
                name: 'Dresses',
                order: '1',
                title: 'Discover Now',
                img: 'img/banners/Dresses.webp',
                bgColor: '#F37878',
            },
            {
                id: 3,
                name: 'Tops',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Tops.webp',
                bgColor: '#966C3B',
            },
            {
                id: 4,
                name: 'T-Shirts',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/T-Shirts.webp',
                bgColor: '#D7C0AE',
            },
            {
                id: 5,
                name: 'Jumpsuits',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Jumpsuits.webp',
                bgColor: '#DFFFD8',
            },
            {
                id: 6,
                name: 'Shirts',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/Shirts.webp',
                bgColor: '#B4E4FF',
            },
            {
                id: 7,
                name: 'Co-ords',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Co-ords.webp',
                bgColor: '#FFACAC',
            },
            {
                id: 8,
                name: 'Bottoms',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/Bottoms.webp',
                bgColor: '#F8CBA6',
            },
        ],
        bestSeller: [
            {
                id: 1,
                name: 'Pacthwork Denim Jacket With Raw Hem',
                img: 'img/bestseller/one.webp',
                price: '2690',
            },
            {
                id: 2,
                name: 'Mesh Ombre Print Tube Dress',
                img: 'img/bestseller/two.webp',
                price: '1490',
            },
            {
                id: 3,
                name: 'Jacquard Sheer Tie-up-Top',
                img: 'img/bestseller/three.webp',
                price: '1490',
            },
            {
                id: 4,
                name: 'Mid-waist Wide Leg Jeans With Pockets',
                img: 'img/bestseller/four.webp',
                price: '1690',
            },
            {
                id: 5,
                name: 'Shorts Wrap Shirt Dress With Foil Print',
                img: 'img/bestseller/five.webp',
                price: '1990',
            },
        ],
        menuCategories: [
            {
                id: 1,
                title: 'Women Ethnic',
                bgColor: '#FFD0D0',
                subCat: [
                    {
                        title: 'All Women Ethnic',
                        slug:'all-women-ethnic',
                        links: [
                            { name: 'View All', rot: '/product-page/1' }
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Sarees',
                        slug:'sarees',
                        links: [
                            { name: 'All Sarees' }, { name: 'Silk Sarees' }, { name: 'Cotton Silk Sarees' },
                            { name: 'Cottom Sarees' }, { name: 'Georgette Sarees' }, { name: 'Chiffon Sarees' },
                            { name: 'Satin Sarees' }
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Kurtis',
                        slug:'kurtis',
                        links: [
                            { name: 'All Kurtis' }, { name: 'Anarkali Kurtis' }, { name: 'Rayon Kurtis' },
                            { name: 'Cotton Kurtis' }, { name: 'Embroidered Kurtis' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Kurta Sets',
                        slug:'kurta-sets',
                        links: [
                            { name: 'All Kurta Sets' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Suit & Dress Material',
                        slug:'suit-&-dress-material',
                        links: [
                            { name: ' All Suits & Dresses Material' }, { name: ' Cotton Suits' },
                            { name: ' Embroidered Suits' }, { name: 'Chanderi Suits' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Other Ethnic',
                        slug:'other-ethnic',
                        links: [
                            { name: 'Blouses' }, { name: ' Dupattas' },
                            { name: ' Lehanga' }, { name: 'Gown' },
                        ],
                        route: '/categories'
                    },
                ],
            },
            {
                id: 2,
                title: 'Women Western',
                bgColor: '#FAEBB1',
                subCat: [
                    {
                        title: 'Topwear',
                        slug:'topwear',
                        links: [
                            { name: 'Tops' }, { name: 'Dresses' }, { name: 'Sweaters' },
                            { name: 'Jumpsuits' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Bottomwear',
                        slug:'bottomwear',
                        links: [
                            { name: 'Jean' }, { name: 'Jeggings' }, { name: 'Palazzos' },
                            { name: 'Shorts' }, { name: 'Skirts' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Innerwear',
                        slug:'innerwear',
                        links: [
                            { name: 'Bra' }, { name: 'Briefs' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Sleepwear',
                        slug:'sleepwear',
                        links: [
                            { name: 'Nightsuits' },
                            { name: 'Babydolls' },
                        ],
                        route: '/categories'
                    },
                ],
            },
            {
                id: 3,
                title: 'Men',
                bgColor: '#C2DEDC',
                subCat: [
                    {
                        title: 'Top Wear',
                        slug:'top-wear',
                        links: [
                            { name: 'All Top Wear' },
                            { name: 'T-shirts' },
                            { name: 'Shirts' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Bottom Wear',
                        slug:'bottom-wear',
                        links: [
                            { name: 'Track Pants' }, { name: 'Jeans' }, { name: 'Trousers' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Men Accessories',
                        slug:'men-accessories',
                        links: [
                            { name: 'All Men Accessories' }, { name: 'Watches' }, { name: 'Belts' },
                            { name: 'Wallets' }, { name: 'Jewellary' },
                            { name: 'Sunglasses' }, { name: 'Bags' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Men Footwear',
                        slug:'men-footwear',
                        links: [
                            { name: 'Casual Shoes' },
                            { name: 'Formal Shoes' },
                            { name: 'Sports Shoes' },
                            { name: 'Sandals' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Ethnic Wear',
                        slug:'ethnic-wear',
                        links: [
                            { name: ' Men Kurtas' }, { name: ' Ethnic Jackets' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Inner & Sleep Wear',
                        slug:'inner-&-sleep-wear',
                        links: [
                            { name: 'All Inner & Sleep Wear' }, { name: ' Vests' },
                        ],
                        route: '/categories'
                    },
                ],
                links: 'View All'
            },
            {
                id: 4,
                title: 'Kids',
                bgColor: '#FFDDCC',
                subCat: [
                    {
                        title: 'Accessories',
                        slug:'accessories',
                        links: [
                            { name: 'Footwears' },
                            { name: 'Stationery' },
                            { name: 'Watches' },
                            { name: 'Bags & Backpacks' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Boys & Girls 2+ Years',
                        slug:'boys-&-girls-2+-years',
                        links: [
                            { name: 'Dresses' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Infant 0-2 Years',
                        slug:'infant-0-2-years',
                        links: [
                            { name: 'Rompers' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Kurta Sets',
                        slug:'kurta-sets',
                        links: [
                            { name: 'All Kurta Sets' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Baby Care',
                        slug:'baby-care',
                        links: [
                            { name: ' All Baby Care' },
                        ],
                        route: '/categories'
                    },
                ],
            },
            {
                id: 5,
                title: 'Home & Kitchen',
                bgColor: '#B3E5BE',
                subCat: [
                    {
                        title: 'Home Furnishing',
                        slug:'home-furnishing',
                        links: [
                            { name: 'Bedsheets' },
                            { name: 'Doormats' },
                            { name: 'Curtains & Sheers' },
                            { name: 'Cushions & Covers' },
                            { name: 'Mattress Protectors' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Home Decor',
                        slug:'home-decor',
                        links: [
                            { name: 'All Home Decor' },
                            { name: 'Stickers' },
                            { name: 'Clocks' },
                            { name: 'Showpieces' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Kitchen & Dinning',
                        slug:'kitchen-&-dinning',
                        links: [
                            { name: 'Kitchen Storage' },
                            { name: 'Cookware & Bakeware' },
                        ],
                        route: '/categories'
                    },
                ],
            },
            {
                id: 6,
                title: 'Beauty & Health',
                bgColor: '#FAEBB0',
                subCat: [
                    {
                        title: 'Make Up',
                        slug:'make-up',
                        links: [
                            { name: 'Face' },
                            { name: 'Nails' },
                            { name: 'Eyes' },
                            { name: 'Lips' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Wellness',
                        slug:'wellness',
                        links: [
                            { name: 'Sanitizers' },
                            { name: 'Oral Care' },
                            { name: 'Feminine Hygiene' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Skincare',
                        slug:'skincare',
                        links: [
                            { name: 'Deodorants' },
                        ],
                        route: '/categories'
                    },
                ],
            },
            {
                id: 7,
                title: 'Jewellary & Accessories',
                bgColor: '#FDFFAE',
                subCat: [
                    {
                        title: 'Jewellery',
                        slug:'jewellery',
                        links: [
                            { name: 'Jewellery Set' },
                            { name: 'Earrings' },
                            { name: 'Mangalsutras' },
                            { name: 'Studs' },
                            { name: 'Bangles' },
                            { name: 'Necklaces' },
                            { name: 'Rings' },
                            { name: 'Anklets' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Women Accessory',
                        slug:'women-accessory',
                        links: [
                            { name: 'Bags' },
                            { name: 'Watches' },
                            { name: ' Hair Accessories' },
                            { name: ' Sunglasses' },
                            { name: ' Socks' },
                        ],
                        route: '/categories'
                    },
                ],
            },
            {
                id: 8,
                title: 'Bags & Footwear',
                bgColor: '#EADBC8',
                subCat: [
                    {
                        title: 'Women Bags',
                        slug:'women-bags',
                        links: [
                            { name: 'All Women Bags' },
                            { name: 'Handbags' },
                            { name: 'Clutches' },
                            { name: 'Slingbags' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Men Bags',
                        slug:'men-bags',
                        links: [
                            { name: 'All Men Bags' },
                            { name: 'Wallets' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Women Footwear',
                        slug:'women-footwear',
                        links: [
                            { name: 'Flats' },
                            { name: 'Bellies' },
                            { name: 'Juttis' },
                        ],
                        route: '/categories'
                    },
                    {
                        title: 'Men Footwear',
                        slug:'men-footwear',
                        links: [
                            { name: 'Sports Shoes' },
                            { name: 'Casual Shoes' },
                            { name: 'Formal Shoes' },
                            { name: 'Sandals' },
                        ],
                        route: '/categories'
                    },
                ],
            },



        ],
    },
    getters: {
        getCollections(state) {
            return state.collections;
        },
        getCategories(state) {
            return state.categories;
        },
        getBestSeller(state) {
            return state.bestSeller;
        },
        getMenuCategories(state){
            return state.menuCategories;
        }
    },
    mutations: {},
    actions: {}
}