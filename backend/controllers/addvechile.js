const User = require("../Models/vechile")


module.exports.Addvechile = async (req, res, next) => {
    try {
      const {plate,model,fuel,color } = req.body;
      const existingUser = await User.findOne({ plate });
      if (existingUser) {
        return res.json({ message: "Vechile already exists" });
      }
      
      const vechile = await User.create({ plate,model,fuel,color});
      
      
      res
        .status(201)
        .json({ message: "Vechile added succesfully", success: true,vechile});
      next();
    } catch (error) {
      console.error(error);
    }
  };