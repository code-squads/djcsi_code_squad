import express from 'express';
const router = express.Router();

import { Person } from "../models/PersonSchema.js";

router.get('/api/myEmployees', async (req, res) => {
  try {
    const gstin = req.query.gstin;

    const employees = await Person.find({
      current_employer: gstin
    });
    res.status(200).json({
      success: true,
      employees
    })
  } catch(err) {
    console.log("Err", err);
    res.status(200).json({
      success: true,
      message: "Some error",
      employees: []
    })
  }
});

router.get('/api/pastEmployees', async (req, res) => {
  try {
    const gstin = req.query.gstin;

    const employees = await Person.find({
      past_employers: gstin
    });
    res.status(200).json({
      success: true,
      employees
    })
  } catch(err) {
    console.log("Err", err);
    res.status(200).json({
      success: true,
      message: "Some error",
      employees: []
    })
  }
});

export default router;