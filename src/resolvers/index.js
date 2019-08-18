import users from "./queries/users";
import joke from "./queries/joke";
import signup from "./mutations/signup";
import signin from "./queries/signin";
import categories from "./queries/categories";

const resolvers = {
  Query: {
    ...joke.Query,
    ...users.Query,
    ...categories.Query,
    ...signin.Query
  },
  Mutation: {
    ...signup.Mutation,
  }
}

export default resolvers;