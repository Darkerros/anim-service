const ApiError = require('../error/ApiError')
const {Anime,AnimeVideosVoicers,AnimeVideosType,AnimeVideos} = require('../models/models')
const path = require("path");
const {transliterate,createDir} = require('../utils/utils')
let fs = require('fs');
const {raw} = require("express");
const {where} = require("sequelize");


class AnimeVideoController{
    async add (req,res,next) {
        try {
            const {AnimeId,AnimeVoicer,VideoType,episode,Season} = req.body

            if (!AnimeId){ return next(ApiError.badRequest("Отсутствует AnimeId"))}
            if (!AnimeVoicer){ return next(ApiError.badRequest("Отсутствует AnimeVideoVoicer"))}
            if (!VideoType){ return next(ApiError.badRequest("Отсутствует AnimeVideoType"))}
            if (!episode){ return next(ApiError.badRequest("Отсутствует episode"))}
            if (!Season){ return next(ApiError.badRequest("Отсутствует Season"))}

            const findAnime = await Anime.findOne({where: {id: AnimeId}})
            if (!findAnime){ return next(ApiError.badRequest("Отсутствует Anime с id: "+AnimeId))}
            const findAnimeVideoVoicer = await AnimeVideosVoicers.findOne({where: {voicerName: AnimeVoicer}})
            if (!findAnimeVideoVoicer){ return next(ApiError.badRequest("Отсутствует AnimeVoicer с именем: "+AnimeVoicer))}
            const findAnimeVideosType = await AnimeVideosType.findOne({where: {type: VideoType}})
            if (!findAnimeVideosType){ return next(ApiError.badRequest("Отсутствует AnimeVideoType с типом: "+VideoType))}



            const {video} = req.files

            const transliteAnimeName = transliterate(findAnime.getDataValue('title')).replace(" ","-")
            const studioPath = await path.resolve('static/video/',transliteAnimeName,AnimeVoicer+'/')

            await createDir(studioPath)

            const videoName = AnimeVoicer + "-season-"+"1"+"-seria-"+"2"
            const videoPath = await path.resolve(studioPath,videoName)+".mp4"
            video.mv(videoPath)
            const video_url = "/video/"+transliteAnimeName+"/"+AnimeVoicer+'/'+videoName+".mp4"


            const cretedAnimeVideo = await AnimeVideos.create({episode: episode,Season: Season,AnimeId: AnimeId,AnimeVideosTypeId: findAnimeVideosType.id,AnimeVideosVoicerId: findAnimeVideoVoicer.id,video_url: video_url})
            const findCreatedAnimeVideo = await AnimeVideos.findOne({where:{id: cretedAnimeVideo.id},include:[{model: AnimeVideosVoicers},{model: AnimeVideosType}]})
            return res.json(findCreatedAnimeVideo)
        }
        catch (e) {
            return next(ApiError.forbidden(e.error))
        }

    }

    async get (req,res,next) {

    }
}

module.exports = new AnimeVideoController()