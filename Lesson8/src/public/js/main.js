import Products from './view/pages/productPage.js';
import MainPage from "./view/pages/mainPage.js";
import ProductEl from "./view/pages/productElPage.js";
import Cart from "./view/pages/cartPage.js";

const routes = [
    {path: '/', component: MainPage},
    {path: '/products', component: Products},
    {path: '/products/:id', component: ProductEl, props: true},
    {path: '/cart', component: Cart}
];

const router = new VueRouter({
    routes // сокращённая запись для `routes: routes`
});

const app = new Vue({
    el: '#app',
    router,
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
    },
});