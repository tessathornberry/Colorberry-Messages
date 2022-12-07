const express  = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router.get('/messages', controllers.getMessages);
router.post('/messages', controllers.postMessage);

module.exports = router;