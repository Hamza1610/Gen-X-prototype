"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laptop = void 0;
// Class
var Laptop = /** @class */ (function () {
    // this is replaced with the readonly, public and private keyword
    // battery: number;
    // cpu: string;
    // ram: string;
    // gen: number;
    function Laptop(battery, cpu, ram, gen) {
        this.battery = battery;
        this.cpu = cpu;
        this.ram = ram;
        this.gen = gen;
        this.battery = battery;
        this.cpu = cpu;
        this.ram = ram;
        this.gen = gen;
    }
    Laptop.prototype.printSpec = function () {
        return [this.battery, this.cpu, this.ram, this.gen];
    };
    return Laptop;
}());
exports.Laptop = Laptop;
