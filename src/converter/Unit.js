export default class Unit {
  static INCH = new Unit(1);

  static FOOT = new Unit(12);

  static YARD = new Unit(36);

  constructor(rate) {
    this.rate = rate;
  }

  getNumberInInches(number) {
    return number * this.rate;
  }
}
