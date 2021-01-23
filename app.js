const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
  res.send('cobain route /form')
})

app.get('/form', (req,res)=>{
  console.log('GET: ini query',JSON.stringify(req.query,null,2))
  res.sendFile(path.join(__dirname,'fileHTML','form.html'))
})
app.post('/form', (req,res)=>{
  console.log(req)
  console.log('POST: ini body',JSON.stringify(req.body,null,2))
  res.json(req.body)
})

app.listen(3000,()=>{
  console.log('listening on port 3000');
})