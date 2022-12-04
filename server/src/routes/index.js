const Router = require('express')
const router = new Router()

const usersRouter = require('./usersRouter')
const userBookmarksRouter = require('./userBookmarksRouter')
const animeRouter = require('./animeRouter')
const animeTagRouter = require('./animeTagRouter')
const animeVideoRouter = require('./animeVideoRouter')
const animeVideoTypeRouter = require('./animeVideoTypeRouter')
const animeVideoVoicersRouter = require('./animeVideoVoicersRouter')
const animePosterRouter = require('./animePosterRouter')
const tagRouter = require('./tagRouter')
const animeUpdatesRouter = require('./animeUpdatesRouter')


router.use('/api/tag',tagRouter)
router.use('/api/video/type',animeVideoTypeRouter)
router.use('/api/video/voicer',animeVideoVoicersRouter)

router.use('/api/anime',animeRouter)
router.use('/api/updates',animeUpdatesRouter)

// router.use('/api/user',usersRouter)
// router.use('/api/bookmarks',userBookmarksRouter)


router.use('/api/anime/tag',animeTagRouter) //
router.use('/api/anime/poster',animePosterRouter)


router.use('/api/video',animeVideoRouter) //


module.exports = router
