'use strict';

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

/* let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false */



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Georgy": 600
};

function topSalary(salaries) {

    let max = 0;
    let maxName = null;

    
    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    alert(maxName);
    return maxName;
}

topSalary(salaries);




