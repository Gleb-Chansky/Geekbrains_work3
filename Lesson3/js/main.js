'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    console.log('Error');
                } else {
                    cb(xhr.responseText);
                }
            }
        };
        xhr.send();
    })
};

class ProductList {
    constructor(container = '.products') {
        this.container = document.querySelector(container);
        this.goods = [];
        this.productsObjects = [];

        this.fetchGoods()
            .then((data) => {
                this.goods = data;
                this.render();
            });
    }

    fetchGoods() {
        return fetch(`${API}/catalogData.json`)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    render() {
        for (const product of this.goods) {
            const productObject = new ProductItem(product);
            console.log(productObject);

            this.productsObjects.push(productObject);
            this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

    calculateSum() {
        const sum = this.goods.reduce(function (sum, current) {
            return sum + current.price;
        }, 0);
        console.log(sum);
    }
}


class ProductItem {
    constructor(el, img = 'https://via.placeholder.com/200x150') {
        this.id = el.id;
        this.product_name = el.product_name;
        this.price = el.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
                  <img src="${this.img}" alt="Some img">
                  <div class="desc">
                      <h3>${this.product_name}</h3>
                      <p>${this.price} \u20bd</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`;
    }
}

class Basket extends ProductList {
    constructor(container = '.products') {
        this.addGoods = [];
        this.deleteGoods = [];
    }
    addToBasket() {}
    deleteFromBasket() {}
    calculateSum() {}
    isEmptyBasket() {}
    openBasket() {}
}

class BasketItem extends ProductItem {
    constructor(el, img = 'https://via.placeholder.com/200x150') {
        this.id = el.id;
        this.product_name = el.product_name;
        this.price = el.price;
        this.img = img;
    }
    render() {}
}

const list = new ProductList();