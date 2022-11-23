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



function highAndLow(numbers) {
    let arr2 = [];
    let arr = numbers.split(' ').sort((a, b) => a - b);
    // return arr[0] arr[arr.length -1];
    arr2.push(arr[arr.length - 1]);
    arr2.push(arr[0]);
    return arr2.join(' ');
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));






function isPalindrome(line) {
    let arr2 = line.toString();
    const arr = arr2.split('').reverse().join('');
    if (arr == line) {
        return true;
    } else return false;
}





var isAnagram = function (test, original) {
    let a = test.toLowerCase().split('').sort().join('');
    let b = original.toLowerCase().split('').sort().join('');
    // console.log(a);
    // console.log(b);
    if (a === b) {
        return true;
    } else return false;
};

console.log(isAnagram("Buckethead", "DeathCubeK"));




function century(year) {
    return Math.floor((year - 1) / 100) + 1;
}

console.log(century(1700));







function mygcd(x, y) {
    let z = [];
    let t = [];
    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            z.push(i);
        }
    }
    // console.log(z);
    for (let i = 1; i <= y; i++) {
        if (y % i === 0) {
            t.push(i);
        }
    }
    // const g = Math.max.apply(null, t)
    // const h = t.indexOf(g);
    // t.splice(h, 1);
    // console.log(t);
    const all = [...z, ...t];
    let mas = [];
    all.sort((a, b) => a - b);
    for (let i = 0; i <= all.length - 1; i++) {
        if (all[i] === all[i + 1]) {
            mas.push(all[i]);
        }
    }
    return Math.max.apply(null, mas)
}
// сокращенная запись одинаковых элементов двух массивов
const commonElements = arr1.filter((element) => {
    // check if the element
    // is present in arr2
    // and return the boolean value
    return arr2.includes(element);
});

console.log(commonElements);




function mygcd(x, y) {
    let z = [];
    for (let i = 1; i <= x; i++) {
        if (x % i === 0 && y % i === 0) {
            z.push(i);
        }
    }
    return Math.max.apply(null, z)
}



console.log(mygcd(1590771464, 1590771620));

function mygcd(x, y) {
    return y == 0 ? x : mygcd(y, x % y)
}





function factorial(n) {
    if (n > 12 || n < 0) {
        throw new RangeError("RangeError");
    }
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr.reduce((a, b) => a * b, 1)
}

console.log(factorial(13));






function removeEveryOther(arr) {
    let arra = [];
    for (let i = 0; i <= arr.length; i = i + 2) {
        arra.push(arr[i]);
    }
    return arra;
}

console.log(
    removeEveryOther([
        "s",
        "p",
        "7",
        "v",
        "b",
        "n",
        "7",
        "0",
        "k",
        "l",
        "u",
        "7",
        "e",
        "c",
        "3",
        "z",
        "c"
    ])
);





function distinct(a) {
    let unique = [...new Set(a)];
    return unique;
}

console.log(
    distinct([1, 2, 1, 4, 6, 7, 3, 4, 3, 3, 7, 9, 0])
);







function mergeArrays(arr1, arr2) {
    let all = [...arr1, ...arr2]
    all.sort((a, b) => b - a).reverse()
    return [...new Set(all)]
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));






function capital(capitals) {
    return capitals.map(
        (c) => `The capital of ${c.state || c.country} is ${c.capital}`
    );
}
let country_capitals = [{ 'country': 'Spain', 'capital': 'Madrid' }]
console.log(capital(country_capitals));








function findShort(s) {
    const res = [];
    const leng = [];
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i += 1) {
        const chunk = arr.slice(i, i + 1);
        res.push(chunk);
    }
    for (let i = 0; i < res.length; i++) {
        leng.push(res[i][0].length)
    }
    return Math.min(...leng)
}

console.log(findShort("Let's travel abroad shall we"));








function squareDigits(...num) {
    let ya = num.toString().split('')
    let arr = [];
    for (let i = 0; i < ya.length; i++) {
        arr.push(Math.pow(ya[i], 2))
    }
    let f = arr.join('');
    return parseInt(f)
}

console.log(squareDigits(2112));




var ArrowFunc = function (arr) {
    return String.fromCharCode.apply(0, arr)
}

console.log(ArrowFunc([84, 101, 115, 116]));








function add(num1, num2) {
    let arr1 = num1.toString().split("");
    let arr2 = num2.toString().split("");
    let a;
    if (arr1.length <= arr2.length) {
        a = arr2.length - 1;
    } else {
        a = arr1.length - 1;
    }
    for (let i = 0; i <= a; i++) {
        if (arr1.length > arr2.length) {
            arr2.unshift(0);
        } else if (arr2.length > arr1.length) {
            arr1.unshift(0);
        }
    }
    let b = [];
    for (let i = 0; i <= a; i++) {
        b.push(+arr1[i] + +arr2[i])
    }
    let z = b.join('');
    return parseInt(z)
}

console.log(add(38875310, 1383));






var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

questions.forEach(function (i) {
    i.usersAnswer = null;
    console.log(i);
});

for (var i = 0; i < questions.length; i++) {
    questions[i].usersAnswer = null;
}

questions.forEach(function (i) {
    i.usersAnswer = null;
});





function combine(...massiv_object) {
    // console.log(JSON.stringify(rest, null, 2))
    let arr = {};
    massiv_object.forEach((oBъedok_x_3) => (Object.entries(oBъedok_x_3).forEach((item) => {
        if (arr[item[0]] || 0) {
            arr[item[0]] += item[1]
        }
        else {
            arr[item[0]] = item[1]
        }
    })))
    return arr
    // return massiv_object.reduce(
    //   (acc, n) => 
    //   (
    //    Object.entries(n).forEach((item, i) => console.log(item))
    //     // Object.entries(n).forEach(([k, v]) => (acc[k] = (acc[k] || 0) + v)), acc 
    //   ),
    //   {}
    // );
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

console.log(combine(objA, objB, objC));







function nbDig(n, d) {
    let x = '';
    for (var i = 0; i <= n; i++) {
        x += Math.pow(i, 2);
    }
    return x.split(d).length - 1
}

console.log(nbDig(11011, 2));







const findMissing = (arr1, arr2) => {
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) return arr1[i];
    }
}

console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));








function getDecimal(none) {
    let index = []
    index = none.toString()
    let res = index.split('.')[1];
    if (res === undefined) {
        return 0
    }
    let result = `0.` + res
    return +result
}

console.log(getDecimal(-1007.9));







function maxTriSum(numbers) {
    numbers.sort((a, b) => b - a)
    const unique = new Set(numbers)
    const uniquemass = [...unique]
    let sum = 0
    for (let i = 0; i < 3; i++) {
        sum += uniquemass[i]
    }
    return sum
}

console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]));











function nicknameGenerator(name) {
    const glass = ["a", "e", "i", "o", "u"];
    // return glass.forEach(el => {
    //   if (name[2] === glass[el]) {
    //     return name[0] + name[1] + name[2] + name[3];
    //   }
    // });

    if (name.length <= 3) {
        return "Error: Name too short";
    }
    for (let i = 0; i < 5; i++) {
        if (name[2] === glass[i]) {
            return name[0] + name[1] + name[2] + name[3];
        }
    }
    return name[0] + name[1] + name[2];
}

console.log(nicknameGenerator("Sademeasd"));




const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}

console.log(sortMyString("YCOLUE'VREER"));







function isPowerOfTwo(n) {
    if (n == 2) {
        return true
    }
    if (n < 2) {
        return false
    }

    return isPowerOfTwo(n / 2)
}


console.log(isPowerOfTwo(4097))






let List = [
    { "4": "dog" },
    { "2": "took" },
    { "3": "his" },
    { "-2": "Vatsan" },
    { "5": "for" },
    { "6": "a" },
    { "12": "spin" }
];

function sentence(List) {
    const sortable = [];
    List.forEach((el) => {
        for (let key in el) {
            sortable.push([key, el[key]]);
        }
    });
    sortable.sort((a, b) => a[0] - b[0]);

    let acca = []

    sortable.reduce((acc, now) => {
        // return acc += `${now[1]} `
        acca.push(now[1])
    }, '')
    return acca.join(' ')
}

console.log(sentence(List));







let List = [
    { "4": "dog" },
    { "2": "took" },
    { "3": "his" },
    { "-2": "Vatsan" },
    { "5": "for" },
    { "6": "a" },
    { "12": "spin" }
];
function sentence(List) {
    const sortable = [];
    List.forEach((el) => {
        for (let key in el) {
            sortable.push([key, el[key]]);
        }
    });
    sortable.sort((a, b) => a[0] - b[0]);

    const mapmap = sortable.map(x => x[1])

    return mapmap.join(' ')
}

console.log(sentence(List));






var test = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38]]

var Sum = 'sum = function(arr){ return arr.reduce((accum, now) => accum += now ); }';

console.log(sum(test[0]))





function spread(func, args) {
    return func(...args)
}

console.log(spread(function (x, y) { return x + y }, [1, 2]))





function vowelOne(s) {
    const code = []
    let lower = s.toLowerCase()
    Array.from(lower).forEach((el) => {
        if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') {
            code.push(1)
        } else {
            code.push(0)
        }
    })
    return code.join('')
}

console.log(vowelOne("vowelOne"))





function killer(suspectInfo, dead) {
    const arr = [];
    for (let key in suspectInfo) {
        for (let i = 0; i < dead.length; i++) {
            if (suspectInfo[key].includes(dead[i])) {
                arr.push([key]);
            } else {
                continue;
            }
        }
    }
    if (arr.length === 1) {
        return arr[0].toString()
    }
    for (let i = 0; i < arr.length; i++) {
        for (let k = 1; k <= arr.length; k++) {
            if (arr[i] === arr[k]) {
                return arr[i].toString();
            }
        }
    }
}

console.log(killer({ Brad: [], Megan: ["Ben", "Kevin"], Finn: [] }, ["Ben"]));

function killer(suspectInfo, dead) {
    return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
}






const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1];

function dataReverse(data) {
    const pomoika = [];
    const arr = [];
    const otvet = [];
    for (let i = 0; i <= data.length; i += 8) {
        arr.push(data.slice(i, i + 8));
    }
    arr.forEach((el) => {
        if (el.length === 0) {
            pomoika.push(el);
        } else {
            otvet.push(el);
        }
    });
    return [].concat(...otvet.reverse());
}

console.log(dataReverse(data3));