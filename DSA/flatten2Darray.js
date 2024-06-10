const arr2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// const res = arr2D.flat()

// const res = arr2D.reduce((acc, val) => acc.concat(val), [])

let res = []
for(let i=0 ; i<arr2D.length ; i++){
  for(let j=0 ; j<arr2D[i].length ; j++){
    res.push(arr2D[i][j])
  }
}

console.log(res)
