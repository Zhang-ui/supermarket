import axios from 'axios';

export function request(config){
    const instance = axios.create({
        baseURL:'http://img01.jituwang.com',
        timeout:5000
    });

    instance.interceptors.response.use(res =>{
        return res.data;
    },error => {
        console.log(error)
    })

    //发送请求
    return instance(config)
}
