const { signUp, logIn, validateEmail } = require("../auth/auth.service");

exports.signUp = async (req, res) => {
  const body = await req.body;
  return await signUp(res, body);
};

exports.logIn = async (req, res) => {
  const body = await req.body;
  return await logIn(res, body);
};

exports.validateEmail = async (req, res) => {
  const body = await req.body;
  return await validateEmail(res, body);
};

//   exports.logOut = async (req, res) => {
//     res.clearCookie("token");
//     return res.json({ success: true });
//   };

//   exports.checkUsername = async (req, res) => {
//     const { value } = await req.params;
//     return await checkUsername(res, value);
//   };

//   exports.checkStudentId = async (req, res) => {
//     const { value } = await req.params;
//     return await checkStudentId(res, value);
//   };
