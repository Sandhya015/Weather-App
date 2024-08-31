const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect('mongodb://localhost/myapi', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected');
    }).catch((err) => {
        console.error('Database connection error:', err);
    });
};
