function isPrime(n) {
  if(n <= 1) return "not prime";
  if(n <= 3) return "prime";
  if(n%2 == 0 || n%3 == 0) return "not prime";

  for (let i = 5; i*i < n; i += 6) { 
    if(n%i == 0 || n%(i+2) == 0) return "not Prime";
  }
  return "prime"
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(12));
console.log(isPrime(13));
console.log(isPrime(14));
console.log(isPrime(17));
console.log(isPrime(18));
console.log(isPrime(19));