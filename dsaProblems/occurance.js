//use hash map find the occurrence ( ‘abbacd’ )
let str = 'abbacd'
function findOccurance(str){
  let occ = {}
  for(const char of str){
    if(!occ[char]){
      occ[char] = 1
    }else{
      occ[char]++
    }
  }
  return occ
}
console.log(findOccurance(str))