const FIZZBUZZ = 'fizzBuzz';
const FIZZ = 'fizz';
const BUZZ = 'buzz';
const THREE = 3;
const FIVE = 5;
const ZERO = 0;

export default function fizzBuzz(number) {
  if (isFizzBuzz(number)) {
    return FIZZBUZZ;
  }

  if (isFizz(number)) {
    return FIZZ;
  }

  if (isBuzz(number)) {
    return BUZZ;
  }

  return number;
}

function isFizzBuzz(number) {
  return (
    (mod(number, THREE) && mod(number, FIVE)) ||
    (include(number, '3') && include(number, '5'))
  );
}

function isFizz(number) {
  return mod(number, THREE) || include(number, '3');
}

function isBuzz(number) {
  return mod(number, FIVE) || include(number, '5');
}

function mod(number, modNumber) {
  return number % modNumber === ZERO;
}

function include(number, existNumber) {
  return `${number}`.includes(existNumber);
}
