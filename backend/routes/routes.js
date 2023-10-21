
const { Login} = require("../controllers/login");
const {Signup } = require("../controllers/signup");
const {Home} =require("../controllers/home");
const {Addbook} =require("../controllers/addbook");
const {Viewbook} =require("../controllers/viewbook");
const {Deletebook} =require("../controllers/deletebook");
const {Updatebook} =require("../controllers/updatebook");
const {Getbook} =require("../controllers/getbook");
const router=require('express').Router();
router.post("/signup",Signup);
router.post("/login", Login);
router.post("/", Home);
router.post("/addbook", Addbook);
router.get("/book",Viewbook);
router.delete("/book/:id",Deletebook);
router.get("/book/:id",Getbook);
router.put("/book/:id",Updatebook);



module.exports = router;