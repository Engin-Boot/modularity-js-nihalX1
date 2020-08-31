var colors = require('./majorAndMinorColors.js');

function GetColorFromPairNumber(pairNumber) {
    let colorPair = {};
    const zeroBasedPairNumber = pairNumber - 1;
    const majorColorIndex =
        Math.floor(zeroBasedPairNumber / colors.MinorColors.length);
    colorPair.major = colors.MajorColors[majorColorIndex];
    colorPair.minor = colors.MinorColors[zeroBasedPairNumber % colors.MinorColors.length];
    return colorPair
}

function GetPairNumberFromColors(majorColor, minorColor) {
    let majorIndex = getMajorIndex(majorColor);
    let minorIndex = getMinorIndex(minorColor);

    return majorIndex * colors.MinorColors.length + minorIndex + 1;
}
function getMajorIndex(majorColor){
    let majorIndex = 0;

    for(majorIndex = 0; majorIndex < colors.MajorColors.length; majorIndex++) {
        if(colors.MajorColors[majorIndex] == majorColor) {
            break;
        }
    }
    return majorIndex;
}

function getMinorIndex(minorColor){
    let minorIndex = 0;

    for(minorIndex = 0; minorIndex < colors.MinorColors.length; minorIndex++) {
        if(colors.MinorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return minorIndex;
}

module.exports = {
    GetColorFromPairNumber: GetColorFromPairNumber,
    GetPairNumberFromColors: GetPairNumberFromColors
};