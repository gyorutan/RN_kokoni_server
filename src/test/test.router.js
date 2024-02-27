const router = require("express").Router();
const { testing } = require("../test/test.controller");

router.get("/", testing);

module.exports = router;
