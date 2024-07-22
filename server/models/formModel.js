import mongoose from 'mongoose';

const formSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    fields:[String]
    
})

const formModel=mongoose.model('forms',formSchema);

export default formModel;