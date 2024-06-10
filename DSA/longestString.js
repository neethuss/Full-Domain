function longestString(string){
  let longestChar = ''
  let currentChar = ''
  for(let i=0 ; i<string.length ; i++){
    if(string[i] === string[i-1]){
      currentChar += string[i]
    }else{
      currentChar = string[i]
    }
    if(currentChar.length > longestChar.length){
      longestChar = currentChar
    }
  }
  return longestChar
}
let res = longestString("htttjjjtttttttt")
console.log(res)