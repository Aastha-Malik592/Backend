const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port=3000
const connectDB=require('./db')
const users=require('./routes/users')
app.use(express.json());
connectDB();
app.use('/api',users);  
app.get('/',(req,res)=>{
console.log("inside request ")
res.send("Hello, Welcome")
})
app.listen(port,()=>{
    console.log("Server is up ")
})