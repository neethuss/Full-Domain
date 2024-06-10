//1st letter to uppercase
let stringsArray = ["apple", "banana", "kiwi", "strawberry", "orange"];
const a = stringsArray.map((ele)=>ele.charAt(0).toUpperCase() + ele.slice(1))
console.log(a)