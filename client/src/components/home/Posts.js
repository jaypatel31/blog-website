import React from 'react'
import { Link } from 'react-router-dom'

import Post from './Post'

const Posts = () => {

    let a= [1,2,3,4,5]

    return (
        <div className="col-span-4 mr-3 ml-3 md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            
            {
                a.map((item,index)=>{
                    return(
                        <Link to={'/details'} key={index}>
                            <Post/>
                        </Link>
                    )
                })
            }
           
        </div>
    )
}

export default Posts
