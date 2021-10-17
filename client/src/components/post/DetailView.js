import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

import { getPost ,deletePost} from '../../service/api'
import Comments from '../comments/Comments'


const DetailView = ({match}) => {
    const [post, setPost] = useState({})
    const history = useHistory()

    useEffect(() => {
        const getdata = async () =>{
            let response = await getPost(match.params.id)
            setPost(response.data)
        }
        getdata()
    }, [])

    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"

    const deleteBlog = async () =>{
        await deletePost(post._id)
        history.push("/")
    }

    return (
        <div className="md:px-20">
        {
            (post)?(
                <>
                <img src={post.picture || url} alt="banner" className="banner-img w-full"/>
                <div className="flex float-right">
                    <Link to={`/update/${post._id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 m-2 border p-1 rounded text-blue-500 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            
                        </svg>
                    </Link >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 m-2 border p-1  rounded text-red-500 cursor-pointer"  viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" onClick={()=>deleteBlog()}>
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className="blog-title text-4xl mt-16 mb-8 font-semibold text-center">
                    {post.title}
                </div>
                <div className="text-gray-500 md:flex my-5">
                    <Link to={`/?username=${post.username}`}>
                        <div className="cursor-pointer">Author: <span className="font-semibold">{post.username}</span></div>
                    </Link>
                    <div className="ml-auto">{new Date(post.createdDate).toDateString()}</div>
                </div>
                <div className="blog-descp">
                    {post.description}
                </div>
                <Comments post={post}/>
            </>
            ):"Loading..."
        }
        </div>  
        
    )
}

export default DetailView
