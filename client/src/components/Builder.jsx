import React, { useState } from "react";
import { useDrop } from "react-dnd";
import NameInput from "./NameInput";
import AddressInput from "./AddressInput";
import DateInput from "./DateInput";
import PhoneNumberInput from "./PhoneNumberInput";

import { CgHomeAlt } from "react-icons/cg";
const Builder = ({ form, setForm, onDrop }) => {

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FIELD",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const renderFields = (field) => {
    switch (field.type) {
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
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <div className="text-center">
        <label htmlFor="formname">Form Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div
        ref={drop}
        className={`flex flex-col gap-8 w-8/12 min-h-52 p-4 pl-12 ${
          isOver ? "bg-blue-300" : "bg-white"
        } border-2 border-solid border-black`}
      >
        {form.fields.map(renderFields)}
      </div>
      <button className="h-8 w-16  border bg-green-400 rounded-lg" >Build</button>
    </div>
  );
};

export default Builder;
