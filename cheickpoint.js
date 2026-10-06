"use strict";
class Car {
    make;
    model;
    year;
    methodstart;
    constructor(make, model, year) {
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
