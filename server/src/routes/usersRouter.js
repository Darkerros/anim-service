const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/login' , (req,res) => {userController.login(req,res)})
router.post('/registration', (req,res) => {userController.registration(req,res)})
router.get('/auth', (req,res,next) => {userController.check(req,res,next)})

module.exports = router