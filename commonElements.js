const commonElements = (kArray) => {
  for(let i = 0; i < kArray.length; i++) {
    console.log(kArray[i]);
  }
}

console.log(commonElements([1,2,3,4],[1,2,3,],[1,2]));