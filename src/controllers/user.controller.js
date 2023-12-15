import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

export const newUser = async (req, res, next) => {
  const data = await UserService.newUser(req.body);
  try {
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'User Created Successfully'
    });
  } catch (error) {
    res.status(HttpStatus.NOT_FOUND).json({
      code: HttpStatus.NOT_FOUND,
      data: data,
      message: 'User Not Saved'
    });
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const data = await UserService.loginUser(req.body);
  if (data == "User LoggedIn Successfully!!")
  {
    try {
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'User LoggedIn Successfully'
      });
    } catch (error) {
      next(error);
    }
  }
  else
  {
    try {
      res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        data: data,
        message: 'User Login Unsuccessful'
      });
    } catch (error) {
      next(error);
    }
  }
};
