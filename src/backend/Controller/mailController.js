const app = require('express');
const nodemailer = require('nodemailer');
const dbconnect = require('../Model/dbConnect');


exports.sendMail = (req,res) => {

    let htmail = '<html lang="fr"><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title><style>body {margin: 4em;padding: 2em;padding-top: 0em;color: white;border-color: blue;border-style: solid;background-color: black;}div{font-size: medium;font-family:Geneva, Verdana, sans-serif;}</style></head><body><h1>Bienvenue !</h1><div><p>Voici ci-dessous le lien vers le formulaire à remplir :</p><a href="">formulaire d\'évaluation</a></div></body></html>';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secureConnection: true,
      transportMethod: 'SMTP',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });
    
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: 'alsenydiallo@esp.sn, madycamara@esp.sn, idrissasow@esp.sn',
      subject: 'TestMailing',
      html: htmail
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("ECHEC D'ENVOI MAIL: " + error.message);
      } else {
        console.log('ENVOI MAIL RÉUSSI! ' + info.response);

    }
});
}
