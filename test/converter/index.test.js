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

  test('1yard=3foot', () => {
    expect(new UnitConverter(1, Unit.YARD).getUnitRateNumber()).toBe(new UnitConverter(3, Unit.FOOT).getUnitRateNumber());
  })
});
