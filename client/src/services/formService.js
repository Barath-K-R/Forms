import axios from 'axios';
const api=axios.create({
    baseUrl:"http://localhost:5000/api"
})
export const newForm=async(id)=>{
  console.log('creating new form')
  try {
    const response=await axios.post('http://localhost:5000/api/forms/new',{id});
    console.log(response.data.newForm)
    return response.data.newForm;
  } catch (error) {
    
  }
}
export const updateForm=async(form)=>{
  console.log("updating form")
      try {
        const formResponse=await axios.put(`http://localhost:5000/api/forms/${form._id}`,form);
        console.log(formResponse.data)
        return formResponse;
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