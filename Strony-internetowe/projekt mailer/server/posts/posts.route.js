const express = require('express');
const router = express.Router();
const postsService = require('./service');

router.get('/api/posts', postsService.get);
router.post('/api/posts', postsService.send);
router.get('/api/posts/users', postsService.users);

module.exports = router;
