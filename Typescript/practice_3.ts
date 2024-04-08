
// Function signature
let calltoDuty: Function;

calltoDuty = () => {

    console.log('Call of Duty init!'); 
}

calltoDuty()

// Signatures

// void
let purbG: () => void;
purbG = () => console.log('PurbG init!');
purbG()
// number or string
let freeFire: (fighter: string, level: number) => string;
freeFire = (fighter: string, level: number) => {
    return 'Freefire init!  ${fighter} of level ${level} is on!';
};

console.log(freeFire('Commando', 3));

