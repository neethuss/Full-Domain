let obj = {a:1,b:{c:{d:2}},f:{g:2}}

function findSum(obj){
  let sum = 0
  for(const key in obj){
    if(typeof obj[key] === 'number'){
      sum += obj[key]
    }else if(typeof obj[key]=== 'object' && obj[key] != null){
      sum += findSum(obj[key])
    }
  }
  return sum
}
console.log(findSum(obj))