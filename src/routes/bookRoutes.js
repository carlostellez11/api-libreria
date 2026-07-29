const express = require("express");
const router = express.Router();

const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const validateBook = require("../middlewares/validateBook");

router.post("/", validateBook, createBook);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.put("/:id", validateBook, updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
