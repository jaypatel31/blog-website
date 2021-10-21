import React from 'react'

const Post = ({post}) => {
    const url = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"

    const addElipsis = (str, len) =>{
        return str.length > len ? str.substring(0,len) + "...": str;
    }

    return (
        <div style={{height:"350px"}} className="container post mt-3 mb-3 rounded-2xl border  border-green-600 flex items-center flex-col shadow-md">
            <img src={(post.picture === "")?url:post.picture} alt="wrapper" className="w-full rounded-tr-2xl rounded-tl-2xl" style={{height:"150px",objectFit:"cover"}}/>
            <div className="text">{post.categories}</div>
            <div className="heading text-center">{addElipsis(post.title, 30)}</div>
            <div className="text">{post.username}</div>
            <div className="detail">{addElipsis(post.description)}</div>
        </div>
    )
}

export default Post
