import express from 'express';
const router = express.Router();

import { Person } from "../models/PersonSchema.js";
import { Owner } from '../models/OwnerSchema.js';

// 64313b87073e4cb74d5c01c9
router.get('/api/recentVerifications', async (req, res) => {
  try {
    const gstin = req.query.gstin;

    const owner = await Owner.find({
      gstin
    }).populate('recent_verifications').exec();
    res.status(200).json({
      success: true,
      owner,
    })
  } catch(err) {
    console.log("Err", err);
    res.status(200).json({
      success: true,
      message: "Some error",
      owner: null
    })
  }
});

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

router.post('/api/hireEmployee', async (req, res) => {
  const { id, role } = req.body;
  console.log("Hire", id, role);
  
  return res.json({ success: true })
})

export default router;