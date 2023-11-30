const express = require('express');
const { createPost, getPost, deletePost } = require('../controllers/postController');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.get("/:id", getPost)
router.post("/create",protectRoute, createPost)
router.post("/:id", deletePost)



module.exports = router