/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express()

app.use(cors());
app.use(express.static(path.join(__dirname,  './build/')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.post('/contact', (req, res) => {
  // res.end(JSON.stringify(req.body));

  const cForm = req.body
  console.log(cForm)
  const output = `
    <h3>Контактные данные:</h3>
    <ul>
      <li>Имя: ${cForm.name}</li>
      <li>Почта: ${cForm.email}</li>
      <li>Телефон: ${cForm.phone}</li>
    </ul>
    <h3>Сообщение</h3>
    <p>${cForm.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'spqk1319@gmail.com', // generated ethereal user
          pass: '***************' // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Сообщение от:" <spqk1319@gmail.com>', // sender address
      to: 'spqk1319@gmail.com', // list of receivers
      subject: 'Сообщение с сайта rezyltat.com', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', 'spqk1319@gmail.com');
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      // res.render('contact', {msg: 'Спасибо, Ваша заявка принята. В скором времени наши менеджеры свяжутся с Вами.'});
  });

  res.end(JSON.stringify({msg: 'Спасибо, Ваша заявка принята. В скором времени наши менеджеры свяжутся с Вами.'}))
});

app.listen(3001, () => console.log('Server Started...'));
