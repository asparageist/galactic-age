import Age from '../src/js/age.js';

describe('Template', () => {
  
  test('should calculate the age of a user in days', () => {
    const userAge = 40;
    expect(userAge).toEqual("14600");

  });
});