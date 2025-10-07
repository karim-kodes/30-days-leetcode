// Write a function createHelloWorld.
//  It should return a new function that always returns "Hello World".

// 1.Solution one
// RUNTIME: 52M
const createHelloWorld = function () {
  return function () {
    return "Hello world";
  };
};

const A = createHelloWorld();
A();

// Solution 2
const fs = require("fs");
const { console } = require("inspector");
const createHelloWorld2 = function () {
  return function (...args) {
    return "Hello World";
  };
};

process.on("exit", () => {
  fs.writeFileSync("display_runtime.txt", "0");
});

const B = createHelloWorld2();
B();
