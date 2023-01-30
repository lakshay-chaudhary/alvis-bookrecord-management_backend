const express =require("express");
const{ users }=require("../data/users.json");
const{getAllUsers,getSingleUserById,deleteUser,updateUserById,createNewUser,getSubscriptionDetailsById}=require("../controllers/user-controller")

const router = express.Router();

router.get('/',getAllUsers);
//priting data of user if found 

router.get('/:id',getSingleUserById);
//adding the user with given information in body 

router.post('/',createNewUser);
//updating the user using given id 
router.put('/:id',updateUserById);
    
//deleting the user with given id 

    router.delete('/:id',deleteUser);


router.get("/users/subscription-detail/:id",getSubscriptionDetailsById);


router.get("*",(req,res)=>{
    res.status(404).json({
    message:"this route doesnt exsist"
});
});

    //default export
    module.exports = router;