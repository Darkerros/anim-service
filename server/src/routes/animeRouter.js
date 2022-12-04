const Router = require('express')
const router = new Router()
const animeController = require('../controllers/animeController')

router.get('/',(req,res,next) => animeController.get(req,res,next))
router.post('/add',(req,res,next) => animeController.add(req,res,next))


module.exports = router