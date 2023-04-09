import sgMail from "@sendgrid/mail";
import Email from "../models/EmailSchema.js";
import twilio from 'twilio';

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const SERVICE_ID = process.env.SERVICE_ID;
console.log();
const twilioClient = twilio(TWILIO_ACCOUNT_SID, AUTH_TOKEN);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log("Twilio params", {
  TWILIO_ACCOUNT_SID,
  AUTH_TOKEN,
  SERVICE_ID,
});

export const sendOTP = (phone) => {
    return new Promise((resolve, reject) => {
        twilioClient.verify.v2.services(SERVICE_ID)
            .verifications
            .create({to: phone, channel: 'sms'})
            .then(resolve)
            .catch(reject)
    })
}

export const verifyOTP = (phone, code) => {
    return new Promise((resolve, reject) => {
        twilioClient.verify.v2.services(SERVICE_ID)
        .verificationChecks
        .create({to: phone, code: code})
        .then(resolve)
        .catch(reject);
    })
}

// Email through sendGrid
export const sendMail = async (req, res) => {
  const ownerEmails = await Email.create({ emails: req.body.emails , stringMsg : req.body.stringMsg});

  try {
    const msg = {
      personalizations: [
    {
      "to": [
        {
          "email": ownerEmails.emails
        }
      ]}],
      from: "omkarphansopkar@gmail.com", // Change to your verified sender
      subject: "Message from user to owners",
      text: ownerEmails.stringMsg,
    };

    await sgMail.send(msg).then(() => {
      console.log("Email sent");
      return res
        .status(200)
        .json({ statusMessage: "Message sent!!", emails: ownerEmails.emails , text: ownerEmails.stringMsg });
    });
  } catch(err) {
    console.log("Err", err);
    return res.json({ statusMessage: "Message not sent!!", emails: ownerEmails.emails });
  }
};
