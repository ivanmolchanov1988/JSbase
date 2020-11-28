1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2   к а прибавляется ещё одно а, где а = 1
d = b++; alert(d);           // 1   мы увеличиваем b, но возвращаем старое знчение в d
c = (2 + ++a); alert(c);      // 5  а было равно 1, потом мы прибавили к нему ещё один а, теперь ещё.
d = (2 + b++); alert(d);      // 4  b было уже = 2, а теперь мы увеличим его ещё на 1, но вернём только 2
alert(a);                    // 3   
alert(b);                    // 3   
Почему код даёт именно такие результаты ?
    2. Чему будет равен x в примере ниже ?
var a = 2;
var x = 1 + (a *= 2); //x = 1 + (a = a * 2); x = 5
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = 2;
var b = -3;

if (a > 0 && b > 0) {
    console.log(a - b)
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else if ((a < 0 && b > 0) || ((a > 0 && b < 0))) {
    console.log(a + b)
}

### 4. Присвоить переменной а значение в промежутке[0..15].С помощью оператора switch организовать вывод чисел от a до 15.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var a = getRandomInt(0, 4);
switch (a) {
    case 0: console.log(0);
    case 1: console.log(1);
    case 2: console.log(2);
    case 3: console.log(3);
    case 4: console.log(4);
        break
}

### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.

function arith(a, b) {
    var str_ = "+: " + (a + b) + "\n"
        + "-: " + (a - b) + "\n"
        + "/: " + (a / b) + "\n"
        + "*: " + (a * b) + "\n"
    return str_
}
console.log(arith(1, 2))

### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 3) и вернуть полученное значение(использовать switch). 

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return (arg1 + arg2);
        case "-":
            return (arg1 - arg2);
        case "/":
            return (arg1 / arg2);
        case "*":
            return (arg1 * arg2);
    }
}

console.log(mathOperation(1, 1, "/"))

### 7. * Сравнить null и 0. Попробуйте объяснить результат.

    console.log(null == 0)          //  false
console.log(null == false)      //  false
console.log(0 == false)         //  true

### 8. * С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val – заданное число, pow – степень.


function power(val, pow, n = 1) {
    if (n == pow) {
        return val
    } else {
        power(val * 2, pow, ++n)
    }
}
console.log(power(2, 4))

  //сдаюсь!
