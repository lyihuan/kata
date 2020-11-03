export default class UnitConverter {
  constructor(number, unit) {
    this.numberInInches = unit.getNumberInInches(number);
    // if(unit ===Unit.FOOT){
    //   this.numberInInches = number * unit.getUnitRateNumber();
    // }if(unit ===Unit.YARD){
    //   this.numberInInches = number * unit.getUnitRateNumber();
    // }else{
    //   this.numberInInches = number * unit.getUnitRateNumber();
    // }
  }

  getUnitRateNumber() {
    return this.numberInInches;
  }
}
