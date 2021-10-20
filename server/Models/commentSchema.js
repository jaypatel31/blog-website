import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    postId:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})

const Comment = mongoose.model('comment',commentSchema)

export default Comment