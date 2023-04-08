import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

function RenderDate(props) {
  const { hasFocus, value } = props;
  const buttonElement = React.useRef(null);
  const rippleRef = React.useRef(null);
  const flagColor = props.value;

  React.useLayoutEffect(() => {
    if (hasFocus) {
      const input = buttonElement.current?.querySelector("input");
      input?.focus();
    } else if (rippleRef.current) {
      // Only available in @mui/material v5.4.1 or later
      rippleRef.current.stop({});
    }
  }, [hasFocus]);

  return (
    <>
      {flagColor === "red" && (
        <button
          className="focus:outline-none text-white w-[8rem] bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Safe User
        </button>
      )}
      {flagColor === "green" && (
        <button 
          className="focus:outline-none text-white w-[8rem] bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Reported User
        </button>
      )}
    </>
  );
}

RenderDate.propTypes = {
  /**
   * If true, the cell is the active element.
   */
  hasFocus: PropTypes.bool.isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: PropTypes.instanceOf(Date),
};

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
  { field: "Flag", header: "Flags", renderCell: RenderDate, width: 200 },
];

const people = [
  {
    id: 1,
    name: "Vansh",
    birth: "23-1-2023",
    Gender: "Male",
    Email: "vansh@gmail.com",
    Aadhar: 3310,
    // Message will come with reports.message for red flag and for green, it will be from recommends.
    Flag: "red",
  },
  {
    id: 2,
    name: "Abhi",
    birth: "23-9-2023",
    Gender: "Male",
    Email: "vansh@gmail.com",
    Aadhar: 3310,
    Flag: "green",
  },
  {
    id: 3,
    name: "Bunty",
    birth: "23-2-2023",
    Gender: "Male",
    Email: "vansh@gmail.com",
    Aadhar: 3310,
    Flag: "red",
  },
  {
    id: 4,
    name: "Cinderela",
    birth: "23-7-2023",
    Gender: "Male",
    Email: "vansh@gmail.com",
    Aadhar: 3310,
    Flag: "red",
  },
  {
    id: 5,
    name: "Zen",
    birth: "23-3-2023",
    Gender: "Male",
    Email: "vansh@gmail.com",
    Aadhar: 3310,
    Flag: "green",
  },
];

export default function AppGrid() {
  return (
    <div
      style={{ width: "100%", backgroundColor: "white" }}
      className="h-[100vh]"
    >
      <DataGrid rows={people} columns={columns} disableRowSelectionOnClick className="bg-[#394150]" style={{color : 'white'}} />
    </div>
  );
}
