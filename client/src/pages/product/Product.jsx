import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import Publish from "@mui/icons-material/Publish";

const Product = () => {
  return (
    <div className="product flex-[4] p-5">
      <div className="productTitleContainer flex items-center justify-between">
        <h1 className="productTitle text-4xl font-bold">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton w-20 p-[5px] bg-teal-500 text-white rounded-md">
            Create
          </button>
        </Link>
      </div>
      <div className="productTop flex">
        <div className="productTopLeft flex-[1]">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight flex-[1] p-5 m-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="productInfoTop flex items-center">
            <img
              src="https://cdn11.bigcommerce.com/s-8ek7z3h3jn/images/stencil/1280x1280/products/9581/55078/playstation-5-console-slim-disk-version-or-9577157__20126.1700731281.jpg?c=1?imbypass=on"
              alt=""
              className="productInfoImg w-24 object-cover rounded-full"
            />
            <span className="productName font-semibold">Playstation 5</span>
          </div>
          <div className="productInfoBottom mt-3">
            <div className="productInfoItem w-56 flex justify-between">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue font-light">500</span>
            </div>
            <div className="productInfoItem w-56 flex justify-between">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue font-light">500</span>
            </div>
            <div className="productInfoItem w-56 flex justify-between">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue font-light">yes</span>
            </div>
            <div className="productInfoItem w-56 flex justify-between">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue font-light">yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom flex-[1] p-5 m-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <form className="productForm flex justify-between">
          <div className="productFormLeft flex flex-col">
            <label className="mb-3 text-gray-500">Product Name</label>
            <input
              className="mb-3 p-[5px] border-b"
              type="text"
              placeholder="Playstation 5"
            />
            <label className="mb-3 text-gray-500">In Stock</label>
            <select className="mb-3 " name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label className="mb-3 text-gray-500">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight flex flex-col justify-around">
            <div className="productUpload flex items-center">
              <img
                src="https://cdn11.bigcommerce.com/s-8ek7z3h3jn/images/stencil/1280x1280/products/9581/55078/playstation-5-console-slim-disk-version-or-9577157__20126.1700731281.jpg?c=1?imbypass=on"
                alt=""
                className="productUploadImg w-24 rounded-lg object-cover mr-5"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton p-2 rounded bg-[#060adb] text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
