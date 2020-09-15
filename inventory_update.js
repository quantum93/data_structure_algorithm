function updateInventory(arr1, arr2) {
  let newItem = arr2.map(e => e[1]);
  return arr1.filter(e => newItem.includes(e[1]))
}

var curInv = [
  [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));