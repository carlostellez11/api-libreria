const Book = require("../models/book");

exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();

        res.status(201).json({
            message: "Book created successfully",
            data: book
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating book"
        });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json({
            total: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving books"
        });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving book"
        });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            message: "Book updated successfully",
            data: updatedBook
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating book"
        });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Book deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting book"
        });
    }
};