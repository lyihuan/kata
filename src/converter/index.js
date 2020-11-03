export default class UnitConverter {
  constructor(number, unit) {
    this.numberInInches = unit.getNumberInInches(number);
  }

  getUnitRateNumber() {
    return this.numberInInches;
  }
}
