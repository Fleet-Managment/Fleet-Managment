const books = require("../Models/books");



module.exports.Updatebook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const updatedBook = req.body;
        const result = await books.findByIdAndUpdate(bookId, updatedBook, {
          new: true,
        });
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: "Error updating book", error: error.message });
      }
    };
    