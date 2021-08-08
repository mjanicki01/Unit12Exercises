class Vehicle{
    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    if (!Number.isFinite(year) || year <= 0) {
        throw new Error("Invalid year: " + year)
        }
    }

    honk() {
        return "Beep";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

myFirstVehicle.honk();
myFirstVehicle.toString();

class Car extends Vehicle{
    constructor(make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString();
myFirstCar.honk();
myFirstCar.numWheels;

class Motorcycle extends Vehicle{
    constructor(make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!";
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();
myFirstMotorcycle.honk();
myFirstMotorcycle.revEngine();
myFirstMotorcycle.numWheels; 

class Garage {
constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
    }
    add(newVehicle) {
        if (this.capacity.length >= this.capacity) {
            return "Sorry, garage is full";
        }
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles allowed";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added"; 
    }
}


let garage1 = new Garage(2);

garage1.vehicles;
garage1.add(new Car("Hyundai", "Elantra", 2015))
garage1.vehicles;
garage1.add("Taco");
garage1.add(new Motorcycle("Honda", "Nighthawk", 2000));
garage1.vehicles;
garage1.add(new Car("Toyota", "Corolla", 2021));