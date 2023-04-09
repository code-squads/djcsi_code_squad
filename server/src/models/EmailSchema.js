const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  emails: String,
  stringMsg: String,
});

const Email = mongoose.model("Email", emailSchema);

export default Email;
