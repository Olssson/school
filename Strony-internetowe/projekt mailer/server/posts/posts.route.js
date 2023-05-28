const express = require('express');
const router = express.Router();
const postsService = require('./service');

router.get('/api/post/tome', postsService.sendToMePost_get);
router.get('/api/post/sendedbyme', postsService.postsSendedByMe_get);
router.post('/api/posts', postsService.send);
router.get('/api/posts/users', postsService.users);

module.exports = router;
