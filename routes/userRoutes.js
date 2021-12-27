const express = require("express")
const router =express.Router();
const {stopLogin} = require('../middlewares/auth')
// User Controller
const {HomePage,loadLogin,registerValidations,postResgister,postLogin,loginValidations,loadRegister} = require('../controllers/userController')
router.get("/",HomePage)
router.get("/login",stopLogin,loadLogin)
router.get("/register",stopLogin,loadRegister)
router.post("/register",registerValidations,postResgister)
router.post("/postLogin",loginValidations,postLogin)
module.exports= router;

