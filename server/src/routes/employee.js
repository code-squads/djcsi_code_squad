import express from "express";
import mongoose from "mongoose";
const router = express.Router();

import { Person } from "../models/PersonSchema.js";
import { Owner } from "../models/OwnerSchema.js";

// 64313b87073e4cb74d5c01c9
router.get("/api/recentVerifications", async (req, res) => {
  try {
    const gstin = req.query.gstin;

    const owner = await Owner.find({
      gstin,
    })
      .populate("recent_verifications")
      .exec();
    res.status(200).json({
      success: true,
      owner,
    });
  } catch (err) {
    console.log("Err", err);
    res.status(200).json({
      success: true,
      message: "Some error",
      owner: null,
    });
  }
});
router.get('/api/employee', async (req, res) => {
  try {
    const aadhar = req.query.aadhar;
    if(aadhar.split(' ').length != 3){
      aadhar = aadhar.slice(0,4)+" "+aadhar.slice(4,8)+" "+aadhar.slice(8);
    }
    const employee = await Person.findOne({
      aadhar_number: aadhar,
    });
    res.status(200).json({
      success: true,
      employee,
    });
  } catch (err) {
    console.log("Err", err);
    res.status(200).json({
      success: true,
      message: "Some error",
      employee: null,
    });
  }
})
router.get("/api/myEmployees", async (req, res) => {
  try {
    const gstin = req.query.gstin;

    const employees = await Person.find({
      current_employer: gstin,
    });
    res.status(200).json({
      success: true,
      employees,
    });
  } catch (err) {
    console.log("Err", err);
    res.status(200).json({
      success: true,
      message: "Some error",
      employees: [],
    });
  }
});
router.get("/api/reportedEmployees", async (req, res) => {
  try {
    const gstin = req.query.gstin;
    const employees = await Person.find({
      reports: {
        $elemMatch: { employer: gstin }
      }
    });
    res.status(200).json({
      success: true,
      employees,
    });
  } catch (err) {
    console.log("Err", err);
    res.status(200).json({
      success: true,
      message: "Some error",
      employees: [],
    });
  }
});
router.get("/api/recommendedEmployees", async (req, res) => {
  try {
    const gstin = req.query.gstin;
    const employees = await Person.find({
      recommends: {
        $elemMatch: { employer: gstin }
      }
    });
    res.status(200).json({
      success: true,
      employees,
    });
  } catch (err) {
    console.log("Err", err);
    res.status(200).json({
      success: true,
      message: "Some error",
      employees: [],
    });
  }
});

router.get("/api/pastEmployees", async (req, res) => {
  try {
    const gstin = req.query.gstin;

    const employees = await Person.find({
      past_employers: gstin,
    });
    res.status(200).json({
      success: true,
      employees,
    });
  } catch (err) {
    console.log("Err", err);
    res.status(200).json({
      success: true,
      message: "Some error",
      employees: [],
    });
  }
});

router.post("/api/hireEmployee", async (req, res) => {
  const { employer_gstin, id, role } = req.body;
  console.log("Hire", id, role, employer_gstin);

  const objID = new mongoose.mongo.ObjectId(id) ;

  const owner = await Owner.findOne({
    gstin: employer_gstin,
  });
  owner.recent_verifications = owner.recent_verifications.filter(entry_id => {
    if(objID.equals(entry_id))
      console.log("Found", entry_id);
    return !objID.equals(entry_id);
  });
  const removeRecent = await owner.save();

  const editPerson = await Person.updateOne(
    { _id: id },
    {
      $set: {
        current_employer: employer_gstin,
        current_role: role
      }
    }
  );
  // console.log("Hire result", removeRecent, editPerson);
  return res.json({ success: true });
});

router.post("/api/flagEmployee", async (req, res) => {
  const { employee_id, owner_gstin, flag, message } = req.body;
  const flagMaps = {
    1: 'red',
    2: 'orange',
    3: 'yellow',
    4: 'green',
  }

  const person = await Person.findOne({
    _id: id,
  });
  if(flag == 4){
    person.recommends.push({
      message,
      employer: owner_gstin,
    });
  } else {
    person.reports.push({
      message,
      employer: owner_gstin,
      flag: flagMaps[flag] || 'yellow'
    });
  }
  await person.save();

  console.log("Updated person");
  return res.json({ success: true, message: "Updated"});
});
export default router;
