import User from '../models/user.model';
import bcrypt from 'bcrypt';

export const newUser = async (body) => {
  const d = await User.findOne({emailId: body.emailId});

  if (d === null) {
    if (body.password === body.confirmPassword) {
      const salt = 10;
      const hash = bcrypt.hashSync(body.password, salt);

      body.password = hash;
      body.confirmPassword = hash;

      const data = await User.create(body);
      return data;
    }
    else {
      throw new Error("Password Mismatch!!")
    }
  } else {
    throw new Error("User Already Exists!!")
  }
};

export const loginUser = async (emailId, password) => {
  const data = await User.findOne({emailId});
  if (data === null) {
    throw new Error("User doesn't exists..")
  }
  else {
    if (bcrypt.compareSync(password, data.password)) {
      return "User LoggedIn Successfully!!"
    }
    else {
      throw new Error("Password is Incorrect!")
    }
  }
};
