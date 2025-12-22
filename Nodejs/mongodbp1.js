const {MongoClient}=require('mongodb')
const url="mongodb+srv://admin:admin@cluster0.on5xupe.mongodb.net/?appName=Cluster0"
const client=new MongoClient(url)
async function run() 
{
   try
   {
      const db=client.db('kishoredb')
      const collection=db.collection('mycol')
      var obj=[{_id:1003,name:"azar1",age:34,email:"azar1@gmail.com"},
        {_id:1004,name:"azar2",age:34,email:"azar2@gmail.com"}
      ];
    //   await collection.insertOne(obj);
    await collection.insertMany(obj);
      console.log("DataInsereted...")
   }
   finally
   {
    await client.close();
   }    
}
run().catch(console.error)