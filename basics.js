"use strict";
console.log("hejsa");

//y = 14;

const name = "Rachel";
const animal = "cat";
const petName = "Mino";

console.log(`My name is ${name}
I have a ${animal} named ${petName}`);

//Get a single character with [index-of-the-character]
const len = name.length;
const letter = name[0];

console.log(`The first letter of ${name} is ${letter}`);


//What is the total number of characters, incl. spaces
const firstnames = "Albus Percival Wulfric Brian Dumbledore";
const len1 = firstnames.length;

console.log(`${firstnames} has ${len1} characters long`);


//What is the character at index 2
const index2 = firstnames[2];

console.log(`the character at index 2 is ${index2}`);


//Which character is at index 6
const index6 = firstnames[6];

console.log(`the character at index 6 is ${index6}`);


//What is the index of the first D in Dumbledore
//str.indexOf('searchValue' , index) or str.indexOf("searchValue")
const indexD = firstnames.indexOf("D");
console.log(`D has the index: ${indexD} `);


//What is the index of the last e in Dumbledore
const indexE = firstnames.lastIndexOf("e");
console.log(`e has the index: ${indexE}`);

const str1 = " There is    space here \n ";
const str2 = str1.trim();

console.log(str2);

//Take parameters
const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 5);

console.log(firstName);

const albus = firstnames.substring(0, 5);
console.log(albus);
const dombledore = firstnames.substring(29);
console.log(dombledore);
const wulfric = firstnames.substring(15, 22);
console.log(wulfric);
const wulfricWspaces = firstnames.substring(14, 23);
console.log(wulfricWspaces);
const ian = firstnames.substring(25, 29);
console.log(ian);
const bus = firstnames.substring(2, 5);
console.log(bus);

//String conversion
let value = true;
//alert(typeof value); // a boolean

value = String(value);
//alert(typeof value);
//String(value) is a function to convert s.t to a string


//Numeric conversion
let str = "123";
//alert(typeof str);

//Numeric conversion happens in mathematical functions and expressions automatically.
//Turn 2 strings into a math problem with a "/"
//(alert("6" / "2"); 

let num = Number(str);
//alert(typeof num);
//Number(value) is used to convert s.t into number