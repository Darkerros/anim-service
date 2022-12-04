const Router = require('express')
const router = Router()
const animeVideoController =  require('../controllers/animeVideoController')

router.post('/add',(req,res,next) => {animeVideoController.add(req,res,next)})

module.exports = router