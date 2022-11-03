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





function fizzbuzz(n) {
    const arr = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz');
        } else if (i % 5 === 0) {
            arr.push('Buzz');
        } else if (i % 3 === 0) {
            arr.push('Fizz');
        } else arr.push(i);
    }
    return arr;
}

console.log(fizzbuzz(15));






const arr = ['a', 'e', 'i', 'o', 'u'];

function getCount(str) {
    const alpha = str.split('');
    return alpha.filter(el => arr.includes(el)).length;
}






String.prototype.toJadenCase = function () {
    const arr = this.split(' ');
    const big = arr.map((el) => {
        return el[0].toUpperCase() + el.slice(1);
    });
    return big.join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());





function getSum(a, b) {
    if (a === b) return a || b;
    let newA = a;
    let newB = b;
    if (a > b) {
        newA = b;
        newB = a;
    }
    let pe = 0;
    for (let i = newA; i <= newB; i++) {
        pe += i;
    }
    return pe;
}

console.log(getSum(0, -1));

//   Give your answer as a string matching "odd" or "even".

function oddOrEven(array) {
    let a = 0;

    const arr = array.map((el) => {
        a += el;
    })
    if (a % 2 === 0) {
        return 'even'
    }
    return 'odd'
}

console.log(oddOrEven([0, 1, 5]));






function positiveSum(arr) {
    let a = 0;
    arr.forEach(el => {
        if (el <= 0) {
            return 0
        } a += el;
    });
    return a;
}

console.log(positiveSum([1, -2, 3, 4, 5]));

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}


function highAndLow(numbers){
    let arr2 = [];
    let arr = numbers.split(' ').sort((a,b) => a - b);
    arr2.push(arr[0]);
    // console.log(arr);
    console.log(arr2);
  }
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));