
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var items = ["Buy foods", "Cook foods", "Eat foods"];

app.get("/", function(req, res) {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("lists", {listTitle: day, newListItems: items})
});

app.post("/", function(request, response) {
  var holdItem = req.body.newItem;
  items.push(holdItem);
  response.redirect("/")

});


app.listen(3000, function() {
  console.log("server started on port 3000");
});
