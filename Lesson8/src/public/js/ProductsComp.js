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
        }
    },
    mounted() {
        this.$root.getJson('/api/products')
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
         <div class="main_wrap">
            <div class="main_prod">
            <product v-for="item of filtered" :key="item.id_product" :product="item"></product>
            </div>
            <a href="#" class="main_prod_button">Browse All Product</a>
        </div>
    `
});

Vue.component('product', {
    props: ['product'],
    template: `
    <div class="product-item">
                <div class="main_prod_element">
                    <img @click="$parent.$parent.$refs.headercomp.$refs.cart.addProduct(product)" :src=product.img alt="Some img">
                    <div class="main_prod_element_descr">
                        <router-link :to="'products/' + product.id_product" tag="h4">{{product.product_name}}</router-link>
                        <span>{{product.descr}}</span>
                        <div class="main_prod_element_price">$ {{ product.price }}</div>
                    </div>
                </div>
            </div>
    `
});