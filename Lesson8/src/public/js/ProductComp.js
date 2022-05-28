Vue.component('productPage', {
    data() {
        return {
            products: [],
            product: '',
        }
    },
    mounted() {
        this.$root.getJson('/api/products')
            .then(data => {
                for (let el of data) {
                    this.products.length < 3 ? this.products.push(el) : '';
                    if (el.id_product == this.$parent._props.id) {
                        this.product = el;
                    }
                }
            });
    },
    template: `
         <div class="main">
            <div class="main_top">
                <div class='main_top_left'>new ARRIVALS</div>
                <div class="main_top_right">
                    <a href="#">HOME </a> /
                    <a href="#">MEN </a>/
                    <a href="#" class="marker">NEW ARRIVALS</a>
                </div>
            </div>
            <div class="main_slider" style="text-align: center">
                <button class="main_slider_arr left">&#9664;
                </button>
                <img style="display:inline; height: 100%" :src=product.img alt="product_slider">
                <button class="main_slider_arr right">&#9654;
                </button>
            </div>
            <div class="main_wrap">
                <div class="main_card_add">
                    <h3>{{ product.sex === 'male' ? "MAN'S" : "WOMAN'S"}} collection</h3>
                    <div class="rectangle"></div>
                    <div class="title">
                        {{product.product_name}}
                    </div>
                    <div class="main_card_add_description">
                        {{product.descr}}
                    </div>
                    <div class="price">$ {{product.price}}</div>
                    <div class="empty"></div>
                    <div class="main_card_add_filter">
                        <div class="main_card_add_filter_element">
                            CHOOSE COLOR &#9660;
                        </div>
                        <div class="main_card_add_filter_element">
                            CHOOSE SIZE &#9660;
                        </div>
                        <div class="main_card_add_filter_element">
                            QUANTITY &#9660;
                        </div>
                    </div>
                    <div @click="$parent.$refs.headercomp.$refs.cart.addProduct(product)" class="main_card_add_button">
                        &#128722; Add to Cart
                    </div>
                </div>
                <div class="main_prod">
                    <producthide v-for="item of products" :key="item.id_product" :product="item"></producthide>
                </div>
            </div>
        </div>
    `
});


Vue.component('producthide', {
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