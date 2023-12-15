import User from '../models/user.model';

export const newUser = async (body) => {
  const d = await User.findOne({emailId: body.emailId});

  if (d === null) {
    const data = await User.create(body);
    return data;
  } else {
    return 'User Already Exists';
  }
};

export const loginUser = async (body) => {

const data = await User.findOne({emaildId: body.emailId});
console.log(data);

if (data === null)
{
  return "User doesn't exists.."
}
else
{
  if (body.password == data.password)
  {
    return "User LoggedIn Successfully!!"
  }
  else
  {
    return "Password is Incorrect!"
  }
}

};
