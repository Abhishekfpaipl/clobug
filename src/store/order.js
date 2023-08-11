export default {
    namespaced: true,
    state: {
        // orders: [
        //     {
        //         id: 1,
        //         oid: '5426308975',
        //         date: '14',
        //         amount: '2,88,000',
        //         month: 'Jun',
        //         item: '25',
        //         qty: '200',
        //         statusone: 'Pending',
        //         status: 'Unpaid',
        //         days: '7',
        //         dispatch: '2',
        //         deliver: '2',
        //         datetime: '10 June, 5.15 PM',
        //         invoiceno: '152364',
        //         payment: [
        //             {
        //                 amount: '288000 ',
        //                 mode: 'UPI',
        //                 details: 'Uploaded',
        //                 status: 'Unpaid'
        //             }
        //         ],
        //         orderSummary: [
        //             {
        //                 charges: '2,88,000',
        //                 catalogs: '2',
        //                 items: '37',
        //                 taxes: '28,000',
        //                 qty: '220',
        //                 date: '18-June-23',
        //             }
        //         ],
        //         delivery: [
        //             {
        //                 mode: 'Pickup',
        //                 status: 'Pending',
        //                 address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
        //             }
        //         ],
        //         products: [
        //             {
        //                 suboid: '12542630',
        //                 name: 'Crochet Skirt Two-Piece Outfits pack of 2',
        //                 img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
        //                 style: "#23567",
        //                 amount: '1,20,000',
        //                 rate: '1,200',
        //                 sku: '25',
        //                 qty: '100',
        //                 subproduct: [
        //                     {
        //                         id: 1,
        //                         img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
        //                         skuid: '957223654824',
        //                         size: 'S',
        //                         color: 'Red',
        //                         pcs: '20'
        //                     },
        //                     {
        //                         id: 2,
        //                         img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
        //                         skuid: '6453654824',
        //                         size: 'M',
        //                         color: 'Blue',
        //                         pcs: '39'
        //                     },
        //                 ]
        //             },
        //             {
        //                 suboid: 'PID 542630',
        //                 name: ' Two-Piece Outfits pack of 2',
        //                 img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
        //                 style: "#23568",
        //                 amount: '1,68,000',
        //                 rate: '840',
        //                 sku: '30',
        //                 qty: '200',
        //                 subproduct: [
        //                     {
        //                         id: 1,
        //                         img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
        //                         skuid: '957223654824',
        //                         size: 'S',
        //                         color: 'Red',
        //                         pcs: '20'
        //                     },
        //                     {
        //                         id: 2,
        //                         img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
        //                         skuid: '6453654824',
        //                         size: 'M',
        //                         color: 'Blue',
        //                         pcs: '39'
        //                     },
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         id: 2,
        //         date: '15',
        //         amount: '2,88,000',
        //         month: 'Jul',
        //         oid: '54263152365',
        //         statusone: 'Shipped',
        //         status: 'Unpaid',
        //         days: '7',
        //         dispatch: '2',
        //         deliver: '2',
        //         datetime: '09 June, 6.15 PM',
        //         invoiceno: '152365',
        //         payment: [
        //             {
        //                 amount: '720000',
        //                 mode: 'UPI',
        //                 details: 'Uploaded',
        //                 status: 'Unpaid'
        //             }
        //         ],
        //         orderSummary: [
        //             {
        //                 charges: '2,88,000',
        //                 catalogs: '2',
        //                 items: '24',
        //                 date: '18-June-23',
        //             }
        //         ],
        //         delivery: [
        //             {
        //                 mode: 'Pickup',
        //                 status: 'Shipped',
        //                 address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
        //             }
        //         ],
        //         products: [
        //             {
        //                 suboid: 'PID 542631',
        //                 name: 'Crochet Skirt Two-Piece Outfits pack of 2',
        //                 img: 'img/icons/pd1.png',
        //                 amount: '2000',
        //                 sku: '562',
        //                 unit: '15'
        //             },
        //             {
        //                 suboid: 'PID 542631',
        //                 name: 'Crochet Skirt Two-Piece Outfits pack of 2',
        //                 img: 'img/icons/pd2.png',
        //                 amount: '2000',
        //                 sku: '562',
        //                 unit: '15'
        //             }
        //         ]
        //     },
        //     {
        //         id: 3,
        //         date: '14',
        //         amount: '298000',
        //         month: 'Aug',
        //         oid: '5426326574',
        //         item: '25',
        //         qty: '200',
        //         statusone: 'Delivered',
        //         status: 'Rejected',
        //         days: '7',
        //         dispatch: '2',
        //         deliver: '2',
        //         datetime: '09 June, 6.15 PM',
        //         invoiceno: '152365',
        //         payment: [
        //             {
        //                 amount: '720000',
        //                 mode: 'UPI',
        //                 details: 'Uploaded',
        //                 status: 'Unpaid'
        //             }
        //         ],
        //         orderSummary: [
        //             {
        //                 charges: '30000',
        //                 suborder: '3',
        //                 items: '24',
        //                 date: '18-June-23',
        //             }
        //         ],
        //         delivery: [
        //             {
        //                 mode: 'Pickup',
        //                 status: 'Shipped',
        //                 address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
        //             }
        //         ],
        //         products: [
        //             {
        //                 suboid: 'PID 542631',
        //                 name: 'Crochet Skirt Two-Piece Outfits pack of 2',
        //                 img: 'img/icons/pd1.png',
        //                 amount: '2000',
        //                 sku: '562',
        //                 unit: '15'
        //             },
        //             {
        //                 suboid: 'PID 542631',
        //                 name: 'Crochet Skirt Two-Piece Outfits pack of 2',
        //                 img: 'img/icons/pd2.png',
        //                 amount: '2000',
        //                 sku: '562',
        //                 unit: '15'
        //             }
        //         ]
        //     },
        //     {
        //         id: 4,
        //         date: '14',
        //         month: 'Sept',
        //         oid: '5426333654',
        //         item: '25',
        //         qty: '200',
        //         statusone: 'Cancelled',
        //         status: 'Unpaid',
        //         days: '7',
        //         dispatch: '2',
        //         deliver: '2'
        //     },
        //     {
        //         id: 5,
        //         date: '14',
        //         month: 'Oct',
        //         oid: '542633245',
        //         price: '150000',
        //         item: '25',
        //         qty: '200',
        //         statusone: 'Pending',
        //         status: 'Paid',
        //         days: '7',
        //         dispatch: '2',
        //         deliver: '2'
        //     },
        //     {
        //         id: 6,
        //         date: '14',
        //         month: 'Nov',
        //         oid: '5426337854',
        //         price: '150000',
        //         item: '25',
        //         qty: '200',
        //         statusone: 'Shipped',
        //         status: 'Paid',
        //         days: '7',
        //         dispatch: '2',
        //         deliver: '2'
        //     },
        //     {
        //         id: 7,
        //         date: '14',
        //         month: 'Jan',
        //         oid: '542633568',
        //         price: '150000',
        //         item: '25',
        //         qty: '200',
        //         statusone: 'Cancelled',
        //         status: 'Paid',
        //         days: '7',
        //         dispatch: '2',
        //         deliver: '2'
        //     },
        // ],
        activeOrderProduct: {},
        order: [
            {
                id: 1,
                oid: 9160736,
                name: 'Naruto Itachi Uchiha',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Big_Oversized-Tshirts_PEf1RPs.jpg?format=webp&w=480&dpr=1.3',
                status: 'In Transit',
                icon: 'bi bi-record-circle-fill',
                estimate: 'Jul 31, 2023',
                size: 'L',
                price: 1099,
                color:'Black',
                qty: 1,
                date: '27 Jul, 2023',
                trackNo: 1234567890,
                courier: 'Delhivery',
            },
            {
                id: 2,
                oid: 9160547,
                name: 'TSS Originals Fiery Momos',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1688794390_1721528.jpg?format=webp&w=400&dpr=1.3',
                status: 'Out For Delivery',
                icon: 'bi bi-record-circle-fill',
                estimate: 'Jul 31, 2023',
                size: 'L',
                color:'purple',
                qty: 1,
                price: 1299,
                date: '28 Jul, 2023',
                trackNo: 1234565560,
                courier: 'Delhivery',
            },
            {
                id: 3,
                oid: 9160356,
                name: 'Marvel Kang Conqueror',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1690025932_3986383.jpg?format=webp&w=400&dpr=1.3',
                status: 'Delivered',
                icon: 'bi bi-record-circle-fill',
                estimate: 'Jul 31, 2023',
                size: 'L',
                color:'red',
                qty: 1,
                price: 999,
                date: '20 Jul, 2023',
                trackNo: 2365488120,
                courier: 'Delhivery',
            },
            {
                id: 4,
                oid: 903587,
                name: 'Batman Supervillain',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1689146727_9176028.jpg?format=webp&w=400&dpr=1.3',
                status: 'Delivered',
                icon: 'bi bi-record-circle-fill',
                estimate: 'Jul 31, 2023',
                size: 'L',
                color:'blue',
                qty: 1,
                price: 1399,
                date: '1 Jun, 2023',
                trackNo: 265889740,
                courier: 'Delhivery',
            },
            {
                id: 5,
                oid: 9175832,
                name: 'GOTG Rocket Raccon',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1689421826_9391446.jpg?format=webp&w=128&dpr=1.3',
                status: 'Delivered',
                icon: 'bi bi-record-circle-fill',
                estimate: 'Jul 31, 2023',
                size: 'L',
                color:'black',
                qty: 1,
                price: 1049,
                date: '21 May, 2021',
                trackNo: 202489740,
                courier: 'Delhivery',
            },
            {
                id: 6,
                oid: 9425656,
                name: 'Doc. Strange',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678789368_4056018.gif?format=webp&w=480&dpr=1.3',
                status: 'Delivered',
                icon: 'bi bi-record-circle-fill',
                estimate: '20 April, 2022',
                size: 'L',
                color:'red',
                qty: 1,
                price: 1599,
                date: '21 May, 2021',
                trackNo: 297589740,
                courier: 'Delhivery',
            },
            {
                id: 7,
                oid: 9112536,
                name: 'Rick And Morty',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1592322378_7141301.jpg?format=webp&w=128&dpr=1.3',
                status: 'Delivered',
                icon: 'bi bi-record-circle-fill',
                estimate: '20 Jul, 2020',
                size: 'L',
                color:'black',
                qty: 1,
                price: 2399,
                date: '21 May, 2021',
                trackNo: 252389740,
                courier: 'Delhivery',
            },
            {
                id: 8,
                oid: 8960356,
                name: 'Joker',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1587102947_8139388.gif?format=webp&w=128&dpr=1.3',
                status: 'Delivered',
                icon: 'bi bi-record-circle-fill',
                estimate: 'Jul 31, 2020',
                size: 'L',
                color:'black',
                qty: 1,
                price: 1399,
                date: '17 Jan, 2020',
                trackNo: 236585462,
                courier: 'Delhivery',
            },
        ],
        activeOrder: {},
        activeOrderDetail: {},
    },
    getters: {
        getOrders(state) {
            return state.order
        },
        getOrder: (state) => (orderId) => {
            let index = state.orders.findIndex(order => order.id == orderId);
            return state.orders[index];
        },
        getActiveOrderProduct(state) {
            return state.activeOrderProduct;
        },
        getActiveOrder(state) {
            return state.activeOrder
        },
        getActiveOrderDetail(state) {
            return state.activeOrderDetail
        },
        completedOrders(state) {
            // Filter your order array here if needed
            let filteredOrder = state.order;
            // ...
            // Sort the filtered order array
            if (state.sortingMethod === 'ascending') {
                filteredOrder.sort((a, b) => new Date(a.date) - new Date(b.date));
            } else if (state.sortingMethod === 'descending') {
                filteredOrder.sort((a, b) => new Date(b.date) - new Date(a.date));
            }

            return filteredOrder;
        },
    },
    mutations: {
        selectOrderDetail(state, product) {
            state.activeOrderDetail = product;
        },
        hideOrderDetail(state) {
            state.activeOrderDetail = {}
        },
        selectActiveOrder(state, product) {
            state.activeOrder = product
        },
        hideOrder(state) {
            state.activeOrder = {}
        },
        setSortingMethod(state, method) {
            state.sortingMethod = method;
        },
    },
    actions: {
        selectOrderDetail({ commit }, product) {
            commit('selectOrderDetail', product)
        },
        hideOrderDetail({ commit }) {
            commit('hideOrderDetail')
        },
        selectActiveOrder({ commit }, product) {
            commit('selectActiveOrder', product)
        },
        hideOrder({ commit }) {
            commit('hideOrder')
        }
    }
}