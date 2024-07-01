import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username : {
        type : String ,
        required : [true, "username is required"],
        unique : true,
    },
    email : {
        type : String ,
        required :[ true , "Please enter an emaili"],
        unique : true,
    },
    password : {
        type : String ,
        required : true
    },
    course : {
        type : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref :  'course',
                default : []
            }
        ]
    },
    
    
})

const User = mongoose.model("User", userschema)

export default User