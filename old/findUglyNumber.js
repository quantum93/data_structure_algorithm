const maxDivide = (number, divisor) => {
  while(number % divisor == 0) {
    number /= divisor;
  }
  return number;
}

const isUgly = number => {
  number = maxDivide(number, 2);
  number = maxDivide(number, 3);
  number = maxDivide(number, 5);
  return number === 1;
}

const arrayUglyNumbers = n => {
  let counter = 0;
  let currentNumber = 1;
  uglyNumbers = [];
  while ( counter != n) {
    if(isUgly(currentNumber)) {
      counter++;
      uglyNumbers.push(currentNumber);
    }
    currentNumber++;
  }
  return uglyNumbers;
}

console.log(arrayUglyNumbers(6));