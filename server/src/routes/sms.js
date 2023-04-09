import express from 'express';
const router = express.Router();

import { sendOTP, verifyOTP, sendMail } from "../services/smsAPI.js";

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

export default router;
