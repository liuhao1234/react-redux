import axios from 'axios';
const baseUrl = "http://localhost:8000"
export default class util {
    static axios(options){
        return new Promise((resolve,reject)=>{
            axios({
                ...options,
                url:baseUrl+options.url
            }).then((response)=>{
                if(response.status === 200){
                    var resData = response.data;
                    if(resData.errno === 0){
                        resolve(resData.data)
                    }else{
                        reject(resData.message)
                    }
                }else{
                    reject(response.statusText)
                }
                
            }).catch((error)=>{
                reject(error)
            })
        })
    }
}