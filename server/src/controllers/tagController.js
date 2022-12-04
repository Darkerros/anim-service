const ApiError = require("../error/ApiError");
const DataValidError = require("../error/ApiError");
const {Tags} = require("../models/models");
const tagService = require("../services/tagService");

class TagController {
    async getall(req,res,next){
        try {
            const allTags = await tagService.getall(next)
            return res.json({data: allTags})
        }
        catch  (e) {
            return res.json(e.message)
        }
    }

    async get(req,res,next){
        try {
            const {tag} = req.body;
            const tagInfo = await tagService.get(tag,next)
            return res.json({data: tagInfo})
        }
        catch  (e) {
            return res.json(e.message)
        }
    }

    async add(req,res,next){
        try {
            const {tag} = req.body
            const createdTagInfo = await tagService.add(tag)
            return res.json({data: createdTagInfo})
        }
        catch  (e) {
            return res.json(e.message)
        }
    }

    async delete(req,res,next){
        try {
            const {tag} = req.body
            const deletedTag = await tagService.delete(tag)
            return res.json({data: deletedTag})
        }
        catch (e) {
            return res.json(e.message)
        }

    }
}

module.exports = new TagController()