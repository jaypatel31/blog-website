import React,{useContext} from 'react'

import { deleteComment } from '../../service/api'
import { AccountContext } from '../../context/AccountProvider'

const Comment = ({comment,setToogle}) => {
    const {account} = useContext(AccountContext)
    const removeComment = async () =>{
        await deleteComment(comment._id)
        setToogle(prevState => !prevState)
    }

    return (
        <div className="mt-10 bg-gray-200 p-5 mb-3 rounded">
            <div className="flex">
                <div className="text-xl font-bold mr-5">
                    {comment.user_id.name}
                </div>
                <div className="text-sm text-gray-500">{new Date(comment.date).toDateString()}</div>
                {
                    (account._id === comment.user_id._id) && (
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 m-2 border p-1  rounded text-red-500 cursor-pointer ml-auto"  viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" onClick={()=>removeComment()}>
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    )
                }
                
            </div>
            <div>{comment.comment}</div>
        </div>
    )
}

export default Comment
