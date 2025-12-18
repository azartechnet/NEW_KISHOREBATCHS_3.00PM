const intervalid=setInterval(()=>{
    console.log("This is Keep Running...")
},1000)


//stop after 5 seconds

setTimeout(()=>{
    clearInterval(intervalid)
    console.log("Interval Stopped")
},5000)