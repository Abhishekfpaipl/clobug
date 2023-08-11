export default {
    namespaced: true,
    state: {
        notifications: [
            {
                bg1: '#fcf4db',
                bg: 'black',
                icon: 'bi bi-hourglass',
                title: 'Order payment is still pending.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                date: '12 June, 12:09 AM'
            },
            {
                bg1: '#e2f5ea',
                bg: 'black',
                icon: 'bi bi-currency-rupee',
                title: 'Order payment is confirmed.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                date: '12 June, 12:09 AM'
            },
            {
                bg1: '#fbdddd',
                bg: 'black',
                icon: 'bi bi-x',
                title: 'Order payment is cancelled.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                date: '12 June, 12:09 AM'
            },
            {
                bg1: '#fcf4db',
                bg: 'black',
                icon: 'bi bi-cart',
                title: 'Your order has been placed.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                date: '12 June, 12:09 AM'
            },
            {
                bg1: '#e2f5ea',
                bg: 'black',
                icon: 'bi bi-cart-check',
                title: 'Your order has been confirmed.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                date: '12 June, 12:09 AM'
            },
            {
                bg1: '#e2f5ea',
                bg: 'black',
                icon: 'bi bi-send-check',
                title: 'Your oder has been dispatched.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                date: '12 June, 12:09 AM'
            },
            {
                bg1: '#fbdddd',
                bg: 'black',
                icon: 'bi bi-cart-x',
                title: 'Your order has been cancelled.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                date: '12 June, 12:09 AM'
            },
            {
                bg1: '#fcf4db',
                bg: 'black',
                icon: 'bi bi-box',
                title: 'Your order has been delivered.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                date: '12 June, 12:09 AM'
            },
            {
                bg1: '#fcf4db',
                bg: 'black',
                icon: 'bi bi-clock',
                title: 'Your order is delayed.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                date: '12 June, 12:09 AM'
            },


        ]
    },
    getters: {
        getNotifications(state){
           return state.notifications
        }
    },
    mutations: {},
    actions: {}
}