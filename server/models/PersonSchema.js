const mongoose = require("mongoose");

const PERSON_SCHEMA_ID = "persons";
const personSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  middle_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  aadhar_number: {
    type: String,
    required: true,
    unique: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: true,
  },
  current_role: {
    type: String,
    required: false,
  },
  current_employer: {
    type: String, //gstin
    required: false,
  },
  past_employers: [{
    type: String, //gstin
    required: false,
  }],
  reports: [
    {
      flag: {
        type: String,
        required: false,
      },
      employer: {
        type: String,
        required: false,
      },
      message: {
        type: String,
        default: "",
      },
    },
  ],
  recommends: [
    {
      employer: {
        type: String,
        required: false,
      },
      message: {
        type: String,
        default: "",
      },
    },
  ],
});
const Person = mongoose.model(PERSON_SCHEMA_ID, personSchema);


module.exports = {
  PERSON_SCHEMA_ID,
  Person
}