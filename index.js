const express = require("express");


const DbConnection = require("./dataBaseConnection");

const dotenv = require("dotenv");

//importing routes 

const usersRouter = require("./routes/user");
const bookRouter = require("./routes/books");

dotenv.config();


const app = express();

DbConnection();
 
const port = 8083; 

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"server is up and running sucessfully",
    });
});

app.use("/users",usersRouter);
app.use("/books",bookRouter);


    


app.get("*",(req,res)=>{
    res.status(404).json({
message:"this route doesnt exist",
    });
});

app.listen(port,()=>{
    console.log(`server is running at port${port}`);
})