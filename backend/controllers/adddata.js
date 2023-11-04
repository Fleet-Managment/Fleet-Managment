const User = require("../Models/chart")


module.exports.Adddata = async (req, res, next) => {
    try {
      const {expenses, business,createdAt } = req.body;
      
      const data = await User.create({expenses, business,createdAt });
      
      
      res
        .status(201)
        .json({ message: "data added succesfully", success: true,data});
      next();
    } catch (error) {
      console.error(error);
    }
  };