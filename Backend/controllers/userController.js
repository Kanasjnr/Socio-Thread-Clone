const User = require('../models/userModel')

const signUpUser = async (req, res) => {
   try {
        const {name, email, username, password} = req.body
        const user = await User.findOne({$or :[{email}, {username}]})

        if(user) {
            return res.status(400).json({message: 'user already exists'})
        }
    
   } catch (error) {
    
   }
}

module.exports = {
    signUpUser
}