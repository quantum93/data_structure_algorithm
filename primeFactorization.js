const primeFactor = n => {
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }

  for(let i = 3; i <= n**.5; i += 2) {
    while(n%i == 0) {
      console.log(i);
      n = n / i;
    }
  }

  if(n > 2) console.log(n);
}

console.log(primeFactor(10));
console.log(primeFactor(13));
console.log(primeFactor(16));
console.log(primeFactor(18));