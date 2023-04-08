import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "birth",
    headerName: "Birth Date",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    width: 160,
  },
  {
    field: "Gender",
    header: "Gender",
    type: "number",
  },
  { field: "Email", header: "Email", width: 250 },
  { field: "Aadhar", header: "Aadhar" },
  { field: "Flag", header: "Flags" },
];

const people = [
  {
    id: 1,
    name: "Vansh",
    birth: "23-1-2023",
    Gender: "Male",
    Email: "vansh@gmail.com",
    Aadhar: 3310,
    Flag: "flag",
  },
  {
    id: 2,
    name: "Abhi",
    birth: "23-9-2023",
    Gender: "Male",
    Email: "vansh@gmail.com",
    Aadhar: 3310,
    Flag: "flag",
  },
  {
    id: 3,
    name: "Bunty",
    birth: "23-2-2023",
    Gender: "Male",
    Email: "vansh@gmail.com",
    Aadhar: 3310,
    Flag: "flag",
  },
  {
    id: 4,
    name: "Cinderela",
    birth: "23-7-2023",
    Gender: "Male",
    Email: "vansh@gmail.com",
    Aadhar: 3310,
    Flag: "flag",
  },
  {
    id: 5,
    name: "Zen",
    birth: "23-3-2023",
    Gender: "Male",
    Email: "vansh@gmail.com",
    Aadhar: 3310,
    Flag: "flag",
  },
];

export default function AppGrid() {
  return (
    <div
      style={{ width: "100%", backgroundColor: "white" }}
      className="h-[100vh]"
    >
      <DataGrid
        rows={people}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        // pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
