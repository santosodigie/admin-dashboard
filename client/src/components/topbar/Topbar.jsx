import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const Topbar = () => {
  return (
    <div className="topbar w-full h-[50px] bg-white sticky top-0 z-50">
      <div className="topbarWrapper h-full pl-5 pr-5 flex items-center justify-between">
        <div className="topLeft">
          <span className="logo font-bold text-3xl text-[#020887] cursor-pointer">
            santosadmin
          </span>
        </div>
        <div className="topRight flex items-center">
          <div className="topbarIconContainer relative cursor-pointer mr-3 text-gray-600">
            <NotificationsNoneIcon />
            <span className="topIconBadge absolute w-4 h-4 top-[-5px] right-[2px] bg-red-600 text-white rounded-[50%] flex items-center justify-center">
              2
            </span>
          </div>
          <div className="topbarIconContainer relative cursor-pointer mr-3 text-gray-600">
            <LanguageIcon />
            <span className="topIconBadge absolute w-4 h-4 top-[-5px] right-[2px] bg-red-600 text-white rounded-[50%] flex items-center justify-center">
              2
            </span>
          </div>
          <div className="topbarIconContainer relative cursor-pointer mr-3 text-gray-600">
            <SettingsIcon />
          </div>
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
            alt=""
            className="topAvatar w-10 h-10 rounded-[50%] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
