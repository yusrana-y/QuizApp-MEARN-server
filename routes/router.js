const express = require('express')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const userController = require('../controllers/userController')
const quizController = require('../controllers/quizController')

const router = express.Router()

//register router

router.post("/register",userController.registerController)

//login router
router.post("/login",userController.loginController)

//get all quiz
router.get("/get-quiz",quizController.questionController)

module.exports = router