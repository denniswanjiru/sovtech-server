import mongoose from 'mongoose';

export default mongoose.model('User', {
  name: String,
  email: String,
  email: String,
  password: String
});