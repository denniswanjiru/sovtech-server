import User from '../models/user';
import bcrypt from 'bcrypt';
import { errorGenerator } from './helpers';

export default class Validator {
  static required(fields) {
    const [err] = Object.entries(fields)
      .map(([key, val]) => {
        if(val.trim().length < 1) {
          const displayKey = key.slice(0, 1).toUpperCase() + key.slice(1);
          return errorGenerator(key, `${displayKey} is required`)
        }
      })
      .filter(err => err !== undefined);

    return err
  }

  static passwordMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
      return errorGenerator('password', 'Password and confirm password must match');
    };
  }

  static async uniqEmail(email) {
    try {
      if (!/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(email)) {
        return errorGenerator('email', 'Please enter a valid email');
      };

      const user = await User.find({ email: email }).exec();
      if (user.length > 0) {
        return errorGenerator('email', 'Email is already taken');
      };
    } catch (error) {
      return errorGenerator(null, 'Something went wrong');
    }
  }

  static async correctCreds(email, password) {
    try {
      const user = await User.find({ email: email }).exec();
      if (user.length < 1) {
        return errorGenerator('email', "Email or password do not match");
      }

      const match = await bcrypt.compare(password, user[0].password);
      if (!match) {
        return errorGenerator('email', "Email or password do not match");
      }
    } catch (error) {
     return errorGenerator(null, 'Something went wrong');
    }
  }
}
