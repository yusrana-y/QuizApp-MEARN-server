const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    console.log("jwt middleware");
    
    //get the token
    const token = req.headers["authorization"].split(" ")[1]

    // if token
    if (token) {
       try
       {
         //verify the token
         const jwtResponse = jwt.verify(token, process.env.JWT_PASSWORD)
         req.userId=jwtResponse.userId
         next()
       }
       catch
       {
        res.status(401).json("please login")
       }
    }
    else {
        res.status(406).json("token missing")
    }
}

module.exports = jwtMiddleware