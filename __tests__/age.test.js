import Age from '../src/js/age.js';

describe('Age', () => {

  let userAge;

  beforeEach(() => {
    userAge = new Age(40);
  });

  test('should calculate the age of a user in days', () => {
    expect(userAge.earthAge()).toEqual(14600);
  });

  test('should calculate the age of a user in venus years', () => {
    expect(userAge.venusAge()).toEqual(165);
  })
});