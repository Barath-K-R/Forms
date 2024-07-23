import React,{useState,useEffect}from 'react'
import { getAllForms, newForm } from '../services/formService'
import FormCard from '../components/FormCard'
import {useUser} from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [forms, setForms] = useState([])
  const [newFormModal, setnewFormModal] = useState(false)
  const {user}=useUser()
  const navigate=useNavigate()
  useEffect(() => {
      const getFormsList=async()=>{
         const formsList=await getAllForms(user._id);
         setForms(formsList);
      }
      getFormsList();
  }, [])
  
  const handleNewForm=async()=>{
    try {
      
      const form=await newForm(user._id);
      navigate(`/formbuilder/${form._id}`)
    } catch (error) {
      console.log(error)
    }
    
      
  }
  return (
    <div className='w-screen bg-gray-100'>
        <div className="flex justify-between items-center w-full p-2 pl-6 pr-8 bg-white">
          <h2>My Forms</h2>
          <button className='h-9 w-20 rounded bg-green-500' onClick={handleNewForm}>New Form</button>
        </div>
        <div className="flex flex-col items-center w-full mt-6 ">
           {forms?.map(form=>{
              return <FormCard form={form} key={form._id}/>
           })}
        </div>
    </div>
  )
}

export default Home