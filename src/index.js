const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
// const { createChannel, subscribeMessage } = require('./utils/messageQueue');
// const TicketController = require('./controllers/ticket-controller');
// const EmailService = require('./services/email-service');
// const jobs = require('./utils/jobs');

const setUpAndStartServer = async () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.listen(PORT, ()=>{
        console.log(`Server started at Port ${PORT}`);
    });

}

setUpAndStartServer();