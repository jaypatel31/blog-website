import mongoose  from "mongoose";

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:false,
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    categories:{
        type:String,
        required:false,
    },
    createdDate:{
        type:Date,
        required:true,
    },
})

const Post = mongoose.model('Post',PostSchema)
export default Post