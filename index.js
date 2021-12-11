const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const password = "pQEM60MP1iIqxa67";
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://organicUser:pQEM60MP1iIqxa67@cluster0.djg6r.mongodb.net/organicdb?retryWrites=true&w=majority";
const app = express();

app.get('/',(req,res)=>{
    res.send("hello I am working")
})


//  client side database connection function script
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  const product = {name:"Mitu",price:25,quantity:20};
  collection.insertOne(product)
  .then(res=>{
      console.log('one product added')
  })
  console.log("database connected")
  // perform actions on the collection object
/*client side close function with database*/
//   client.close();
/*client side close function with database*/
});






app.listen(3000);