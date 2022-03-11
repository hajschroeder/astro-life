import Galactic from '../src/galacticage.js';

describe('Galactic', () => {

  test('should create a new object with properties', () =>{
    let testAge1 = new Galactic(100)
    expect(testAge1.age).toEqual(100)
  }) 

  describe('Galactic#planetYears()', () =>{
    test('should return a year relative to a planet', () =>{
      let testAge2 = new Galactic();
      testAge2.planetYears();
      expect(testAge2.earth).toEqual(1)
    })
  
})
})