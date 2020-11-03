import UnitConverter from '../../src/converter';
import { describe, test } from "@jest/globals";
import Unit from "../../src/converter/Unit";

describe('英尺转化', () => {
  test('1inch=1inch', () => {
    expect(new UnitConverter(1, Unit.INCH).getUnitRateNumber()).toBe(new UnitConverter(1, Unit.INCH).getUnitRateNumber());
  });

  test('1foot=12inch', () => {
    expect(new UnitConverter(1, Unit.FOOT).getUnitRateNumber()).toBe(new UnitConverter(12, Unit.INCH).getUnitRateNumber());
  })

  test('1yard=36inch', () => {
    expect(new UnitConverter(1, Unit.YARD).getUnitRateNumber()).toBe(new UnitConverter(36, Unit.INCH).getUnitRateNumber());
  })

  // test('3foot=1yard', () => {
  //   expect(unitConverter.unitFootToYard(3)).toEqual(1);
  // });
  //
  // test('1yard=3foot', () => {
  //   expect(unitConverter.unitYardToFoot(1)).toBe(3);
  // });
  //
  // test('1yard=36inch', () => {
  //   expect(unitConverter.unitYardToInch(1) === 36).toBeTruthy();
  // });
  //
  // test('12inch=1foot', () => {
  //   expect(unitConverter.unitInchToFoot(12) === 1).toBeTruthy();
  // });
  // test('36inch=1yard', () =>{
  //   expect(unitConverter.unitInchToYard(36) === 1).toBeTruthy();
  // })
});
