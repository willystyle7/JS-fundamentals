function CarMaker(odometer) {
    this.odometer = odometer || 0;
}

CarMaker.prototype.drive = function(miles) {
    this.odometer += miles;
    return this.odometer;
}

let car = new CarMaker(10);
console.log(car.odometer);
console.log(car.drive(5));