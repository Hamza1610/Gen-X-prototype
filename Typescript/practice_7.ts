// Function

let car: Function;

car = (spec: object, model: number | string = 'Unknown'): object => {
    return {info: model, spec: spec} 
}

console.log(car({name: 'Lexus', color: 'Silver'}));