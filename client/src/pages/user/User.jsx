import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PublishIcon from "@mui/icons-material/Publish";

const User = () => {
  return (
    <div className="user flex-[4] p-5">
      <div className="userTitleContainer flex items-center justify-between">
        <h1 className="userTitle text-4xl font-bold">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton w-20 p-1 bg-teal-500 rounded-md cursor-pointer text-white text-xl">
            Create
          </button>
        </Link>
      </div>
      <div className="userContainer flex mt-5">
        <div className="userShow flex-[1] p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="userShowTop flex items-center">
            <img
              className="userShowImg w-10 h-10 rounded-full object-cover"
              src="https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_5845266f99.jpg"
              alt=""
            />
            <div className="userShowTopTitle flex flex-col ml-5">
              <span className="userShowUsername font-semibold">
                Anna Becker
              </span>
              <span className="userShowUserTitle font-light">
                Software Engineer
              </span>
            </div>
          </div>
          <div className="userShowBottom mt-5">
            <span className="userShowTitle text-sm font-semibold text-gray-400">
              Acount Details
            </span>
            <div className="userShowInfo flex items-center mt-5 mb-5 text-gray-600">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle ml-3">annabeck99</span>
            </div>
            <div className="userShowInfo flex items-center mt-5 mb-5 text-gray-600">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle ml-3">10.12.1999</span>
            </div>
            <span className="userShowTitle text-sm font-semibold text-gray-400">
              Contact Details
            </span>
            <div className="userShowInfo flex items-center mt-5 mb-5 text-gray-600">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle ml-3">+353 99765432</span>
            </div>
            <div className="userShowInfo flex items-center mt-5 mb-5 text-gray-600">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle ml-3">
                annabeck99@gmail.com
              </span>
            </div>
            <div className="userShowInfo flex items-center mt-5 mb-5 text-gray-600">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle ml-3">Dublin | Ireland</span>
            </div>
          </div>
        </div>
        <div className="userUpdate flex-[2] p-5 ml-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <span className="userUpdateTitle text-2xl font-semibold">Edit</span>
          <form className="userUpdateForm flex justify-between mt-5">
            <div className="userUpdateLeft">
              <div className="userUpdateItem flex flex-col mt-3">
                <label className="mb-[5px] text-sm">Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput w-64 border-b h-7"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-3">
                <label className="mb-[5px] text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Beck"
                  className="userUpdateInput w-64 border-b h-7"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-3">
                <label className="mb-[5px] text-sm">Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput w-64 border-b h-7"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-3">
                <label className="mb-[5px] text-sm">Phone</label>
                <input
                  type="text"
                  placeholder="+353 99765432"
                  className="userUpdateInput w-64 border-b h-7"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-3">
                <label className="mb-[5px] text-sm">Address</label>
                <input
                  type="text"
                  placeholder="Dublin | Ireland"
                  className="userUpdateInput w-64 border-b h-7"
                />
              </div>
            </div>
            <div className="userUpdateRight flex flex-col justify-between">
              <div className="userUpdateUpload flex items-center">
                <img
                  className="userUpdateImg w-36 rounded-lg object-cover mr-5"
                  src="https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_5845266f99.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon cursor-pointer" />
                </label>
                <input type="file" id="file" className=" hidden" />
              </div>
              <button className="userUpdateButton rounded-md p-1 bg-[#0d1581] text-white font-semibold">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
