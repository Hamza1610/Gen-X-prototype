"use strict";
// Interfaces
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
// interface with variable
var ramat = {
    rooms: 4,
    water: false,
    toilet: true,
    electricity: true,
    name: 'RAMAT Hostel',
};
console.log(ramat);
// interface with class
// Class
var Block = /** @class */ (function () {
    function Block(rooms, water, toilet, electricity, name) {
        this.rooms = rooms;
        this.water = water;
        this.toilet = toilet;
        this.electricity = electricity;
        this.name = name;
        this.rooms = rooms;
        this.water = water;
        this.toilet = toilet;
        this.electricity = electricity;
        this.name = name;
    }
    return Block;
}());
exports.Block = Block;
