//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
//const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

const itemsSchema = {
  name: String
}

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todo-list"
})

const item2 = new Item({
  name: "item2"
})

const item3 = new Item({
  name: "item3"
})

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

const defaultItems = [item1, item2,item3];



app.get("/", function(req, res) {
  Item.find({}, function(err, foundItems){
    if(foundItems.length === 0){
      Item.insertMany(defaultItems, function(err){
        if (err){
          console.log("ERROR");
        }
        else{
          console.log("Added default items to DB");
        }
      });
      res.redirect("/");
    }
    res.render("list", {listTitle: "Today", newListItems: foundItems});
  })
  /*
const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});
*/
});

app.get("/:customListName", function(req, res) {
  const customListName = _.capitalize(req.params.customListName);
  

  List.findOne({name: customListName}, function(err,foundList){
    if (!err){
      if(!foundList){
        //console.log("Doesn't Exist");
        //create a new list
        const list = new List({
          name: customListName,
          items: defaultItems
        }); 
        list.save();
        res.redirect("/" + customListName);
      }
      else{
        //console.log("Exists");
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      }
    }
  })
  
});

app.post("/", function(req, res){

  //const item = req.body.newItem;
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName
  });

  if (listName === "Today"){
    item.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

app.post("/delete", function(req, res){
  //console.log(req.body.checkbox);
  
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

if(listName === "Today"){
  Item.deleteOne({_id: checkedItemId}, function(err){
    if (!err) {
      console.log("Successfully deleted the item.");
      res.redirect("/");
    }
  });
}
else{
  List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
    if(!err){
      res.redirect("/" + listName);
    }
  });
}

  
  
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
