class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const myCar = new Car("BMW", 2023);
const result = `I like to have ${myCar.name} in ${myCar.year}`
console.log(result)