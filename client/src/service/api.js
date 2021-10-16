import axios from "axios"

const URL = 'http://localhost:5000'

export const createPost = async (data) =>{
    try{
        let response = await axios.post(`${URL}/create`,data,{
            headers:{
                'Content-Type':"application/json"
            }
        })
        return response
    }catch(e){
        console.log(`Error While Calling Create POst Api,${e}`)
    }
    
}

export const getAllPosts = async (params="") =>{

    try{
        let response = await axios.get(`${URL}/posts${params}`)
        return response;
    }catch(e){
        console.log(`Error While Calling Get all posts,${e}`)
    }
}

export const getPost = async (id) =>{
    try{
        let response = await axios.get(`${URL}/post/${id}`)
        return response;
    }catch(e){
        console.log(`Error While Calling Get post,${e}`)
    }
}

export const updatePost = async (id,data) =>{
    try{
        let response = await axios.put(`${URL}/update/${id}`,data,{
            headers:{
                'Content-Type':"application/json"
            }
        })
        return response
    }catch(e){
        console.log(`Error While Calling Updating post,${e}`)
    }
}

export const deletePost = async (id) =>{
    try{
       return await axios.delete(`${URL}/delete/${id}`)
    }catch(e){
        console.log(`Error While Calling Deleting post,${e}`)
    }
}