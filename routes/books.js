const express =require("express");
const { getAllBooks, getSingleBookById,getAllIssuedBooks
,addNewBook,updateBookById} = require("../controllers/book-controller");
const{books}=require("../data/books.json");
const {users}=require("../data/users.json");

const{ UserModel , BookModel}=require("../models")

const router = express.Router();

//route: /books
//description : get all the books 

//router.get("/",(req,res)=>{
//    res.status(200).json({
 //       success:true,
  //      data: books
   // });
//});

router.get("/",getAllBooks);


//route: /books
//description : get books by id 

router.get("/:id",getSingleBookById);

    //route: /books/issued/by-user
    //descr. get all the issued books 

    router.get("/issued/by-user",getAllIssuedBooks);

//create a new book 
    router.post("/",addNewBook);
    //updating the book 
    router.put('/:id',updateBookById);

 module.exports = router;