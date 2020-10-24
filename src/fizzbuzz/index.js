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
    (number % THREE === ZERO && number % FIVE === ZERO) ||
    (`${number}`.includes('3') && `${number}`.includes('5'))
  );
}

function isFizz(number) {
  return number % THREE === ZERO || `${number}`.includes('3');
}

function isBuzz(number) {
  return number % FIVE === ZERO || `${number}`.includes('5');
}
