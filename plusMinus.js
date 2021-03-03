function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  let amount = arr.length
  arr.forEach(value => {
    if (value > 0 ){
      positive++
    } else if (value < 0){
      negative++
    } else {
      zeros++
    }
  })
  
  let dPositive = parseFloat((positive/amount).toFixed(6))
  let dNegative = parseFloat((negative/amount).toFixed(6))
  let dZeros = parseFloat((zeros/amount).toFixed(6))

  console.log(dPositive)
  console.log(dNegative)
  console.log(dZeros)
}