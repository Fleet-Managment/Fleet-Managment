const books = require("../Models/books");



module.exports.Getbook = async (req, res) => {
    try {
        const book = await books.findById(req.params.id);
        if (!book) {
          return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
      } catch (error) {
        res.status(500).json({ message: "Error fetching book by ID" });
      }
    };
    