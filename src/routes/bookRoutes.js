const express = require("express");
const router = express.Router();

const {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
} = require("../controllers/bookController");

router.post("/", createBook);
router.get(
    "/",
    (req, res, next) => {
        return res.status(401).json({
            message: "Middleware desde bookRoutes"
        });
    },
    getBooks
);
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;