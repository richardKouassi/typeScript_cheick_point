interface Vehicle {
    make: string;
    model: string;
    year: number;
    methodstart: () => void;
}


class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
    methodstart: () => void;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.methodstart = () => {
            console.log("Démarrer ma voiture.");
        };
    }   
}

const maVoiture = new Car("Toyota", "V8", 2025);
maVoiture.methodstart(); // Output: Démarrer ma voiture.