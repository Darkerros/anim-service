import {$authHost, $host} from "./index";
import {ADD_TAG_ENDPOINT, GET_ALL_TAGS_ENDPOINT} from "./endpoints";

const getAllTags = () => {
    return $host.get(GET_ALL_TAGS_ENDPOINT).then(data => data.data)
}

const addTag = (tag) => {
    return $authHost.post(ADD_TAG_ENDPOINT,{tag}).then(data => data.data)
}

export {getAllTags,addTag}