const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const fs = require("fs");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html
app.use(express.static("public", {'extensions': ['html']}));

app.get("/", (req, res) => {
  const filePath = __dirname + "/data/posts.json";
  const callbackFunction = (error, file) => {
    // we call .toString() to turn the file buffer to a String
    const fileData = file.toString();
    // we use JSON.parse to get an object out the String
    const postsJson = JSON.parse(fileData);
    // send the json to the Template to render
    res.render("index", {
      title: "Islam Profile",
      posts: postsJson
    });
  };
  fs.readFile(filePath, callbackFunction);
});

app.get("/my-cv", (req, res) => {
  res.render("my-cv");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});