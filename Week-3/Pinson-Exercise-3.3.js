/*
============================================
; Title: Pinson-Exercise 3.3.js
; Author: Richard Krasso
; Date: January 23rd 2021
; Modified By: James Pinson
; Description: This assignment teaches us 
;============================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// This is the start of the program. 

//This is the assignment header. 
const header = require('./Pinson-Header.js');

//This creates the database singleton variable. 
var DatabaseSingleton = (function() {
    var instance;
  
//This creates the function for creating an instance. 
    function createInstance() {
      var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
    }

//This returns the get instance faction. 
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();

  //This calls my header to be displayed. 
console.log(header.display("James", "Pinson", "Exercise 3.3") + "\n");

//This creates our test function that sets up the variables for oracle and postgres, which calls to see if they are the same instance. 
function DatabaseSingletonTest(){
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);
}

//This is our test function. 
DatabaseSingletonTest();




// This is the end of the program. 