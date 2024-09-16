const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  interests: [String],
  location: String,  // New field for location matching
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],  // Array of friends by their ObjectId
  createdAt: { type: Date, default: Date.now }
});
 
 

const User = mongoose.model('User', UserSchema);
module.exports = User;
