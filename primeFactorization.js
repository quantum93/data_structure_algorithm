const primeFactor = n => {
  let result = [];

  while (n % 2 == 0) {
    result.push(2);
    n = n / 2;
  }

  for(let i = 3; i <= n**.5; i += 2) {
    while(n%i == 0) {
      result.push(i);
      n = n / i;
    }
  }

  if(n > 2) result.push(n);
  
  return result;
}

console.log(primeFactor(10));
console.log(primeFactor(13));
console.log(primeFactor(16));
console.log(primeFactor(18));