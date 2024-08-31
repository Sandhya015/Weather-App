const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    res.status(200).json(User.getAll());
};

exports.getUserById = (req, res) => {
    const user = User.getById(req.params.id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.createUser = (req, res) => {
    const newUser = User.create(req.body);
    res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
    const updatedUser = User.update(req.params.id, req.body);
    if (updatedUser) {
        res.status(200).json(updatedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.deleteUser = (req, res) => {
    const isDeleted = User.delete(req.params.id);
    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};
