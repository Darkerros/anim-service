const sequelize = require('sequelize')
const ApiError = require('../error/ApiError')
const {AnimeTags,Tags,Anime} = require('../models/models')
const {raw} = require("express");
const {logger} = require("sequelize/lib/utils/logger");
const {where} = require("sequelize");



class animeTagController{
    async add(req,res,next) {
        const {AnimeId,tags} = req.body
        if (!AnimeId) return  next(ApiError.badRequest("Не указан AnimeId"))
        if (!tags.length) return next(ApiError.badRequest("Не указаны tags"))

        const tagsId = (await Tags.findAll({where:{tag: tags},attributes:["id"]})).map((tagid) => {return tagid.id})

        const createdAnimeTags = await Promise.all(tagsId.map(async (id) => {
            const [row,is_new] = await AnimeTags.findOrCreate({where:{AnimeId: AnimeId, TagId: id}})
            return row
        }))

        return res.json(createdAnimeTags)
    }

    async get(req,res,next) {
        const {AnimeId} = req.body
        if (!AnimeId) return  next(ApiError.badRequest("Не указан AnimeId"))

        const findAnimeTags = await AnimeTags.findOne({attributes:['AnimeId',
                                                       [sequelize.fn('ARRAY_AGG', sequelize.col('AnimeTags.id')), 'AnimeTag']],
                                                                group: ['AnimeId'],
                                                                //include:[{model: Anime}]
                                                                })
        const tagIds = findAnimeTags.getDataValue('AnimeTag')
        const findTags = (await Tags.findAll({where:{id: tagIds}})).map((tag) => {return tag["tag"]})
        findAnimeTags.setDataValue('AnimeTag',findTags)
        return res.json(findAnimeTags)
    }

    async update(req,res,next) {
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest('Не задан ID'))
        }
    }

}

module.exports = new animeTagController()