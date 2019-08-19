import User from '../../models/user'

export default {
  Query: {
    users: async () => {
      const users = await User.find();
      return users
    }
  },
}
