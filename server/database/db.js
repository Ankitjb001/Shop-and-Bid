import mongoose from "mongoose";



const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@merncrud.qjltk4i.mongodb.net/?retryWrites=true&w=majority`;
    try{
       
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log('database connected successfully');

    }
    catch(error){
        console.log(`Couldnt connect`,error);
    }
}
export default Connection;