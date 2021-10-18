import mongoose from "mongoose"

const connection = () =>{
    const URL = "mongodb+srv://admin:1234@blogweb.awnct.mongodb.net/BLOGWEB?retryWrites=true&w=majority"

    mongoose.connect(URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    }).then(()=>{
        console.log('Database Connected Succesfully')
    }).catch((e)=>{
        console.log(`Error While Connecting to MongoDB ${e}`)
    })

    
}

export default connection