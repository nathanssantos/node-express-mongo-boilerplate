const routes = require('express').Router();

const MessageController = require('./app/controllers/MessageController');

routes.post('/send-message', MessageController.sendMessage);
routes.get('/message-list', MessageController.getMessageList);

module.exports = routes;
