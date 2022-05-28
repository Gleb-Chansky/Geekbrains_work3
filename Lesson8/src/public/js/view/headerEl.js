Vue.component('headercomp', {
    template: `<div class="header">
        <div class="nav_menu">
            <div class="nav_menu_left">
                <a class="nav_menu_element logo" href="index.html"></a>
                <filter-el></filter-el>
            </div>
            <div class="nav_menu_right">
                <div class="nav_menu_element header_menu">
                    <div class="header_menu_hover">
                        <div class="close_button">&times;</div>
                        <a href="" class="header_menu_hover_element marker">MAN</a>
                        <a href="" class="header_menu_hover_element">Accessories</a>
                        <a href="" class="header_menu_hover_element">Bags</a>
                        <a href="" class="header_menu_hover_element">Denim</a>
                        <a href="" class="header_menu_hover_element">T-Shirts</a>
                        <a href="" class="header_menu_hover_element marker">WOMAN</a>
                        <a href="" class="header_menu_hover_element">Accessories</a>
                        <a href="" class="header_menu_hover_element">Jackets & Coats</a>
                        <a href="" class="header_menu_hover_element">Polos</a>
                        <a href="" class="header_menu_hover_element">T-Shirts</a>
                        <a href="" class="header_menu_hover_element">Shirts</a>
                        <a href="" class="header_menu_hover_element marker">KIDS</a>
                        <a href="" class="header_menu_hover_element">Accessories</a>
                        <a href="" class="header_menu_hover_element">Jackets & Coats</a>
                        <a href="" class="header_menu_hover_element">Polos</a>
                        <a href="" class="header_menu_hover_element">T-Shirts</a>
                        <a href="" class="header_menu_hover_element">Shirts</a>
                        <a href="" class="header_menu_hover_element">Bags</a>
                    </div>
                </div>
                <a class="nav_menu_element header_face" href=""></a>
                <div class="cart">
                    <cart ref="cart"></cart>
                </div>
            </div>
        </div>
    </div>`
})