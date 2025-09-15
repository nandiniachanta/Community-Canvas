

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const UserController = require('../controllers/usercontroller');

// GET /api/users - Get all users
router.get('/:username/post',UserController.getpostbyUsername)
router.get('/:username/issue',UserController.getissuebyUsername)
router.get('/:username/fundriser',UserController.getfundriserbyUsername)
router.get('/:username',UserController.getUserByUsername)
router.get('/',UserController.getAllUsers);

// POST /api/users - Add a new user
router.post('/',UserController.addUser);
router.post('/:username/addpost',UserController.addPost)
router.post('/:username/addissue',UserController.addIssue)
router.post('/:username/addfr',UserController.addFundriser)
router.post('/:username/:postID',UserController.addComment)

module.exports = router;
