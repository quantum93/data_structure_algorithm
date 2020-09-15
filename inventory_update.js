var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5,"Microphone"]];
var newInv = [[2,"Hair Pin"],[3,"Half-Eaten Apple"],[67,"Bowling Ball"],[7,"Toothpaste"]];

function updateInventory(curInv, newInv) {
  let updateInv = curInv.filter(e => newInv.map(e => e[1]).includes(e[1]));
  let addInv = newInv.filter(e => !curInv.map(e => e[1]).includes(e[1]));

  return curInv.concat(addInv)
               .sort((a,b) => {
                 if(a[1] < b[1]) {return -1}; //something negative if first argument is less than second (should be placed before the second in resulting array)
                 if(a[1] > b[1]) {return 1}; // something positive if first argument is greater (should be placed after second one)
                 return 0; // 0 if those two elements are equal.
                });

}

console.log(updateInventory(curInv, newInv));

//arr1.filter(e => newItem.includes(e[1]))

/*   
for(let i = 0; i < newItem.length; i++) {
  if(curItem.includes(newItem[i])) {
    console.log(newItem[i]);
  }
} */ 