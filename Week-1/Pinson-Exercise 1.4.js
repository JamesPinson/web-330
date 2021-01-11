/*
============================================
; Title:  Pinson-Exercise 1.4.js
; Author: Professor Krasso 
; Date:   1/10/2021
; Modified By: James Pinson
; Description: This exercise teaches us how to use duck typing to determine the requirements of an operation at runtime. 
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

//This is the assignment header. 
const header = require('./Pinson-Header.js');

//This is the function that returns our car model. 
function Car(model)
{
    this.model = model;
}

//This is the car prototype that returns our outputted string when called. 
Car.prototype.start = function()
{
    console.log("Car added to the racetrack!");
}

//This is a function that returns the Trucks model and year. 
function Truck(model, year)
{
    this.model = model;
    this.year = year;
}

//This is the truck prototype that returns our outputted string when called. 
Truck.prototype.start = function()
{
    console.log("Truck added to the racetrack!");
}

//This is the jeep function that returns the model, year, and color. 
function Jeep(model, year, color)
{
    this.model = model;
    this.year = year;
    this.color = color;
}

//This is our jeep prototype that returns our outputting string when called. 
Jeep.prototype.start = function()
{
    console.log("Jeep added to the racetrack!");
}


var racetrack = [];

//This is our driveIt function that returns our start prototype when called. 
function driveIt(vehicle)
{
    vehicle.start();

    racetrack.push(vehicle);

}

//This defines the variables of our Car, Truck and Jeep.
var civic = new Car("Civic");
var F150 = new Truck("F150", "2016");
var wrangler = new Jeep("Wrangler", "2018", "Red");

//This calls the assignment header for display.
console.log(header.display("James", "Pinson", "Exercise 1.3") + "\n");


//This calls our drive it function for each vehicle. 
driveIt(civic);
driveIt(F150);
driveIt(wrangler);

//This calls our array of vehicles. 
console.log('\n-- The following vehicles have been added to the racetrack --');
for (var x = 0; x < racetrack.length; x++)
{
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

// end program
