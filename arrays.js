"use strict";

//Array
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

let getLetter = letters[4];
console.log(`${getLetter}`);

let getLetterExtra = letters[7];
console.log(`${getLetterExtra}`);

let newArr = letters;
newArr[4] = '*';

console.log(letters); //now the star replaces the index no. 4
console.log(newArr[4]);

const people = ["Harry", "Ron", "Hermione"];
let result;

//.push added an extra object to the array
result = people.push("Draco");

//show the number of objects in the array
console.log(result);
//show the original array, now with 4 objects
console.log(people);

//Array methods
//Take "Draco" object out of the array
result = people.pop();
console.log(result);

//Add 2 new objects into the array
result = people.push("Neville");
result = people.push("Luna");
console.log(result); //5 objects
console.log(people);

result = people.slice(0, 3);
console.log(result); //3 objects - Take the objects from 0, and end at 3 
console.log(people);

result = people.slice(1, 0, "Cho");
console.log(result);
console.log(people);

people[1] = "Ginny"; //Add object Ginny in index 1 into the array
result = people.push("Fred", "George");
console.log(people);
console.log(result); //Now there are 7 objects

result = people.indexOf("Fred"); //index no. 5
console.log(result);
console.log(people);

result = people.splice(result, 1); //take the object at the index no. 1 out of the array
console.log(result);
console.log(people);

result = people.unshift("Rachel"); //Insert an object into the beginning of the array
console.log(result);
console.log(people);

result = people.shift(); //Take out the earlier added object at the beginning of the array
console.log(result);
console.log(people);

// //Turn a string into an array
const lettersA = Array.from("abcdefghijklmn");
console.log(lettersA);

const string1 = "abcdefghijklmn";
const arr1 = string1.split(); // an array of 1 object "abcd...mn"
console.log(arr1);

const arr2 = Array.from(string1);
console.log(arr2); //turn into a string

const arr3 = letters.toString(); //Turn into an array
console.log(arr3);