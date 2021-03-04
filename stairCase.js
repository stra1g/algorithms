// n -> 6
// spaces 5

function staircase(n) {
  spaces = n - 1
  for(let i = 1; i <= n; i++){
    console.log(('#'.padStart(i, '#')).padStart(n, ' '))
  }
}

let a = 6;
staircase(a)
