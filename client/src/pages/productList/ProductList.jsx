import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../dummyData";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser flex items-center">
            <img
              className="productListImg w-8 h-8 rounded-full object-cover mr-2"
              src={params.row.img}
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
    },

    {
      field: "stock",
      headerName: "Stock",
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit rounded-lg pt-1 pb-1 pl-3 pr-3 bg-green-400 text-white cursor-pointer mr-5">
                Edit
              </button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete text-red-600 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList flex-[4]">
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

export default ProductList;
