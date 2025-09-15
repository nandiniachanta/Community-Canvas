// server/models/Comment.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  post: { type: Schema.Types.ObjectId, ref: 'Post' }, // Reference to Post if it's a comment on a post
  issue: { type: Schema.Types.ObjectId, ref: 'Issue' }, // Reference to Issue if it's a comment on an issue
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
