const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'yourHotmailEmail@hotmail.com',
      pass: 'yourHotmailPassword',
    },
  });
  

  const mailOptions = {
    from: 'yourHotmailEmail@hotmail.com',
    to: 'recipientEmail@example.com',
    subject: 'New Contact Form Message',
    text: 'This is a message from the contact form:',
    html: `
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Message: ${formData.message}</p>
    `,
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully!');
    }
  });
  