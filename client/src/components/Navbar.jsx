import React from "react";
import { CgHomeAlt } from "react-icons/cg";
const Navbar = ({user}) => {
  return <div className='flex items-center h-10 bg-red-600'>
    <h1 className="text-xl font-bold">Forms</h1>
    <CgHomeAlt size={30} className="cursor-pointer"/>
    <div className="profile">
      <img src={user?.photos[0].value} alt="" />
    </div>
  </div>;
};

export default Navbar;
