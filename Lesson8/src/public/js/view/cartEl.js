Vue.component('cartEl', {
    template: `


    
        <div class="main">
            <div class="main_top">
                <div class='main_top_left'>SHOPPING CART</div>
            </div>
            <div class="main_wrap">
                <div class="main_card">
                    <cartElHide v-for="item of $parent.$refs.headercomp.$refs.cart.cartItems" :key="item.id_product + 'cartKey'" :cartItem="item"></cartElHide>
                    <div class="main_card_button">
                        <button @click="$parent.$refs.headercomp.$refs.cart.removeAll()">Clear shopping cart</button>
                        <button>Continue shopping</button>
                    </div>
                    
                </div>
                
                <div class="main_shipping">
                    <div class="main_title_shipping">
                        SHIPPING ADDRESS
                    </div>
                    <div class="main_shipping_container">
                        <div class="main_shipping_address">
                            <input type="text" placeholder="Bangladesh">
                            <input type="text" placeholder="State">
                            <input type="text" placeholder="Postcode / Zip">
                            <button>Get a quote</button>
                        </div>
                        <div class="main_shipping_totalPrice">
                            <div class="main_shipping_totalPrice_sub">
                                COUNT<div class="pdl30">{{$parent.$refs.headercomp.$refs.cart.fullCart.countGoods}}</div>
                            </div>
                            <div class="main_shipping_totalPrice_grand">
                                SUB TOTAL <div class="pdl30 marker">$ {{$parent.$refs.headercomp.$refs.cart.fullCart.amount}}</div>
                            </div>
                            <div class="main_shipping_totalPrice_rectangle"></div>
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    `
})

Vue.component('cartElHide', {
    props: ['cartItem'], template: `
        <div class="main_prod">
        <div class="main_card_element">
                <div @click="$parent.$parent.$refs.headercomp.$refs.cart.remove(cartItem)" class="main_card_element_cross">&#10006;
                </div>
                <img :src=cartItem.img alt="Some img">
                <div class="main_card_element_descr">
                        <div class="main_card_element_descr_title">
                            <router-link :to="'products/' + cartItem.id_product">{{cartItem.product_name}}</router-link>
                        </div>
                        <div class="main_card_element_descr_char">
                            Price: <span class="marker">$ {{cartItem.price}}</span>
                        </div>
                        <div class="main_card_element_descr_char">
                            Quantity:
                            {{cartItem.quantity}}
                        </div>
                </div>
        </div>
        </div>
    `
});