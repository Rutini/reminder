const express = require('express');
const app = express();
require('dotenv').config();

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const checkNearestEvents = require('./helpers/checkNearestEvents');

checkNearestEvents();

app.listen(3000, (err) => {
    err ? console.log(err) : console.log('Listening 3000...');
});

// const Nexmo = require('nexmo');
//
// const nexmo = new Nexmo({
//     apiKey: process.env.API_KEY,
//     apiSecret: process.env.API_SECRET,
// }, {debug: true});
//
// const from = 'Reminder';
// const to   = '77777777777';
// const text = '2 grn for 1 sms, It's expensive, Isn't it?';
//
// nexmo.message.sendSms(from, to, text, (err, response) => {
//     err ? console.log(err) : console.log(response);
// });
