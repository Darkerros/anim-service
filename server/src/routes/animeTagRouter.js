const Router = require('express')
const AnimeTagController = require('../controllers/animeTagController')
const router = Router()

router.post('/',(req,res,next) => {AnimeTagController.get(req,res,next)})
router.post('/add',(req,res,next) => {AnimeTagController.add(req,res,next)})

module.exports = router