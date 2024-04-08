const names: string = 'Hamza';
const age: number = 30;
const programmer: boolean = true;

console.log(names, age, programmer);

const circonference = (diameter) => {
    return diameter * Math.PI
}

const parameters = (sides) => {
    let count = 1
    let sum: number = 0
    for(let i in sides) {
        sum += sides[i]
    }
    return sum
    
}

const quad = (a:number, b: number, c:number) => {

    const numerator = (b**2 - 4*a*c) ** 0.5;
    const denomenator: number = 2*a;

    const x1: number = -(b - numerator ) / denomenator;
    const x2: number = -(b + numerator) / denomenator;

    return [x1, x2];

}


// console.log(circonference(60));
// console.log(parameters([2, -1, 99]));
console.log(quad(1, 2, 0));


// object and array

const info = {
    names: 'Hamza Muhammad',
    level: '200L',
    age: 14,
    experience: true,
    hubbies: {1:'reading', 2: 'coding', 3:'making research'}
}

info.hubbies = {1: 's3', 2: 'ds', 3: 'e'};
console.log(info);

const series = [12,23,43,34,54,66];
series[2] = 223;

const combinedTypes = [21, 'sd', true, 'sd0', 23.2];

combinedTypes[0] = 'Hello';
combinedTypes.push('Radio')

console.log(series);
console.log(combinedTypes);
