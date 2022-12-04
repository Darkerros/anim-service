const DataValidError = require('../error/DataValidError')
const animeRepository = require('../repository/animeRepository')
const animeUpdatesRepository = require('../repository/animeUpdatesRepository')
const ApiError = require("../error/ApiError");

class AnimeService{
    async get(id) {
        if (!id) {return DataValidError.baddata('Не задан id')}
        const findAnime = await animeRepository.getById(id)
        if (!findAnime) {return DataValidError.baddata('Не удалось найти аниме с id: ' + id)}
        return findAnime
    }
    async add(title,titleAlternative,titleSeason,episodes,year,type,status,animeSeason,description) {
        if (!title) {return next(ApiError.badRequest("Не задан title"))}
        if (!titleSeason) {return next(ApiError.badRequest("Не задан titleSeason"))}
        if (!year) {return next(ApiError.badRequest("Не задан year"))}
        if (!type) {return next(ApiError.badRequest("Не задан type"))}
        if (!status) {return next(ApiError.badRequest("Не задан status"))}
        if (!description) {return next(ApiError.badRequest("Не задан description"))}

        const is_already_added = (await animeRepository.getByTitle(title)) ? true : false
        if (is_already_added) {return DataValidError.baddata('Такое аниме уже добавлено')}
        const createdAnime = await animeRepository.add(title,titleAlternative,titleSeason,episodes,year,type,status,animeSeason,description)
        console.log(await animeUpdatesRepository.add(status,createdAnime.id))
        return createdAnime
    }
}

module.exports = new AnimeService();