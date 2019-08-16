import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!,
    name: String!,
    email: String!,
    password: String
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, email: String!, password: String!): User!
  }
`;