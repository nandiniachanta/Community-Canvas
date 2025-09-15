// server/models/Issue.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  description: { type: String, required: true },
  location: { type: String },
  status: { type: String, default: 'reported' }, // reported, in-progress, resolved, closed, etc.
  createdAt: { type: Date, default: Date.now },
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
