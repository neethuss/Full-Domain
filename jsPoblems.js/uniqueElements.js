const numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1 ,7];
const unique = numbers.filter((num, index, array)=>array.indexOf(num) === index)
console.log(unique)