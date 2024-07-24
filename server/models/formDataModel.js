import mongoose from 'mongoose'

const formDataSchema=new mongoose.Schema({},{strict:false},{timestamps:true});

export const formDataModel=mongoose.model('formData',formDataSchema);