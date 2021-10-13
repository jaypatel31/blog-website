import React from 'react'

import Post from './Post'

const Posts = () => {
    return (
        <div className="col-span-4 mr-3 ml-3 md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts
