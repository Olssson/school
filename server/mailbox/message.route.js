const express = require('express');
const router = express.Router();
const usersService = require('./service/message');

router.post('/api/mailbox', usersService.addEmailHandler);
router.get('/api/mailbox', usersService.getUsers);

module.exports = router;