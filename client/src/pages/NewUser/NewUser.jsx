import React from "react";

const NewUser = () => {
  return (
    <div className="newUser flex-[4]">
      <h1 className="newUserTitle text-2xl font-semibold">New User</h1>
      <form className="newUserForm flex flex-wrap">
        <div className="newUserItem w-96 flex flex-col mt-2 mr-5">
          <label className="mb-3 text-gray-400 font-semibold text-base">
            Username
          </label>
          <input
            className=" p-3 h-12 rounded-sm border-[1px]"
            type="text"
            placeholder="John"
          />
        </div>
        <div className="newUserItem w-96 flex flex-col mt-2 mr-5">
          <label className="mb-3 text-gray-400 font-semibold text-base">
            Full Name
          </label>
          <input
            className=" p-3 h-12 rounded-sm border-[1px]"
            type="text"
            placeholder="John Smith"
          />
        </div>
        <div className="newUserItem w-96 flex flex-col mt-2 mr-5">
          <label className="mb-3 text-gray-400 font-semibold text-base">
            Email
          </label>
          <input
            className=" p-3 h-12 rounded-sm border-[1px]"
            type="email"
            placeholder="John@gmail.com"
          />
        </div>
        <div className="newUserItem w-96 flex flex-col mt-2 mr-5">
          <label className="mb-3 text-gray-400 font-semibold text-base">
            Password
          </label>
          <input
            className=" p-3 h-12 rounded-sm border-[1px]"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="newUserItem w-96 flex flex-col mt-2 mr-5">
          <label className="mb-3 text-gray-400 font-semibold text-base">
            Phone
          </label>
          <input
            className=" p-3 h-12 rounded-sm border-[1px]"
            type="text"
            placeholder="+353 899234568"
          />
        </div>
        <div className="newUserItem w-96 flex flex-col mt-2 mr-5">
          <label className="mb-3 text-gray-400 font-semibold text-base">
            Address
          </label>
          <input
            className=" p-3 h-12 rounded-sm border-[1px]"
            type="text"
            placeholder="Dublin | Ireland"
          />
        </div>
        <div className="newUserItem w-96 flex flex-col mt-2 mr-5">
          <label className="mb-3 text-gray-400 font-semibold text-base">
            Gender
          </label>
          <div className="newUserGender mt-3">
            <input type="radio" name="gender" id="male" value="male" />
            <label className="m-2 text-lg text-[#555]" for="male">
              Male
            </label>
            <input type="radio" name="gender" id="Female" value="female" />
            <label className="m-2 text-lg text-[#555]" for="female">
              Female
            </label>
            <input type="radio" name="gender" id="other" value="other" />
            <label className="m-2 text-lg text-[#555]" for="other">
              Other
            </label>
          </div>
        </div>
        <div className="newUserItem flex flex-col mt-3 mr-5">
          <label className="mb-[10px] text-base font-semibold text-gray-400">
            Active
          </label>
          <select
            className="newUserSelect border h-12 w-96"
            name="active"
            id="active"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton w-52 bg-[#00098d] text-white pt-2 pb-2 pl-3 pr-3 rounded-xl h-10 mt-12">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewUser;
