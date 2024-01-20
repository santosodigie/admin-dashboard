import React from "react";

const NewProduct = () => {
  return (
    <div className="newProduct flex-[4]">
      <h1 className="addProductTitle font-bold text-4xl">New Product</h1>
      <form className="addProductForm mt-[10px]">
        <div className="addProductItem p-[10px] w-64 flex flex-col mp-[10px]">
          <label className="text-gray-500 font-semibold mb-[10px]">Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem p-[10px] w-64 flex flex-col mb-[10px]">
          <label className="text-gray-500 font-semibold mb-[10px] ">Name</label>
          <input
            type="text"
            placeholder="Apple Airpods"
            className="border h-12 rounded-md w-80"
          />
        </div>
        <div className="addProductItem p-[10px] w-64 flex flex-col mb-[10px]">
          <label className="text-gray-500 font-semibold mb-[10px]">Stock</label>
          <input
            type="text"
            placeholder="123"
            className="border h-12 rounded-md w-80"
          />
        </div>
        <div className="addProductItem p-[10px] w-64 flex flex-col mb-[10px]">
          <label className="text-gray-500 font-semibold mb-[10px]">
            Active
          </label>
          <select
            className="p-[10px] border  h-12 rounded-md w-80"
            name="active"
            id="active"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton mt-3 pt-2 pb-2 pl-3 pr-3 rounded-lg bg-[#021db6] text-white font-semibold">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
