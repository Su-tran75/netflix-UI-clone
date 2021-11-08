import "./listList.scss";
import React, { useContext, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists } from "../../context/listContext/listApiCalls";

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  // const handleDelete = (id) => {
  //   deleteMovie(id, dispatch);
  // };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/product/" + params.row._id, movie: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              // onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}