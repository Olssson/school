const express = require('express');
const router = express.Router();
const usersService = require('./service/user');

router.get('/api/users', usersService.getUsers);
router.post('/api/users', usersService.addUser);
router.delete('/api/users/:id', usersService.deleteUser);

module.exports = router;
