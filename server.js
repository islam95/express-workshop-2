const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html
app.use(express.static("public", {'extensions': ['html']}));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Islam profile",
    subheading: "A modern Website built in Node"
  });
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

//

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});