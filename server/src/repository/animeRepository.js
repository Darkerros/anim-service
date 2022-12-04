const {Anime, AnimePoster, AnimeTags} = require('../models/models')

class AnimeRepository {
    async getById(id) {
        const findAnime = await Anime.findOne(
            {
                where: {id: id},
                include: [{model: AnimePoster, attributes: ["poster_url", 'id']},
                    {model: AnimeTags}]
            })
        return findAnime
    }

    async getByTitle(title) {
        const findAnime = await Anime.findOne(
            {
                where: {title: title},
            })
        return findAnime
    }

    async add(title, titleAlternative, titleSeason, episodes, year, type, status, animeSeason,description) {
        const createdAnime = await Anime.create({
            title: title,
            titleAlternative: titleAlternative,
            titleSeason: titleSeason,
            episodes: episodes,
            year: year,
            type: type,
            status: status,
            animeSeason: animeSeason,
            description: description
        })
        return createdAnime
    }
}

module.exports = new AnimeRepository();