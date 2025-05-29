import http from 'http'
import nodemailer from 'nodemailer'

//configure the SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', //e.g, 'smtp.gmail.com' for gmail
  port: 465, //or 465 for secure
  secure: true, //true for port 465, false for other port
  auth: {
    user: process.env.EMAIL, //your SMTP user name
    pass: process.env.EMAIL_PASS, // your SMTP password
  },
});

//function to send email
async function sendEmail(to, subject, text, html) {
  try {
    // Validate if 'to' is defined
    if (!to) {
      throw new Error('No recipient email address provided');
    }
    
    const info = await transporter.sendMail({
      from: process.env.EMAIL, // sender address
      to, // list of receivers
      subject, // subject line
      text, // plain text body
      html, // html body
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

export default sendEmail