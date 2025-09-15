const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



//const DB_URL=process.env.DB_URL
mongoose.connect('mongodb://127.0.0.1:27017/villageverse',{})
.then(()=>{
    console.log("MONGO CONNECTED!!!");
})
.catch((error)=>{
    console.log("MONGO FAILED ;(");
    console.log(error);
})


// Routes
// Example route
const users = require('./routes/users');
const posts=require('./routes/posts')
app.use('/api/users', users);
app.use('/api/posts',posts);
app.get('/', (req, res) => {
  res.send('Welcome to VillageVerse API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
