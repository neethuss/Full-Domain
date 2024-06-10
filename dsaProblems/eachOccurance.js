



//write a function to find how many times each character is repeated “hhfuoigggg”Output should be {hh:2, f:1, u:1, o:1,i:1, gggg:4)
let str = "hhfuoigggg";
function findOccurance(str) {
  let occ = {};
  let currentStr = str[0];
  let currentCount = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentStr) {
      currentCount++;
    } else {
      let key = currentStr.repeat(currentCount);
      occ[key] = currentCount;
      currentStr = str[i];
      currentCount = 1;
    }
  }
  let key = currentStr.repeat(currentCount);
  occ[key] = currentCount;
  return occ;
}
console.log(findOccurance(str));