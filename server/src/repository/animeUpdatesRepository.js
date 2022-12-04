const {AnimeUpdates, Anime, AnimePoster} = require('../models/models')

class AnimeUpdatesRepository{
    async add(UpdateInfo,AnimeId){
       const createdUpdates  = await AnimeUpdates.create({UpdateInfo: UpdateInfo,AnimeId: AnimeId})
        return createdUpdates
    }
    async getall(){
        const alllastUpdates  = await AnimeUpdates.findAll(
            {
                include: {model: Anime, include: {model: AnimePoster}},
                order: [['updatedAt', 'DESC']]
            }
        )
        return alllastUpdates
    }
}

module.exports = new AnimeUpdatesRepository();