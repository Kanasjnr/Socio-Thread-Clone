const express = require("express");
const {
  signUpUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUser,
  followUnFollowUser
} = require("../controllers/userController");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

router.get("/profile/:query", getUserProfile);

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser); //toggle state (follow/unfollow)
router.post("/update/:id", protectRoute, updateUser)

module.exports = router;
