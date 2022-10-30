'use strict';

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
// ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

/* 

let calculator = {};

calculator.read = function () {
    this.a = prompt('a?', '0');
    this.b = prompt('b?', '0');
};

calculator.sum = function () {
    return this.a + this.b;
};

calculator.mul = function () {
    return this.a * this.b;
};

 */


// let calculator = {

//     sum () {
//         return this.a + this.b;
//     },

//     mul () {
//         return this.a * this.b;
//     },

//     read () {
//         this.a = prompt('a?', '0');
//         this.b = prompt('b?', '0');
//     }

// };





let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};

/* ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0 */

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0