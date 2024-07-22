import userModel from "../models/userModel.js";

export const checkUser=async(req,res)=>{
    try {
        const { displayName, email, photos } = req.user;
        const profileImage = photos && photos.length > 0 ? photos[0].value : null;
        let user=await userModel.findOne({username:displayName})
        if(!user){
             user=new userModel({
                displayName,
                email,
                profileImage
            })
            await user.save();
        }
        console.log(user)
        if (user) {
            res.redirect(`${process.env.CLIENT_URL}?userId=${user._id}`);
      } else {
        // Handle case where req.user is not available
        res.status(401).json({
          message: "User not authenticated"
        });
      }
    } catch (error) {
        console.log(error)
    }
    
    };