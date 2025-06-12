
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get('/send', async (req, res) => {
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'eshwareshwar05535@gmail.com',         
      pass: 'pjsc zxyp tzgp wpae'  
    }
  });


  const mailOptions = {
    from: 'eshwareshwar05535@gmail.com',          
    to: 'rsrsoundar91@gmail.com',        
    subject: 'poda panni',
    text: 'Hi! This is a test email sent from Express.js using Nodemailer.'
  };

 
  try {
    await transporter.sendMail(mailOptions);
    res.send('✅ Email sent successfully!');
  } catch (error) {
    console.error(error);
    res.send('❌ Failed to send email.');
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/send');
});
