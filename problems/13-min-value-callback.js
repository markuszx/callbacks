/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let biggestInArray = function(a) {
    let num =''
    for(let i = 0; i < a.length; i++) {
    let arrnums = a[i];
    if(arrnums > num){num = arrnums}}return num};

    let minValueCallback = function(array,cb) {
    let smallest = (biggestInArray(array))
    for(let i = 0; i < array.length;i ++){
    if (array[i] < smallest) {smallest = array[i];

    }

}
 if(cb != null){

return cb(smallest)}
return smallest};








/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
