'use strict';

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