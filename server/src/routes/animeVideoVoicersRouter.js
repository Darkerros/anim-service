const Router = require('express')
const animeVideoVoicersController = require('../controllers/animeVideoVoicersController')
const router = new Router()

router.get('/',(req,res,next) => animeVideoVoicersController.getall(req,res,next))
router.post('/add',(req,res,next) => animeVideoVoicersController.add(req,res,next))
router.post('/delete',(req,res,next) => animeVideoVoicersController.delete(req,res,next))

module.exports = router