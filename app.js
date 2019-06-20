const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const server = require('http').createServer(app);

const io = require('socket.io').listen(server);

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

const checkNearestEvents = require('./helpers/checkNearestEvents');

checkNearestEvents();

const createRemind = require('./controllers/sockets/createRemind');

io.on('connection', (socket) => {
    console.log(`${socket.id} connect!`);
    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnect!`);
    });

    createRemind(socket);

});

server.listen(3000, err => {
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
