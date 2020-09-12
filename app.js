const express= require('express');
const bodyParser= require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use('/add-products',(req,res,next)=>{
    res.send('<form action="/products" method="POST"><input type="text" name="Title"><button type="submit">Send</button></form>');
})

app.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req,res,next)=>{
    res.send("<h1>This is the root page!!</h1>");
})
// app.use((req,res,next)=>{
//     console.log("In the middleware");
//     next();//allows the request to continue to next middleware in line
// });

app.listen(3000);
