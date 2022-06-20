import {request} from "@/network/request";
const login = function (url, data){
    return request({
        url: url,
        data: data,
        method: "post"
    })
}
export {
    login
}
