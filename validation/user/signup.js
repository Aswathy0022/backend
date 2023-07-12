const joi = require("joi");

const schema = joi.object().keys({
  username: joi.string().alphanum().min(5).required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).max(15).required(),
  confirmPassword: joi.any().valid(joi.ref("password")).required(),
});

module.exports = schema;
