import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getForm,addFormData } from "../services/formService";
import NameInput from "../components/NameInput";
import AddressInput from "../components/AddressInput";
import DateInput from "../components/DateInput";
import PhoneNumberInput from "../components/PhoneNumberInput";
const FormDisplay = () => {
  const [form, setform] = useState(null);
  const [formData, setformData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getSpecificForm = async () => {
      try {
        const response = await getForm(id);
        console.log(response.data);
        setform(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSpecificForm();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form submitted:', formData);
    addFormData(formData);
    
  };
  const handleChange = (e) => {
    setformData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const renderFields = (field) => {
    switch (field) {
      case "name":
        return <NameInput handleChange={handleChange}/>;
        break;
      case "address":
        return <AddressInput handleChange={handleChange}/>;
        break;
      case "number":
        return <PhoneNumberInput handleChange={handleChange}/>;
        break;
      case "date":
        return <DateInput handleChange={handleChange}/>;
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col justify-start items-center pt-8 w-full">
      <div className="flex justify-center items-center w-4/6 h-14 border border-gray-300">
        {form?.name}
      </div>
      <form
        className="flex flex-col w-4/6 h-auto border border-gray-300"
        onSubmit={handleSubmit}
      >
        {form?.fields.map(renderFields)}
        <button
          className="h-8 w-16  border mt-4  bg-green-400 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormDisplay;
