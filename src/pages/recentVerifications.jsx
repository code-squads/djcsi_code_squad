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
              <th scope="col" className="px-6 py-3">
                {/* Add Verified */}
              </th>
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
                  {showModal === true && (
                    <>
                      <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:inset-0 h-[calc(100%-1rem)] md:h-full">
                        <div className="relative w-full h-full max-w-2xl md:h-auto">
                          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Note this message
                              </h3>
                              <button
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => {
                                  setShowModal(false);
                                }}
                              >
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
                            <div className="p-6 space-y-6">
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European
                                Union enacts new consumer privacy laws for its
                                citizens, companies around the world are
                                updating their terms of service agreements to
                                comply.
                              </p>  
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection
                                Regulation (G.D.P.R.) goes into effect on May 25
                                and is meant to ensure a common set of data
                                rights in the European Union. It requires
                                organizations to notify users as soon as
                                possible of high-risk data breaches that could
                                personally affect them.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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
