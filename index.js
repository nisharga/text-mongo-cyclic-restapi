const express = require("express");
const connect = require("./data/connection");
const getAllStudentRoute = require("./data/routes");
const getByID = require("./data/routes");
const studentAddByPost = require("./data/routes");
const studentDeleteByID = require("./data/routes");
const studentUpdateByID = require("./data/routes");
const port = process.env.PORT || 4000;
const cors = require("cors");

// middleware
connect();
const app = express();
app.use(cors());
app.use(express.json());

//Routes go here
app.all("*", (req, res) => {
  res.json({ "every thing": "is awesome" });
});

app.use("/api", getAllStudentRoute);
app.use("/api2", getByID);
app.use("/api3", studentAddByPost);
app.use("/api4", studentDeleteByID);
app.use("/api5", studentUpdateByID);

app.listen(port, () => {
  console.log(`Running ${port}`);
});
