//Business Logic For Age
export default class Galactic{
  constructor(age, lifestyle){
    this.age = age;
    this.lifestyle = lifestyle;
    this.lifeLength = 0;
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
    (this.remainingYears>0);
    return this.remainingYears;
  }

  longLife() {
    let livedLong = this.yearsLeft();
    const myEye = "I've got my eye on you";
    if (livedLong<0){
      return livedLong*(-1);
    } else return myEye;
  
  }
  
  planetData() {
    let dataArray = [];
    const earth = {
      age: this.age,
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeLength,
      earthYearsLeft: this.yearsLeft(),
      earthYearsOver: this.longLife()
    };
    
    const mercury = {
      age: this.planetYears()[1],
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeLength*this.mercury,
      mercuryYearsLeft: this.yearsLeft()*this.mercury,
      mercuryYearsOver: this.longLife()*this.mercury
    };

    const venus = {
      age: this.planetYears()[2],
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeLength*this.venus,
      venusYearsLeft: this.yearsLeft()*this.venus,
      venusYearsOver: this.longLife()*this.venus
    };
    
    const mars = {
      age: this.planetYears()[3],
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeLength*this.mars,
      marsYearsLeft: this.yearsLeft()*this.mars,
      marsYearsOver: this.longLife()*this.mars
    };

    const jupiter = {
      age: this.planetYears()[4],
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeLength*this.jupiter,
      jupiterYearsLeft: this.yearsLeft()*this.jupiter,
      jupiterYearsOver: this.longLife()*this.jupiter
    };
    dataArray.push(earth, mercury, venus, mars, jupiter);

    return dataArray;
  }

  
  
}

let myAge = new Galactic(35, "Healthy Male");
console.log(myAge);
console.log('lifeExpectancy');
console.log(myAge.lifeExpectancy());
console.log('planet years');
console.log(myAge.planetYears());
console.log('my age dot lifestyle');
console.log(myAge.lifestyle);
console.log('my age dot age');
console.log(myAge.age);
console.log('my age dot life length');
console.log(myAge.lifeLength);
console.log('life length minus age');
console.log((myAge.lifeLength)-(myAge.age));
console.log('years left');
console.log(myAge.yearsLeft());
console.log('age on a diff planet');
console.log(myAge.planetYears()[3]);
console.log('years left on mercury');
console.log(myAge.yearsLeft()*(myAge.mercury));
console.log('straight numbers');
console.log(55*0.24);
console.log(`why is this not working ${myAge.planetYears()[1]}`); 
console.log(myAge.planetData());