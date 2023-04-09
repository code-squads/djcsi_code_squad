const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  emails: [{type: String}],
  stringMsg: String,
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;