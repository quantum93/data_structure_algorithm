function sym(...args) {
  let uniqueArr = args.map(arr => [...new Set(arr)]);
  for(let i = 0; i < args.length-1; i++) {
    let difference = uniqueArr[0].filter(x => !uniqueArr[1].includes(x))
                                 .concat(uniqueArr[1].filter(x => !uniqueArr[0].includes(x)));
    uniqueArr = [difference, ...uniqueArr.slice(2)];
  }
  return uniqueArr.flat().sort();
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));


/*     let difference = uniqueArr[0]
                          .filter(x => !uniqueArr[1].includes(x))
                          .concat(uniqueArr[1].filter(x => !uniqueArr[0].includes(x)));
    uniqueArr = result.push(difference); */