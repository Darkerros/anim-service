
const GET_ALL_TAGS_ENDPOINT = "/api/tag/getall"
const GET_TAG_INFO_ENDPOINT = ""
const ADD_TAG_ENDPOINT = ""
const DELETE_TAG_ENDPOINT = ""


class Api {
    constructor() {

    }

    createReguest (endpoint,method,data = undefined) {
        const settings = {
            headers: {},
            method: method
        }
        // eslint-disable-next-line no-unused-expressions
        method !== "GET" && data ? settings.body = JSON.stringify(data) : false

        return fetch(endpoint,settings)
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .then(data => data.data)
    }

    getAllTags () {
        return this.createReguest(GET_ALL_TAGS_ENDPOINT,"GET")
    }
}


export default Api;