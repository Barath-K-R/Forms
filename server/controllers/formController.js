import formModel from "../models/formModel.js";

export const getUserForms=async(req,res)=>{
    const id=req.params.userId;
    console.log('fetching '+id+" s forms")
    try {
        const forms=await formModel.find({userId:id});
        res.status(200).json({
            message:'forms fetched successfully',
            formsList:forms
        })
    } catch (error) {
        console.log(error)
    }
}
export const addForm=async(req,res)=>{
    console.log(req.params.id)
    const {name,fields}=req.body
    try {
        const form={
            name:name,
            fields:fields,
            userId:req.params.id
        };
        const newForm=new formModel(form);
        await newForm.save();
        res.status(200).json({message:"form saved successfully"})
    } catch (error) {
        console.log(error);
    }
}

export const getForm=async(req,res)=>{
    const id=req.params.userId
    try {
        const form=await formModel.findOne(id);
        res.status(200).send(form)
    } catch (error) {
        console.log(error);
    }
}