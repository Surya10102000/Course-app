import mongoose from "mongoose";

const adminschema = mongoose.Schema({
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
                type : Schema.Types.ObjectId,
                ref :  'course'
            }
        ]
    },
    
    
})

const Admin = mongoose.model("Admin", adminschema)

export default Admin