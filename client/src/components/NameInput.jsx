import React from "react";

const NameInput = ({ handleChange }) => {
  return (
    <div className="flex flex-col p-4 w-8/12 border border-gray-200">
      <label htmlFor="name">Name</label>
      <section className="flex gap-4">
        <input
          className="border border-gray-200"
          type="text"
          placeholder="First Name"
          name="firstname"
          onChange={handleChange}
        />
        <input
          className="border border-gray-200"
          type="text"
          placeholder="Last Name"
          name="lastname"
          onChange={handleChange}
        />
      </section>
    </div>
  );
};

export default NameInput;
