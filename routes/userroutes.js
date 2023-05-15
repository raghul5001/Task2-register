const express = require('express')
const router = express.Router()

const {register,login} = require('../controller/register')
const {userRegister,userLogin} =require("../validation/userValid")

router.post('/register',userRegister,register)
router.post('/login',userLogin,login)


module.exports = router;