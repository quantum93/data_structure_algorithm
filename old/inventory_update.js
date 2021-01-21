/**
 *   return curInv.concat(addInv)
               .sort((a,b) => {
                 if(a[1] < b[1]) {return -1}; //something negative if first argument is less than second (should be placed before the second in resulting array)
                 if(a[1] > b[1]) {return 1}; // something positive if first argument is greater (should be placed after second one)
                 return 0; // 0 if those two elements are equal.
                });

알파벳을 sorting할때, 
if(a[1] < b[1]) {return -1}; 
if(a[1] > b[1]) {return 1}; 
return 0; 

보다 

a[1] > b[1] ? 1 : -1

를 사용하는 것이 같은 결과를 주면서 더 간략하다.    
 */

var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5,"Microphone"]];
var newInv = [[2,"Hair Pin"],[3,"Half-Eaten Apple"],[67,"Bowling Ball"],[7,"Toothpaste"]];

function updateInventory(curInv, newInv) {
  let addInv = newInv.filter(e => !curInv.map(e => e[1]).includes(e[1]));
  newInv.map(item => {
    curInv.map(e => { 
      return (e[1] === item[1]) ? e[0] += item[0]: e[0] = e[0];
    })
  })
  return curInv.concat(addInv)
               .sort((a,b) => a[1] > b[1] ? 1 : -1);
}

console.log(updateInventory(curInv, newInv));

//어딘가 오류가 있다...
function updateInventory2(curInv, newInv) {
  const inventory = Array.prototype.concat.apply([], curInv); //2D array를 1D array로 전환
  for(let i = 0; i < newInv.length; i++) {
    const item = newInv[i][1];
    const quantity = newInv[i][0];
    const position = inventory.indexOf(item);
    if(position !== -1) {
      const row = Math.floor(position /2);
      curInv[row][0] += quantity;
      continue;
    }
    curInv.push([quantity, item]);
    curInv.sort((previous, next) => (previous[1] > [next[1]] ? 1 : -1)); // sort에 문제가 있다.
  }
  return curInv; // Bowling Ball의 값이 88이 아니라 155가 나온다!
}

console.log(updateInventory2(curInv, newInv));