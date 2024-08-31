const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users.js');
const path = require('path');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myapi')
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
