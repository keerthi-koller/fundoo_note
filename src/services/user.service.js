import User from '../models/user.model';

export const newUser = async (body) => {
  const d = await User.find();
  let dd = d.filter((x) => x.emailId === body.emailId);
  // console.log(dd.length);

  if (dd.length === undefined) {
    const data = await User.create(body);
    return data;
  } else {
    return 'User Already Exists';
  }
};

export const loginUser = async (body) => {
  const data = await User.find();
  let dd = data.filter((x) => x.emailId === body.emailId);
  console.log(dd.length);

  return data;
};
