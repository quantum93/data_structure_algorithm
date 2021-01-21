function isPrime(n) {
  // ternary expression은 if/else의 대체가 아니다. 오직 if/else가 return할 값을 가지고 있을때만 ternary로 변환이 가능하다. n <= 1 ? false: null;  
  if(n <= 1) {return "not prime"};

  for (let i = 2; i < n; i++) { 
    if(n%i == 0) {return "not Prime"} else {return "Prime"}
  }
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(10));