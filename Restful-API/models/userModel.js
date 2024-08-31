let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

exports.getAll = () => users;

exports.getById = (id) => users.find(user => user.id === parseInt(id));

exports.create = (data) => {
    const newUser = { id: users.length + 1, ...data };
    users.push(newUser);
    return newUser;
};

exports.update = (id, data) => {
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        Object.assign(user, data);
        return user;
    }
    return null;
};

exports.delete = (id) => {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
};
