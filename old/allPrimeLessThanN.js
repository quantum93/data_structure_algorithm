const isPrime = n => {
  if(n < 2) return false;
  for(let i = 2; i <= n**.5; i++) { // let i = 0 으로 하면 각 수를 0과 1로 module을 구하는 것이므로 오류 
    if(n % i == 0) return false
  }
  return true;
}

const allPrimes = n => {
  for (let i = 0; i < n; i++) {
    if(isPrime(i)) console.log(i);
  }
}


console.log(allPrimes(100));

