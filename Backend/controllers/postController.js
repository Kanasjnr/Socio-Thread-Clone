const User = require("../models/userModel");

const createPost = async (req, res) => {
  try {
    const { postedBy, text, img } = req.body;
    if (!postedBy || !text) {
      return res
        .status(400)
        .json({ message: "postedBy and text fields are required" });
    }

    const user = await User.findById(postedBy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  console.log("Error in create post: ", error.message);

  }
};

module.exports = {
  createPost,
};
