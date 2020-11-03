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

console.log(findSum([1,2,3,4,5],9)); // Time complexity O(n^2) space O(1)

function findSumBetter(arr, weight) {
  let hashtable = {};
  for(let i = 0, arrLength = arr.length; i < arrLength; i++) {
    let currentElement = arr[i];
    let difference = weight - currentElement;
    if(hashtable[currentElement] != undefined) { // hashtable[currentElement=5, arr[4] = 5일때 이 조건이 참이된다. 그때 i인 4와 hashtable 5의 값인 3이 반환.
      return [i, hashtable[currentElement]];
    } else {
      hashtable[difference] = i;
    }
    console.log(hashtable);
  }
  return -1;
}

console.log(findSumBetter([1,2,3,4,5],9)); // Time complexity O(n), space O(n)