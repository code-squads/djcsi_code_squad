import React from "react";

const RecentVerifications = () => {
  const [showModal, setShowModal] = React.useState(false);

  const people = [
    {
      name: "Vansh",
      birth: "23-1-2023",
      Gender: "Male",
      Email: "vansh@gmail.com",
      Aadhar: 3310,
      // Message will come with reports.message for red Verifiedtruegreen, it will be from recommends.
      Verified: "true",
    },
    {
      name: "Abhi",
      birth: "23-9-2023",
      Gender: "Male",
      Email: "vansh@gmail.com",
      Aadhar: 3310,
      Verified: "false",
    },
    {
      name: "Bunty",
      birth: "23-2-2023",
      Gender: "Male",
      Email: "vansh@gmail.com",
      Aadhar: 3310,
      Verified: "true",
    },
    {
      name: "Cinderela",
      birth: "23-7-2023",
      Gender: "Male",
      Email: "vansh@gmail.com",
      Aadhar: 3310,
      Verified: "false",
    },
    {
      name: "Zen",
      birth: "23-3-2023",
      Gender: "Male",
      Email: "vansh@gmail.com",
      Aadhar: 3310,
      Verified: "true",
    },
  ];

  console.log(showModal);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Birth Date
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Aadhar
              </th>
              <th scope="col" className="px-6 py-3">
                Verified
              </th>
              {/* <th scope="col" className="px-6 py-3"> */}
                {/* Add Verified */}
              {/* </th> */}
            </tr>
          </thead>
          <tbody>
            {people.map((data) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{data.birth}</td>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{data.Gender}</td>
                  <td className="px-6 py-4">{data.Email}</td>
                  <td className="px-6 py-4">{data.Aadhar}</td>
                  <td className="px-6 py-4">{data.Verified}</td>
                  <button
                    disabled={data.Verified === "true" ? false : true}
                    onClick={() => setShowModal(true)}
                    className="mt-2 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Add+
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentVerifications;
