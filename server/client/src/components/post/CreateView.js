import React, { useState, useEffect,useContext } from 'react'
import {useHistory} from "react-router-dom"

import { createPost, uploadFile } from '../../service/api'
import { AccountContext } from '../../context/AccountProvider'

const intialState = {
    title:"",
    description:"",
    picture:"",
    user_id:"",
    categories:"ALL",
    createdDate:new Date()
}

const CreateView = () => {
    const {account} = useContext(AccountContext)
    const history = useHistory()
    const [post, setPost] = useState(intialState)
    const [image, setImage] = useState('')
    const [banner, setBanner] = useState("")

    const url = post.picture? post.picture:"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"

    useEffect(() => {
        
            const getImage = async () =>{
                if(image){
                    const data = new FormData()
                    data.append("name",image.name)
                    data.append("file",image)

                    let response = await uploadFile(data)
                    post.picture = response.data.imageUrl
                    setBanner(response.data.imageUrl)
                }
                
            }
            getImage()
        
    }, [image])

    const HandleChange = (e) =>{
        const {value,name} = e.target;

        setPost(prevState=>{
            return{
                ...prevState,
                user_id:account._id,
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
                <label htmlFor="fileInput">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-gray-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                        
                    </svg>
                </label>
                <input 
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={(e)=>setImage(e.target.files[0])}
                />
                
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
