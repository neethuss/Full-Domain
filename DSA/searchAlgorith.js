//linear search
// function linearSearch(arr, target){
//   for(let i=0 ; i<arr.length ; i++){
//     if(arr[i] === target){
//       return i
//     }
//   }
//   return -1
// }
// console.log(linearSearch([2,5,9,1,3], 7))


//binary search
// function binarySearch(arr, target){
//   let leftIndex = 0
//   let rightIndex = arr.length-1
//   while(leftIndex <= rightIndex){
//     let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//     if(target === arr[middleIndex]){
//       return middleIndex
//     }
//     if(target < arr[middleIndex]){
//       rightIndex = middleIndex - 1
//     }else{
//       leftIndex = middleIndex + 1
//     }
//   }
//   return -1
// }
// console.log(binarySearch([3,6,8,9,11], 11))


//recursive binary search
// function recursiveBinarySearch(arr, target){
//     return search(arr, target, 0, arr.length-1)
// }
// function search(arr, target, leftIndex, rightIndex){ 
//   if(leftIndex > rightIndex){
//     return -1
//   }
//   let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//   if(target === arr[middleIndex]){
//     return middleIndex
//   }
//   if(target < arr[middleIndex]){
//     return search(arr, target, leftIndex, middleIndex-1)
//   }
//   if(target > arr[middleIndex]){
//     return search(arr, target, middleIndex+1, rightIndex)
//   }
// }
// console.log(recursiveBinarySearch([3,6,8,9,11], 8))