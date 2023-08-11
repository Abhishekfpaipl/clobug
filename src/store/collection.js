export default {
    namespaced: true,
    state: {
        collections: [
            {
                id: 1,
                name: 'Clobug logo Collection Embroider',
                img: 'https://img101.urbanic.com/v1/1f3449072c4a469aab28e3e401f20a0a.webp',
                price: '1190'
            },
            {
                id: 2,
                name: 'Clobug logo Collection Embroider',
                img: 'https://img101.urbanic.com/v1/e03f8307dd984b8a8e5ad637ecbf6e5e.webp',
                price: '1590'
            },
            {
                id: 3,
                name: 'Clobug logo Collection Recycled',
                img: 'https://img101.urbanic.com/v1/32e5152dc66f4c079a46024c41f4d2d0.webp',
                price: '1290'
            },
            {
                id: 4,
                name: 'Clobug logo Collection Printed',
                img: 'https://img101.urbanic.com/v1/3ff7f84fa345405da6ea075fc74f6cef.webp',
                price: '1790'
            },
            {
                id: 5,
                name: 'Clobug logo Collection Bucket Hat',
                img: 'https://img101.urbanic.com/v1/736431fb5f9f4ea0a510dca0b7062e59.webp',
                price: '2190'
            },
            {
                id: 6,
                name: 'Clobug logo Collection Cropped',
                img: 'https://img101.urbanic.com/v1/27b5619fdf364ecca4d3d2db229e3d74.webp',
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
                bgColor:'#9CA9BE',
            },
            {
                id: 2,
                name: 'Dresses',
                order: '1',
                title: 'Discover Now',
                img: 'img/banners/Dresses.webp',
                bgColor:'#F37878',
            },
            {
                id: 3,
                name: 'Tops',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Tops.webp',
                bgColor:'#966C3B',
            },
            {
                id: 4,
                name: 'T-Shirts',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/T-Shirts.webp',
                bgColor:'#D7C0AE',
            },
            {
                id: 5,
                name: 'Jumpsuits',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Jumpsuits.webp',
                bgColor:'#DFFFD8',
            },
            {
                id: 6,
                name: 'Shirts',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/Shirts.webp',
                bgColor:'#B4E4FF',
            },
            {
                id: 7,
                name: 'Co-ords',
                order: '0',
                title: 'Explore Now',
                img: 'img/banners/Co-ords.webp',
                bgColor:'#FFACAC',
            },
            {
                id: 8,
                name: 'Bottoms',
                order: '1',
                title: 'Explore Now',
                img: 'img/banners/Bottoms.webp',
                bgColor:'#F8CBA6',
            },
        ],
        bestSeller: [
            {
                id: 1,
                name: 'Pacthwork Denim Jacket With Raw Hem',
                img: 'https://img101.urbanic.com/v1/483e510102d24057969c6838a5106182.webp',
                price: '2690',
            },
            {
                id: 2,
                name: 'Mesh Ombre Print Tube Dress',
                img: 'https://img101.urbanic.com/v1/3c1a950c282d4471bbd812b55b4eb9a4.webp',
                price: '1490',
            },
            {
                id: 3,
                name: 'Jacquard Sheer Tie-up-Top',
                img: 'https://img101.urbanic.com/v1/fd462bd197a446ab8d2e39ff2aa35a65.webp',
                price: '1490',
            },
            {
                id: 4,
                name: 'Mid-waist Wide Leg Jeans With Pockets',
                img: 'https://img101.urbanic.com/v1/3e76016e60f14d46bd0705f25123151d.webp',
                price: '1690',
            },
            {
                id: 5,
                name: 'Shorts Wrap Shirt Dress With Foil Print',
                img: 'https://img101.urbanic.com/v1/bcb4560a61844dbda83247ed7f03d3b0.webp',
                price: '1990',
            },
        ]
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
    },
    mutations: {},
    actions: {}
}