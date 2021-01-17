/*
============================================
; Title: Pinson-Exercise 2.2.js
; Author: Richard Krasso
; Date: January 17th 2021
; Modified By: James Pinson
; Description: This assignment teaches us how to create objects using the prototype pattern. 
;============================================
*/

//This is the start of the program. 

//This is the assignment header. 
const header = require('./Pinson-Header.js');

//This sets up the variable person that gives a getAge function.
var person =
{
    getAge: function()
    {
        return this.age;
    }
};

//This sets up the variable James that creates an object with Age and Fullname.
var james = Object.create (person, {
    "age":
    {
        "value": "26"
    },
    "fullname":
    {
        "value": "James Pinson"
    }
});

//This calls my header to be displayed. 
console.log(header.display("James", "Pinson", "Exercise 2.2") + "\n");

//This calls the get variable James and getAge function.
james.getAge();

//This calls the person's full name. 
console.log("The person's full name is: '%s'", james.fullname);

//This calls the person's age. 
console.log("The person's age is '%s'", james.age);

//This is the end of the program. 