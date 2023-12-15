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

export const loginUser = async (emailId, password) => {

console.log(emailId+"lll");  
console.log(password+"ppp");

  const data = await User.findOne({emailId});

  console.log(data);

  if (data === null)
{
  return "User doesn't exists.."
}
else
{
  if (password == data.password)
  {
    return "User LoggedIn Successfully!!"
  }
  else
  {
    return "Password is Incorrect!"
  }
}

};
