const express = require('express');
const router = express.Router();
const Post=require('../models/Post')
const PostController = require('../controllers/postcontroller');
router.get('/',PostController.getposts)
// router.get('/:username',PostController.getpostbyID)

// router.post('/',PostController.addPost)
module.exports=router