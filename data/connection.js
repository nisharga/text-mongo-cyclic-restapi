require("dotenv").config();
const mongoose = require("mongoose");
const db_url = process.env.DB_URL_LINK;

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
