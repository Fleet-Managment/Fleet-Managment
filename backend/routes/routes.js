
const { Adminlogin} = require("../controllers/adminlogin");
const { Userlogin} = require("../controllers/userlogin");
const {Usersignup } = require("../controllers/usersignup");
const {Adminsignup } = require("../controllers/adminsignup");
const {Home} =require("../controllers/home");
const {Addvechile} =require("../controllers/addvechile");
const {Addschedule} =require("../controllers/addschedule");
const {Viewuser} =require("../controllers/viewuser");
const {Viewvechile} =require("../controllers/viewvechile");
const {Viewschedule} =require("../controllers/viewschedule");
const {Deleteuser} =require("../controllers/deleteuser");
const {Deletevechile} =require("../controllers/deletevechile");
const {Deleteschedule} =require("../controllers/deleteschedule");
const {Updatebook} =require("../controllers/updatebook");
const {Getbook} =require("../controllers/getbook");
const router=require('express').Router();
router.post("/", Home);
router.post("/usersignup",Usersignup);
router.post("/adminsignup",Adminsignup);
router.post("/userlogin" , Userlogin);
router.post("/adminlogin", Adminlogin);

router.post("/addvechile", Addvechile);
router.post("/addschedule", Addschedule);
router.get("/user",Viewuser);
router.get("/vechile",Viewvechile);
router.get("/schedule",Viewschedule);
router.delete("/user/:id",Deleteuser);
router.delete("/vechile/:id",Deletevechile);
router.delete("/schedule/:id",Deleteschedule);
router.get("/book/:id",Getbook);
router.put("/book/:id",Updatebook);



module.exports = router;