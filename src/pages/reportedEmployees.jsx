import AppGrid, { RedAppGrid } from '@/components/AppGrid'
import { getEmployees } from '@/apis/employees';
import FlagInfoModal from '@/components/flagInfoModal';
import { useAuth } from '@/context/AuthContext';
import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

const ReportedEmployees = () => {

  const { profile } = useAuth();
  const [employees, setEmployees] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [FlagMessage, setFlagMessage] = useState([])

  useEffect(() => {
    getEmployeeData()
  }, [profile])

  const getEmployeeData = async () => {
    const data  = await getEmployees(profile?.gstin)
    setEmployees(data)
  }

  // const safeUsers = employees
  // .map((data) => data)
  // .filter((data) => data.reports !== null && data.reports[0].flag === "red")  

  console.log(FlagMessage)

  return (
    <div className='relative w-[70%] dark:text-white dark:bg-dark2 text-dark3'>
      <div className='flex flex-row items-center text-[26px] font-medium h-[70px] pl-[40px] border-b-[1px] dark:border-[#232830] border-[#DCE3EE]'>
          Reported Employees
      </div>

      <div className="flex flex-col w-[95%]  mx-auto border-[1px] dark:border-[#232830] border-[#DCE3EE] border-collapse mt-[35px] rounded-[5px] cursor-pointer border-b-[0px]">
          <div className="flex flex-row justify-between bg-[#F6F9FC] dark:bg-[#1F232D] border-b-[1px] border-[#DCE3EE] dark:border-[#232830] rounded-t-[5px] text-[14px] font-medium">
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Name</div>
            <div className="flex flex-row justify-center items-center w-[10%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Gender</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">DOB</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Aadhaar</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Role</div>
            {/* <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Verification Status</div> */}
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Reported</div>
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
                    p?.reports?.filter((rep) => rep.flag == 'red').length > 0 &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4" onClick={() => {setShowModal(true); setFlagMessage(p?.reports?.filter((rep) => rep.flag == 'red'))}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                  }

                  {
                    p?.reports?.filter((rep) => rep.flag == 'orange').length > 0 &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4 ml-[10px]" onClick={() => {setShowModal(true); setFlagMessage(p?.reports?.filter((rep) => rep.flag == 'orange'))}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                  }

                  {
                    p?.reports?.filter((rep) => rep.flag == 'yellow').length > 0 &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4 ml-[10px]" onClick={() => {setShowModal(true); setFlagMessage(p?.reports?.filter((rep) => rep.flag == 'yellow'))}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                  }
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4 ml-[10px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4 ml-[10px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                        </svg> */}
                </div>

              </div>
            )
          })}
      </div>
      <FlagInfoModal showModal={showModal} setShowModal={setShowModal} FlagMessage={FlagMessage}/>
      </div>
      )
}

export default ReportedEmployees
