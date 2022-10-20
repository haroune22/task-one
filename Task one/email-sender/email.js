const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harounehamenniche123@gmail.com',
      pass: 'itdidwork'
    }
  });
  
  var mailOptions = {
    from: 'harounehamenniche123@gmail.com',
    to: 'arezkihamenniche@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was so easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });