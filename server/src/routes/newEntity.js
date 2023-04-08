import express from 'express';
import { Person } from "../models/PersonSchema.js";

const router = express.Router();

// POST request to create new owner
router.post('/api/newOwner', async (req, res) => {

});

// POST request to create new person
router.post('/api/newPerson', async (req, res) => {
  // const {
  //   first_name,
  //   middle_name,
  //   last_name,
  //   dob,
  //   gender,
  //   email,
  //   phone_number,
  //   aadhar_number,
  //   address,
  // } = req.body;

  // Check for mandatory fields
  const mandatoryFields = ['first_name', 'middle_name', 'last_name', 'dob', 'gender', 'email', 'phone_number', 'aadhar_number', 'address'];
  const missingFields = mandatoryFields.filter(field => !(field in req.body));
  if (missingFields.length > 0) {
    return res.status(400).json({ error: `Missing mandatory fields: ${missingFields.join(', ')}` });
  }

  const person = new Person(req.body);

  try {
    const savedPerson = await person.save();
    res.json({ message: "New person created successfully", id: savedPerson._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;