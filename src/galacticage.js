//Business Logic For Age
export default class Galactic{
  constructor(age){
    this.age = age;
  }
  
  planetYears() {
  
    this.earth = 1;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;

    const earthYears = this.earth*this.age;
    const mercYears = this.mercury*this.age;
    const venusYears = this.venus*this.age;
    const marsYears = this.mars*this.age;
    const jupiterYears =  this.jupiter*this.age;

    const planetArray = [earthYears, mercYears, venusYears, marsYears, jupiterYears];
    return planetArray;
  }
  
  
  lifeExpectancy() {
    let base = 85;
    this.male = base - 5;
    this.female = base + 5;
    this.smoker = base -10;
    this.exercise = base + 4;

    return base;
  }
}

let myAge = new Galactic(35);
console.log(myAge);
console.log(myAge.planetYears());
let thisAge = new Galactic(87);
console.log(thisAge);
console.log(thisAge.planetYears());
