require("dotenv").config();
const routes = require("./routes/routes");
const express = require("express");
const mongoose = require("mongoose");
const mongoString =
  "mongodb+srv://changagim:ckddk2002@cluster0.jjzjfll.mongodb.net/test";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(express.json());

app.use("/api", routes);
app.use(express.static("build"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/build/index.html");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running!");
});
