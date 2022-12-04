const animeVideoVoicerService = require('../services/animeVideoVoicerService')

class AnimeVideoVoicersController {
    async add(req,res,next){
        const {voicerName} = req.body
        const addedVoicer = await animeVideoVoicerService.add(voicerName)
        return res.json(addedVoicer)
    }

    async getall(req,res,next){
        const allVoicers = await animeVideoVoicerService.getall()
        return res.json(allVoicers)
    }

    async delete(req,res,next){
        const {voicerName} = req.body
        const is_deleted = await animeVideoVoicerService.delete(voicerName)
        return res.json(is_deleted)
    }
}

module.exports = new AnimeVideoVoicersController()