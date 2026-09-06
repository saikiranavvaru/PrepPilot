// Mail Utility

// Configures Nodemailer for sending emails from PrepPilot using Gmail SMTP.

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for 587
  family: 4,     // forces IPv4 to prevent ENETUNREACH on Render
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 10000, // 10s connection timeout
  greetingTimeout: 10000,   // 10s greeting timeout
  socketTimeout: 15000,     // 15s socket timeout
});

// Verify the SMTP connection safely during server startup without blocking
if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
  transporter.verify((error) => {
    if (error) {
      console.warn("Mail server connection warning (non-fatal):", error.message);
    } else {
      console.log("Mail server is ready to send emails.");
    }
  });
} else {
  console.warn("EMAIL_USER or EMAIL_PASSWORD not provided; mail dispatch disabled.");
}

module.exports = {
  transporter,
};