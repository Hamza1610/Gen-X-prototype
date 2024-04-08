// Class
export class Laptop {
    // this is replaced with the readonly, public and private keyword
        // battery: number;
        // cpu: string;
        // ram: string;
        // gen: number;
         constructor(
            public battery: number,
            readonly cpu: string,
            readonly ram: string,
            private gen: number
        ) {
            this.battery = battery
            this.cpu = cpu
            this.ram = ram
            this.gen = gen
         }
    
         printSpec() {
            return [this.battery, this.cpu, this.ram, this.gen]
         }
        }
    