const products = [{
        id: 1,
        title: 'Notebook',
        price: 1000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 100
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 250
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 150
    },
];

const renderProduct = (title = 'Наименование товара', price = 'Цена в руб.') => `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
// При использовании метода .map автоматически используется метод .toString, что
// обеспечивает появление запятых в массиве. Решить эту проблеиму можно несколькими 
// способами.
const renderProducts = (list) => {
    const productList = list.reduce((acc, good) => acc + renderProduct(good.title, good.price), '');
    document.querySelector('.products').innerHTML = productList;
};
// Способ №2
//const renderProducts = (list) => {
//   const productList = list.map((good) => {
//        return renderProduct(good.title, good.price);
//    });
//    document.querySelector('.products').innerHTML = productList.join('');

//    console.log(productList);
//};

renderProducts(products);