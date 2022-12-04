const Router = require('express')
const router = Router()
const tagController = require('../controllers/tagController')

router.get('/getall',(req,res,next) => tagController.getall(req,res,next))
router.post('/get',(req,res,next) => tagController.get(req,res,next))
router.post('/add',(req,res,next) => tagController.add(req,res,next))
router.post('/delete',(req,res,next) => tagController.delete(req,res,next))


module.exports = router