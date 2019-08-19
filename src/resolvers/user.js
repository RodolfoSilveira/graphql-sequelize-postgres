const User = require('../app/models/user');

module.exports = {
    Query: {
        users: () => { return User.findAll() },
        user: (_, { id }) => { return User.findAll({ where: { id } }) },
    },
    Mutation: {
        createUser: (_, { name, email }) => { return User.create({ name, email }) }
    }
}