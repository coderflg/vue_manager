import axios from "axios";

export function request(config){
    const instance = axios.create({
        baseURL:'http://8.134.213.223:8080/studentSSM/',
        timeout:5000
    })

    instance.interceptors.request.use(config =>{
        return config
    },err =>{

    })

    instance.interceptors.response.use(res =>{
        return res.data
    },res =>{
        console.log(res)
    })

    return instance(config)
}
