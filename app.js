const express= require('express');
const bodyParser= require('body-parser');
const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use('/admin',adminroutes);
app.use(shoproutes);

// app.use((req,res,next)=>{
//     console.log("In the middleware");
//     next();//allows the request to continue to next middleware in line
// });
app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found!!</h1>")
});

app.listen(3000);
