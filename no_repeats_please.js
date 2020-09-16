/**
 * https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2 
 * https://medium.com/@malaynandasana/master-theorem-b544fa8829f7
 * permutation 
 * 
 * 1       1 2 3, 2 3 1  
 * 2 ----> 1 3 2, 3 1 2
 * 3       2 1 3, 3 2 1
 * 
 */

function permAlone(str) {
  let string = str.split('');
  let permutationArr = []; //답이 하나이상의 원시형 데이터이므로 배열을 이용해서 최종 결과를 저장
  for(let i; i < string.length; i++) {

  }
  return permutationArr;
}

console.log(permAlone('aab'));
