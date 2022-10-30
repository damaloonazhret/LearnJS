'use strict';

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// function sum (a) {
//     return function (b) {
//         return a + b;
//     };
// }


// function inBetween (a, b) {
//     return function (x) {
//         return x >= a && x <= b;
//     };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6)) );



// function inArray (arr) {
//     return function (x) {
//         return arr.includes(x);
//     };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2




// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// console.log(users);
// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1 );

// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;                            ?????????????????????????????????????????
// }

// users.sort(byField('name'));
// users.forEach(user => alert(user.name)); // Ann, John, Pete

// users.sort(byField('age'));
// users.forEach(user => alert(user.name));

// function sum(a) {

//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }

//     f.toString = function () {
//         return currentSum;             ??????????????
//     };

//     return f;
// }

// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)(2)); // 6
// alert(sum(6)(-1)(-2)(-3)); // 0
// alert(sum(0)(1)(2)(3)(4)(5)); // 15









// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let j = i;
//         let shooter = function () { // функция shooter
//             alert(j); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//         i++;
//     }

//     return shooters;
// }

// let army = makeArmy();

// army[0](); // 0
// army[5]();

// function makeArmy() {

//     let shooters = [];

//     for (let i = 0; i < 10; i++) {
//         let shooter = function () { // функция shooter
//             alert(i); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);


//     }

//     return shooters;
// }

// let army = makeArmy();

// army[0](); // 0
// army[5](); // 5