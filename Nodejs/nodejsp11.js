let  count=0;
const intervalid=setInterval(()=>{
    if(count==15)
    {
        clearInterval(intervalid)
        console.log("TimeUp!!!")
    }
    else
    {
        const now=new Date()
        const hour=now.getHours()
        const minute=now.getMilliseconds()
        const second=now.getSeconds()
        const time=hour+":"+minute+":"+second;
        console.log(time)
        count++;
    }
},2000)