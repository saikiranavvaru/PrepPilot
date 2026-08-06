// Mail Utility

// Configures Nodemailer for sending emails from PrepPilot using Gmail SMTP.

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify the SMTP connection during server startup.
transporter.verify(function (error) {
  if (error) {
    console.error("Mail server connection failed:", error.message);
  } else {
    console.log("Mail server is ready to send emails.");
  }
});

module.exports = {
  transporter,
};