// Function signature
var calltoDuty;
calltoDuty = function () {
    console.log('Call of Duty init!');
};
calltoDuty();
// Signatures
// void
var purbG;
purbG = function () { return console.log('PurbG init!'); };
purbG();
// number or string
var freeFire;
freeFire = function (fighter, level) {
    return 'Freefire init!  ${fighter} of level ${level} is on!';
};
console.log(freeFire('Commando', 3));
