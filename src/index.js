module.exports = function reverse(n) {
    const numberToText = Math.abs(n).toString();
    const numberLenght = numberToText.length - 1;
    let result = "";

    for (let i = numberLenght; i >= 0; i--) {
        result += numberToText[i];
    }

    return +result;
};
