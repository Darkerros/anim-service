const AnimeVideoVoicerRepository = require('../repository/animeVideoVoicerRepository')
const DataValidError = require('../error/DataValidError')

class AnimeVideoVoicerService{
    async getall() {
        const allVideoVoicers = await AnimeVideoVoicerRepository.getall()
        if (!allVideoVoicers.length) {return DataValidError.baddata("Не удалось найти студии озвучки аниме")}
        return allVideoVoicers
    }

    async add(voicerName){
        if (!voicerName) {return DataValidError.baddata("Не задан параметр voicerName")}
        const addedVoicer = await AnimeVideoVoicerRepository.add(voicerName)
        return addedVoicer
    }

    async delete(voicerName){
        if (!voicerName) {return DataValidError.baddata("Не задан параметр voicerName")}
        const is_deleted = await AnimeVideoVoicerRepository.delete(voicerName)
        return is_deleted
    }

}

module.exports = new AnimeVideoVoicerService();