export default class Age {

  constructor(userAge, secondAge){
    this.userAge = userAge;
    this.secondAge = secondAge;
    this.ageDays = userAge * 365;
  };

  earthDays() {
    return(this.ageDays);
  };

  newAge() {
    const newAge = this.userAge;
    const venus = newAge / .62;
    const mercury = newAge / .24;
    const mars = newAge / 1.88;
    const jupiter = newAge / 11.86;
    const venusAge = Math.trunc(venus);
    const mercuryAge = Math.trunc(mercury);
    const marsAge = Math.trunc(mars);
    const jupiterAge = Math.trunc(jupiter);
    return [venusAge, mercuryAge, marsAge, jupiterAge];
  };

  yearsPast() {
    const earth = this.secondAge - this.userAge;
    return(earth);
  };
}