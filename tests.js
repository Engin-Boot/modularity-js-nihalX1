const expect = require('chai').expect;
const func = require("./utlity.js");

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = func.GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = func.GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

module.exports = {
    testNumberToPair: testNumberToPair,
    testColorToNumber: testColorToNumber
};