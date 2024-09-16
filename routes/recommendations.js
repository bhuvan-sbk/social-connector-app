const express = require('express'); 
const jwt = require('jsonwebtoken');  
 const router = express.Router();  
 const User = require('../models/user');


 const verifyToken = require('../middlewares/authMiddleware')
 
// const JWT_SECRET = 'your_jwt_secret_key'; 

 
  

// Example: Protect the recommendations route
router.post('/recommendations',async (req, res) => {
  const { interests, location } = req.body;

  try {
    const recommendations = await User.find({
      $and: [
        { interests: { $in: interests } },
        { location: location }  // Match by location
      ]
    }).limit(10);

    res.status(200).json(recommendations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching recommendations', error: err });
  }
});


  
  
 

module.exports = router; 