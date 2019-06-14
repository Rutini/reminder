const express = require('express');
const app = express();
require('dotenv').config();

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
}, {debug: true});

const from = 'Erotic stuff Berizka';
const to   = '380676705260';
const text = 'SUKA, 2 grn za 1 sms, ibat';

nexmo.message.sendSms(from, to, text, (err, response) => {
    err ? console.log(err) : console.log(response);
});

app.listen(3000, (err) => {
    err ? console.log(err) : console.log('Listening 3000...');
});
