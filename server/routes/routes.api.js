const express = require("express")
const commentController = require("../controllers/comment.controller")
const router = express.Router()
router.post("/comment/add", commentController.addComment)
router.get("/comment/list", commentController.getComment)
router.delete("/comment/delete/:id", commentController.removeComment)
module.exports = router
