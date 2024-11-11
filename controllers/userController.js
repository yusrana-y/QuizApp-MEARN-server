const users = require('../models/userModel')
const jwt= require('jsonwebtoken')
//register logic

exports.registerController = async(req,res)=>{
    console.log("inside register controller");
    //get details from body
    const {username,email,password} = req.body

    console.log(username,email,password)

    try{
        const existingUser = await users.findOne({email})
        if(existingUser)
        {
            res.status(406).json("Already registered")
        }
        else
        {
            const newUser = new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err)
    {
        res.status(401).json(err)
    }
    
}

//login logic

exports.loginController = async(req,res)=>{
    console.log("inside login controller")
    //take the data
    const {email,password} = req.body

    //check in mongoDB if present
    try
    {
        const existingUser = await users.findOne({email,password})
        console.log(existingUser);
        if(existingUser)
        {
            //generate token
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_PASSWORD)
            
            res.status(200).json({
                userId:existingUser,
                token
            })            
        }
        else
        {
            res.status(404).json("Incorrect email or password")
        }
        
    }
    catch(err)
    {
        res.status(401).json(err)
    }
        
}