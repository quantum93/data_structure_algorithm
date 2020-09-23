function pairwise(arr, arg) {
  let result = 0;
  for(let i = 0; i < arr.length-1; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === arg) {
        result += i+j;
      }
    }
  }
  return result;
}

console.log(pairwise([1,4,2,3,0,5], 7));
