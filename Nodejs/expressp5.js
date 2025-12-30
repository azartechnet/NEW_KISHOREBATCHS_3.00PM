const express=require('express')
const app=express()
const PORT=3000;

//Single Rounting
const router=express.Router();

router.get("/",function(req,res){
    console.log("Router Working")
    res.end()
})
app.use(router)
app.listen(PORT,function(err){
    if(err)console.log(err)
        console.log("Server is Running...")
})