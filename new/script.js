'use strict';

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

//     function A() {}
//     function B() {}

//     let a = new A;
//     let b = new B;

// alert( new A() == new B()); 




// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

//     let calculator = new Calculator();
//     calculator.read();

//     alert( "Sum=" + calculator.sum() );
//     alert( "Mul=" + calculator.mul() );

// function Calculator() {

//     this.read = function () {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('a?', 0);
//     };

//     this.sum = function () {
//         return this.a + this.b;
//     };

//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert ('Sum=' + calculator.sum());
// alert ('Mul=' + calculator.mul());






function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Сколько нужно прибавить?', "0");
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);

