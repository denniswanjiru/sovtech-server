import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './typeDefs';
import resolvers from './resolvers/index.js';

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const app = express();
const port = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(`Server running at localhost:${port}${server.graphqlPath}`);
});
