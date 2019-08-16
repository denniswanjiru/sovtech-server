import users from "./queries/users";
import joke from "./queries/joke";
import createUser from "./mutations/createUser";
import categories from "./queries/categories";

const resolvers = {
  Query: {
    ...joke.Query,
    ...users.Query,
    ...categories.Query
  },
  Mutation: {
    ...createUser.Mutation
  }
}

export default resolvers;
