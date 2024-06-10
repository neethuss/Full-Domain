function mergeSort(arr){
  if(arr.length < 2){
    return arr
  }
  let middleIndex = Math.floor(arr.length/2)
  let leftArr = arr.slice(0,middleIndex)
  let rightArr = arr.slice(middleIndex)
  return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr, rightArr){
  let sortedArr = []
  while(leftArr.length && rightArr.length){
    if(leftArr[0]<rightArr[0]){
      sortedArr.push(leftArr.shift())
    }else{
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr,...leftArr,...rightArr]
}
console.log(mergeSort([5,9,1,3,7,4,6,2]))