import React, {useState, useEffect,useContext} from 'react'

import { newComment, getComments } from '../../service/api'
import Comment from './Comment'
import { AccountContext } from '../../context/AccountProvider'

const intialValue = {
    user_id:"",
    postId:"",
    date: new Date(),
    comment:""
}

const Comments = ({post}) => {

    const [comment, setComment] = useState(intialValue)
    const [comments, setComments] = useState([])
    const [toogle, setToogle] = useState(false)
    const {account} = useContext(AccountContext)

    const postComment= async (e) =>{
        e.preventDefault()
        let response = await newComment(comment)
        setToogle(prevState => !prevState)
    }

    useEffect(() => {
        const getData = async () =>{
            if(post){
                let response = await getComments(post._id)
                console.log(response)
                setComments(response)
            }
            
        }
        getData()
    }, [post,toogle])

    const url = "https://static.thenounproject.com/png/12017-200.png";
    return (
        <div >
            <div className="mt-24 flex">
                <img src={url} alt="dp" className="image-dp"/>
                <textarea className="w-full border-2 border-black" rows="5" onChange={(e)=>setComment(prevState=>{
                    return{
                        ...prevState,
                        postId:post._id,
                        user_id:account._id,
                        comment:e.target.value
                    }
                })}>

                </textarea>
                <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 mx-10 " style={{height:"40px"}} onClick={(e)=>postComment(e)}>Post</button>
            </div>
            
            {
                comments && comments.map((comment,index)=>{
                    return(
                        <Comment comment={comment} key={index} setToogle={setToogle}/>
                    )
                })
            }
        </div>
    )
}

export default Comments
