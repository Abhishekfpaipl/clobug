export default {
    namespaced: true,
    state: {
        cart: [
            {
                id: 1,
                name: 'TSS Originals Paani Puri',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1688793256_2988854.jpg?format=webp&w=160&dpr=1.3',
                type: 'Oversized Tshirts',
                sizes: [
                    { name: 'S' },
                    { name: 'M' },
                    { name: 'L' },
                    { name: 'XL' },
                    { name: 'XXL' },
                    { name: 'Free' },
                ],
                quantities: [
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                ],
                price: 999,
                date: '02 Aug',
                selectedSize: 'L',
                selectedQuantity: 1,
            },
            {
                id: 2,
                name: 'Batman 3D Logo',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1684474774_6847208.jpg?format=webp&w=160&dpr=1.3',
                type: 'Oversized Tshirts',
                sizes: [
                    { name: 'S' },
                    { name: 'M' },
                    { name: 'L' },
                    { name: 'XL' },
                    { name: 'XXL' },
                    { name: 'Free' },
                ],
                quantities: [
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                ],
                price: 1999,
                date: '05 Aug',
                selectedSize: 'M',
                selectedQuantity: 2,
            },
            {
                id: 3,
                name: 'The Flash Time To Go',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1686373182_4048461.jpg?format=webp&w=160&dpr=1.3',
                type: 'Oversized Tshirts',
                sizes: [
                    { name: 'S' },
                    { name: 'M' },
                    { name: 'L' },
                    { name: 'XL' },
                    { name: 'XXL' },
                    { name: 'Free' },
                ],
                quantities: [
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                ],
                price: 1499,
                date: '10 Aug',
                selectedSize: 'XL',
                selectedQuantity: 3,
            }
        ]
    },
    getters: {
        getCart(state) {
            return state.cart
        },
       
    },
    mutations: {},
    actions: {},
}