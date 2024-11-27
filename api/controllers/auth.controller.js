import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password || username === "" || email === "" || password === "") {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if email or username already exists
    const existingUser = await User.findOne({email, username});
    if (existingUser) {
      return res.status(400).json({ message: 'Email or Username already exists' });
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });

    // Save user
    await newUser.save();

    res.status(201).json({ message: 'Signup Successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};


//signin controller

export const signin = async (req,res,next) =>{
  const {email,password} = req.body;
if(!email || !password ||  password == "") {
  next(errorHandler(400, "All the fields are required"))
}


try{
  
const validUser = await User.findOne({email}) ;
if(!validUser){
 return next(errorHandler(404,"User not found"))
}

const validPassword =  bcryptjs.compareSync(password, validUser.password)
if(!validPassword){
 return next(errorHandler(404,"Invalid Credentials"))
}
const token = jwt.sign(
{id: validUser._id} , process.env.JWT_SECRET);
const {password:pass, ...rest}= validUser._doc;

  res.status(200).cookie('access_token',token,{
    httpOnly:true}).json(rest)


}catch(error){
  next(error)
}

}