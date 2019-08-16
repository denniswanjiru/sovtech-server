import users from "./queries/users";
import createUser from "./mutations/createUser";

const resolvers = {
  ...users,
  ...createUser
}

export default resolvers;