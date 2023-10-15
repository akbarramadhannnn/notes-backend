const router = require("express").Router();
const { register, login, getUser } = require("../controllers/user");
const { authToken } = require("../utils/middleware");

router.post("/api/register", register);
router.post("/api/login", login);
router.get("/api/me", authToken, getUser);

module.exports = router;
