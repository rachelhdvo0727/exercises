"use strict";
let counter = 0;

//while the (condition) is truthy, execute the code from the "loop body"
while (counter < 10) {
    //loop body
    console.log(counter);
    counter++;
}

//Short-hand with 'for'
//for(begin; condition; step)
for (counter = 0; counter < 10; counter++) {
    console.log(counter);
}

console.log(`after the loop, the counter is ${counter}`);


//do...while
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);