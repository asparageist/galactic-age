import Age from '../src/js/age.js';

describe('Age', () => {

  let userAge = [];

  beforeEach(() => {
    userAge = new Age(40,50,55);
  });

  test('should calculate the age of a user in days', () => {
    expect(userAge.earthDays()).toEqual(14600);
  });

  test('should calculate the age of a user in Venus years', () => {
    expect(userAge.newAge()).toEqual([64,166,21,3]);
  });

  test('should calculate the age of a user in Mercury years', () => {
    expect(userAge.newAge()).toEqual([64,166,21,3]);
  });

  test('should calculate the age of a user in Mars years', () => {
    expect(userAge.newAge()).toEqual([64,166,21,3]);
  });

  test('should calculate the age of a user in Jupiter years', () => {
    expect(userAge.newAge()).toEqual([64,166,21,3]);
  });

  test('should determine how many years pass on Earth since a past birthday', () => {
    expect(userAge.yearsPast()).toEqual([10, 41, 16, 5, 0]);
  });

  test('should determine how many years pass on Mercury since a past birthday', () => {
    expect(userAge.yearsPast()).toEqual([10, 41, 16, 5, 0]);
  });

  test('should determine how many years pass on Venus since a past birthday', () => {
    expect(userAge.yearsPast()).toEqual([10, 41, 16, 5, 0]);
  });

  test('should determine how many years pass on Mars since a past birthday', () => {
    expect(userAge.yearsPast()).toEqual([10, 41, 16, 5, 0]);
  });

  test('should determine how many years pass on Jupiter since a past birthday', () => {
    expect(userAge.yearsPast()).toEqual([10, 41, 16, 5, 0]);
  });

  test('should determine how many years pass on other planets until a given birthday', () => {
    expect(userAge.yearsNext()).toEqual([5, 20, 8, 2, 0]);
  });

});