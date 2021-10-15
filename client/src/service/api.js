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