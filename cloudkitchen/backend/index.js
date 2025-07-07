const express = require("express");

const app = express();
const cors = require("cors");
const mongoDB = require("./db");

app.use(
  cors({
    origin: "https://cloud-kitchenfullone-frontend.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));

app.listen(5000, () => {
  console.log("port is listening at localhost:5000");
});
