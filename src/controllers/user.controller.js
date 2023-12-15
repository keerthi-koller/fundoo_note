import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

export const newUser = async (req, res, next) => {
  const data = await UserService.newUser(req.body);
  if (data === "Password mismatch!!")
  {
    try {
      res.status(HttpStatus.NOT_ACCEPTABLE).json({
        code: HttpStatus.NOT_ACCEPTABLE,
        data: data,
        message: 'Password missmatch'
      });
    } catch (error) {
      res.status(HttpStatus.NOT_ACCEPTABLE).json({
        code: HttpStatus.NOT_ACCEPTABLE,
        data: data,
        message: 'User Not Saved'
      });
      next(error);
    }
  }
  else if (data === "User Already Exists")
  {
    try {
      res.status(HttpStatus.NOT_ACCEPTABLE).json({
        code: HttpStatus.NOT_ACCEPTABLE,
        data: data,
        message: 'User Already Exists'
      });
    } catch (error) {
      res.status(HttpStatus.NOT_ACCEPTABLE).json({
        code: HttpStatus.NOT_ACCEPTABLE,
        data: data,
        message: 'User Not Saved'
      });
      next(error);
    }
  }
  else
  {
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
  }
};

export const loginUser = async (req, res, next) => {

  const data = await UserService.loginUser(req.body.emailId, req.body.password);
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
