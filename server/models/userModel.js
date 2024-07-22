import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    googleId:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:[true,'name is missing']
    },
    email:{
        type:String,
        required:[true,'email is missing']
    },
    profileimage:{
        type:String,
        required:[true,"profileimage is missing"]
    },
    
})

export default mongoose.model('users',userSchema);