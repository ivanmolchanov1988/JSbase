/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
console.log("run 1");

let i = 0;
let temp = [];
let b = false;

while (i <= 100) {
    if (i == 1) {
        console.log(i);
    }
    if (i == 2) {
        console.log(i);
        temp.push(i);
    }
    if (i > 2 && temp.length != 0) {
        for (let num of temp) {
            if (i % num == 0) {
                b = true;
            }
        }
        if (b == false) {
            console.log(i);
        }
        temp.push(i);
    }
    i++;
    b = false;
}

/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
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
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

console.log('task 3:');

function countBasketPrice(list_) {
    let return_sum = 0;
    for (let product of list_) {
        return_sum += product.price;
    }
    return return_sum;
}

console.log(countBasketPrice(cart));

/*
4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/
console.log('task 4:')
for (let i = 0; i < 10; console.log(i), i++) { }

/*
5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
console.log('task 5:')
let x = 'x'
for (let i = 0; i <= 20; i++) {
    console.log(x);
    x = x + 'x';
}