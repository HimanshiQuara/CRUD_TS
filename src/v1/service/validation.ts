import Joi from 'joi';
export class Uservalidation{

  userValidate = Joi.object({
  name: Joi.string().pattern(/^[a-zA-Z]+$/).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/).required(),
})
};



