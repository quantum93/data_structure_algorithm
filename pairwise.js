function pairwise(arr, arg) {
  let result = 0;
  for(let i = 0; i < arr.length-1; i++) {
    for(let j = i+1; j < arr.length; j++) {
      //console.log(i, j);
      if(arr[i] + arr[j] === arg) {
        console.log(i, j);
        result += i+j;
      }
    }
  }
  return result;
}

console.log(pairwise([1,4,2,3,0,5], 7)); // 11
console.log(pairwise([1,1,1], 2)); // 1
console.log(pairwise([1,1,2], 3)); // 2
console.log(pairwise([0,0,0,0,1,1], 1)); // 10
