export default class Age {

  constructor(userAge){
    this.userAge = userAge;
  }

  earthAge() {
    const newAge = this.userAge * 365;
    return (newAge);
  }

}