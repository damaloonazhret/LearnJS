'use strict';

const banknotesArray = [5, 10, 20, 50, 100].reverse();

const makeArrayOfValuesWithDegreesOfReckoning = (number) => {
    const stringValue = String(number); //'1595'
    const numberLength = stringValue.length; //4
    console.log("array", stringValue.split(""));
    return stringValue.split("").map((el, ind) => {
        // console.log('array', array)
        const factor = "1" + "0".repeat(numberLength - ind - 1);
        console.log("factor", factor);
        return el * factor;
    });
};

const countBanknotes = (number) => {
    const finalValues = {};
    const banknotesObj = banknotesArray.reduce((prev, curr) => {
        return {
            ...prev,
            [curr]: 0
        };
    }, {});
    console.log("banknotesObj", banknotesObj);
    const arrayOfValuesWithDegreesOfReckoning = makeArrayOfValuesWithDegreesOfReckoning(
        number
    );

    console.log(
        "arrayOfValuesWithDegreesOfReckoning",
        arrayOfValuesWithDegreesOfReckoning
    );

    arrayOfValuesWithDegreesOfReckoning.forEach((el) => {
        let next = false;
        Object.entries(banknotesObj)
            .reverse()
            .forEach((banknoteArr, banknoteInd) => {

                if (banknoteInd === 0) {
                    next = false;
                }

                // 1000 % 100 = 0 остаток от деления
                // 1000 % 50
                // 1000 % 20
                // 1000 % 5

                // 500 % 100
                // 90 % 100 !== 0
                // 5 % 100 !== 0

                console.log('number', el);
                console.log('banknoteArr', banknoteArr);
                console.log('next', next);

                if (el % banknoteArr[0] === 0 && !next) {
                    const calculatedValue = el / banknoteArr[0];
                    const existedValue = finalValues[banknoteArr[0]] ?? 0;
                    finalValues[banknoteArr[0]] = calculatedValue + existedValue;
                    next = true;
                }
            });
    });
    return finalValues;
};

console.log("final values", countBanknotes(1595));
