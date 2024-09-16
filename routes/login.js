const express = require('express'); 
const jwt = require('jsonwebtoken');  

const router = express.Router();  
const User = require('../models/user');
 
const bcrypt = require('bcryptjs');


const JWT_SECRET = 'your_jwt_secret_key'; // Remember to store this securely, e.g., in environment variables  
 

router.post('/', async (req, res) => {  
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token, message: 'Logged in successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err });
  }
});

 



  module.exports = router; // Export the router  
