const tagRepository = require("../repository/tagRepository");
const ApiError = require('../error/ApiError')
const DataValidError = require('../error/DataValidError')
class TagService {
    async getall() {
        const allTags = await tagRepository.getall()
        if (!allTags) { return DataValidError.baddata('Тэги не найдены добавьте новые')}
        return allTags
    }

    async get(tag) {
        if (!tag) { return DataValidError.baddata('Не задан tag')}
        const tagInfo = await tagRepository.get(tag)
        if (!tagInfo) { return DataValidError.baddata('Не найдено информации по тегу')}
        return tagInfo
    }

    async add(tag) {
        if (!tag) { return DataValidError.baddata('Не задан tag')}
        const createdTag = await tagRepository.add(tag)
        return createdTag
    }

    async delete(tag) {
        if (!tag) { return DataValidError.baddata('Не задан tag')}
        const tagDeleted = await tagRepository.delete(tag)
        return tagDeleted !== 0
    }
}

module.exports = new TagService();