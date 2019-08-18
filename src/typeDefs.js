import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!,
    name: String!,
    email: String!
  }

  type Joke {
    id: String,
    url: String,
    value: String!,
    icon_url: String,
    categories: [String!]
  }

  type Error {
    field: String,
    message: String
  }

  type AuthPayload {
    token: String,
    user: User
  }

  type AuthResponse {
    payload: AuthPayload
    error: Error
  }

  type Query {
    users: [User!]!,
    categories: [String!]!,
    joke(cat: String!): Joke!,
    signin(email: String!, password: String!): AuthResponse!
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!, confirmPassword: String!): AuthResponse!
  }
`;
