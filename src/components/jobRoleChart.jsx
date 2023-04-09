import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const employeeDetails = [
  { name: "Rohan", age: 29, gender: "Male", jobProfile: "UX Designer" },
  { name: "John", age: 25, gender: "Male", jobProfile: "Software Engineer" },
  { name: "Jane", age: 30, gender: "Female", jobProfile: "Data Analyst" },
  { name: "Bob", age: 27, gender: "Male", jobProfile: "Product Manager" },
  { name: "Alice", age: 29, gender: "Female", jobProfile: "UX Designer" },
];

function getJobProfilesCount() {
  const jobProfilesMap = new Map();
  for (const employee of employeeDetails) {
    const profile = employee.jobProfile;
    if (jobProfilesMap.has(profile)) {
      jobProfilesMap.set(profile, jobProfilesMap.get(profile) + 1);
    } else {
      jobProfilesMap.set(profile, 1);
    }
  }
  return jobProfilesMap;
}

function JobRoleChart({ employeeDetails }) {
  const jobProfileData = getJobProfilesCount();

  const jobVal = Object.fromEntries(jobProfileData);

    const jobKey = Object.fromEntries(jobProfileData)

  const data = {

    labels: Object.keys(jobKey),
    datasets: [
      {
        data: Object.values(jobVal),

        backgroundColor: [
          "#36A2EB",
          "#1abc9c",
          "#FFCE56",
          "#FF6384",
          "#9b59b6",
          "#e67e22",
          "#f1c40f",
          "#3498db",
          "#34495e",
          "#95a5a6",
        ],
        borderColor: [
          "#36A2EB",
          "#1abc9c",
          "#FFCE56",
          "#FF6384",
          "#9b59b6",
          "#e67e22",
          "#f1c40f",
          "#3498db",
          "#34495e",
          "#95a5a6",
        ],
        color:[
            "#999"
        ]
    
      },
    ],
  };

  const options = {
 
  };
  

  return (
    <div>
      <div>
        <Doughnut
          data={data}
          options={options}

          className="z-10 m-10 w-72 h-72 dark:text-[#FFFFFF] text-white"
        ></Doughnut>
      </div>
    </div>
  );
}

export default JobRoleChart;

// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const employeeDetails = [
//     { name: 'Rohan', age: 29,gender: "Male", jobProfile: 'UX Designer' },
//   { name: 'John', age: 25,gender: "Male", jobProfile: 'Software Engineer' },
//   { name: 'Jane', age: 30,gender: "Female", jobProfile: 'Data Analyst' },
//   { name: 'Bob', age: 27, gender: "Male",jobProfile: 'Product Manager' },
//   { name: 'Alice', age: 29,gender: "Female", jobProfile: 'UX Designer' },
// ];

// function getJobProfilesCount(jobProfiles) {
//     if (!jobProfiles || jobProfiles.length === 0) {
//       return {};
//     }
//     const jobProfilesCount = {};
//     for (let i = 0; i < employeeDetails.length; i++) {
//       const jobProfile = employeeDetails[i].jobProfile;
//       if (jobProfile in jobProfilesCount) {
//         jobProfilesCount[jobProfile]++;
//       } else {
//         jobProfilesCount[jobProfile] = 1;
//       }
//     }
//     return jobProfilesCount;
//   }

//   function JobRoleChart({ employeeDetails }) {
//     const jobProfileData = getJobProfilesCount(employeeDetails);
//     const data = {
//       labels: [2,3,4,4,5,6],
//       labels: Object.keys(jobProfileData),
//       datasets: [
//         {
//           label: "Poll",
//           data: Object.values(jobProfileData),
//         //   data: [2,3,4,4,5,6],
//           backgroundColor: [
//             "#FF6384",
//             "#36A2EB",
//             "#FFCE56",
//             "#1abc9c",
//             "#9b59b6",
//             "#e67e22",
//             "#f1c40f",
//             "#3498db",
//             "#34495e",
//             "#95a5a6",
//           ],
//           hoverBackgroundColor: [
//             "#FF6384",
//             "#36A2EB",
//             "#FFCE56",
//             "#1abc9c",
//             "#9b59b6",
//             "#e67e22",
//             "#f1c40f",
//             "#3498db",
//             "#34495e",
//             "#95a5a6",
//           ],
//         },
//       ],
//     };

//     const options = {};

//     return (
//       <div>
//         <div>
//           <Doughnut data={data} options={options} className="z-10 m-10 w-72 h-72"></Doughnut>
//         </div>
//       </div>
//     );
//   }

//   export default JobRoleChart;
