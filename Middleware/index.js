const express=require('express')
const app=express()
const port=3000

app.use(express.json())

//
const logingmiddleware=function(req,res,next){
console.log("Logged")
next();

}
app.use(logingmiddleware)

const authmiddleware=function(req,res,next){
console.log("authentication")
next();
}
app.use(authmiddleware)



const validatemiddleware=function(req,res,next){

console.log("validation")
next();

}

app.use(validatemiddleware)


app.get('/',(req,res)=>{

    console.log(req.body)
    res.send("Hello world") 
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})