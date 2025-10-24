import  {Schema, model} from "mongoose"


const messageSchema= new Schema({

    senderId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

     receiverId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    text:{
        type:String,
        trim:true,
        maxLength:2000
    },


    image:{
        type:String
    }
},{timestamps:true})


 export const Message = model ("Message",messageSchema);


