const express=require('express')
const mysql=require('mysql')
const bodyparse=require('body-parser')
const cors=require('cors')

const app=express()
const port=3001;

//Middleware

app.use(cors())
app.use(bodyparse.json())

//MySQL
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'kishrobatch'
})
db.connect((err)=>{
    if(!err)
        console.log('Db Connection..')
    else
        console.log('DB not connected')
})
//create table
app.get("/createtable",(req,res)=>{
    let sql='create table posts(id int auto_increment,title varchar(100),body text,primary key(id))';
    db.query(sql,(err,results)=>{
        if(!err)
            console.log('Table created')
        res.send('Table created...')
    })
})
//insert post
app.post("/addpost",(req,res)=>{
    let post={title:req.body.title,body:req.body.body};
    let sql='insert into posts set ?';
    db.query(sql,post,(err,results)=>{
        if(!err)
            res.send('Post added...')
        else
            console.log(err);
    })
})
//get posts

app.get("/getposts",(req,res)=>{
    let sql='select * from posts';
    db.query(sql,(err,results)=>{
        if(!err)
            res.send(results)
        else
            console.log(err);
    })
})
//update post
app.put("/updatepost/:id",(req,res)=>{
    let sql=`update posts set title='${req.body.title}', body='${req.body.body}' where id=${req.params.id}`;
    db.query(sql,(err,results)=>{
        if(!err)
            res.send('Post updated...')
        else
            console.log(err);
    })
})
//delete post
app.delete('/deletepost/:id',(req,res)=>{
    const {id}=req.params;
    const sql=`delete from posts where id=?`;
    db.query(sql,[id],(err,result)=>{
          if(err)throw err;
          res.send('posted deleted')
    })
})
app.listen(port,()=>{
    console.log("Server is Running...")
})