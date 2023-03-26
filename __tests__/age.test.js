import Age from '../src/js/age.js';

describe('Age', () => {

  let userAge = [];

  beforeEach(() => {
    userAge = new Age(40);
  });

  test('should calculate the age of a user in days', () => {
    expect(userAge.newAge()).toEqual[14600,166,64,21,3];
  });

  test('should calculate the age of a user in Venus years', () => {
    expect(userAge.newAge()).toEqual[14600,166,64,21,3];
  });

  test('should calculate the age of a user in Mercury years', () => {
    expect(userAge.newAge()).toEqual[14600,166,64,21,3];
  });

  test('should calculate the age of a user in Mars years', () => {
    expect(userAge.newAge()).toEqual[14600,166,64,21,3];
  });

  test('should calculate the age of a user in Jupiter years', () => {
    expect(userAge.newAge()).toEqual[14600,166,64,21,3];
  });


});