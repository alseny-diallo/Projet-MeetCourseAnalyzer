const app = require('express');
const nodemailer = require('nodemailer');
const mailController = require('../Model/dbConnect');
const router = app.Router();

exports.sendMail = (req,res) => {

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });
    
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: 'alsenydiallo@esp.sn, madycamara@esp.sn, idrissasow@esp.sn',
      subject: 'TestMailing',
      text: 'Cà marche! mais bien evidemment!'
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("ECHEC D'ENVOI MAIL" + error);
      } else {
        console.log('ENVOI MAIL RÉUSSI! ' + info.response);

    }
});
}
  