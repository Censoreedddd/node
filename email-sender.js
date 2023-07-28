const nodemailer = require('nodemailer');
// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter using your email service settings
const transporter = nodemailer.createTransport({
  service: 'azizlakey@gmail.com', // e.g., 'gmail', 'hotmail', 'yahoo', etc.
  auth: {
    user: 'azizlakey@gmail.com', // Your email address
    pass: 'azizaziz2102505', // Your email password
  },
});

// Email content
const mailOptions = {
  from: 'azizlakey@gmail.com',
  to: 'azizlakey@gmail.com.com',
  subject: 'Test Email from Node.js',
  text: 'Hello, this is a test email sent from Node.js!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});