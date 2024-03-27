const express = require("express");
const app = express();
const path=require("path");
const staticPath=path.join(__dirname,"../public")
console.log(staticPath);
app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//   res.send("hello from the server home page");
// });
// app.get("/about", (req, res) => {
//   res.send("hello from the about page ");
// });
app.listen(5000, () => {
  console.log("listening to port 5000");
});
