const express=require('express')
const router=express.Router();
const User=require('../models/userModel');

// read,view
router.get('/users',async(req,res)=>{
    try{
        const users= await User.find();
        res.status(200).json(users)
    }
    catch(err){
res.status(500).json({sucess:false,message:err.message})

    }
})
//create
router.post('/users',async(req,res)=>{
    try{
const {name,age}=req.body;
const newuser=new User({name,age});
await newuser.save();
res.status(200).json({
    success:true,
    user:newuser
})
    }
       catch(err){
res.status(500).json({sucess:false,message:err.message});
if(!updateduser){
    res.json({
        message:"User not found "
    })
}
res.status(200).json({
    success:true,
    user:updateduser
})

    }
})

router.put('/users/:id',async(req,res)=>{
const {id}=req.params;
const {name,age}=req.body;
try {
const updateduser= await user.findByIdAndUpdate(id,{name,age})
}
catch(err){
    res.status(500).json({sucess:false,message:err.message})
}
})

//delete
router.delete('/user/:id',async(req,res)=>{
     const {id}=req.params;
try{
   const deletedUser=await User.findByIdAndDelete(id);
   if(!deletedUser){
res.json({
    message:"user not found "
})
   }
   res.status(200).json({
    success:true,
    user:deletedUser
   })
}
catch(err){
    res.status(500).json({sucess:false,message:err.message})
}
})




module.exports=router;
