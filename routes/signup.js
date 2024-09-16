const express = require('express');  
const router = express.Router();  

const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Sign-up route
 
   

// Define the POST route for sign up  
router.post('/', async (req, res) => {  
  // Handle signup logic here
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
    res.send('Signup successful');  
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
    res.send('Signup not-successful');  
  }  
  res.send('Signup successful');  
});  


 
  
  module.exports = router;  
