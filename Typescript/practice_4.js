"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Module
var Laptop_1 = require("./Laptop");
var computer1 = new Laptop_1.Laptop(40, 'Intel Corei 7', '16GBram', 7);
var computer2 = new Laptop_1.Laptop(100, 'Intel Corei 5', '8GBram', 8);
console.log(computer1.printSpec());
console.log(computer2.printSpec());
// retricted variables
var models = [computer1, computer2];
console.log(models);
