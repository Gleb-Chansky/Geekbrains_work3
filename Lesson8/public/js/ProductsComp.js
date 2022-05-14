Vue.component('products', {
    data() {
        return {
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
    },
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <ul class="catalog__list container products">
            <product v-for="item of filtered" :key="item.id_product" :img="item.img" :product="item"></product>
        </ul>
    `
});

Vue.component('product', {
    data() {
        return {
            cartAPI: this.$root.$refs.cart,
        }
    },
    props: ['product', 'img', 'cart'],
    template: `
            <li class="products__item">
                    <div class="products__item-overlay">
                        <img class="products__item-img" :src="img" alt="some img" width="360"
                            height="420">
                        <div class="products__item-wrp">
                             <button class="products__item-button" @click="cartAPI.addProduct(product)">Add to Cart</button>
                        </div>
                    </div>
                    <h3 class="products__item-title">{{product.product_name}}</h3>
                    <p class="products__item-text">{{product.description}}</p>
                    <a class="products__item-link" href="#">{{product.price}}$</a>
                </li>
    `
});