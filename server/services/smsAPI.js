const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const SERVICE_ID = process.env.SERVICE_ID;
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


console.log("Twilio params", {
    TWILIO_ACCOUNT_SID,
    AUTH_TOKEN,
    SERVICE_ID
});

const twilioClient = require('twilio')(TWILIO_ACCOUNT_SID, AUTH_TOKEN);

exports.sendOTP = (phone) => {
    return new Promise((resolve, reject) => {
        twilioClient.verify.v2.services(SERVICE_ID)
            .verifications
            .create({to: phone, channel: 'sms'})
            .then(resolve)
            .catch(reject)
    })
}

exports.verifyOTP = (phone, code) => {
    return new Promise((resolve, reject) => {
        twilioClient.verify.v2.services(SERVICE_ID)
        .verificationChecks
        .create({to: phone, code: code})
        .then(resolve)
        .catch(reject);
    })
}

exports.sendMail = () => {
    const msg = {
        to: 'rupeshraut9939@gmail.com', // Change to your recipient
        from: 'test@example.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}