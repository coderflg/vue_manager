import {request} from "@/network/request";

const $get = function (url, params){
    return request({
        url: url,
        params: params,
        method: "get"
    })
}
const $post = function (url, data){
    return request({
        header: {
            "Content-Type": "application/json;charset=utf-8"
        },
        url: url,
        data: data,
        method: "post"
    })
}

export {
    $get, $post
}
