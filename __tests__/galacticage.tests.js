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
      expect(testAge2.earth).toEqual(1);
      expect(testAge2.mercury).toEqual(0.24);
      expect(testAge2.venus).toEqual(0.62);
      expect(testAge2.mars).toEqual(1.88);
      expect(testAge2.jupiter).toEqual(1.86);
    })
  })

  describe ('Galactic#lifeExpectancy()', () =>{

    test('should calculate the user life expectancy', () =>{
      let testAge3 = new Galactic();
      testAge3.lifeExpectancy()
      expect(testAge3.male).toEqual(80);
      expect(testage3.female).toEqual(90);      
    }

    )
  })
})