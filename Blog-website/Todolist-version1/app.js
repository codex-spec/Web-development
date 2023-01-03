const express = require("express");
const bodyParser = require("body-parser");
//const https = require("https");
//const date = require(__dirname + "date.js");

const app = express();

//console.log(date());

const items = ["Buy foods", "Cook foods", "Eat foods"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  let day = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  day = day.toLocaleDateString("en-US", options);

  res.render("list", {listTitle: day, newListItems: items});
  // res.render("list", {
  //   currentDayOfWeek: currentDay
  // });
});

app.post("/", function(req, res) {

  const item = req.body.newItem;

  if(req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render("about");
})

app.listen(3000, function() {
  console.log("server started on port 3000");
});
