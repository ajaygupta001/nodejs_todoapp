import express from "express";
//import { DBConnection } from "./data/database.js";
import {config} from "dotenv"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
export const app = express();

// DBConnection();
config({
    path:"./data/config.env",
});

//const router = express.Router();

//Using middleware for Json data
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    Credentials:true
}));

//Using routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);

// mongoose.connect("mongodb://localhost:27017",{
//     dbName:"apiBackend"
// }).then(()=> console.log("Database connected"))
// .catch(()=> console.log(e));



// const schema  = new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,
// });

// const User = mongoose.model("User",schema);




app.get("/",(req,res)=>{
    res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);

// app.get("/users/all",async (req,res)=>{
//   const users = await User.find({})

//     res.json({
//        success:true,
//        users,
//     });
// });



// app.post('/users/new', async (req, res) => {
//     try {
//       const { name, email, password } = req.body;
//       // Perform any necessary validation or sanitation
  
//       // Create a new user in your database (using Mongoose or your preferred database library)
//       // Example using Mongoose:
//       const newUser = await User.create({ name, email, password });
  
//       // Return a success response
//       res.status(201).cookie("temp","lol").json({
//         success: true,
//         message: 'User created successfully',
//         user: newUser,
//       });
//     } catch (error) {
//       // Handle errors
//       res.status(400).json({ success: false, error: error.message });
//     }
//   });

//   app.get("/userid/:id", async (req, res) => {
//     try {
//       const { id } = req.params; // Access ID from route parameters
//       //console.log(req.params);
//       // Assuming User is your Mongoose model
//       const user = await User.findById(id); // Find user by ID
  
//       if (!user) {
//         return res.status(404).json({ success: false, message: "User not found" });
//       }
  
//       res.json({ success: true, user });
//     } catch (error) {
//       res.status(500).json({ success: false, error: error.message });
//     }
//   });
  




// app.post("/users/new",async (req,res)=>{
//     const {name,email,password} = req.body;
//    await User.create({
//     name,
//     email,
//     password,
//    });
  
//       res.json({
//          success:true,
//          message:"Registered Successfully",
//       });
//   });





// app.listen(4000,()=>{
//     console.log("Server is running on port 4000");
// })