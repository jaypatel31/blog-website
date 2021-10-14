import React from 'react'

const Post = () => {
    const url = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"

    return (
        <div style={{height:"350px"}} className="container post mt-3 mb-3 rounded-2xl border  border-green-600 flex items-center flex-col shadow-md">
            <img src={url} alt="wrapper" className="w-full rounded-tr-2xl rounded-tl-2xl" style={{height:"150px",objectFit:"cover"}}/>
            <div className="text">Music</div>
            <div className="heading">SAWO Labs</div>
            <div className="text">Jay Patel</div>
            <div className="detail">Hey from Jay ajssssssssssssssssssssssshudfffffffffffffffffffff</div>
        </div>
    )
}

export default Post
