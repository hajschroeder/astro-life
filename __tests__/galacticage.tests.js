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

    test('should determine lifespan from lifestyle information', () =>{
      let testAgeHM = new Galactic(40, "Healthy Male");
      let testAgeMS = new Galactic(40, "Male Smoker");
      let testAgeHF = new Galactic(40, "Healthy Female");
      let testAgeFS = new Galactic(40, "Female Smoker");
      let testAgeEmpty = new Galactic(40, "");
      testAgeHM.lifeExpectancy()
      testAgeMS.lifeExpectancy()
      testAgeHF.lifeExpectancy()
      testAgeFS.lifeExpectancy()
      testAgeEmpty.lifeExpectancy()
      expect(testAgeHM.lifeLength).toEqual(85)
      expect(testAgeMS.lifeLength).toEqual(75)
      expect(testAgeHF.lifeLength).toEqual(90)
      expect(testAgeFS.lifeLength).toEqual(82)
      expect(testAgeEmpty.lifeLength).toEqual("empty field")
        })
  })

  describe ('Galactic#yearsLeft', () =>{

    test('should subtract age from life expectancy', () =>{
      let testAge6 = new Galactic(35, "Healthy Female");
      testAge6.lifeLength=90
      expect(testAge6.yearsLeft()).toEqual(55)
    })

  
  })

  describe ('Galactic#longLife', () =>{
    test('should turn years of outlived expectancy into a positive integer', () =>{
      let testAge7= new Galactic(120, "Healthy Male");
      let testAge8 = new Galactic(12, "Healthy Male");
      testAge7.lifeLength = 85
      testAge8.lifeLength = 85
      expect(testAge7.longLife()).toEqual(35)
      expect(testAge8.longLife()).toEqual(0)

    })
  })

  describe ('Galactic#planetData', () =>{
    test('should gather data from previous functions', () =>{
      let testAgePlanet = new Galactic(60, "Male Smoker")
      testAgePlanet.lifeLength=75
      testAgePlanet.planetData();
      expect(testAgePlanet.planetYears()[1]).toEqual(14.399999999999999)
      expect(testAgePlanet.planetYears()[2]).toEqual(37.2)
      expect(testAgePlanet.planetYears()[3]).toEqual(112.8)
      expect(testAgePlanet.planetYears()[4]).toEqual(711.5999999999999)
      expect(testAgePlanet.age).toEqual(60);
      expect(testAgePlanet.lifestyle).toEqual("Male Smoker")
      expect(testAgePlanet.remainingYears).toEqual(15);
      expect(testAgePlanet.longLife()).toEqual(0);
      

    })

    test('should make an array of all data sets', () =>{
    let dataArrayTest = []
    const test1 = "test1"
    const test2 = "test2"
    expect(dataArrayTest.push(test1, test2)).toEqual(2)
  })

  })


})

