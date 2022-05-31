"use strict";

function sumOfMinNumbers(arr) {

    arr.forEach((item) => {
        if (typeof item !== "number") {
            throw new Error(`array must contain only numbers, got invalid value: ${item}`);
        }
    });

    if (arr.length <= 1) {
        return arr[0] || 0;
    }

    arr.sort((a, b) => a - b);
    return arr[0] + arr[1];

}

module.exports = { sumOfMinNumbers };

