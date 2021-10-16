import React, { useState } from 'react'
import {useHistory} from "react-router-dom"

import { createPost } from '../../service/api'


const intialState = {
    title:"",
    description:"",
    picture:"",
    username:"JP",
    categories:"ALL",
    createdDate:new Date()
}

const CreateView = () => {
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    const history = useHistory()
    const [post, setPost] = useState(intialState)

    const HandleChange = (e) =>{
        const {value,name} = e.target;

        setPost(prevState=>{
            return{
                ...prevState,
                [name]:value
            }
        })
    }

    const publishHandle = async (e) =>{
        e.preventDefault()
        let response = await createPost(post)
        console.log(response)
        history.push('/')
    }

    return (
        <div className="md:px-20">
            <img src={url} alt="demo" className="banner-img w-full"/>

            <form className="flex mt-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                    
                </svg>
                <input type="text" placeholder="Title" className="outline-none flex-1 mx-10 text-2xl" onChange={(e)=>HandleChange(e)} name="title"/>
                <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700" onClick={(e)=>publishHandle(e)}>
                    Publish
                </button>
            </form>
            <textarea className="w-full outline-none mt-12 text-lg textarea-create tracking-wide" row="5" placeholder="Tell your Story..." name="description" onChange={(e)=>HandleChange(e)}>
                
            </textarea>
        </div>
    )
}

export default CreateView