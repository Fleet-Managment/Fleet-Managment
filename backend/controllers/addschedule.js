const User = require("../Models/Schedule")


module.exports.Addschedule = async (req, res, next) => {
    try {
      const {from,to,time,vechile,driver} = req.body;
     
    
      
      const schedule = await User.create({ from,to,time,vechile,driver});
      
      
      res
        .status(201)
        .json({ message: "Vechile added succesfully", success: true,schedule});
      next();
    } catch (error) {
      console.error(error);
    }
  };