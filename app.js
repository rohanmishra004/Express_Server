const express = require('express');
// const path = require('path')

//express app
const app = express();
app.listen(3500);

//register view engine

app.set('view engine', 'ejs');

//listen for req
app.get('/',(req,res)=>{
    const blogs =[
        {title:"blog 1" , snippet:"Lorem ipsadnas idasdiasod asdjasodjpn"},
        {title:"blog 2" , snippet: "lorem asda asdasiasd ahsdioa dasidah  aisodhioasd  hdasydo"},
        {title:"blog 3" , snippet: "lorem ads adsat asdatadsad ewe asdasdadsacx asdasdasda asdasdasdasd wadwdawasds dasdsadwa dsadsadsadsgdgf d"}
    ];
    res.render('index',{
        title:"Home",
        blogs
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About"
    })
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{
        title:"Create a new Blog"
    })
})


//404 
app.use((req,res)=>{
    res.status(404).render('404',{
        title:"404 Error"
    })
    // res.statusCode(404).send(path.join(__dirname,'views','404.html'))
})




