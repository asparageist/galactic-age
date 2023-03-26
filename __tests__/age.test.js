import Age from '../src/js/age.js';

describe('Age', () => {

  let userAge;

  beforeEach(() => {
    userAge = new Age(40);
  });

  test('should calculate the age of a user in days', () => {
    expect(userAge.newAge()).toEqual[14600,165];
  });

  test('should calculate the age of a user in Venus years', () => {
    expect(userAge.newAge()).toEqual[14600,165];
  });

  test('should calculate the age of a user in Mercury years', () => {
    expect(userAge.newAge()).toEqual[14600,165,9]
  });
});