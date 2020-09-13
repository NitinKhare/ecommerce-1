const express= require('express');
const bodyParser= require('body-parser');


const app=express();
const PORT = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended:true}));

//route handlers
const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');

//route middlewares
app.use('/admin',adminroutes);
app.use(shoproutes);
//route middleware end


app.listen(PORT);
