const express = require('express');
// const path = require('path')

//express app
const app = express();
app.listen(3500);

//register view engine

app.set('view engine', 'ejs');

//listen for req
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
});

app.get('/blogs/create',(req,res)=>{
    res.render('create')
})


//404 
app.use((req,res)=>{
    res.status(404).render('404')
    // res.statusCode(404).send(path.join(__dirname,'views','404.html'))
})




