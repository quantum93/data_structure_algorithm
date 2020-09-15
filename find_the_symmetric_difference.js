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

/** 가장 깔끔한 접근 
 * reduce를 이용해서 복잡한 로직을 최소화.
 * reduce(diff)는 diff함수를 모든 배열에 적용해서 결과를 반환.
 * diff 함수는, 
 * arr1은 배열 ...arr1은 배열의 원소를 spread하고 여기에 filter를 
 * 적용 결과로 나온 원소들을 하나의 배열로 합하는 로직. 이 함수 자체로 
 * 두 배열의 symmetric difference set이 구해진다. 
 * 
 * args.reduce(diff)하면 2D 배열의 각 원소배열에 대해서 diff를 작동. 
 * 즉, diff함수가 reduce()에서 작동하는 callback함수가 된다. 
 * 그 결과로 얻어지는 배열을 Set으로 중복처리 해서 다시 배열형태로 전환
 * 이렇게 하는것이 
 * let difference = uniqueArr[0].filter(x => !uniqueArr[1].includes(x))
                                 .concat(uniqueArr[1].filter(x => !uniqueArr[0].includes(x)));
    uniqueArr = [difference, ...uniqueArr.slice(2)];

 *의 복잡성을 아주 많이 줄여준다.
*/

const diff = (arr1, arr2) => [
  ...arr1.filter(e => !arr2.includes(e)), 
  ...arr2.filter(e => !arr1.includes(e)) 
  ];

const sym4 = (...args) => [...new Set(args.reduce(diff))];

console.log(sym4([1, 2, 3], [5, 2, 1, 4]));
console.log(sym4([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym4([1, 2, 5], [2, 3, 5], [3, 4, 5]));