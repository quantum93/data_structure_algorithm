const matrix = (rows, columns) => {
  let jaggedArray = new Array(rows);
  for(let i = 0; i < columns; i++) {
    jaggedArray[i] = new Array(rows);
  }
  return jaggedArray;
}

console.log(matrix(3,3));