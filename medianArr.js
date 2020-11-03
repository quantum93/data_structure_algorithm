function medianArr(arr) {
  return (arr.length % 2 == 1) ? 
    arr[Math.floor(arr.length/2)]: (
    arr[arr.length/2] + arr[arr.length/2-1])/2;
}

console.log(medianArr([1,2,3,4]));