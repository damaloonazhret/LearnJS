'use strict';

// let age = prompt ('Напишите возраст', '');

// if (age >= 14 && age <= 90) {
//     alert ('Все верно');
// } else {
//     alert ('Попробуем другое число');
// }


let question = prompt('Введите логин', '');

if (question === 'Админ') {

    let password = prompt('Введите пароль', '');

    if (password === 'Я главный') {
        alert ('Добро пожаловать');
    } else if (password === '' || password === null) {
        alert('Отменено');
    } else {
        alert ('Пароль неверный');
    }
    
} else if (question === '' || question === null) {
        alert('Отменено');
    } else {
        alert("Я вас не знаю");
    }