const express = require('express');
const { createPost, getPost, deletePost, likeUnlikePost } = require('../controllers/postController');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.get("/:id", getPost)
router.post("/create",protectRoute, createPost)
router.delete("/:id", protectRoute, deletePost)
router.post("/like/:id", protectRoute, likeUnlikePost)



module.exports = router