const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(
    process.env.Mongodb_url,

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection is successfull with Database");
  })
  .catch((e) => {
    console.log("Could not connected with Database", e);
  });
