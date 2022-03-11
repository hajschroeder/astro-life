//Business Logic For Age
export default class Galactic{
  constructor(age){
    this.age = age;
  }

  planetYears() {
    this.earth = 1;
    this.mercury = 0.240;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 1.86;
  }
  
  lifeExpectancy() {
    let base = 85;
    this.male = base - 5;
    this.female = base + 5;
    this.smoker = base -10;
    this.goodDiet = base + 3;
    this.badDiet = base - 3;
    this.exercise = base + 4;
    this.sedentary = base - 4;
    return base;
  }
}
  
