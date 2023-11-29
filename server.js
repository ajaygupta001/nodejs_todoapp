import { DBConnection } from "./data/database.js";
import { app } from "./app.js";

DBConnection();



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
})