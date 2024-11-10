const mongoose = require("mongoose");

const User_list = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
});

const User_lists = new mongoose.model("User_listsmodal", User_list);
module.exports = User_lists;
