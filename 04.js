
/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function Digit(num) {
    this.obj = {};
    this.num = num;
    this.len = num.toString().length;
    if (this.len == 0 || this.len > 3) {
        return "error!"
    } else {
        for (this.i = 0; this.i <= this.len - 1; this.i++) {
            if (this.i == 0) {
                this.obj['единицы'] = num.toString()[this.i];
                //return this.obj;
            }
            if (this.i == 1) {
                this.obj['двойки'] = num.toString()[this.i];
                //return this.obj;
            }
            if (this.i == 2) {
                this.obj['тройки'] = num.toString()[this.i];
                //return this.obj
            }
        }
        return this.obj;
    }
}

console.log(Digit(123));

/*
2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.

*/

console.log('task 2:');

let product_1 = { 'name': 'ручка', 'price': 15 };
let product_2 = { 'name': 'тетрадь', 'price': 50 };
let product_3 = { 'name': 'карандаш', 'price': 10 };

let cart = []
cart.push(product_1)
cart.push(product_2)
cart.push(product_3)

let return_sum = 0;
for (let product of cart) {
    return_sum += product.price;
}
console.log('Сумма покупок = ' + return_sum + 'руб.');

/*
3. *На базе игры, созданной на уроке, реализовать игру
«Кто хочет стать миллионером?»
*/

