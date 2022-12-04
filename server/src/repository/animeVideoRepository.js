const {AnimeVideosType} = require("../models/models");


class AnimeVideoRepository{
    async add(VideoType) {
        const createdVideoType = await AnimeVideosType.findOrCreate({where:{type: VideoType}})
        return createdVideoType
    }

    async getall() {
        const getedVideoTypes = await AnimeVideosType.findAll()
        return getedVideoTypes
    }

    async delete(VideoType) {
        const is_deleted = (await AnimeVideosType.destroy({where:{type: VideoType}})) !== 0
        return is_deleted
    }
}

module.exports = new AnimeVideoRepository();