const mongoose = require('mongoose')

const quizSchema = mongoose.Schema({
    question:{
        type:String,
        required:true,
    },
    op1:{
        type:String,
        required:true,
        unique:true
    },
    op2:{
        type:String,
        required:true
    },
    op3:{
        type:String,
        required:true
    }
})


const quizzes = mongoose.model("quizzes",quizSchema)

module.exports = quizzes