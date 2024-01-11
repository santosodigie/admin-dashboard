import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const FeaturedInfo = () => {
  return (
    <div className="featured w-full flex justify-between">
      <div className="featuredItem flex-[1] ml-5 mr-5 p-8 rounded-xl cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="featuredTitle text-xl">Revenue</span>
        <div className="featuredmoneycontainer mt-2 mb-2 flex items-center">
          <span className="featuredMoney text-2xl font-bold">€2,233</span>
          <span className="featuredMoneyRate flex items-center ml-5">
            -11.3 <ArrowDownwardIcon className="featuredIcon text-red-600" />
          </span>
        </div>
        <span className="featuredSub text-[15px] text-gray-500">
          Compared to last month
        </span>
      </div>
      <div className="featuredItem flex-[1] ml-5 mr-5 p-8 rounded-xl cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="featuredTitle text-xl">Sales</span>
        <div className="featuredmoneycontainer mt-2 mb-2 flex items-center">
          <span className="featuredMoney text-2xl font-bold">€5,233</span>
          <span className="featuredMoneyRate flex items-center ml-5">
            -1.3 <ArrowDownwardIcon className="featuredIcon text-red-600" />
          </span>
        </div>
        <span className="featuredSub text-[15px] text-gray-500">
          Compared to last month
        </span>
      </div>
      <div className="featuredItem flex-[1] ml-5 mr-5 p-8 rounded-xl cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="featuredTitle text-xl">Cost</span>
        <div className="featuredmoneycontainer mt-2 mb-2 flex items-center">
          <span className="featuredMoney text-2xl font-bold">€2,223</span>
          <span className="featuredMoneyRate flex items-center ml-5">
            +3.3{" "}
            <ArrowUpwardIcon className="featuredIcon text-2xl text-green-500" />
          </span>
        </div>
        <span className="featuredSub text-[15px] text-gray-500">
          Compared to last month
        </span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
