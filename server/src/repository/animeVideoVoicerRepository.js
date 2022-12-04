const {AnimeVideosVoicers} = require('../models/models')

class AnimeVideoVoicerRepository{
    async getall() {
        const allVoicers = await AnimeVideosVoicers.findAll()
        return allVoicers
    }

    async add(voicerName) {
        const createdVoicer = await AnimeVideosVoicers.findOrCreate({where: {voicerName}})
        return createdVoicer
    }

    async delete(voicerName){
        const is_deleted = (await AnimeVideosVoicers.destroy({where: {voicerName: voicerName}})) !== 0
        return is_deleted
    }
}

module.exports = new AnimeVideoVoicerRepository();