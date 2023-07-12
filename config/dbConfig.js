const mongoos = require("mongoose");

const { MONGO_DB_URL } = process.env;

let mongoDb = null;
const connect = async () => {
  try {
    mongoDb = await mongoos.connect(MONGO_DB_URL, { dbName: "cafe" });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { connect, mongoDb };
