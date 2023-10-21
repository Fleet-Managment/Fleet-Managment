const books = require("../Models/books");



module.exports.Viewbook = async (req, res, next) => {
      try {
        const book = await books.find();
        res.json(book);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching books' });
      }
  };