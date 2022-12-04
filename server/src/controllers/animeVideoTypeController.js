const ApiError = require("../error/ApiError");
const {AnimeVideosType} = require("../models/models");
const animeVideoTypeService = require('../services/animeVideoTypeService')


class AnimeVideoTypeController{
    async add(req,res,next){
        try {
            const {type} = req.body
            const createdVideoType = await animeVideoTypeService.add(type)
            return res.json(createdVideoType)
        }
        catch (e) {
            console.log(e)
            return res.status(403).json(e)
        }
    }

    async getall(req,res,next){
        try {
            const {type} = req.body
            const createdVideoType = await animeVideoTypeService.getall()
            return res.json(createdVideoType)
        }
        catch (e) {
            console.log(e)
            return res.status(403).json(e)
        }
    }

    async delete(req,res,next){
        try {
            const {type} = req.body
            const is_deleted = await animeVideoTypeService.delete(type)
            return res.json(is_deleted)
        }
        catch (e) {
            console.log(e)
            return res.status(403).json(e)
        }
    }
}

module.exports = new AnimeVideoTypeController();