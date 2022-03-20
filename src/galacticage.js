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

    if (this.lifestyle === "Healthy Male"){
      this.lifeLength = 85;
    } else if(this.lifestyle === "Male Smoker"){
      this.lifeLength = 75;
    } else if(this.lifestyle === "Healthy Female"){
      this.lifeLength = 90;
    } else if(this.lifestyle === "Female Smoker"){
      this.lifeLength = 82;
    } else {
      this.lifeLength = "empty field";
    }
    return this.lifeLength;
  }

  yearsLeft() {
    this.remainingYears = (this.lifeLength - this.age);
    (this.remainingYears>0);
    return this.remainingYears;
  }

  longLife() {
    let livedLong = this.yearsLeft();
    const myEye = 0;
    if (livedLong<0){
      return livedLong*(-1);
    } else return myEye;
  
  }
  
  planetData() {
    let dataArray = [];
    const earth = {
      age: this.age,
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeExpectancy(),
      earthYearsLeft: this.yearsLeft(),
      earthYearsOver: this.longLife()
    };
    
    const mercury = {
      age: this.planetYears()[1],
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeExpectancy()*this.mercury,
      mercuryYearsLeft: this.yearsLeft()*this.mercury,
      mercuryYearsOver: this.longLife()*this.mercury
    };

    const venus = {
      age: this.planetYears()[2],
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeExpectancy()*this.venus,
      venusYearsLeft: this.yearsLeft()*this.venus,
      venusYearsOver: this.longLife()*this.venus
    };
    
    const mars = {
      age: this.planetYears()[3],
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeExpectancy()*this.mars,
      marsYearsLeft: this.yearsLeft()*this.mars,
      marsYearsOver: this.longLife()*this.mars
    };

    const jupiter = {
      age: this.planetYears()[4],
      lifestyle: this.lifestyle,
      lifeExpect: this.lifeExpectancy()*this.jupiter,
      jupiterYearsLeft: this.yearsLeft()*this.jupiter,
      jupiterYearsOver: this.longLife()*this.jupiter
    };
    dataArray.push(earth, mercury, venus, mars, jupiter);

    return dataArray;
  }
}
