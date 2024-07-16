import React from "react";

const AddressInput = () => {
  return (
    <div className="flex flex-col p-4 border border-gray-200">
      <section className="flex flex-col">
        <label htmlFor="address">Address</label>
        <input className='border border-gray-200' type="text" />
      </section>
      <section className="flex flex-col">
        <label htmlFor="streetaddress">Street Address</label>
        <input className='border border-gray-200' type="text" />
      </section>
      <label htmlFor="addressline2">Address Line 2</label>
      <section className="flex flex-col">
        <input className='border border-gray-200' type="text" />
        <input className='border border-gray-200' type="text" />
      </section>
      <section></section>
    </div>
  );
};

export default AddressInput;
