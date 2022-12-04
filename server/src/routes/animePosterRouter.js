const Router = require('express')
const router = new Router()
const animePosterController = require('../controllers/animePosterController')

router.post("/add",(req,res,next) => {animePosterController.add(req,res,next)})
router.post("/",(req,res,next) => {animePosterController.get(req,res,next)})

module.exports  = router