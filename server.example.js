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
      <li>Телефон: ${cForm.phone}</li>
    </ul>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
          user: '<YOUR_EMAIL>', // generated ethereal user
          pass: '<YOUR_PASSWORD>' // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Сообщение от:" <YOUR_EMAIL>', // sender address
      to: '<YOUR_EMAIL>', // list of receivers
      subject: 'Сообщение с сайта <YOUR_SITE>', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', '<YOUR_EMAIL>');
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      // res.render('contact', {msg: 'Спасибо, Ваша заявка принята. В скором времени наши менеджеры свяжутся с Вами.'});
  });

  res.end(JSON.stringify({msg: 'Спасибо, Ваша заявка принята. В скором времени наши менеджеры свяжутся с Вами.'}))
});

app.listen(3001, () => console.log('Server Started...'));
