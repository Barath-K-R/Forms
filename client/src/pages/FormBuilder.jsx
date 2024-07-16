import React,{useState}from "react";
import Fields from "../components/Fields";
import Builder from "../components/Builder";
const FormBuilder = () => {
  const [form, setForm] = useState({ name: "", fields: [] });
  const [formId, setFormId] = useState(null);

  const handleDrop = (item) => {
    const newField = { id: Date.now(), type: item.label };
    setForm((prev) => {
      return { ...prev, fields: [...prev.fields, newField] };
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
