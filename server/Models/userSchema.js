import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User",userSchema)

export default User