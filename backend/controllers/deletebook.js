const books = require("../Models/books");


module.exports.Deletebook = async (req, res, next) => {
    try {
        const deletedBook = await books.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
          return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.status(200).json({ success: true, message: "Book deleted successfully" });
      } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
      }
    
  };