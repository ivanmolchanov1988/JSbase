document.write('<table style = "border-style : solid">');
for (let k = 1; k <= 8; k++) {
    document.write('<tr>');
    for (let i = 1; i <= 8; i++) {
        document.write('<td style = "width : 30px; height : 30px; background-color :     ' + ((i + k) % 2 ? 'black' : 'yellow') + '"></td>');
    }
    document.write('</tr>');
};
document.write('</table>');

let cart = [];
let product_1 = { 'name': 'ручка', 'price': 15 };
let product_2 = { 'name': 'тетрадь', 'price': 50 };
let product_3 = { 'name': 'карандаш', 'price': 10 };
let price = [product_1, product_2, product_3];

//result = prompt('Добавить товар в карзину?', productName);
for (let product of price) {
    result = prompt('Добавить товар в карзину?', product['name']);
    if (result != null) {
        cart.push(product);
    }
}

let return_sum = 0;
if (cart.length > 0) {
    for (let product of cart) {
        return_sum += product.price;
    }
    return_sum = 'Сумма товаров в карзине: ' + return_sum;
} else {
    return_sum = 'Корзина пуста!';
}

var el = document.getElementById('cart');
el.textContent = return_sum;
