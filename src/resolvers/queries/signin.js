import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/user';
import Validator from '../../utils/validator';
import { errorGenerator } from '../../utils/helpers';

export default {
  Query: {
    signin: async (_, args) => {
      try {
        const { password, email } = args;

        const required = Validator.required(args);
        if (required && required.error) return { ...required }

        const correctCreds = Validator.correctCreds(email, password);
        if (correctCreds && correctCreds.error) return { ...correctCreds }

        const user = await User.findOne({ email }).exec();

        const token = await jwt.sign({
          name: user.name,
          email: user.email,
          userId: user._id
        },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );

        return {
          payload: {
            token,
            user
          }
        }
      } catch (error) {
        return errorGenerator(null, 'Something went wrong!');
      }
    }
  }
}

