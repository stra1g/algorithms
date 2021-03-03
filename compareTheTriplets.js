let a = [5, 6, 7]
let b = [3, 6, 10]

function compareTriplets(a, b){
  let aPoints = 0;
  let bPoints = 0;
  console.log(a.length)
  for (i = 0; i < a.length; i++){
    if (a[i] > b[i]){
      aPoints++
    } else if (a[i] < b[i]){
      bPoints++
    }
  }

  return [aPoints, bPoints]
}

console.log(compareTriplets(a, b))