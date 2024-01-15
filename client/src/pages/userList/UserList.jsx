import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../dummyData";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser flex items-center">
            <img
              className=" w-8 h-8 rounded-full object-cover mr-2"
              src={params.row.avatar}
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit rounded-lg pt-1 pb-1 pl-3 pr-3 bg-green-400 text-white cursor-pointer mr-5">
                Edit
              </button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete text-red-600 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList flex-[4]">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
