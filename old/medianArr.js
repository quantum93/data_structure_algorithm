/* 한 arr에서 median값을 구하는 함수. 배열의 길이가 짝수/홀수일때,
[1,2,3,4]에서 (2+3)/2 = 2.5를 얻는다. [1,2,3]은 3을 얻는다. */
const medianArr = arr => {
  let arrLen = arr.length;
  return (arrLen % 2 == 1) ? 
    arr[Math.floor(arrLen/2)]: (arr[arrLen/2] + arr[arrLen/2-1])/2;
}

// pos는 arr1, arr2 각각의 길이, 이 코드는 두 베열의 길이가 같은 경우만 처리
const medianOfTwoSortedArr = (arr1,arr2,pos) => {
  if(pos <= 0) return -1;
  if(pos == 1) return (arr1[0] + arr2[0])/2;
  if(pos == 2) return (Math.max(arr1[0],arr2[0]) + Math.min(arr1[1] + arr2[1]))/2;

  // arr의 크기가 3이상 경우를 다루기 시작.
  let median1 = medianArr(arr1), median2 = medianArr(arr2);
  if(median1 == median2) return median1;

  //두 배열의 median값이 다른 경우
  let evenOffset = pos % 2 == 0 ? 1: 0; // 배열이 짝수면 1 홀수면 0
  let offsetMinus = Math.floor(pos/2) - evenOffset;
  let offsetPlus = Math.floor(pos/2) + evenOffset;
  console.log(median1, median2, evenOffset, offsetMinus, offsetPlus);

  // recursion을 이용해서 계속 배열의 크기를 줄여간다. time complexity = O(log(n))
  if(median1 < median2) {
    console.log(arr1.slice(offsetMinus),arr2.slice(offsetMinus));
    return medianOfTwoSortedArr(arr1.slice(offsetMinus), arr2.slice(offsetMinus),offsetPlus);
  } else {
    console.log(arr1.slice(offsetMinus),arr2.slice(offsetMinus));
    return medianOfTwoSortedArr(arr2.slice(offsetMinus), arr1.slice(offsetMinus),offsetPlus);
  }
}

/* console.log(medianOfTwoSortedArr([1,2,3],[2,3,5],3));
console.log(medianOfTwoSortedArr([1,2,3],[4,5,6],3));
console.log(medianOfTwoSortedArr([11,23,24],[32,33,450],3));
console.log(medianOfTwoSortedArr([7,8,9],[4,5,6],3));
console.log(medianOfTwoSortedArr([1,2,3,4],[6,7,8,9],4));
console.log(medianOfTwoSortedArr([7,8,9,10],[4,5,6,7],4)); */
console.log(medianOfTwoSortedArr([1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],10));
console.log(medianOfTwoSortedArr([11,12,13,14,15,16,17,18,19,20],[1,2,3,4,5,6,7,8,9,10],10));