// const arr = [4,7,2,8,1,6]
// let i,largest=Number.MIN_VALUE,secondLargest=Number.MIN_VALUE
// for(i=0;i<arr.length;i++){
//   if(arr[i]>largest){
//     secondLargest=largest
//     largest=arr[i]
//   }
//   else if(arr[i]>secondLargest && arr[i]<largest){
//     secondLargest=arr[i]
//   }
// }
// console.log(-Infinity > Number.MIN_VALUE);

// // const uni = [...new Set(arr)]
// // const sorted = uni.sort((a,b)=>b-a)
// // console.log(sorted[1]); 
// const os = require('os')
// console.log(os.release());


// useEffect(()=>{
//  a = setInterval(()=>{
//        console.log('hai');
//  },1000)

// return setTimeout(()=>clearInterval(a),3000) //clean up function

// },[s])

// a = React.lazy(()=> import('../mycomo'))
// <Suspense  falback={<div>  loding... </div>}>
//   <a/>
//   <Suspense/>