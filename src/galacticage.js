//Business Logic For Age
export default class Galactic{
  constructor(age, lifestyle){
    this.age = age;
    this.lifestyle = lifestyle;
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
    this.healthyMale = "Healthy Male";
    this.smokerMale = "Male Smoker";
    this.healthyFemale = "Healthy Female";
    this.smokerFemale = "Female Smoker";

    if (this.lifestyle === this.healthyMale){
      this.lifeLength = 85
    }
    }
  }


let myAge = new Galactic(35);
console.log(myAge);
console.log(myAge.planetYears());
let thisAge = new Galactic(87);
console.log(thisAge);
console.log(thisAge.planetYears());


