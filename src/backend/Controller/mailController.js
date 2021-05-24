//Controller mailing
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const hbs = require('nodemailer-express-handlebars');

const db = require('../Model/dbConnect');
const controller = db.dbConnect;


exports.sendMail = (req,res) => {

//récupération des emails
    let students = [];

    controller.query('SELECT email FROM Etudiant', (err, result) => {

      if (err) throw err;

        if (result.length) {
        //console.log(result);    
            for(e in result){
                students.push(result[e].email);
            }
        //console.log(students);       
        } else {
            console.log("ERREUR! "+err.message);
        }
        
    }); 

//fonctions d'envoi mails
    let options = {
        host: 'smtp.gmail.com',
        port: 465,
        secureConnection: true,
        transportMethod: 'SMTP',
        auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
        }
    }

    const handlebarOptions = {
        viewEngine: {
            extName: '.handlebars',
            layoutsDir: './Controller/',
            defaultLayout: 'mail',
        },
        viewPath: './Controller/',
        extName: '.handlebars'
    };

    let mailOptions = {
      from: process.env.MAIL_FROM,
      to: students,
      subject: 'Formulaire d\'enquête! (avec recup mails bd) ',
      template: 'mail'
    };



    let transporter = nodemailer.createTransport(smtpTransport(options));

    transporter.use('compile',hbs(handlebarOptions));
    
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("ECHEC D'ENVOI MAIL: " + error.message);
      } else {
        console.log('ENVOI MAIL RÉUSSI! ' + info.response);
    }

});

}
