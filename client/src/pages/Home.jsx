import React,{useState,useEffect}from 'react'
import { getAllForms } from '../services/formService'
import FormCard from '../components/FormCard'
import {useUser} from '../context/UserContext'
const Home = () => {
  const [forms, setForms] = useState([])
  const {user}=useUser()
  useEffect(() => {
      const getFormsList=async()=>{
        console.log(user._id)
         const formsList=await getAllForms(user._id);
         console.log(formsList)
         setForms(formsList);
      }
      getFormsList();
  }, [])
  
  return (
    <div className='w-screen bg-gray-100'>
        <div className="flex justify-between items-center w-full p-2 pl-6 pr-8 bg-white">
          <h2>My Forms</h2>
          <button className='h-9 w-20 rounded bg-green-500'>New Form</button>
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