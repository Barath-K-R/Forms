import React,{useState,useEffect}from "react";
import { getForm } from "../services/formService";
import Fields from "../components/Fields";
import Builder from "../components/Builder";
import { useParams } from "react-router-dom";
const FormBuilder = () => {
  const [form, setForm] = useState({ name: "", fields: [] });
  const [formId, setFormId] = useState(null);
  const {id}=useParams();
  useEffect(() => {
     const getSpecificForm=async()=>{

          const response=await getForm(id);
          setForm(response.data);
     }
     getSpecificForm();
    
  }, [])
  
  const handleDrop = (item) => {
    setForm((prev) => {
      return { ...prev, fields: [...prev.fields, item.label] };
    });
  };

  return (
    <div className="flex w-screen">
      <Fields />
      <Builder form={form} setForm={setForm} onDrop={handleDrop}/>
    </div>
  );
};

export default FormBuilder;
