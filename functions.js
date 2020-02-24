"use strict";

function sayHello(firstName) {
    console.log(`Hello ${firstName}`);
}
//const myName = sayHello();
sayHello();
//sayHello(firstName, lastName);

const firstName = "rachel";
const animalName = "blah";
const animalType = "dog";

function presentPet(firstName, animalType, animalName) {
    console.log(`my name is ${firstName}, I have a ${animalType}, called ${animalName}`);
}
presentPet();

function greeting(firstName) {
    //return a string (template)
    return `Hello ${firstName}`;
}
console.log(greeting("anyname"));

function colorString(red, green, blue) {
    //return a string (template)
    return `rgb(${red}, ${green}, ${blue})`;
}

let result = colorString(213, 23, 14);
console.log(result);

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return colorString(red, green, blue);
}

function randomBackground() {
    document.querySelector("body").style.backgroundColor = randomColor();
}
// randomBackground();


//store a function in a variable
function sayHello(person) {
    console.log(`Hello ${person}`);
}

//Call the variable back like a function
const greet = sayHello;
greet("rach");


function redAlert() {
    console.log("%cHello red", "color: red; font-size:x-large");
}

function blueMessage() {
    console.log("%cBlue mesage", "color: blue; font-size:large");
}

function log(type) {
    //call the parameter like a function
    type();
}

log(redAlert);
log(blueMessage);


