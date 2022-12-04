const ApiError = require("../error/ApiError");
const animeService = require('../services/animeService')
const path = require("path");
var fs = require('fs');


class animeController{
    async add (req,res,next){
        const {title,titleAlternative,titleSeason,episodes,year,type,status,animeSeason,description} = req.body

        try {
            const createdAnime = await animeService.add(title,titleAlternative,titleSeason,episodes,year,type,status,animeSeason,description)
            return res.json(createdAnime)
        }
        catch (e) {
            return res.json(e)
        }
    }

    async get(req,res,next) {
        try {
            const {id} = req.query
            const findAnime = await animeService.get(id)
            return res.json(findAnime)
        }
        catch (e) {
            return res.json(e)
        }
    }

    async update(req,res,next) {
        const {title,titleAlternative,titleSeason,episodes,year,type,status,animeSeason} = req.body
        if (!title) {return next(ApiError.badRequest("Не задан title"))}
        if (!titleSeason) {return next(ApiError.badRequest("Не задан titleSeason"))}
        if (!year) {return next(ApiError.badRequest("Не задан year"))}
        if (!type) {return next(ApiError.badRequest("Не задан type"))}
        if (!status) {return next(ApiError.badRequest("Не задан status"))}

        try {
            const createdAnime = await Anime.update({title:title,titleAlternative:titleAlternative,titleSeason:titleSeason,episodes:episodes,year:year,type:type,status:status,animeSeason:animeSeason})
            return res.json(createdAnime)
        }
        catch (e) {
            return res.json(e)
        }
    }

    async delete(req,res,next) {
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest('Не задан ID'))
        }
    }

}

module.exports = new animeController()