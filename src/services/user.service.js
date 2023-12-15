import User from '../models/user.model';

export const newUser = async (body) => {
  const d = await User.findOne({emailId: body.emailId});

  if (d === null) {
    if (body.password === body.confirmPassword) {
      const data = await User.create(body);
      return data;
    }
    else {
      return "Password mismatch!!";
    }
  } else {
    return 'User Already Exists';
  }
};

export const loginUser = async (emailId, password) => {
const data = await User.findOne({emailId});
if (data === null) {
  return "User doesn't exists.."
}
else {
  let r = password == data.password ? "User LoggedIn Successfully!!" : "Password is Incorrect!";
  return r;
}

};
