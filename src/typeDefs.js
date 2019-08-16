import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!,
    name: String!,
    email: String!,
    password: String
  }

  type Joke {
    id: String,
    url: String,
    value: String!,
    icon_url: String,
    categories: [String!]
  }

  type Query {
    joke(cat: String!): Joke!,
    users: [User!]!,
    categories: [String!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, email: String!, password: String!): User!
  }
`;
