const add = (cart, req) => {
    cart.countGoods += req.body.quantity;
    cart.amount += req.body.price;
    cart.contents.push(req.body);
    return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 4) };
};

const change = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.countGoods += req.body.quantity;
    cart.amount += req.body.product.price;
    find.quantity += req.body.quantity;
    return { name: find.product_name, newCart: JSON.stringify(cart, null, 4) };
};

/**
 * Добавили новый метод удаления
 * @param cart
 * @param req
 * @returns {{newCart: *, name: *}}
 */
const remove = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.countGoods -= find.quantity;
    cart.amount -= find.price;
    cart.contents.splice(cart.contents.indexOf(find), 1);
    return { name: find.product_name, newCart: JSON.stringify(cart, null, 4) };
};


const clear = (cart, req) => {
    cart.countGoods = 0;
    cart.amount = 0;
    cart.contents = [];
    return { name: 'clear cart', newCart: JSON.stringify(cart, null, 4) };
};

module.exports = {
    add,
    change,
    remove,
    clear,
};
