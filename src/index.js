const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
// const { createChannel, subscribeMessage } = require('./utils/messageQueue');
// const TicketController = require('./controllers/ticket-controller');
const {sendBasicEmail} = require('./services/email-service');
// const jobs = require('./utils/jobs');

const setUpAndStartServer = async () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.listen(PORT, ()=>{
        console.log(`Server started at Port ${PORT}`);
        sendBasicEmail(
        'support@sn.com',
        'rohanaggarwal090204@gmail.com',
        'This is testing Mail',
        'Hello, how are you sir'
    );
    });
}

setUpAndStartServer();
// hook
// morgan
// http-status-codes
// axios
// winston
//  nodeMailer