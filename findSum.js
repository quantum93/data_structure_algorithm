function findSum(arr, weight) {
  for(let i = 0, arrLength=arr.length; i < arrLength; i++) {
    for(let j = i+1; j < arrLength; j++) {
      if(arr[i] + arr[j] == weight) {
        return [i,j];
      }
    }
  }
  return -1;
}

console.log(findSum([1,2,3,4,5],9));