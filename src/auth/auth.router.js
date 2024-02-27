const router = require("express").Router();
const {
  signUp,
  logIn,
//   checkUsername,
//   checkStudentId,
} = require("../auth/auth.controller");

router.post("/signup", signUp);
router.post("/login", logIn);

// router.get("/logout", logOut);
// router.get("/username/:value", checkUsername);
// router.get("/studentId/:value", checkStudentId);

module.exports = router;
