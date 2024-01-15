import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSm = () => {
  return (
    <div className="widgetSm flex-[1] p-5 mr-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <span className="widgetSmtitle text-2xl font-semibold">
        New Join Members
      </span>
      <ul className="widgetsmlist ">
        <li className="widgetsmlistitem flex items-center justify-between mt-5 mb-5">
          <img
            src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
            alt=""
            className="widgetsmimg h-10 w-10 rounded-[50%] object-cover"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-bold">Amy Smith</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center rounded-md pt-2 pb-2 pl-3 pr-3 bg-slate-200 text-gray-600 cursor-pointer">
            <VisibilityIcon className="mr-1 text-xl" />
            Display
          </button>
        </li>
        <li className="widgetsmlistitem flex items-center justify-between mt-5 mb-5">
          <img
            src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
            alt=""
            className="widgetsmimg h-10 w-10 rounded-[50%] object-cover"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-bold">Amy Smith</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center rounded-md pt-2 pb-2 pl-3 pr-3 bg-slate-200 text-gray-600 cursor-pointer">
            <VisibilityIcon className="mr-1 text-xl" />
            Display
          </button>
        </li>
        <li className="widgetsmlistitem flex items-center justify-between mt-5 mb-5">
          <img
            src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
            alt=""
            className="widgetsmimg h-10 w-10 rounded-[50%] object-cover"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-bold">Amy Smith</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center rounded-md pt-2 pb-2 pl-3 pr-3 bg-slate-200 text-gray-600 cursor-pointer">
            <VisibilityIcon className="mr-1 text-xl" />
            Display
          </button>
        </li>
        <li className="widgetsmlistitem flex items-center justify-between mt-5 mb-5">
          <img
            src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
            alt=""
            className="widgetsmimg h-10 w-10 rounded-[50%] object-cover"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-bold">Amy Smith</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center rounded-md pt-2 pb-2 pl-3 pr-3 bg-slate-200 text-gray-600 cursor-pointer">
            <VisibilityIcon className="mr-1 text-xl" />
            Display
          </button>
        </li>
        <li className="widgetsmlistitem flex items-center justify-between mt-5 mb-5">
          <img
            src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
            alt=""
            className="widgetsmimg h-10 w-10 rounded-[50%] object-cover"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-bold">Amy Smith</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center rounded-md pt-2 pb-2 pl-3 pr-3 bg-slate-200 text-gray-600 cursor-pointer">
            <VisibilityIcon className="mr-1 text-xl" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
