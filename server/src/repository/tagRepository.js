const {Tags} = require("../models/models");

class TagRepository{
    async getall(){
        const tags = await Tags.findAll()
        return tags
    }

    async get(tag){
        const taginfo = await Tags.findOne({where:{tag}})
        return taginfo
    }

    async add(tag){
        const addedTagInfo = await Tags.findOrCreate({where:{tag}})
        return addedTagInfo
    }

    async delete(tag){
        const deletedTag= await Tags.destroy({where:{tag}})
        return deletedTag
    }

}

module.exports = new TagRepository();