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
function permutation(str) {
  if(str.length === 0) return "";
  if(str.length === 1) return str;

  let result = [];
  for(let i=0; i < str.length; i++) {
    const currentChar = str[i];
    const remainChars = str.slice(0,i) + str.slice(i+1);
    for(let j=0; j < remainChars.length; j++) {
      result.push(currentChar + permutation(remainChars)[j]); 
    }
  }
  return result;
}

function permAlone(str) {
  return (str.length === 1) ? 1: 
         ([...str].every(char => char === [...str][0])) ? 0: 
         permutation(str);
}

console.log(permAlone('zzzzzzzz')); // 0
console.log(permAlone('aaa')); // 0
console.log(permAlone('a')); // 1
console.log(permAlone('aab')); // 2
console.log(permAlone('aabb')); // 8

/** let result = permutation.map( 
    arr => [...arr].filter(char => char !== ',')
                   .filter((element, index) => [...arr][index+1] !== [...arr][index])    
  ).filter(arr => arr.length === str.length);
  console.log(result.length); */