import React from "react";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
const FormCard = ({ form }) => {
  return (
    <Link to={`/formbuilder/${form._id}`} className="pl-6 w-full">
      <div className="flex items-center gap-9 w-[96%] h-14 hover:w-[97%] hover:h-18 hover:rounded-xl hover:border pl-6 bg-white cursor-pointer shadow-md">
        <CgFileDocument size={27} />
        <h2>{form.name}</h2>
      </div>
    </Link>
  );
};

export default FormCard;
