function commonElements(kArray) {
  let hashmap = {}, last, answer = [];

  for (let i = 0; i < kArray.length; i++) {
    let currentArray = kArray[i];
    last = null;
    for (let j = 0; j < currentArray.length; j++) {
      let currentElement = currentArray[j];
      if (last != currentElement) {
        (!hashmap[currentElement]) ? hashmap[currentElement] = 1: hashmap[currentElement]++;
      }
      last = currentElement;
    }
  }

  for (let prop in hashmap) {
    if (hashmap[prop] == kArray.length) answer.push(parseInt(prop));
  }
  return answer;
}

console.log(commonElements([[1,2,3,],[1,2,3,4],[1,2]]));