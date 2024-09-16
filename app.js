const mongoose = require('mongoose');
const express = require('express');  
const app = express();  
const signupRoute = require('./routes/signup'); // Adjust path as needed  
const loginRoute = require('./routes/login'); // Adjust path as needed  
const recommendRoute = require('./routes/recommendations'); 
const verifyToken = require('./middlewares/authMiddleware')

require('dotenv').config();
const PORT = process.env.PORT || 4000;



// Replace this with your MongoDB connection string
const mongoURI = 'mongodb+srv://comeback:OG-StreeFight@cluster0.4djvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

   


app.use(express.json());
app.use('/signup', signupRoute); // Mount the signup route  
app.use('/login', loginRoute); // Mount the login route  
app.use('/recommendations',recommendRoute);
// app.use('/authMiddleware', verifyToken)



app.get('/', (req, res) => res.send('API is running'));


app.listen(4000, () => console.log(`Server running on port ${4000}`));