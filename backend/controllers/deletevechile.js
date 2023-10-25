const users = require("../Models/vechile");


module.exports.Deletevechile = async (req, res, next) => {
    try {
        const deleteduser = await users.findByIdAndDelete(req.params.id);
        if (!deleteduser) {
          return res.status(404).json({ success: false, message: "vechile not found" });
        }
        res.status(200).json({ success: true, message: "vechile deleted successfully" });
      } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
      }
    
  };