const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const password = "pQEM60MP1iIqxa67";
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
// ObjectId is a function of mongodb thats automatically created when data inserted
const ObjectId = require('mongodb').ObjectId;
const uri = "mongodb+srv://organicUser:pQEM60MP1iIqxa67@cluster0.djg6r.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exxtended: false}));

// ROOT
app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})

//  client side database connection function script with INSERT in a directory
client.connect(err => {
  const productCollection = client.db("organicdb").collection("products");
  console.log("database connected")


// READ/GET Directory/Route
app.get('/products',(req,res)=>{
    // must read mongo crud docs to know this ind of features 
    /**/
    // productCollection.find({}).limit(5)
    /**/
    // GET/READ Method
    productCollection.find({})
    .toArray((err,result)=>{
        res.send(result);
    })
})
// READ Directory/Route


// INSERT/POST Directory/Route
// app.post("/addProduct",(req,res)=>{
//     //   POST/INSERT METHOD
//     // Here data is creating from index.html and then "req"(requesting)to its body to get data then responding from index.js as "success"
//     const product = req.body;
//     //   POST/INSERT METHOD
//     productCollection.insertOne(product)
//     .then(result=>{
//         console.log('data added successfully')
//         res.send("success")

//     })
//   })
// INSERT Directory/Route


// DELETE Directory/Route

app.delete('/delete/:id',(req,res)=>{
    productCollection.deleteOne({_id:ObjectId(req.params.id)})
    .then(result=>{
        console.log(result)
    })
})

// DELETE Directory/Route

//EDIT Directory/Route

app.get('/product/:id',(req,res)=>{
    //EDIT Method
    productCollection.find({_id: ObjectId(req.params.id)})
    .toArray((err,documents)=>{
        res.send(documents[0]);
    })
})
//EDIT Directory/Route

app.patch('/update/:id',(req,res)=>{
    productCollection.updateOne({_id: ObjectId(req.params.id)},
    {
        $set:{proce:req.body.price,quantity:req.body.quantity}
    })
    .then(result=>{
        console.log(result)
    })
})
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






