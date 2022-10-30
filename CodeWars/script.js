'use strict';

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    array.forEach(elem => {
        sum += elem;
    });
    return sum / array.length
}

console.log(findAverage([1, 2, 3, 4]));

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8;
    } else {
        return number * 9
    }
}

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));

var countSheep = function (num) {
    let final = '';
    for (let i = 1; i <= num; i++) {
        final += i + ' sheep...';
    }
    return final;
};




function noSpace(x) {
    let arr = x.split(' ');
    return arr.filter(item => item).join('');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));




function maps(x) {
    //return x.map(el => el * 2);
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        arr.push(x[i] * 2);
    }
    return arr;
}




const stringToNumber = function (str) {
    let num = Number(str);
    return num;
}


console.log(stringToNumber("1234"));




var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        console.log(i);
        sum += i;
    }
    return sum;
}

console.log(summation(8));




function repeatStr(n, s) {
    let q = s;
    for (let i = 1; i <= n; i++) {
        q += s;
    }
    return q;
}

console.log(repeatStr(5, "e"));

function repeatStr(n, s) {
    return s.repeat(n);
}





function squareSum(numbers) {
    return numbers.reduce(function (sum, n) {
        return (n * n) + sum;
    }, 0);
}



function removeChar(str) {
    let arr = str.slice(1, -1);
    return arr;

};

console.log(removeChar('eloquent'));





function descendingOrder(n) {
    let arr = n.toString().split('').map(int => parseInt(int, []));
    arr.sort((a, b) => b - a);
    let str = arr.join('');
    let num = Number(str);
    return num;
}

console.log(descendingOrder(153274352338690));
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}

function check(a, x) {
    return a.includes(x);
};










function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}

console.log(check([101, 45, 75, 105, 99, 107], 107));

const check = (a, x) => a.includes(x);








function sumArray(arr) {
    if (arr === null || arr === [] || arr === undefined || arr.length <= 2) {
        return 0;
    } else {
        arr.sort((a, b) => a - b);
        let arrmini = arr.slice(1, -1);
        let sumof = arrmini.reduce((a, b) => a + b, 0);
        return sumof;
    }
}

console.log(sumArray(undefined));

function sumArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length < 2) {
        return 0;
    } else {
        array = array.sort(function (a, b) { return a - b; });
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


function fakeBin(x) {
    let arr = [];
    for (let letter of x) {
        if (letter >= 5) {
            arr.push(1);
        } if (letter < 5) {
            arr.push(0);
        }
    }
    return arr.join().replace(/[\s.,%]/g, '');
}

console.log(fakeBin('366058562030849490134388085'));