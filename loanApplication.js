const mongoose = require("mongoose");

const UserSchema2 = new mongoose.Schema({
  email: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  contact: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  amount: {
    type: Number,
    default: 0,
  },
  sdate: {
    type: Date,
    default: Date.now,
  },
  edate: {
    type: Date,
    default: Date.now,
  },
  installments: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: "NA",
  },
});

var User2 = mongoose.model("user2", UserSchema2);
module.exports = User2;
