const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');

router.get('/',blogController.blog_select_all);

router.get('/create',blogController.blog_create_get);
router.post('/create',blogController.blog_create_post);

router.get('/:id',blogController.blog_select_once);
router.delete('/:id',blogController.blog_delete);

module.exports = router;