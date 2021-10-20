import Comment from "../Models/commentSchema.js"

export const newComment = async (req,res) =>{
    try{
        const comment = await new Comment(req.body)
        comment.save()
        res.status(201).json({message:"Comment Saved Successfully"})
    }catch(error){
        res.status(500).json({error})
    }
}

export const getComments = async (req,res) =>{
    try{
        const comments = await Comment.find({postId:req.params.id}).populate('user_id',"_id name")
        res.status(200).json(comments)
    }catch(error){
        res.status(500).json({error})
    }
} 

export const deleteComment = async (req,res) =>{
    try{
        const comment = await Comment.findById(req.params.id)
        await comment.delete()
        res.status(200).json({message:"comment deleted Succesfully"})
    }catch(error){
        res.status(500).json({error})
    }
} 