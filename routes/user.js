import express from "express";
import {getAllUsers, getMyProfile, login, logout, newUsers } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router  = express.Router();



      router.get('/all', getAllUsers);
      router.post("/new", newUsers);
      router.post("/login", login);
      router.get("/logout", logout);
  
      router.get("/me",isAuthenticated, getMyProfile);
      
    


    export default router;
    
  