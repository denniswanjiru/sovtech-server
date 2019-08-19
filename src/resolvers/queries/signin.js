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

        const required = await Validator.required(args);
        if (required && required.error) return { error: { ...required.error } }

        const correctCreds = await Validator.correctCreds(email, password);
        if (correctCreds && correctCreds.error) return { error: { ...correctCreds.error } }

        const user = await User.findOne({ email }).exec();

        const token = await user && jwt.sign({
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

