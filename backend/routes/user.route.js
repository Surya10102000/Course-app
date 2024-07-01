import express from "express";
import { userlogin, userSignup, userlogout } from "../controllers/user.controller.js";

const router = express.Router()

// user can signup 
// user can login
// user can buy Course
// user can see courses bought by the user
// user can logout 

router.post('/api/signup' , userSignup)
router.post('/api/login', userlogin)
router.post('/api/logout', userlogout )

export default router
