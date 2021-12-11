const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const password = "pQEM60MP1iIqxa67";
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://organicUser:pQEM60MP1iIqxa67@cluster0.djg6r.mongodb.net/organicdb?retryWrites=true&w=majority";
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/index.html")
    
    
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  app.post("/addProduct",(req,res)=>{
    //   POST/INSERT METHOD
    collection.insertOne(product)
    .then(res=>{
        console.log('one product added');
    })
  })
  
  console.log("database connected")
  // perform actions on the collection object
//   client.close();
});
app.listen(3000);


//  client side database connection function script
// create/post type:1 Create Data Locally then insert into database

/*=======================*/
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("organicdb").collection("products");
//   const product = {name:"Mitu",price:25,quantity:20};
//   collection.insertOne(product)
//   .then(res=>{
//       console.log('one product added')
//   })
//   console.log("database connected")
//   // perform actions on the collection object

// /*client side close function with database*/
// //   client.close();
// /*client side close function with database*/
// });
/*=======================*/






