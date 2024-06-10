// function firstCallback(callback){
//   setTimeout(()=>{
//     console.log('First callback')
//     callback()
//   },1000)
// }
// function secondCallback(callback){
//   setTimeout(()=>{
//     console.log('Second callback')
//     callback()
//   },1000)
// }
// function thirdCallback(callback){
//   setTimeout(()=>{
//     console.log('Third callback')
//     callback()
//   },1000)
// }

// firstCallback(()=>{
//   secondCallback(()=>{
//     thirdCallback(()=>{
//       console.log('complete')
//     })
//   })
// })


//converting to promise

function firstCallback(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('first')
      resolve()
    },1000)
  })
}
function secondCallback(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('second')
      resolve()
    },1000)
  })
}
function thirdCallback(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('third')
      resolve()
    },1000)
  })
}

firstCallback()
.then(secondCallback)
.then(thirdCallback)
.then(()=>{
  console.log('completed')
})
.catch((error)=>{
  console.log(error)
})