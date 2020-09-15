// 집합에대한 자바스크립트 코드예시 ---> https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

function sym(...args) {
  let uniqueArr = args.map(arr => [...new Set(arr)]); //각 배열의 중복원소를 미리 제거
  for(let i = 0; i < args.length-1; i++) {
    let difference = uniqueArr[0].filter(x => !uniqueArr[1].includes(x))
                                 .concat(uniqueArr[1].filter(x => !uniqueArr[0].includes(x))); //symmetric difference를 구하는 로직
    uniqueArr = [difference, ...uniqueArr.slice(2)]; //symmetric diff와 나머지로 다시 2D 배열구성
  }
  return uniqueArr.flat().sort(); // 2D 배열을 1D로 정리하고 정렬
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));

/** Solution One
 * 21~24라인의 내용을 내 접근에서는 sym(...args)로 해결!
 */
function sym2() {
  let args = [];
  for(let i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
  }

  function symDiff(arrayOne, arrayTwo) {
    let result = [];
    arrayOne.forEach(element => {
      if(arrayTwo.indexOf(element) < 0 && result.indexOf(element) < 0) {
        result.push(element);
      }
    });
    arrayTwo.forEach(element => {
      if(arrayOne.indexOf(element) < 0 && result.indexOf(element) < 0) {
        result.push(element);
      }
    });

    return result;
  }

  return args.reduce(symDiff).sort();
}

console.log(sym2([1, 2, 3], [5, 2, 1, 4]));
console.log(sym2([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym2([1, 2, 5], [2, 3, 5], [3, 4, 5]));

function sym3() {
  let args = Array.prototype.slice.call(arguments); // sym(...args)와 동일한 작업
  let getDiff = function(arr1, arr2) {
    function filterFunction(arr1,arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }
    return filterFunction(arr1, arr2).concat(filterFunction(arr2,arr1));
  };

  let summary = args.reduce(getDiff, []);
  let unique = summary.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
  return unique.sort();
}
console.log(sym3([1, 2, 3], [5, 2, 1, 4]));
console.log(sym3([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym3([1, 2, 5], [2, 3, 5], [3, 4, 5]));

/** 가장 깔끔한 접근 */
const diff = (arr1, arr2) => [
  ...arr1.filter(e => !arr2.includes(e)), 
  ...arr2.filter(e => !arr1.includes(e)) 
];

const sym4 = (...args) => [...new Set(args.reduce(diff))];

console.log(sym4([1, 2, 3], [5, 2, 1, 4]));
console.log(sym4([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym4([1, 2, 5], [2, 3, 5], [3, 4, 5]));