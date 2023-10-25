const users = require("../Models/UserModel");



module.exports.Viewuser = async (req, res, next) => {
      try {
        const user = await users.find();
        res.json(user);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching books' });
      }
  };