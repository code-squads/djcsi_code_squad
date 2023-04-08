<<<<<<< HEAD:server/routes/sms.js
const express = require("express");
const router = express.Router();

const { sendOTP, verifyOTP, sendMail } = require("../services/smsAPI");
const Email = require("../models/EmailSchema");
=======
import express from 'express';
const router = express.Router();

import { sendOTP, verifyOTP } from "../services/smsAPI.js";
>>>>>>> ee1f1288657640caca736f3d99baca0b1767621b:server/src/routes/sms.js

// OTP routes
router.post("/apis/sendOTP", (req, res) => {
  console.log(req.body);
  const phone = `+91${req.body.phone}`;

  if (!phone)
    return res.status(400).send({
      message: "Wrong phone number :(",
      phone,
      success: false,
      data,
    });

  sendOTP(phone)
    .then(() => {
      res.status(200).send({
        message: `OTP sent to ${phone}`,
      });
    })
    .catch((err) => {
      console.log(err);
      console.log(`Some err sending OTP to ${phone}`);
      res.status(500).send({
        message: "Server error, contact administrator",
        phone,
        success: false,
      });
    });
});

// sendGrid router
router.post("/apis/sendEmail", sendMail);

// Verify Endpoint
router.post("/apis/verifyOTP", (req, res) => {
  const phone = `+91${req.body.phone}`;
  const code = req.body.code;

  if (!phone || !code.length)
    return res.status(400).send({
      message: "Invalid phone number or code :(",
      success: false,
      phone,
      code,
    });

  verifyOTP(phone, code)
    .then((valid) => {
      if (valid) {
        console.log(`OTP approved  for ${phone}`);
        return res.status(200).send({
          message: "OTP is Verified successfuly!!",
          success: true,
        });
      }
      return res.status(203).send({
        message: "Wrong code",
        success: false,
      });
    })
    .catch((error) => {
      console.log(error);
      console.log(
        `Some err verifying OTP ${code} for ${phone}, maybe it is already verified`
      );
      res.status(500).send({
        message: "Server error, contact administrator",
        phone,
        code,
        success: false,
        error,
      });
    });
});

<<<<<<< HEAD:server/routes/sms.js
module.exports = router;
=======

export default router;
>>>>>>> ee1f1288657640caca736f3d99baca0b1767621b:server/src/routes/sms.js
