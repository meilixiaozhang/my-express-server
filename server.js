// jshint: esversion:6

const express = require('express');
const app = express();
// "/" refers to the home route
app.get("/", function(request,response){
  response.send("<h1>Hello, World</h1>")
});

app.get("/contact", function(request,response){
  response.send("Contact me at: xiaoranzhang08@gmail.com")
})

app.get("/about", function(req, res){
  res.send("I am beautiful Xiao Zhang")
})

app.get("/hobbies", function(req, res){
  res.send("baking eating sleeping all day")
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
