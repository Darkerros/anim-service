const {AnimeVideosType} = require('../models/models')
const AnimeVideoRepository = require('../repository/animeVideoRepository')
const DataValidError = require('../error/DataValidError')

class AnimeVideoTypeService{
    async add(VideoType){
        if (!VideoType) {return DataValidError.baddata("Не задан параметр VideoType")}
        const createdVideoType = await AnimeVideoRepository.add(VideoType)
        return createdVideoType
    }
    async getall(){
        const createdVideoType = await AnimeVideoRepository.getall()
        if (!createdVideoType) {return DataValidError.baddata("VideoType отсутствуют добавьте их")}
        return createdVideoType
    }

    async delete(VideoType) {
        if (!VideoType) {return DataValidError.baddata("Не задан параметр VideoType")}
        const is_deleted = await AnimeVideoRepository.delete(VideoType)
        return is_deleted
    }
}

module.exports = new AnimeVideoTypeService();