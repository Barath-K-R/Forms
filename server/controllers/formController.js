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

export const newForm = async (req, res) => {
    const { id } = req.body; 
    try {
        const newForm = new formModel({
            userId: id, 
        });
        console.log(newForm);
        await newForm.save();
        res.status(200).json({
            message: "Form is created",
            newForm: newForm
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
export const updateForm=async(req,res)=>{
    console.log('updating form');
    const form=req.body;
    const formId=req.params.formId;
    console.log(form)
    console.log(formId)
    try {
       const updatedForm=await formModel.findByIdAndUpdate(formId,form,{new:true});
       res.status(200).json({message:"form updated successfully",updatedForm:updatedForm});
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