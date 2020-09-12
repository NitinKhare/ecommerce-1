const express=require('express');
const route=express.Router();

route.use('/add-products',(req,res,next)=>{
    res.send('<form action="/admin/products" method="POST"><input type="text" name="Title"><button type="submit">Send</button></form>');
})

route.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=route;