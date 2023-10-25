const User = require("../Models/Schedule")


module.exports.Addschedule = async (req, res, next) => {
    try {
      const {place,time,vechile,driver,contact } = req.body;
     
    
      
      const schedule = await User.create({ place,time,vechile,driver,contact});
      
      
      res
        .status(201)
        .json({ message: "Vechile added succesfully", success: true,schedule});
      next();
    } catch (error) {
      console.error(error);
    }
  };