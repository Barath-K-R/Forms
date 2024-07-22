import userModel from "../models/userModel.js";

export const findUserById=async(req,res)=>{
    console.log("finding user")
    try {
        const userId=req.params.id;
        const user=await userModel.findById(userId)
        console.log(user)
        res.status(200).json({user:user});
    } catch (error) {
        console.log(error);
    }
}