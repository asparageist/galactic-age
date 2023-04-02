export default class Age {

  constructor(userAge, secondAge, nextAge){
    this.userAge = userAge;
    this.secondAge = secondAge;
    this.nextAge = nextAge;
    this.ageDiff = secondAge - userAge;
    this.nextAgeDiff = nextAge - secondAge;
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
    const planetAges = [venusAge, mercuryAge, marsAge, jupiterAge];
    return(planetAges);
  };

  yearsPast() {
    const earth = this.ageDiff;
    const mercury = this.ageDiff / .24;
    const venus = this.ageDiff / .62;
    const mars = this.ageDiff / 1.88;
    const jupiter = this.ageDiff / 11.86;
    const mercuryAge = Math.trunc(mercury);
    const venusAge = Math.trunc(venus);
    const marsAge = Math.trunc(mars);
    const jupiterAge = Math.trunc(jupiter);
    const planetAges = [earth, mercuryAge, venusAge, marsAge, jupiterAge];
    return(planetAges);
  };

  yearsNext() {
    const earth = this.nextAgeDiff;
    const mercury = this.nextAgeDiff / .24;
    const venus = this.nextAgeDiff / .62;
    const mars = this.nextAgeDiff / 1.88;
    const jupiter = this.nextAgeDiff / 11.86;
    const venusAge = Math.trunc(venus);
    const mercuryAge = Math.trunc(mercury);
    const marsAge = Math.trunc(mars);
    const jupiterAge = Math.trunc(jupiter);
    const planetAges = [venusAge, mercuryAge, marsAge, jupiterAge];
    return(planetAges);
  };
}