const express=require('express')
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.send('<h2>Hello Server is Working</h2>')
})
app.get("/new",(req,res)=>{
    res.send("<h3>Hellow new route is working</h3>")
})

app.listen(process.env.PORT||5000,()=>{
    console.log('server is started');
})
module.exports=app