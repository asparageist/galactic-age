export default class Age {

  constructor(userAge){
    this.userAge = userAge;
  }

  newAge() {
    const newAge = this.userAge;
    const ageDays = newAge * 365;
    const venus = newAge / .62;
    const mercury = newAge / .24;
    const mars = newAge / 1.88;
    const jupiter = newAge / 11.86;
    const venusAge = Math.trunc(venus);
    const mercuryAge = Math.trunc(mercury);
    const marsAge = Math.trunc(mars);
    const jupiterAge = Math.trunc(jupiter);
    return [ageDays, venusAge, mercuryAge, marsAge, jupiterAge];
  }

}