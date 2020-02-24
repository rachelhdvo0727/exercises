"use strict";
//data conversions
const n1 = 1;
const n2 = 2;
const s1 = "1";
const s2 = "2";

//calculation
console.log(n1 + n2);

//concatenation: 
//the operation of joining two strings together. You can join strings using either the addition (+) operator or the String’s concat() method.
console.log(s1 + s2);

console.log(n1 + s2);
console.log(s1 + n2);


console.log("" + 1 + 0);
// give 10 - string
console.log("" - 1 + 0);
//give -1 : number
console.log(true + false);
//give 1 - number
console.log(6 / "3");
//give 2 - number
console.log("2" * "3");
//give 6 - number (ncalculation)
console.log(4 + 5 + "px");
//give "9px" - string (calculation and set the string next to 
console.log("$" + 4 + 5);
//give "$45" - string. concatenation: put 3 elements together
console.log("4" - 2);
//give 2 - number
console.log("4px" - 2);
// give NaN
console.log(7 / 0);
//give infinity as a number
console.log("-9" + 5);
//give -95 as a string
console.log("-9" - 5);
//give -14 as a number
console.log(null + 1);
//give 1 as a number
console.log(undefined + 1);
//give NaN as a number