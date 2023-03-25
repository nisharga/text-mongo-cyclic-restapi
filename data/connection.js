require("dotenv").config();
const mongoose = require("mongoose");
const db_url = `mongodb+srv://Nisharga:aDj8QSwONIMYsWtK@cluster0.qemdz.mongodb.net/?retryWrites=true&w=majority`;

const connect = () => {
  mongoose
    .connect(db_url)
    .then((val) => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connect;
