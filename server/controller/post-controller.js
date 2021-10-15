import Post from "../Models/postSchema.js"

export const createPost = async (req,res) =>{
    try{
        let post = await new Post(req.body)
        post.save()

        res.status(201).json({message:"Blog Created Successfully"})
    }catch(e){
        res.status(500).json({error:e})
    }
}