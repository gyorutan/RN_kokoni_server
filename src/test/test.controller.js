const { testing } = require("../test/test.service");

exports.testing = async (req, res) => {
  return await testing(res);
};
