"use strict";
////Basic objects
let person1 = {
    firstName: "Peter",
    age: 29,
    student: false
};
let person2 = {
    firstName: "other Peter",
    age: 28,
    student: true
};
let person3 = person1;

console.log(person1.lastName);
person1.lastName = "undefined"; //define an extra property with a value
console.log(person1.lastName);

console.log(person1.middleName);
person1.middleName = "undefined";
console.log(person1.middleName);

delete person1.lastName;
console.log(person1.lastName);

// person1.age++; //increase value in age property
// console.log(person1);

// person2.firstName = "Rachel";
// console.log(person1.firstName); //2 variables but same object
console.log(person1);
console.log(person2);
console.log(person3);

person3.firstName = "Changed";
console.log(person1);
console.log(person2);
console.log(person3);
person3 = person2;
console.log(person1);
console.log(person2);
console.log(person3);
person2.firstName = "Also changed";
console.log(person1);
console.log(person2);
console.log(person3);
person1 = person3;
console.log(person1);
console.log(person2);
console.log(person3);

let student1 = {
    firstName: "Harry",
    lastName: "Potter"
};
let student2 = {
    firstName: "Harry",
    lastName: "Potter"
};

//student2 = student1;
student1.firstName = "Potty";
console.log(student1);
console.log(student2);

student1.firstName = student2.firstName;
console.log(student1);
console.log(student2);
student1.lastName = student2.lastName;
console.log(student1);
console.log(student2);

if (student1 === student2) {
    console.log("They are the same!");
} else {
    console.log("They are not...");
}


//set Prototype
let Student = {
    firstName: "",
    lastName: "",
    house: ""
}

let student1 = Object.create(Student);
student1.firstName = "Harry";
student1.house = "Gryffindor";

let student2 = Object.create(Student);
student2.firstName = "Draco";