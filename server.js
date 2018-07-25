var express = require("express");
var app = express();

// Static:
app.use(express.static(__dirname + "/static"));

// EJS:
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
//------------------------------------------------------------------------

// Routes:

// Show Cats:
app.get("/cats", function(request, response){
  response.render("cats");
});

// Cat1:
app.get("/cats/1", function(request, response){
  var cat_info = {
      image_file: "/images/adorable-animal-animal-world-209037.jpg",
      name: "Simone",
      age: 3,
      food: "Fancy Feast",
      sleeping_spots: ["dinner table", "Sofa", "Moms Bed"]
  };
  response.render("show_cat", cat_info);
});

// Cat2:
app.get("/cats/2", function(request, response){
  var cat_info = {
      image_file: "/images/adorable-animal-blur-326875.jpg",
      name: "Kiro",
      age: 2,
      food: "ANYTHING!",
      sleeping_spots: ["Moms Bed", "Guest Room"]
  };
  response.render("show_cat", cat_info);
});

// Cat3:
app.get("/cats/3", function(request, response){
  var cat_info = {
      image_file: "/images/animal-animal-photography-cat-57416.jpg",
      name: "Kitty",
      age: 2,
      food: "Mice",
      sleeping_spots: ["outside"]
  };
  response.render("show_cat", cat_info);
});

// Cat4:
app.get("/cats/4", function(request, response){
  var cat_info = {
      image_file: "/images/animal-cat-face-close-up-416160.jpg",
      name: "New Kitty That Doesnt Exist Yet",
      age: 1,
      food: "kitten Food",
      sleeping_spots: ["keyboard", "Any Spot That Is In The Way.."]
  };
  response.render("show_cat", cat_info);
});

// Listening Ports:
app.listen(8000);
console.log("Running in localhost at port 8000");