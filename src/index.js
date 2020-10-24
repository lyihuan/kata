export default function fizzBuzz(number) {
  if (isFizzBuzz(number)) {
    return 'fizzBuzz';
  }

  if (isFizz(number)) {
    return 'fizz';
  }

  if (isBuzz(number)) {
    return 'buzz';
  }

  return number;
}

function isFizzBuzz(number) {
  return (
    (number % 3 === 0 && number % 5 === 0) ||
    (`${number}`.includes('3') && `${number}`.includes('5'))
  );
}

function isFizz(number) {
  return number % 3 === 0 || `${number}`.includes('3');
}

function isBuzz(number) {
  return number % 5 === 0 || `${number}`.includes('5');
}
