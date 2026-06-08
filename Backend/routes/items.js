
const express=require('express')
const router =express.Router()



router.post('/items',(req,res)=>{
    res.send("Got a post request")
})

router.put('/items/:id',(req,res)=>{
     res.send("Got a put request")
})

router.delete('/items/:id',(req,res)=>{
     res.send("Got a delete request")
})

router.listen(port,()=>{
    console.log(`xample app listening to ${port}`)
})
module.exports=router