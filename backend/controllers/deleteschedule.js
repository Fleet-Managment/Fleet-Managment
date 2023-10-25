const users = require("../Models/Schedule");


module.exports.Deleteschedule = async (req, res, next) => {
    try {
        const deleteduser = await users.findByIdAndDelete(req.params.id);
        if (!deleteduser) {
          return res.status(404).json({ success: false, message: "Schedule not found" });
        }
        res.status(200).json({ success: true, message: "vechileschedule deleted successfully" });
      } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
      }
    
  };