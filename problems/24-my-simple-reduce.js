/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array#reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would refactor this problem to take in an
  optional initial accumulator
*******************************************************************************/

function mySimpleReduce(array, cb) {
    let accumulator =   array[0];
    for (let i = 1; i < array.length; i++) {
      accumulator = cb(accumulator, array[i]);
    }
    return accumulator;
  }
  //by adding a initial value as an argument and assigning that value as the accumulator if it is defined
  //and if its not then the first index of the array would be the accumulator, next i would
  //get all the elements from the array starting at the initial value index if it is defined if not then
  // i would get all the elements from the array eccept the first element
  //and i would pass in the accumulator and the elements into the callback as the first and second
  // value for the arguments and i would return the accumulator.





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySimpleReduce;
