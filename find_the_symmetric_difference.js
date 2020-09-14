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
 * 
 */
function sym2() {
  let args = [];
  for(let i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
  }
}

console.log(sym2([1, 2, 3], [5, 2, 1, 4]));
console.log(sym2([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym2([1, 2, 5], [2, 3, 5], [3, 4, 5]));