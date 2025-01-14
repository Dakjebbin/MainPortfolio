import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

const Register = async (req, res) => {

    try {
        const {username, email, password} = req.body;

        if (!username ||!email ||!password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }
    
        const userExists = await User.findOne({email}).exec();
    
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }
    
        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, salt)
    
        const newUser = new User({
            username,
            email,
            password: encryptedPassword
        });
    
        await newUser.save()

        res.status(200).json({
            success: true,
            message: "User registered successfully",
            newUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
   
}

const login = async (req, res) => {

    try {
        const {username, password} = req.body;

        if (!username ||!password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }
    
        const user = await User.findOne({username}).exec();
    
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        
    } catch (error) {
       res.status(500).json({
        success: false,
        message: "internal server error"
       }) 
    }
   
}


export {Register, login}