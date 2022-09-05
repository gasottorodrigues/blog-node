const express = require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRouter');

const mongoose = require('mongoose');

// starts express app
const app = express()

//Connect MongoDB
const dbURI = 'mongodb+srv://stt-blog-admin:stt_admin1234@node-js-learn.gzpw4h6.mongodb.net/stt-blog-database?retryWrites=true&w=majority'

mongoose.connect(dbURI)
    .then((result)=>{
        console.log('Database Connecton runs successfully');
    })
    .catch((err)=>{
        console.log(err);
    })

// register view Engine
app.set('view engine','ejs');

//Middleware & Static Files
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

// Pages
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About'
    })
})

app.use('/blogs',blogRouter)

app.use((req,res)=>{
    res.status(404).render('404',{
        title:'Page Not Found'
    })
})


// Listen for requests
app.listen(3000)