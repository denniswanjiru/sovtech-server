import User from '../../models/user'

export default {
  Query: {
    users: async () => {
      const users = await User.find();
      console.log(users)
      return users
    }
  },
}
