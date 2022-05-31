"use strict";

const { strict } = require("assert");
const { sumOfMinNumbers } = require("./sumOfMinNumbers");

describe("find sum of two min array number", () => {

    it("sorted array of three numbers", () => {
        const actualSum = sumOfMinNumbers([1, 2, 3]);
        strict.equal(actualSum, 3);
    });

    it("non-sorted array of three numbers", () => {
        const actualSum = sumOfMinNumbers([1, 0, -1]);
        strict.equal(actualSum, -1);
    });

    it("empty array", () => {
        const actualSum = sumOfMinNumbers([]);
        strict.equal(actualSum, 0);
    });

    it("array of one number", () => {
        const actualSum = sumOfMinNumbers([8]);
        strict.equal(actualSum, 8);
    });

    it("array of different data", () => {
        strict.throws(() => {
            sumOfMinNumbers([42, "b", {name: "John"}]);
        }, /array must contain only numbers, got invalid value/);
    });

});