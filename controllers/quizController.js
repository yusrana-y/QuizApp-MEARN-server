const quizzes = require('../models/quizModel')

//get all quiz

exports.questionController = async(req,res)=>{
    console.log("inside quiz controller")
    //get all from mongodb

   try{
    const allQuestions = await quizzes.find()
    console.log(allQuestions);
    if(allQuestions)
    {
        res.status(200).json(allQuestions)
    }
    else
    {
        res.status(406).json("NO QUESTIONS!")
    }
   }
   catch(err)
   {
    res.status(401).json(err)
   }

    
}