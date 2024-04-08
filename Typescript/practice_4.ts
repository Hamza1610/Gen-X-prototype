// Module
import { Laptop } from './Laptop'
const computer1 = new Laptop(40, 'Intel Corei 7', '16GBram', 7)
const computer2 = new Laptop(100, 'Intel Corei 5', '8GBram', 8)


console.log(computer1.printSpec());
console.log(computer2.printSpec());

// retricted variables

let models: Laptop[] = [computer1, computer2]
console.log(models);

