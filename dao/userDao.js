const UserModal = require("../schema/UserSchema");

const create = async ({ username, email, password }) => {
  try {
    const result = await UserModal.create({
      username,
      email,
      password,
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const userNameOrEmailExistValidation = async (username, email) => {
  const resultUsername = await UserModal.findOne({ username });
  if (resultUsername) return "User name already exist";
  const resultEmail = await UserModal.findOne({ email });
  if (resultEmail) return "Email already exist";
  return null;
};

const loginUser = async (username, password) => {
  try {
    const result = await UserModal.findOne({ username });
    if (!result) {
      return {
        isLoggedIn: false,
        message: "Invalid Username",
      };
    }
    if (result.password !== password) {
      return {
        isLoggedIn: false,
        message: "Invalid Password",
      };
    }
    return {
      isLoggedIn: false,
      message: "User Successfully LoggedIn",
    };
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { create, userNameOrEmailExistValidation, loginUser };
