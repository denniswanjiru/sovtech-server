import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './typeDefs';
import resolvers from './resolvers/index.js';

mongoose.connect('mongodb://localhost:27017/graph', { useNewUrlParser: true });

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`Server running at localhost:4000${server.graphqlPath}`);
});
