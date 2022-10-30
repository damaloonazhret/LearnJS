'use strict';

// let style = ['джаз', 'блюз'];

// style.push('Рок-н-ролл');

// // style[1] = 'Классика';

// style[Math.floor((style.length - (style.length / 2)))] = "Классика";

// alert(style.shift(0));

// style.unshift('рэп', 'регги');

// alert(style);






// function sumInput() {

//     let numbers = [];

//     while (true) {

//         let value = prompt("Введите число", 0);

//         // Прекращаем ввод?
//         if (value === "" || value === null || !isFinite(value)) {
//             break;
//         }

//         numbers.push(+value);
//     }

//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }

// alert(sumInput());




// function camelize(str) {
//     str = ('my-long-word');
//     return str
//     .split('-')
//     .map(
//         (item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
//     )
//     .join('');
// }
// camelize();
// console.log(camelize());

// function camelize(str) {
//     str = 'my-long-word';
//     return str
//         .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//         .map(
//             // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//             // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }
// camelize();









// function filterRange (arr, a, b) {

//     return arr.filter(item => item <= b & item >= a);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered );







// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];

//         // удалить, если за пределами интервала
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//         }
//     }

// }


// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert(arr); // [3, 1]







// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert(arr); // 8, 5, 2, 1, -10



// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted);
// alert(arr);











// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };

//     this.calculate = function (str) {

//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     };

//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }








// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map(item => item.name);

// alert(names);












// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map (user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));

// alert(usersMapped[0].id);
// alert(usersMapped[0].fullName);






/* function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
    // arr.sort((a, b) => a.age > b.age ? 1 : -1);
}



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);


alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); */













// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// shuffle(arr);
// alert(arr);    








// function getAverageAge(users) {
//     return users.reduce((a, b) => a + b.age, 0) / users.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) );
















// function unique(arr) {
//     let result = [];

//     for (let str of arr) {
//         if (!result.includes(str)) {
//             result.push(str);
//         }
//     }

//     return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert(unique(strings)); // кришна, харе, :-O














// function groupById(array) {
//     return array.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {});
// }

// let users = [
//     { id: 'john', name: "John Smith", age: 20 },
//     { id: 'ann', name: "Ann Smith", age: 24 },
//     { id: 'pete', name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);



