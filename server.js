require("dotenv").config();
const express = require("express");
const app = express()
const router = require("./Routes/adminRoute")
const connectDb = require("./db/db")

app.use(express.json());

app.use("/api/adminRoute",router);
// app.use("/api/login",router);



const PORT = 1000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is Running on port:${PORT}`);
        
    })
})

