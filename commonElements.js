const commonElements = (kArray) => {
  let hashmap = {}, last, answer = [];
  for(let i = 0, kArrLen = kArray.length; i < kArrLen; i++) {
    let currentArr = kArray[i];
    last = null;
    for(let j = 0, currentArrLen = currentArr.length; j < currentArrLen; j++) {
      let currentEl = currentArr[j];
      if(last != currentEl) {
        return (!hashmap[currentEl]) ? hashmap[currentEl] = 1: hashmap[currentEl]++;
      }
      last = currentEl;
    }
  }
  
  for(let prop in hashmap) {
    if(hashmap[prop] == kArray.length) answer.push(parseInt(prop));
  }
  return answer;
}

console.log(commonElements([1,2,3,],[1,2,3,4],[1,2]));