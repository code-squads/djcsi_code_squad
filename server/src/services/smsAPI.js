const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const SERVICE_ID = process.env.SERVICE_ID;

console.log("Twilio params", {
    TWILIO_ACCOUNT_SID,
    AUTH_TOKEN,
    SERVICE_ID
});

import twilio from 'twilio';
const twilioClient = twilio(TWILIO_ACCOUNT_SID, AUTH_TOKEN);

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