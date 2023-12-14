import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fName: { type: String },
    lName: { type: String },
    phNo: { type: Number },
    emailId: { type: String },
    password: { type: String },
    confirmPassword: { type: String }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
