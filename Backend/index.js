const express=require('express')
const app=express()
const port = 3000


const item=reqire('./routes/items');

app.use('/item',item)
// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })
// Requests
// Get request 
// app.get('/', (req,res)=>{
// res.send("Got a get request")
// })

// app.post('/items',(req,res)=>{
//     res.send("Got a post request")
// })

// app.put('/items/:id',(req,res)=>{
//      res.send("Got a put request")
// })

// app.delete('/items/:id',(req,res)=>{
//      res.send("Got a delete request")
// })

// app.listen(port,()=>{
//     console.log(`xample app listening to ${port}`)
// })


// app.listen(port,()=>{
//     console.log(`listening to port${port}`)
// })