import axios from 'axios';
const api=axios.create({
    baseUrl:"http://localhost:5000/api"
})

export const addForm=async(form,user)=>{
      try {
        const formResponse=await axios.post(`http://localhost:5000/api/forms/addform/${user._id}`,form);
        console.log(formResponse)
      } catch (error) {
        console.log(error)
      }
}

export const getAllForms=async(userId)=>{
    try {
      const response=await axios.get(`http://localhost:5000/api/forms/userforms/${userId}`)
      return response.data.formsList;
    } catch (error) {
      console.log(error)
    }
}

export const getForm=async(id)=>{
     try {
        const form=await axios.get(`http://localhost:5000/api/forms/${id}`);
        return form;
     } catch (error) {
      
     }
}