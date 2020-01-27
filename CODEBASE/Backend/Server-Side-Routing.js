//FUNTION EXPORT
function foobar => the funtions

export.foobar = foobar;

//IMPORT
const { foobar } = require("./path to file");


//DEFULT EXPOST IS WHAT TK COVERS
//export THE WHOLE SERVER/ROUTE
const express = require('express');

const fooBar = express.Router(); // notice the Uppercase R

module.exports = fooBar; // what ever you called it THIS IS THE LAST LINE


//import
const filePath = require('./filePath');

server.use('/examplePath', filePath); // "filePath" is the fooBar from the above Const, like with "default" export in react you can name this what ever you want
//"server" is the fooBar you called your server
