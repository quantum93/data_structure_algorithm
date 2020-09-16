/** basic of recursion 
 * 
 * https://medium.com/swlh/how-to-think-recursively-solving-recursion-problems-in-4-steps-95a6d07aa866
 * 
*/

//Reverses a string "Hello"
function reverse(s) {
  if (s === '') { return '' } // Base case

  const subproblem = s.slice(1, s.length)
  const reversedSubproblem = reverse(subproblem)

  return reversedSubproblem + s[0]
}

console.log(reverse("Hello"));

/**
 * https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2 
 * https://medium.com/@malaynandasana/master-theorem-b544fa8829f7
 * 
 * permutation example 
 * 
 * 1       1 2 3, 2 3 1  
 * 2 ----> 1 3 2, 3 1 2
 * 3       2 1 3, 3 2 1
 * 
 * 
 */

function permAlone(str) {

  if(str.length === 0) return "";
  if(str.length === 1) return str;

  let permutationArr = []; //답이 하나이상의 원시형 데이터이므로 배열을 이용해서 최종 결과를 저장
  for(let i=0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0,i) + str.slice(i+1); // D OG, O D G, G DO 의 세 경우를 고려해야함
    for(let j=0; j < remainingChars.length; j++) {
      permutationArr.push(currentChar + permAlone(remainingChars)[j]);
    }
  }
  return permutationArr.map( 
    e => [...e].filter(char => char !== ',')
               .filter((element, index) => [...e][index+1] !== [...e][index])
  );
}

console.log(permAlone('aab'));
