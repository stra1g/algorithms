function diagonalDifference(arr) {
  let sumMainDiagonal = 0;
  let sumSubDiagonal = 0;
  for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr.length; j++){
          if (i == j){
              sumMainDiagonal+= arr[i][j]
          } 
          if (i+j == arr.length - 1){
              sumSubDiagonal+= arr[i][j]
          }
      }
  }
  
  let difference = sumMainDiagonal-sumSubDiagonal
  return Math.abs(difference)

}