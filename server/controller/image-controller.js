import grid from "gridfs-stream"
import mongoose from "mongoose"

const URL = 'http://localhost:5000'

let gfs;
const conn = mongoose.connection;
conn.once('open',()=>{
    gfs = grid(conn.db,mongoose.mongo)
    gfs.collection('fs');
})


export const uploadImage = async (req,res) =>{
    try{
        if(!req.file){
            return res.status(404).json({message:"File Not Found"})
        }
        const imageUrl = `${URL}/file/${req.file.filename}`
    
        res.status(200).json({imageUrl})
    }catch(e){
        res.status(500).json(e)
    }  
}

export const getImage = async (req,res) =>{
    try{
        const file = await gfs.files.findOne({filename:req.params.filename})
        const readStream = gfs.createReadStream(file.filename)
        console.log(readStream)
        readStream.pipe(res);
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}