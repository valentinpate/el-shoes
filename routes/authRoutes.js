const {Router} = require("express")
const router = Router()
const authControllers = require("../controllers/authControllers")

router.post("/register",authControllers.register_post)

router.post("/login",authControllers.login_post)

module.exports=router