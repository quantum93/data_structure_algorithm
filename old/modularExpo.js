/*
c%m = (a b) % m
c%m = [(a % m)(b % m)] % m
*/

const modularExpo = (base, exponent, modulus) => {
  if(modulus == 0) return 0;
  let value = 1;
  for(let i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }
  return value;
}

console.log(modularExpo(4,3,5));
console.log(modularExpo(6*10**77,27,497));

/*

*/

