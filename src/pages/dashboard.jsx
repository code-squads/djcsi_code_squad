import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
// import { withAuthenticatedRoute } from '../context/AuthContext';
import GenderChart from '@/components/genderChart';
import JobRoleChart from '@/components/jobRoleChart';
import { useAuth, withAuthenticatedRoute } from '../context/AuthContext';
import { getEmployees } from '../apis/employees'
import { Button } from 'flowbite-react';
import ReportAndRecomendedModal from '@/components/reportAndRecomendedModal';

const Dashboard = () => {
  const { profile } = useAuth();
  const [employees, setEmployees] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)
  const [flagReason, setFlagReason] = useState('')

  const [refreshIndicator, setRefresh] = useState(Math.random());
  const refresh = () => setRefresh(Math.random());
    // const router = useRouter()
    // const [expandDiv, setExpandDiv] = useState(true)
    // const [currentRoute, setCurrentRoute] = useState('')
    // // const route = '/dashboard';

    // useEffect(() => {
    //     setCurrentRoute(router.pathname)
    // }, [router])

    useEffect(() => {
      if(!profile)
        return;
      getEmployeeData()
    }, [refreshIndicator])

    const getEmployeeData = async () => {
      const data  = await getEmployees(profile.gstin)
      setEmployees(data)
    }

    const onEditButtonClickHandler = (p) => {
      setSelectedEmployee(p)
      setShowModal(true)
    }

    const reportAndRecomendClickHandler = () => {
      if(selectedOption == 4) {
        console.log("trigger recomend function")
      }
      else {
        console.log("trigger flag function")
        console.log(flagReason)
        setFlagReason('')

      }
      setShowModal(false)
    }

  return (

    <div className='relative w-[70%] dark:text-white dark:bg-dark2 text-dark3'>
      <div className='flex flex-row items-center text-[26px] font-medium h-[70px] pl-[40px] border-b-[1px] dark:border-[#232830] border-[#DCE3EE]'>
          Your Employees
      </div>

      <div className="flex flex-col w-[95%]  mx-auto border-[1px] dark:border-[#232830] border-[#DCE3EE] border-collapse mt-[35px] rounded-[5px] cursor-pointer border-b-[0px]">
          <div className="flex flex-row justify-between bg-[#F6F9FC] dark:bg-[#1F232D] border-b-[1px] border-[#DCE3EE] dark:border-[#232830] rounded-t-[5px] text-[14px] font-medium">
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Name</div>
            <div className="flex flex-row justify-center items-center w-[10%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Gender</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">DOB</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Aadhaar</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Role</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Verification Status</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Report/Recomend</div>
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
                  {p.verified ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  }
                </div>
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]" onClick={() => {onEditButtonClickHandler(p)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </div>
                {/* <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]" onClick={() => {onEditButtonClickHandler(p)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </div> */}

                {/* <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">
                  {p.verified ? 
                    <Button className="py-[-2px]"
                      onClick={() => {setShowModal(true); setSelectedEmployee(p)}}
                    >Hire 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-[5px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    </Button>
                  :
                    <>-</>
                }
                </div> */}
              </div>
            )
          })}
      </div>
      <ReportAndRecomendedModal showModal={showModal} setShowModal={setShowModal} selectedEmployee={selectedEmployee} reportAndRecomendClickHandler={reportAndRecomendClickHandler} setSelectedOption={setSelectedOption} selectedOption={selectedOption} setFlagReason={setFlagReason}/>

      {/* <div className='flex '>
        <GenderChart></GenderChart>
        <JobRoleChart className=" "></JobRoleChart>

      </div> */}
        
    </div>
  )
}

export default withAuthenticatedRoute(Dashboard)
