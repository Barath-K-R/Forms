import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";
const FormCard = ({ form }) => {
  const [mouseOver, setmouseOver] = useState(false);
  return (
    <div className="flex realtive items-center gap-9 w-[96%] h-14 hover:w-[97%] hover:h-18 hover:rounded-xl hover:border pl-6 bg-white shadow-md">
      <CgFileDocument size={27} />
      <h2>{form.name}</h2>
      <Link to={`/formbuilder/${form._id}`}>
        <div
          className="flex justify-center items-center absolute right-[145px] top-[170px] w-9 h-9 rounded-3xl bg-gray-200"
          onMouseOver={() => setmouseOver(true)}
          onMouseLeave={() => setmouseOver(false)}
        >
          <AiFillEdit size={20} color={mouseOver ? "green" : "black"} />
        </div>
      </Link>
    </div>
  );
};

export default FormCard;
