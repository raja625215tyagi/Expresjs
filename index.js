require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working
const express = require('express')
// -----------syntax const express = require('express')-------------

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
res.send('twitter')
})

app.get('/login',(req, res)=>{
res.send("<h1>please login the page</h1>")
})

app.get('/cards',(req,res)=>{
res.send("<h2>card pages</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`working fine ${port}`)
})
