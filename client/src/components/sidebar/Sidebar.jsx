import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EuroIcon from "@mui/icons-material/Euro";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";

const Sidebar = () => {
  return (
    <div className="sidebar flex-1 h-[calc(100vh-50px)] bg-[#f6f6ff] top-[50px]">
      <div className="sidebarwarpper p-5 text-[#555]">
        <div className="sidebarMenu mb-3">
          <h3 className="sidebarTitle text-[14px] text-[#b9b9b9] font-bold">
            Dashboard
          </h3>
          <ul className="sidebarList p-1">
            <Link to="/">
              <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] active cursor-pointer">
                <LineStyleIcon className=" mr-1 text-2xl" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] cursor-pointer">
              <TimelineIcon className=" mr-1 text-2xl" />
              Analytics
            </li>
            <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] cursor-pointer">
              <TrendingUpIcon className=" mr-1 text-2xl" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu mb-3">
          <h3 className="sidebarTitle text-[14px] text-[#b9b9b9] font-bold">
            Quick Menu
          </h3>
          <ul className="sidebarList p-1">
            <Link to="/users">
              <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] active cursor-pointer">
                <PersonOutlineIcon className=" mr-1 text-2xl" />
                Users
              </li>
            </Link>
            <Link to="/products">
              <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] cursor-pointer">
                <StorefrontIcon className=" mr-1 text-2xl" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] cursor-pointer">
              <EuroIcon className=" mr-1 text-2xl" />
              Transactions
            </li>
            <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] cursor-pointer">
              <BarChartIcon className=" mr-1 text-2xl" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu mb-3">
          <h3 className="sidebarTitle text-[14px] text-[#b9b9b9] font-bold">
            Notifications
          </h3>
          <ul className="sidebarList p-1">
            <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] active cursor-pointer">
              <MailOutlineIcon className=" mr-1 text-2xl" />
              Mail
            </li>
            <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] cursor-pointer">
              <DynamicFeedIcon className=" mr-1 text-2xl" />
              Feedback
            </li>
            <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] cursor-pointer">
              <ChatBubbleOutlineIcon className=" mr-1 text-2xl" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu mb-3">
          <h3 className="sidebarTitle text-[14px] text-[#b9b9b9] font-bold">
            Staff
          </h3>
          <ul className="sidebarList p-1">
            <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] active cursor-pointer">
              <WorkOutlineIcon className=" mr-1 text-2xl" />
              Manage
            </li>
            <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] cursor-pointer">
              <TimelineIcon className=" mr-1 text-2xl" />
              Analytics
            </li>
            <li className="sidebarListItem p-2 flex items-center rounded-[10px] active:bg-[#d1d2ff] hover:bg-[#d1d2ff] cursor-pointer">
              <ReportIcon className=" mr-1 text-2xl" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
