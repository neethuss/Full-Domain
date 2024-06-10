//find the the valid parentheses
let paranthesis = '{[(])}'
let a = {
  '{':'}',
  '[':']',
  '(':')'
}
function isValid(paranthesis){
  let check = []
 for(paran of paranthesis){
  if(paran in a){
    check.push(a[paran])
  }else{
    if(check.pop()!=paran) return false
  }
 }
 return true
}
console.log(isValid(paranthesis))