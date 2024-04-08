// Generics
// type: string, size: number, description:
const foodPackage = <T extends {type: string, size: number, color: string}> (spec: T, info: string) => {

    return {...spec, info}
}

let item_1 = foodPackage({type: 'Flask', size: 4, color: 'red'}, 'Water rwsistance, 10hrs of use')
let item_2 = foodPackage({type: 'Plasric cooler', size: 2, color: 'blue'}, 'Thick surface, 3hrs of use')
// trying to access the values of T
console.log(item_1.info);
console.log(item_2.info);

console.log(item_1.type);
console.log(item_2.type);
