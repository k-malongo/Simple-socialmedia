const router = require ("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// update user
router.patch("/:id", async(req,res)=>{
    if (req.body.userId === req.params.id || req.body.isAdmin){

        if (req.body.password) {
            try {
                const salt =await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch(error){
           return res.status(500).json("bcryp error")  

            }
            try {
                const user =await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                });
                res.status(200).json("account has been updated")
                
            } catch (error) {
             return res.status(500).json(error)  
                
            }
            
        }   
    } else{
        return res.status(403).json("You can update only your account")
    }
})
// delete user

router.delete("/:id", async(req,res)=>{
    if (req.body.userId === req.params.id || req.body.isAdmin){
            
            try {
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("account has been deleted")
                
            } catch (error) {
                return res.status(500).json("delete error")  
                
            }
                     
    } else{
        return res.status(403).json("You can delete only your account")
    }
});
// get user
router.get("/:id", async (req, res)=>{
    try {
        const user = await User.findById( req.params.id)
        const {password, updatedAt, ...other} =user._doc
        res.status(200).json(other)
        
    } catch (error) {
        res.status(500).json("cannot find user")
        
    }
})
// follow a user
router.patch("/:id/follow", async (req,res)=>{
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({$push: {followers: req.body.userId}})
                await currentUser.updateOne({$push: {following: req.params.id}})
                res.status(200).json("user has been followed")
            } else {
               res.status(403).json("you already follow this user")
            }
        } catch (error) {
            res.status(500).json("cannot follow user")

        }
        
    } else {
        res.status(403).json ("you cant follow yourself")
    }
})
// unfolow user
router.patch("/:id/unfollow", async (req,res)=>{
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({$pull: {followers: req.body.userId}})
                await currentUser.updateOne({$pull: {following: req.params.id}})
                res.status(200).json("user has been unfollowed")
            } else {
               res.status(403).json("you dont follow this user")
            }
        } catch (error) {
            res.status(500).json("cannot follow user")

        }
        
    } else {
        res.status(403).json ("you cant unfollow yourself")
    }
})

module.exports =router