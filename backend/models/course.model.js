import mongoose from "mongoose";

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
    }
})

const Course = mongoose.model('Course',courseSchema)

export default Course