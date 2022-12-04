const Router = require('express')
const router = new Router()
const animeUpdatesController = require('../controllers/animeUpdatesController')

router.get('/',(req,res,next) => animeUpdatesController.getall(req,res,next))
router.post('/add',(req,res,next) => animeUpdatesController.add(req,res,next))


module.exports = router