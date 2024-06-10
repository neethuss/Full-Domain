function selectionSort(arr){
  for(let i=0 ; i<arr.length-1 ; i++){
    for(let j=i+1 ; j<arr.length ; j++){
      if(arr[i] > arr[j]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
console.log(selectionSort([7,1,4,9,2,6]))