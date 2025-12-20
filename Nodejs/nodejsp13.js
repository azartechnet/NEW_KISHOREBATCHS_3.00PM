var fs=require('fs')
var readStream=fs.createReadStream('sample.txt')
readStream.on('open',function(){
    console.log("FileOpened..")
})