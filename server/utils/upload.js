import multer from "multer"
import {GridFsStorage} from "multer-gridfs-storage"

const storage = new GridFsStorage({
    url:'mongodb+srv://admin:1234@blogweb.awnct.mongodb.net/BLOGWEB?retryWrites=true&w=majority',
    options:{
        useUnifiedTopology:true,
        useNewUrlParser:true
    },
    file:(req,file)=>{
        const match = ['image/png','image/jpg']

        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-blog-${file.originalname}`
        }

        return {
            bucketName:"photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({storage})