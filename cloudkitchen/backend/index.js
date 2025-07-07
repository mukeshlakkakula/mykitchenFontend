const express = require("express");

const app = express();
const mongoDB = require("./db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://cloud-kitchenfullone-frontend.vercel.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));

app.listen(5000, () => {
  console.log("port is listening at localhost:5000");
});
