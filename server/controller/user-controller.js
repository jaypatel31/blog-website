import User from "../Models/userSchema.js"

export const userLogin = async (req,res) =>{
    try{
        
        let exist = await User.find({user_id:req.body.user_id})
        
        if(exist.length > 0){
            return res.status(200).json({message:"user already Present",user:exist[0]})
        }
        let user = await new User(req.body)
        await user.save()
        return res.status(201).json({message:"user get Created Succesfuuly",user})
    }catch(error){
        res.status(500).json(error)
    }
}