import axios from "axios";
export const commonRequest=async (method,url,body)=>{
    let axiosConfigr={
        method,
        url,
        data:body,
        headers:{
            'content-type':"application/json"
        }
    }


    return await axios(axiosConfigr).then((res)=>{
    return res

    }).catch(rej=>{
    return rej
})
}