const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');
const path = require('path');

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();

