const express = require("express");
const app = express();
const path=require('path');
const port = 5000;
const staticPath=path.join(__dirname,"../public");
const tempPath=path.join(__dirname,"../template")
app.set('view engine', 'hbs');
app.set('views',tempPath);
app.use(express.static(staticPath));

//the below code is for template engines
//we need to set the vie engine

//template engine route
app.get("/", (req, res) => {
  res.render("index", {
    userName: "Farhan",
  });
});

app.listen(5000, () => {
  console.log(`server started at ${port}`);
});










//below code is an example of serving static content

// const path=require("path");
// const staticPath=path.join(__dirname,"../public")
// // console.log(staticPath);

// app.get("/", (req, res) => {
//     res.send("hello mannu");
//   });
// app.get("/", (req, res) => {
//   res.send("hello from the server home page");
// });
// // app.use(express.static(staticPath));

// app.get("/about", (req, res) => {
//   res.send("hello from the about page ");
// });
// app.listen(5000, () => {
//   console.log("listening to port 5000");
// });
