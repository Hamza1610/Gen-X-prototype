// Interfaces

interface Hostel {
    rooms: number,
    water: boolean,
    toilet: boolean,
    electricity: boolean,
    name: string,
}

// interface with variable
const ramat: Hostel = {
    rooms: 4,
    water: false,
    toilet: true,
    electricity: true,
    name: 'RAMAT Hostel',
}

console.log(ramat);

// interface with class

// Class
export class Block implements Hostel {

         constructor(
            readonly rooms: number,
            public water: boolean,
            readonly toilet: boolean,
            public electricity: boolean,
            readonly name: string
        ) {
            this.rooms = rooms
            this.water = water
            this.toilet = toilet
            this.electricity = electricity
            this.name = name
    
        }
}