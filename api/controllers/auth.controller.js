import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

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
