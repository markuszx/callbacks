/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/

let greaterCallbackValue = function(value,cb,cb2) {
    if(cb(value) < cb2(value)){console.log(cb2(value))}
    if(cb2(value) < cb(value)){console.log(cb(value))}
    return ''
};





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = greaterCallbackValue;
