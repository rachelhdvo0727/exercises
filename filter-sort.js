"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];

function testParms(a, b, c, d) {
    console.log(`a: ${a}, b:${b},c:${c}, d:${d}`);
}
people.forEach(testParms);


const animals = [{
    name: "Mandu",
    type: "cat"
}, {
    name: "Mia",
    type: "cat"
}, {
    name: "Leeoloo",
    type: "dog"
}]

function isCat(animal) {
    if (animal.type === "cat") {
        console.log("is a cat");
        return true;
    } else {
        console.log("is not a cat");
        return false;
    }
}

function isDog(animal) {
    if (animal.type === "dog") {
        return true;
    } else {
        return false;
    }
}
//call to see what the above function return in the console.
isCat(animals[0]);
isCat(animals[1]);
isCat(animals[2]);

function all(animal) {
    return true;
}

function none(animal) {
    return false;
}

console.log(animals.filter(all));
console.log(animals.filter(none));

const onlyCats = animals.filter(isCat);
const onlyDogs = animals.filter(isDog);

console.log(onlyCats);
console.log(onlyDogs);
console.table(onlyCats);
console.table(onlyDogs);