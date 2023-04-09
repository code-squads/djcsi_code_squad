import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Modal from "react-modal";

function RenderDate(props) {
  const { hasFocus, value } = props;
  const buttonElement = React.useRef(null);
  const rippleRef = React.useRef(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const flagColor = props.value;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      width: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      backgroundColor: "#394150",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      {flagColor === "green" && (
        <>
          <button
            className="focus:outline-none mt-2 text-white w-[8rem] bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => setIsOpen(true)}
          >
            Safe User
          </button>
          {modalIsOpen && (
            <>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="flex justify-between">
                  <div className="text-2xl">Safe User</div>
                  <button onClick={closeModal} className="mx-6">
                    {" "}
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="my-4">
                  {" "}
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </div>
              </Modal>
            </>
          )}
        </>
      )}
      {flagColor === "red" && (
        <>
          <button
            onClick={() => setIsOpen(true)}
            className="focus:outline-none mt-2 text-white w-[8rem] bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Reported User
          </button>
          {modalIsOpen && (
            <>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="flex justify-between">
                  <div className="text-2xl">Reported User</div>
                  <button onClick={closeModal} className="mx-6">
                    {" "}
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="my-4">
                  {" "}
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </div>
              </Modal>
            </>
          )}
        </>
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

const reportedUsers = people.map((data) => data).filter((data) => data.Flag === 'red');

console.log(reportedUsers);

export default function AppGrid() {
  return (
    <div
      style={{ width: "100%", backgroundColor: "white" }}
      className="h-[100vh]"
    >
      {reportedUsers !== undefined && (
        <DataGrid
          rows={reportedUsers}
          columns={columns}
          className="bg-[#394150]"
          style={{ color: "white" }}
        />
      )}
    </div>
  );
}
