 
const jwt = require('jsonwebtoken');
const user = require('../models/user');

require('dotenv').config();

const secretkey ='your_jwt_secret_key';;

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization; 
  
    if(!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  try {
      const decoded = await jwt.verify(token , secretkey);
  
      const user = await User.findOne({ email: decoded.email, _id: decoded.userId });
  
      if (!user) {
        console.log("user doesn't exists");
        return res.status(401).json({ message: 'Invalid token' });
      } else{
        req.authenticated = true;
        return next();
      }
      res.json({ message: 'Token is valid', user });
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };

  module.exports = { verifyToken };