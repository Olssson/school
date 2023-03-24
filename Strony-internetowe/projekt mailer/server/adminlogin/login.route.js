const express = require('express');
const router = express.Router();
const loginService = require('./service/login');

router.post('/api/adminlogin', loginService.adminlogin);

module.exports = router