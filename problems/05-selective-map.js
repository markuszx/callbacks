/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
    (optional if you already asked a question for this problem.)
- Explain how you are using both of the callbacks in the function.
- What do you expect each callback function to be returning?
- How many times are you calling each callback function?
*******************************************************************************/

let selectiveMap = function(array, cb1, cb2)
//I'm creating an empty array for elements that go through cb1 and cb2 to be passed into
{let arr = [];
for (let i = 0; i <array.length; i++) {
let num =array[i]
if (cb1(num) === true) {
 //passing in elements into my empty array
arr.push(cb2(num))
}
else {arr.push(num)
}}return arr}



function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));


console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));

//If the elements in the array are the value the first callback (cb1)
//requirs them to be to evaluate true then they
//are passed in to cb2. if the elements are not
//then they are not passed into cb2
//cb1 is used as a filter for cb2
//for example if cb1 is the isPositive
//function and cb2 is the squre function then
//only the positive elements in the array
//are going to be sqared because only
//the positive element in the array are
//going to evaluate to true in cb1
//and be able to have cb2 called on them.

//I expect isEven to be returning even numbers
//from an array,
//Square is each element times its self,
//isPositive only the positive numbers.

//cb1 is being called on every element of the array argument to see if it evaluates to true
//and if it doest then nothing happens to that element
//cb2 is being called on every element that evaluates to true in cb1





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = selectiveMap;
