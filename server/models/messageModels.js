import mongoose from 'mongoose';
import validator from 'validator';



const mesageSchema = new mongoose.Schema({
 
    name:{
        type:String,
        required:[true,"Name is required"],
        minLength:[3,"Name must contain atleast 3 characters"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        validate:[validator.isEmail,"please provide valid email"]
    },
    subject:{
        type:String,
        required:[true,"Subject is required"],
        minLength:[5,"Name must contain atleast 3 characters"]
    },
    message:{
        type:String,
        required:[true,"Message is required"],
        minLength:[5,"Name must contain atleast 10 characters"]
    },

})

 const schema =  mongoose.model("messageSend",mesageSchema);
 export default schema