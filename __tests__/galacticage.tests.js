import Galactic from '../src/galacticage.js';

describe('Galactic', () => {

  test('should create a new object with properties', () =>{
    let testAge1 = new Galactic(100)
    expect(testAge1.age).toEqual(100)
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

  })
})
