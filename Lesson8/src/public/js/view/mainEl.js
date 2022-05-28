Vue.component('maincomp', {
    template: `
<div>
                 <div class="main_sales">
                        <div class="main_sales_element">
                        
                            <router-link to="/products">
                            <div class="main_sales_element_descr im1">
                                <span>30% off</span>
                                <h2 class="marker">for women</h2>
                            </div>
                            </router-link>
                        </div>
                        <div class="main_sales_element">
                            <router-link to="/products">
                                <div href="catalog.html" class="main_sales_element_descr im2">
                                <span>30% off</span>
                                <h2 class="marker">for men</h2>
                                </div>
                            </router-link>
                        </div>
                        <div class="main_sales_element">
                           <router-link to="/products">
                               <a class="main_sales_element_descr im3">
                                <span>30% off</span>
                                <h2 class="marker">for kids</h2>
                            </a>
                            </router-link>
                        </div>
                        <div class="main_sales_element">
                               <router-link to="/products">
                                <a class="main_sales_element_descr im4">
                                <span>LUXIROUS & TRENDY</span>
                                <h2 class="marker">ACCESORIES</h2>
                                </a>
                                </router-link>
                        </div>
                    </div>
                    <div class="main_prod_title">
                        <h2>
                            Fetured Items
                        </h2>
                        Shop for items based on what we featured in this week
                    </div>
                </div>
</div>
`
})