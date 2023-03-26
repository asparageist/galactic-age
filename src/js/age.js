export default class Age {

  constructor(userAge){
    this.userAge = userAge;
  }

  newAge() {
    const newAge = this.userAge * 365;
    const venus = newAge / 88;
    const mercury = newAge * .24;
    const venusAge = Math.trunc(venus);
    const mercuryAge = Math.trunc(mercury);
    return [newAge, venusAge, mercuryAge];
  }

}