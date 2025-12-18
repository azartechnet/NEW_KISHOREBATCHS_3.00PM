//Asynchrous read
var fs=require('fs')
console.log("start")
setTimeout(()=>{
    console.log("Inside setTimeout(callback in queue)")
    fs.readFile('f1.txt','utf-8',function(err,data){
        if(err)console.log(err)
        else
        {
            console.log(data.toString())
        }
    })
},5000)
console.log("Done!!!")