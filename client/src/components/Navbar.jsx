import React from "react";
import { CgHomeAlt } from "react-icons/cg";
import { useUser } from "../context/UserContext";
const Navbar = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex items-center justify-between h-14 bg-red-600">
      <section className="flex gap-2 pl-4">
        <CgHomeAlt size={30} className="cursor-pointer" />
        <h1 className="text-xl font-bold">Forms</h1>
      </section>

      <div className="flex items-center gap-4 pr-4">
        <img src={user?.profileimage} alt="" className="h-9 w-9 rounded-3xl cursor-pointer" />
        <p className="font-semibold">{user?.username}</p>
      </div>
    </div>
  );
};

export default Navbar;
