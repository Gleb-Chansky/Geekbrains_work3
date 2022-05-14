import VueRouter from 'vue-router'
import cart from '../js/CartComp'
import products from '../js/ProductsComp'
//import product from 

export default new VueRouter({
    routes: [{
            path: '/',
            component: products
        },
        {
            path: 'cart',
            component: cart
        },

    ]
})