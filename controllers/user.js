const { validate } = require("../validation");
const SignupValidatonSchema = require("../validation/user/signup");

const useDao = require("../dao/userDao");

async function create(req, res) {
  try {
    const validationError = validate(SignupValidatonSchema, req.body);
    const { username, email, password } = req.body;
    if (validationError) {
      return res.status(400).send({
        status: false,
        data: "",
        message: validationError,
      });
    }
    const validatonMessage = await useDao.userNameOrEmailExistValidation(
      username,
      email
    );
    if (validatonMessage) {
      return res.status(400).send({
        status: false,
        data: "",
        message: validatonMessage,
      });
    }
    const result = await useDao.create({ username, email, password });
    res.send({
      status: true,
      data: { username: result.username, id: result.id },
      message: "user created successfull",
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      data: "",
      message: err.message,
    });
  }
}
async function login(req, res) {
  try {
    const { username, password } = req.body;
    const result = await useDao.loginUser(username, password);
    res
      .status(result.isLoggedIn ? 200 : 400)
      .send({ status: result.isLoggedIn, data: "", message: result.message });
  } catch (err) {
    res.status(500).send({ status: false, data: "", message: err.message });
  }
}

module.exports = { create, login };
