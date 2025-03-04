import commonAPI from "./CommonAPI";

export const uploadVideo=async(requestBody)=>{
    return await commonAPI("post","/videos",requestBody)
}
export const getAllVideo=async()=>{
    return await commonAPI("get","/videos"," ")
}
export const addHistory=async(vidioDetails)=>{
    return await commonAPI("post","/history",vidioDetails)
}
export const getAllHistory=async()=>{
    return await commonAPI("get","/history","")
}
export const deleteHistory=async(id)=>{
    return await commonAPI('delete',`/history/${id}`,{})
}
export const deleteVideo=async(id)=>{
    return await commonAPI('delete',`/videos/${id}`,{})
}
export const createCatogory=async(categoryDetails)=>{
    return await commonAPI('post','/categories',categoryDetails)
}
export const getCategoryAPI=async()=>{
    return await commonAPI('get','/categories',"")
}
export const deleteCatogory=async(id)=>{
    return await commonAPI('delete',`/categories/${id}`,{})
}
export const getSingleVideo=async(id)=>{
    return await commonAPI('get',`/videos/${id}`,"")
}

                                                    
export const updateCategory=async(id,categoryDetails)=>{
    return await commonAPI('put',`/categories/${id}`,categoryDetails)
}

export const getSingleCategory=async(id)=>{
    return await commonAPI('get',`/categories/${id}`,"")
}