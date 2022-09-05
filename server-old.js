const express = require('express')

const server = express()

server.listen(3000)

server.get('/',(req,res)=>{
    res.send('oi')
})

server.get('/daui',(req,res)=>{
    res.send('oi daui')
})

server.use((req,res)=>{
    res.send('essa pagina n existe')
})