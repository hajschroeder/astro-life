import Galactic from '../src/galacticage.js';

describe('Galactic', () => {

  test('should create a new object with properties', () =>{
    let testAge1 = new Galactic(100, "healthy")
    expect(testAge1.age).toEqual(100, "healthy")
  }) 

  describe('Galactic#planetYears()', () =>{

    test('should return a year relative to a planet', () =>{
      let testAge2 = new Galactic(1);
      testAge2.planetYears();
      expect(testAge2.earth).toEqual(1);
      expect(testAge2.mercury).toEqual(0.24);
      expect(testAge2.venus).toEqual(0.62);
      expect(testAge2.mars).toEqual(1.88);
      expect(testAge2.jupiter).toEqual(11.86);
    })

    test('should accept a new array', () =>{
      const planetArray = [];
      expect(planetArray).toEqual(expect.arrayContaining(planetArray));
    })

    test('should accept values into the array given an age', () =>{
      let testAge2 = new Galactic(1);
      expect(testAge2.planetYears()).toEqual([1, 0.24, 0.62, 1.88, 11.86]);
    })
  })

  describe ('Galactic#lifeExpectancy()', () =>{
    test('should gather lifestyle information', () =>{
      let testAge3 = new Galactic()
      testAge3.lifeExpectancy();
      expect(testAge3.healthyMale).toEqual("Healthy Male");
      expect(testAge3.smokerMale).toEqual("Male Smoker");
      expect(testAge3.healthyFemale).toEqual("Healthy Female");
      expect(testAge3.smokerFemale).toEqual("Female Smoker");
    })

    test('should determine lifespan from lifestyle information', () =>{
      let testAgeHM = new Galactic(40, "Healthy Male");
      let testAgeMS = new Galactic(40, "Male Smoker");
      let testAgeHF = new Galactic(40, "Healthy Female");
      let testAgeFS = new Galactic(40, "Female Smoker");
      testAgeHM.lifeExpectancy()
      testAgeMS.lifeExpectancy()
      testAgeHF.lifeExpectancy()
      testAgeFS.lifeExpectancy()
      expect(testAgeHM.lifeLength).toEqual(85)
      expect(testAgeMS.lifeLength).toEqual(75)
      expect(testAgeHF.lifeLength).toEqual(90)
      expect(testAgeFS.lifeLength).toEqual(82)
    })
  })

  describe ('Galactic#yearsLeft', () =>{

    test('should subtract age from life expectancy', () =>{
      let testAge6 = new Galactic(35, "Healthy Female");
      testAge6.lifeLength=90
      expect(testAge6.yearsLeft()).toEqual(55)
      
    })
  })

})
