import React,{useState,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

import { getAllPosts } from '../../service/api'
import Post from './Post'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const {search} = useLocation()

    useEffect(() => {
        const getposts = async () =>{
            let response = await getAllPosts(search)
            setPosts(response.data)
        }
        getposts()
    }, [search])


    return (
        <div className="col-span-4 mr-3 ml-3 md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            
            {
                (posts.length>0)?
                posts.map((post,index)=>{
                    return(
                        <Link to={`/details/${post._id}`} key={index} >
                            <Post post={post}/>
                        </Link>
                    )
                }):""
            }
           
        </div>
    )
}

export default Posts
