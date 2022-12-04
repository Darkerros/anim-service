const DataValidError = require('../error/DataValidError')
const animeUpdatesRepository = require('../repository/animeUpdatesRepository')
const ApiError = require("../error/ApiError");

class animeUpdatesService{
    async getall(req,res,next) {
        const findAnimeUpdates = await animeUpdatesRepository.getall()
        if (!findAnimeUpdates) {return DataValidError.baddata('Не удалось найти последнии обновления')}
        return res.json(findAnimeUpdates)
    }
    async add(req,res,next) {
        const {UpdateInfo,AnimeId} = req.body
        if (!UpdateInfo) {return DataValidError.baddata('Отсутствует UpdateInfo')}
        if (!AnimeId) {return DataValidError.baddata('Отсутствует AnimeId')}
        const addedAnimeUpdates = await animeUpdatesRepository.add(UpdateInfo,AnimeId)

        return res.json(findAnimeUpdates)
    }

}

module.exports = new animeUpdatesService();