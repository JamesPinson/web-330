/*
============================================
; Title:  Pinson-Exercise 1.3.js
; Author: Professor Krasso 
; Date:   1/10/2021
; Modified By: James Pinson
; Description: This exercise teaches us how to define a function in which you create objects using the new keyword. 
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

//This is the assignment header. 
const header = require('./Pinson-Header.js');

//This is our CellPhone function with the following parameters. 
function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

//This is our get price function that returns the price of the phone. 
    this.getPrice = function()
    {
        return this.price;
    }

//This is our model function that returns the model of the phone. 
    this.getModel = function()
    {
        return this.model;
    }

//This is our details function that will return a string of all the phones details. 
    this.getDetails = function()
    {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() +
           "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }
}

//This is where we supply the values of the phone object. 
var cellPhone = new CellPhone("<manufacturer>", "<model>", "<color>", "<price>");

//This calls the assignment header for display.
console.log(header.display("James", "Pinson", "Exercise 1.3") + "\n");

//This is where we call the heading and phone details. 
console.log("-- DISPLAYING CELL PHONE DETAILS --");
console.log(cellPhone.getDetails());

// end program