<<<<<<< HEAD
import { GreenAppGrid } from '@/components/AppGrid'
import React from 'react'
=======
import { getEmployees } from '@/apis/employees';
import { useAuth } from '@/context/AuthContext';
import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
>>>>>>> origin/rohan

const RecomendedEmployees = () => {

  const { profile } = useAuth();
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getEmployeeData()
  }, [profile])

  const getEmployeeData = async () => {
    const data  = await getEmployees(profile?.gstin)
    setEmployees(data)
  }

  return (
    <div className='relative w-[70%] dark:text-white dark:bg-dark2 text-dark3'>
      <div className='flex flex-row items-center text-[26px] font-medium h-[70px] pl-[40px] border-b-[1px] dark:border-[#232830] border-[#DCE3EE]'>
          Recomended Employees
      </div>

      <div className="flex flex-col w-[95%]  mx-auto border-[1px] dark:border-[#232830] border-[#DCE3EE] border-collapse mt-[35px] rounded-[5px] cursor-pointer border-b-[0px]">
          <div className="flex flex-row justify-between bg-[#F6F9FC] dark:bg-[#1F232D] border-b-[1px] border-[#DCE3EE] dark:border-[#232830] rounded-t-[5px] text-[14px] font-medium">
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Name</div>
            <div className="flex flex-row justify-center items-center w-[10%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Gender</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">DOB</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Aadhaar</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Role</div>
            {/* <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Verification Status</div> */}
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Recomended</div>
            {/* <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Report</div> */}
            {/* <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px]">Recomend</div> */}
          </div>

          {employees.map((p) => {
            return (
              <div className="flex flex-row justify-between text-[14px] border-b-[1px] rounded-b-[5px] border-[#DCE3EE] dark:border-[#232830]"> 
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">{p.first_name}</div>
                <div className="flex flex-row justify-center items-center w-[10%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">{p.gender}</div>
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">{p.dob}</div>
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">{p.aadhar_number}</div>
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">{p.current_role}</div>
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">
                  {
                    p?.reports?.filter((rep) => rep.flag == 'green').length > 0 &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                  }
                </div>

              </div>
            )
          })}
      </div>
      </div>
      )
}

export default RecomendedEmployees
