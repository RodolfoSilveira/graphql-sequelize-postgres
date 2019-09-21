const User = require('../app/models/user');

module.exports = {
    Query: {
        users: () => { return User.findAll() },
        user: (_, { id }) => { return User.findOne({ where: { id } }) },
    },
    Mutation: {
        createUser: (_, { name, email }) => { return User.create({ name, email }) },
        updateUser: (_, { name, email, id}) => { return User.update({ name, email}, {where: {id}})},
        deleteUser: (_, { id }) => { return User.destroy({where: {id}})}
    }
}