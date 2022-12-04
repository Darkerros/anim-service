const Router = require('express')
const animeVideoTypeController = require('../controllers/animeVideoTypeController')
const router = new Router()

router.get('/',(req,res,next) => animeVideoTypeController.getall(req,res,next))
router.post('/add',(req,res,next) => animeVideoTypeController.add(req,res,next))
router.post('/delete',(req,res,next) => animeVideoTypeController.delete(req,res,next))

module.exports = router