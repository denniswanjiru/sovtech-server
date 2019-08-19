import bcrypt from 'bcrypt';
import User from '../../models/user';
import { errorGenerator } from '../../utils/helpers';
import Validator from '../../utils/validator';

export default {
  Mutation: {
    signup: async (_, args) => {
      try {
        const { name, email, password, confirmPassword } = args;

        const required = await Validator.required(args);
        const passMatch = await Validator.passwordMatch(password, confirmPassword);
        const validEmail = await Validator.uniqEmail(email);


        if (required && required.error) return { error: { ...required.error } }
        if (passMatch && passMatch.error) return { error: { ...passMatch.error }}
        if (validEmail && validEmail.error) return { error: { ...validEmail.error } }

        const hash = await bcrypt.hash(password, 10);
        const user = await new User({
          name,
          email,
          password: hash
        });

        await user.save();
        return {
          payload: {
            user
          }
        }
      } catch (error) {
        return errorGenerator(null, 'Something went wrong');
      }
    }
  }
}