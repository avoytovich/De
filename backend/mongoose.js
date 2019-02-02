const mongoose = require("mongoose");
const dbKey = require("./config/keys").mongoURl;

module.exports = () => {
  /**Connect to database */
  const db = mongoose
    .connect(dbKey, { useNewUrlParser: true })
    .then(() => console.log("Connected"))
    .catch(err => console.error(err));

  return db;
};
