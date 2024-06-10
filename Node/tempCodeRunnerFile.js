const express = require('express')
const app = express()
app.get('/',(req,res)=>{
  const a = JSON.parse(req.query.a)
  // const b = parseFloat?(req.query.b)
  const sum = a+6
  b =JSON.stringify(sum)
  console.log(sum)
  res.send(b)
})
app.listen(3000,()=>{
  console.log('new port connected')
})