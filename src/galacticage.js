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
      this.lifeLength = 85;
    } else if(this.lifestyle === this.smokerMale){
      this.lifeLength = 75;
    } else if (this.lifestyle === this.healthyFemale){
      this.lifeLength = 90;
    } else if (this.lifestyle === this.smokerFemale){
      this.lifeLength = 82;
    }
  }

  yearsLeft() {
    this.remainingYears = (this.lifeLength - this.age);
    return this.remainingYears;
  }

  longLife() {
    let livedLong = this.yearsLeft();
    const myEye = "I've got my eye on you";
    if (livedLong<0){
      return livedLong*(-1);
    } else return myEye;
  
  }
  
  earthData() {
    const earth = {
      age: this.age,
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeLength,
      earthYearsLeft: this.yearsLeft(),
      earthYearsOver: this.longLife()
    }
  }

  
  
}

let myAge = new Galactic(35, "Healthy Female");
console.log(myAge);
console.log('break');
console.log(myAge.lifeExpectancy());
console.log('break');
console.log(myAge.planetYears());
console.log('break');
console.log(myAge.lifestyle);
console.log('break');
console.log(myAge.age);
console.log('break');
console.log(myAge.lifeLength);
console.log('break');
console.log((myAge.lifeLength)-(myAge.age));
console.log('break');
console.log(myAge.yearsLeft());
console.log('break');
console.log(myAge.planetYears()[3]);
console.log('break');
console.log(myAge.yearsLeft()*(myAge.mercury));
console.log('break');
console.log(55*0.24);
console.log(`why is this not working ${myAge.planetYears()[1]}`); 

