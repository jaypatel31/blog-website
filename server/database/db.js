import mongoose from "mongoose"

const connection = (URL) =>{
    

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