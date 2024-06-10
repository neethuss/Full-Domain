//BASIC ARRAY METHODS
//1. length - return length of an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length
// console.log(size)


//2. toString() - converts an array to a string of (comma separated) array values.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.toString()
// console.log(res)


//3. at() - returns an indexed element from an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.at(1)
// console.log(res)


// 4. join() -  joins all array elements into a string, It behaves just like toString(), but in addition you can specify the separator
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.join('-')
// console.log(res)


//5. pop() - removes the last element from an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.pop()
// console.log(res)
// console.log(fruits)


//6. push() - adds a new element to an array (at the end)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.push('Grapes')
// console.log(res)
// console.log(fruits)


//7. shift() - removes the first array element and "shifts" all other elements to a lower index
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.shift()
// console.log(res)
// console.log(fruits)


//8. unshift() - adds a new element to an array (at the beginning), and "unshifts" older elements
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.unshift('Grapes')
// console.log(res)
// console.log(fruits)


//9. delete - Using delete() leaves undefined holes in the array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = delete fruits[0]
// console.log(res)
// console.log(fruits)


//10. concat() - creates a new array by merging (concatenating) existing arrays
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// let res = myBoys.concat(myGirls)
// console.log(res)


//11. copyWithin() - copies array elements to another position in an array
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits)
// fruits.copyWithin(2,0)
// console.log(fruits)
// fruits.copyWithin(2, 0, 2);
// console.log(fruits)


//12. flat() - creates a new array with sub-array elements concatenated to a specified depth
// const myArr = [[1,2],[3,4],[5,6]];
// let res = myArr.flat()
// console.log(res)


//13. splice() - used to add new items to an array. first parameter - position where new elements should be added, second parameter - how many elements should be removed, st of the parameters define the new elements to be added.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)


//14. toSpliced() - ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.toSpliced(2, 0, "Lemon", "Kiwi");
// console.log(fruits)
// console.log(res)


//15. slice() - slices out a piece of an array into a new array
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const res = fruits.slice(1);
// console.log(res)
// const res = fruits.slice(0,1);
// console.log(res)




//SEARCH METHODS
//1. indexOf() - searches an array for an element value and returns its position
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple")
// console.log(position)


//2. lastIndexOf() - same as Array.indexOf(), but returns the position of the last occurrence of the specified element
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple")
// console.log(position)


//3. includes() - check if an element is present in an array (including NaN, unlike indexOf).
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango"))



//SORT METHODS - ALPHABETIC SORT
//1. sort() - sorts an array alphabetically
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());


//2. reverse() - reverses the elements in an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());


//3. toSorted() - ES2023 added the toSorted() method as a safe way to sort an array without altering the original array
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(sorted)


//4.toReversed() - ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const reversed = months.toReversed();
// console.log(reversed)

let a = new Date()
console.log(a)
b = Date.now()
console.log(b)