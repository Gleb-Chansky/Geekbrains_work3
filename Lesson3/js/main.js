'use strict';

class ProductList {
    constructor(container = '.products') {
        this.container = document.querySelector(container);
        this.goods = [];
        this.productsObjects = [];

        this.fetchGoods();
        this.render();
        this.calculateSum();
    }

    fetchGoods() {
        this.goods = [{
                id: 1,
                title: 'Notebook',
                price: 20000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 1500
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 5000
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 4500
            },
        ];
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
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
                  <img src="${this.img}" alt="Some img">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price} \u20bd</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`;
    }
}

class Basket {
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

class BasketItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    render() {}
}

const list = new ProductList();