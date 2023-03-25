require("dotenv").config();
const mongoose = require("mongoose");
const db_url = `mongodb+srv://Nisharga:aDj8QSwONIMYsWtK@cluster0.qemdz.mongodb.net/?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    const conn = await mongoose.connect(db_url);
    console.log(`Mongodb connected ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
  }

  // mongoose
  //   .connect(db_url)
  //   .then((val) => {
  //     console.log("Database Connected");
  //   })
  //   .
};

module.exports = connect;
