function sym(...args) {
  let uniqueArr = args.map(arr => [...new Set(arr)]);
  while(uniqueArr.length >= 1) {
    let difference = uniqueArr[0]
                          .filter(x => !uniqueArr[1].includes(x))
                          .concat(uniqueArr[1].filter(x => !uniqueArr[0].includes(x)));

  }
  return difference;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));

/* let arr1 = args[0].filter(e => !args[1].includes(e));
let arr2 = args[1].filter(e => !args[0].includes(e));
let result = args.slice(2).concat(arr1, arr2).sort();
return [...new Set(result)]; */

