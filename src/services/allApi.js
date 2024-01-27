import { commonRequest } from "./commonRequest";
import { BASE_URL } from "./base_url";

//to upload product

export const addProducts=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/products`,body)
}

export const getProduct=async()=>{
    return await commonRequest("GET",`${BASE_URL}/products`,'')
}

export const addCategory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/categories`,body)
}

export const getCategory=async()=>{
    return await commonRequest("GET",`${BASE_URL}/categories`,'')
}

export const deleteProd=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/products/${id}`,{})
}


export const deleteCateg=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
}

// export const addSpecificProduct=async(body)=>{
//     return await commonRequest("POST",`${BASE_URL}/categories`,body)
// }
// export const getSpecificCategory=async(id)=>{
//     return await commonRequest("GET",`${BASE_URL}/categories/${id}`,'')
// }

// export const getSpecificProduct=async(id)=>{
//     return await commonRequest("GET",`${BASE_URL}/products/${id}`,'')
// }

// export const updateCategory=async(id,body)=>{
//     return await commonRequest("PUT",`${BASE_URL}/products/${id}`,body)
// }