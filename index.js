'use strict';

var calculator = require('./app/calculator');
var a = 3;
var b = 5;

console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`Minus ${a} + ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiply ${a} + ${b} = ${calculator.multiply(a,b)}`);
console.log(`Divide ${a} + ${b} = ${calculator.divide(a,b)}`);

// var server = require("./server");
// var router = require("./router");
// var requestHandlers = require("./requestHandlers");
//
// var handle = {}
// handle["/"] = requestHandlers.inicio;
// handle["/iniciar"] = requestHandlers.iniciar;
// handle["/subir"] = requestHandlers.subir;
//
// server.wakeup(router.route, handle);
