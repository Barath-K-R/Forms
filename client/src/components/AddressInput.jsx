import React from "react";

const AddressInput = ({handleChange}) => {
  return (
    <div className="flex flex-col p-4 border border-gray-200">
      <section className="flex flex-col">
        <label htmlFor="address">Address</label>
        <input className='border border-gray-200' type="text" name="address" onChange={handleChange}/>
      </section>
      <section className="flex flex-col">
        <label htmlFor="streetaddress">Street Address</label>
        <input className='border border-gray-200' type="text" name="streetaddress" onChange={handleChange}/>
      </section>
      <label htmlFor="addressline2">Address Line 2</label>
      <section className="flex flex-col">
        <input className='border border-gray-200' type="text" name="addressfirstline" onChange={handleChange}/>
        <input className='border border-gray-200' type="text" name="addresssecondline" onChange={handleChange}/>
      </section>
      <section></section>
    </div>
  );
};

export default AddressInput;
