//server creation using http
// let http = require('http')
// http.createServer(function(req,res){
//   res.write('welcome back')
//   res.write(' welcome')
//   res.write(' back')
//   res.end()
// }).listen(3000,()=>{
//   console.log('port running')
// })


//server creation using express
// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//   res.send('hello user')
// })
// app.listen(3000,()=>{
//   console.log('port connected')
// })


//path params
// const express = require('express')
// const app = express()
// app.get('/:id',(req,res)=>{
//   let a = req.params.id
//   console.log(a)
//   res.send(`hello we are in ${a}`)
// })
// app.listen(3000,()=>{
//   console.log('new port connected')
// })


//query params
// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//   const a = req.query.name
//   console.log(a)
//   res.send('helloooo')
// })
// app.listen(3000,()=>{
//   console.log('new port connected')
// })

const express = require('express')
const app = express()
app.get('/',(req,res)=>{
  const a = JSON.parse(req.query.a)
  const b = JSON.parse(req.query.b)
  const c = a+b
  const sum = JSON.stringify(c)
  res.send(sum)
})
app.listen(3000,()=>{
  console.log('new port connected')
})


//reading files
// const fs = require('fs')
// fs.readFile('setTimeout.js','utf-8',(error,data)=>{
//   if(error){
//     console.log(error)
//   }else{
//     console.log(data)
//   }
// })


//writing files
// const fs = require('fs')
// fs.writeFile('exp.js','console.log("hai")','utf-8',(err)=>{
//   if(err){
//     console.log(err)
//   }
// })


//appending files
// const fs = require('fs')
// fs.appendFile('exp.js','\nconsole.log("hellooo")',(err)=>{
//   if(err){
//     console.log(err)
//   }
// })


//deleting files
// const fs = require('fs')
// fs.unlink('exp.js',(err)=>{
//   if(err){
//     console.log(err)
//   }
// })


//creating directory - folder
// const fs = require('fs')
// fs.mkdir('exp',(err)=>{
//   if(err){
//     console.log(err)
//   }
// })


//deleting directory
// const fs = require('fs')
// fs.rmdir('exp',(err)=>{
//   if(err){
//     console.log(err)
//   }
// })


//reading directory
// const fs = require('fs')
// fs.readdir('DSA',(err,data)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log(data)
//   }
// })


//events & event emitter
// const EventEmitter = require('events')
// const myEmitter = new EventEmitter()
// myEmitter.on('customEvent',(data)=>{
//   console.log('event triggered', data)
// })
// myEmitter.emit('customEvent','hello')


//MIDDLEWARES
//application level middleware
// const express = require('express')
// const app = express()
// app.use(express.json())

//router level middleware
// const express = require('express')
// const router = express.Router()
// router.use((req,res,next)=>{
//   console.log('router middleware')
//   next()
// })

//custom middleware
// const express = require('express')
// const app = express()
// function customMiddleware(req,res,next){
//   console.log('custom')
//   next()
// }
// app.use(customMiddleware)

//error handling middleware
// const express = require('express')
// const app = express()
// app.use((err, req, res, next)=>{
//   console.log(err)
//   res.status(500).send('internal error')
// })


//CHILD PROCESS
//exec
// const {exec} = require('child_process')
// const { stdout, stderr } = require('process')
// exec('dir',(error, stdout, stderr)=>{
//   if(error){
//     console.log(`error: ${error.message}`)
//     return
//   }
//   if(stderr){
//     console.log(`stderr: ${stderr}`)
//     return
//   }
//   console.log(`stdout: ${stdout}`)
// })

//execFile
// const { execFile } = require('child_process')
// const { stdout, stderr } = require('process')
// execFile('',(error,stdout,stderr)=>{
//   if(error){
//     console.log(`error: ${error.message}`)
//     return
//   }
//   if(stderr){
//     console.log(`stderr: ${stderr}`)
//     return
//   }
//   console.log(`stdout: ${stdout}`)
// })

//spawn
// const {spawn} = require('child_process')
// const child = spawn('dir')
// child.stdout.on('data',(data)=>{
//   console.log(`stdout: ${data}`)
// })
// child.stderr.on('data',(data)=>{
//   console.log(`stderr: ${data}`)
// })
// child.on('error',(error)=>{
//   console.log(`error: ${error.message}`)
// })
// child.on('exit',(code,signal)=>{
//   if(code){
//     console.log(`Process exit with code: ${code}`)
//   }
//   if(signal){
//     console.log(`Process killed with signal: ${signal}`)
//     console.log(`Done`)
//   }
// })