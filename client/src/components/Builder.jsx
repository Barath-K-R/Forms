import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";
import NameInput from "./NameInput";
import AddressInput from "./AddressInput";
import DateInput from "./DateInput";
import PhoneNumberInput from "./PhoneNumberInput";
import { useUser } from "../context/UserContext";
import { updateForm } from "../services/formService";

const Builder = ({ form, setForm, onDrop }) => {
  const { user } = useUser();
  const navigate=useNavigate();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FIELD",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const renderFields = (field) => {
    switch (field) {
      case "name":
        return <NameInput />;
        break;
      case "address":
        return <AddressInput />;
        break;
      case "number":
        return <PhoneNumberInput />;
        break;
      case "date":
        return <DateInput />;
        break;
      default:
        break;
    }
  };
  const handleBuild=async()=>{
    try {
      const updatedForm=updateForm(form);
    } catch (error) {
      console.log(error);
    }
  
  }

  
  return (
    <div className="flex flex-col items-center w-full bg-gray-100">
      <div className="flex w-8/12 h-14 mt-6 text-2xl justify-center items-center shadow-2xl border border-gray-200 bg-white">
         {form.name}
      </div>
      <div
        ref={drop}
        className={`flex flex-col gap-8 w-8/12 min-h-52 p-4 pl-12 ${
          isOver ? "bg-blue-300" : "bg-white"
        } shadow-2xl`}
      >
        {form.fields.map(renderFields)}
      </div>
      <button className="h-8 w-16  border mt-4  bg-green-400 rounded-lg" onClick={handleBuild}>Build</button>
      <button className="h-8 w-28  border mt-4  bg-green-400 rounded-lg" onClick={()=>navigate(`/formdisplay/${form._id}`)}>Access Form</button>
    </div>
  );
};

export default Builder;
