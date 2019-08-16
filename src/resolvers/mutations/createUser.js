import bcrypt from 'bcrypt';
import User from '../../models/user';

export default {
  Mutation: {
    createUser: async (_, { name, password, email }) => {
      try {
        const hash = await bcrypt.hash(password, 10);
        const user = await new User({
          name,
          email,
          password: hash
        });

        await user.save();
        return user
      } catch (error) {

      }
    }
  }
}