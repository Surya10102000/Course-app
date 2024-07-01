import mongoose, { Schema } from "mongoose";

const courseSchema = mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    description : {
        type : String, 
        required : true
    },
    price : {
        type : Number,
        required : true,
        default : 0
    },
    link : {
        type  : String,
        required : true
    },
    admin : {
        type : Schema.Types.ObjectId,
        ref : 'admin'
    }
})

const Course = mongoose.model('Course',courseSchema)

export default Course