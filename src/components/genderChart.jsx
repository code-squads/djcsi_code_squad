import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


function getEmployeeGendersCount(employees) {
  // Create an empty hashmap to store genders and their counts
  const gendersCount = {};

  // Loop through the employees array and count each gender
  for (let i = 0; i < employees.length; i++) {
    const gender = employees[i].gender;
    if (gender in gendersCount) {
      gendersCount[gender]++;
    } else {
      gendersCount[gender] = 1;
    }
  }

  // Return the hashmap of genders and their counts
  return gendersCount;
}

// export function HashMapFunc() {
//   // Assume that employees is an array of employee details
//   const employees = [
//     { name: 'John', age: 25, gender: 'Male' },
//     { name: 'Jane', age: 30, gender: 'Female' },
//     { name: 'Bob', age: 27, gender: 'Male' },
//     { name: 'Alice', age: 29, gender: 'Female' },
//   ];

//   const gendersCount = getEmployeeGendersCount(employees);

//   // Loop through the gendersCount hashmap and display each gender and its count
//   return (
//     <div>
//       {Object.keys(gendersCount).map((gender) => (
//         <div key={gender}>
//           {gender}: {gendersCount[gender]}
//         </div>
//       ))}
//     </div>
//   );
// }


const employeeDetails = [
    { name: 'Rohan', age: 29,gender: "Male", jobProfile: 'UX Designer' },
  { name: 'John', age: 25,gender: "Male", jobProfile: 'Software Engineer' },
  { name: 'Jane', age: 30,gender: "Female", jobProfile: 'Data Analyst' },
  { name: 'Bob', age: 27, gender: "Male",jobProfile: 'Product Manager' },
  { name: 'Alice', age: 29,gender: "Female", jobProfile: 'UX Designer' },
];


// function HashMapFunc() {
//   // Assume that jobProfiles is an array of job profiles
  

//   const jobProfiles = employeeDetails.map((employee) => employee.jobProfile);
//   const jobProfilesCount = getJobProfilesCount(jobProfiles);

//   // Loop through the jobProfilesCount hashmap and display each job profile and its count
//   return (
//     <div>
//       {Object.keys(jobProfilesCount).map((jobProfile) => (
//         <div key={jobProfile}>
//           {jobProfile}: {jobProfilesCount[jobProfile]}
//         </div>
//       ))}
//     </div>
//   );
// }


const genderCount = getEmployeeGendersCount(employeeDetails);

function GenderChart() {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Poll",
        data: [genderCount.Male, genderCount.Female],
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
        ]
      },
    ],
  };


  const options = {};

  return (
    <div>
      <div>
        <Doughnut data={data} options={options} className="m-10 w-72 h-72"></Doughnut>
      </div>
    </div>
  );
}

export default GenderChart;
