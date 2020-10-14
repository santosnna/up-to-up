const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  image: String,
  promoCode: String,
  playStoreLink: String,
  appStoreLink: String,
});

module.exports = mongoose.model("App", AppSchema);
