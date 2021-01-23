/*
============================================
; Title: Pinson-Exercise 3.2.js
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

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// This is the start of the program. 

//This is the assignment header. 
const header = require('./Pinson-Header.js');

//This creates the function for Postgres with an array of properties. 
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

//This creates the function for MySql with an array of properties.
function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

//This creates the function for Oracle with an array of properties.
function Oracle(properties) {
    this.username = properties.username || '<username>';
    this.password = properties.password || '<password>';
    this.server = properties.server || '<server>';
    this.version = properties.version || '<version>';
}

//This creates the function for Informix with an array of properties.
function Informix(properties) {
    this.username = properties.username || '<username>';
    this.password = properties.password || '<password>';
    this.server = properties.server || '<server>';
}

//This creates the DatabaseFactory function. 
function DatabaseFactory() {}

//This creates the prototype for each database class. 
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === 'MySql') {
        this.databaseClass = MySql;
    }
    if (properties.databaseType === 'Oracle'){
        this.databaseClass = Oracle;
    }
    if (properties.databaseType === 'Informix'){
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

//This assigns the variables for postgres. 
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin", 
    password: "SuperSecret"
});

//This assigns the variables for mySql.
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//This assigns the variables for Oracle.
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle", 
    username: "<username>",
    password: "<password>"
})



//This assigns the variables for Informix. 
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "<username>",
    password: "<password>"
})

//This calls my header to be displayed. 
console.log(header.display("James", "Pinson", "Exercise 3.2") + "\n");

//This calls Oracle. 
console.log(oracle, "\n \n", informix);



//This is the end of the program. 

