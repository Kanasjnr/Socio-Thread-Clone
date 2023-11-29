const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, //More Secure
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 Days
    sameSite: "strict", //CSRF
  });
  return token;
};

module.exports = generateTokenAndSetCookie;
