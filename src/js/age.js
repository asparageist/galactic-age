export default class Age {

  constructor(userAge){
    this.userAge = userAge;
  }

  newAge() {
    const newAge = this.userAge * 365;
    const venus = newAge / 88;
    const venusAge = Math.trunc(venus);
    return [newAge, venusAge];
  }

}