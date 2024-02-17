export default {
    namespaced: true,
    state: {
          activeOrderProduct: {},
        order: [
            {
                id: 1,
                oid: 9160736,
                name: 'Naruto Itachi Uchiha',
                img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Big_Oversized-Tshirts_PEf1RPs.jpg?format=webp&w=480&dpr=1.3',
                status: 'In Transit',
                icon: 'bi bi-record-circle-fill',
                size: 'L',
                price: 1099,
                color:'Black',
                qty: 1,
                date: '27 May, 2023',
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
                size: 'L',
                color:'black',
                qty: 1,
                price: 1049,
                date: '14 Feb, 2023',
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
                size: 'L',
                color:'red',
                qty: 1,
                price: 1599,
                date: '21 Jan, 2023',
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
                size: 'L',
                color:'black',
                qty: 1,
                price: 2399,
                date: '11 Mar, 2023',
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
                size: 'L',
                color:'black',
                qty: 1,
                price: 1399,
                date: '1 Apr, 2023',
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