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

export const getAllPost = async (req,res) =>{
    let username = req.query.username
    let category = req.query.category
    let posts
    try{
        if(username){
            posts = await Post.find({username})      
        }
        else if(category){
            posts = await Post.find({categories:category})
        }
        else{
            posts = await Post.find({});
        }
        return res.status(200).json(posts)
    }catch(e){
        res.status(500).json({error:e})
    }
}

export const getPost = async (req,res) =>{
    try{
        let post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(e){
        res.status(500).json({error:e})
    }
}

export const updatePost = async (req,res)=>{
    try{
        let post = await Post.findByIdAndUpdate(req.params.id,{$set : req.body})
        res.status(201).json({message:"Blog Updated Successfully"})
    }catch(e){
        res.status(500).json({error:e})
    }
}

export const deletePost = async (req,res)=>{
    try{
        let post = await Post.findById(req.params.id)
        await post.delete()
        res.status(204).json({message:"deleted"})
    }catch(e){
        res.status(500).json({error:e})
    }
}
