import { generateTokenAndSetCookie } from "../lib/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import validator from 'validator'

export const userSignup = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    
    if(!validator.isEmail(email)){
        return res.status(400).json({ error: "Invalid email format" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken" });
    }
    

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email is already registered" });
    }
    
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    //hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        username: newUser.username,
        email: newUser.email,
      });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    console.log("something wrong in the userSignup controller ", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

export const userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Username not found" });
    }

    const PassIsCorrect = await bcrypt.compare(password, user?.password || "");

    if (!PassIsCorrect) {
      return res.status(400).json({ error: "invalid password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log("Error in the login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const userlogout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully " });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
