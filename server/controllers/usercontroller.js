const User = require('../models/User');
const Post = require("../models/Post");
const Issue = require("../models/Issue");
const Fundriser = require("../models/Fundriser");
const Comment = require('../models/Comment'); // Assuming there's a Comment model

// Getting all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Getting user profile by username
exports.getUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username: username }); // Use findOne to fetch a single user
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Getting posts based on username
exports.getpostbyUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username: username }); // Use findOne
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const posts = await Post.find({ user: user._id }); // Find posts by user ID
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Getting issues based on username
exports.getissuebyUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username: username }); // Use findOne
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const issues = await Issue.find({ user: user._id }); // Find issues by user ID
    res.json(issues);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Getting fundraisers based on username
exports.getfundriserbyUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username: username }); // Use findOne
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const fr = await Fundriser.find({ user: user._id }); // Find fundraisers by user ID
    res.json(fr);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Adding a new user
exports.addUser = async (req, res) => {
  const { username, email, password, profilePicture, createdAt } = req.body; // Use correct field names
  try {
    const newUser = new User({ username, email, password, profilePicture, createdAt });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Adding a new post
exports.addPost = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username: username }); // Use findOne
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { category, title, description, images, createdAt } = req.body;
    const newPost = new Post({ user: user._id, category, title, description, images, createdAt }); // Use user._id
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Adding a new issue
exports.addIssue = async (req, res) => {
  try {
    const { user, category, images, description, location, status, createdAt } = req.body;
    const newIssue = new Issue({ user, category, images, description, location, status, createdAt });
    const savedIssue = await newIssue.save();
    res.json(savedIssue);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Adding a new fundraiser
exports.addFundriser = async (req, res) => {
  try {
    const { user, amountrised, description, createdAt } = req.body;
    const newFR = new Fundriser({ user, amountrised, description, createdAt });
    const savedFR = await newFR.save();
    res.json(savedFR);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Adding a comment
exports.addComment = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username: username }); // Use findOne
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const post_ID = req.params.postID;
    const post = await Post.findById(post_ID);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const { content, createdAt } = req.body;
    const newComment = new Comment({ user: user._id, content, createdAt, post: post._id });
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
