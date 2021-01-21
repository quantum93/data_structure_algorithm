function arrSlice(arr, beginIdx, endIdx) {
  if(!beginIdx && !endIdx) return arr;
  let partArr = [];
  for(let i = beginIdx; i < endIdx; i++) {
    partArr.push(arr[i]);
  }
  return partArr;
}

console.log(arrSlice([1,2,3,4],2,4));