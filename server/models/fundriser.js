// server/models/Fundraise.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fundraiseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amountRaised: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Fundraise = mongoose.model('Fundraise', fundraiseSchema);

module.exports = Fundraise;
