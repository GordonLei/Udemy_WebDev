//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

//creating schema for documents
const fruitsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry. No name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10

    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitsSchema
});

//make Fruits collection that follow the fruitsSchema
const Fruit = mongoose.model("Fruit", fruitsSchema);
const Person = mongoose.model("Person", personSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid"
});

const person = new Person({
    name: "Person",
    age: 20
    
});

const kiwi = new Fruit({
    name: "kiwi",
    rating: 7,
    review: "Pretty solid"
});

const orange = new Fruit({
    name: "orange",
    rating: 7,
    review: "Pretty solid"
});

const pineapple = new Fruit({
    name: "pineapple",
    rating: 7,
    review: "Pretty solid"
});

//now make this fruit
pineapple.save();

const person = new Person({
    name: "Amy",
    age:12,
    favoriteFruit: pineapple
})

//model
Fruit.insertMany([kiwi, orange], function(err){
    if(err){
        console.log(err);
    }
})
//person.save();

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
        mongoose.connection.close();
        console.log(fruits);

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
})

Fruit.updateOne(
    {_id: "dsadasdadadadadasdas"},
    {name: "Peach"},
    function(err){
        if(err){
            consolge.log(err);
        }
        else{
            console.log("Successfully updated the document");
        }
    }
)

Fruit.deleteOne(
    {name: "Peach"},
    function(err){
        if(err){
            consolge.log(err);
        }
        else{
            console.log("Successfully deleted the document");
        }
    }
)


Person.deleteMany(
    {name:"John"},
    function(err){
        if(err){
            consolge.log(err);
        }
        else{
            console.log("Successfully deleted all the documents");
        }
    }
)

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }