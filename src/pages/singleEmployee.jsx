import EmployeeVerificationForm from '@/components/employeeVerificationForm'
import React from 'react'

const SingleEmployee = () => {
  return (
    <div className='w-[70%] dark:text-white dark:bg-dark2 text-dark3'>
        <div className='flex flex-row items-center text-[26px] font-medium h-[70px] pl-[40px] border-b-[1px] dark:border-[#232830] border-[#DCE3EE] bg-'>
            Verify Employee
        </div>
        <div className='w-[60%] mx-auto'>
            <EmployeeVerificationForm/>
        </div>
    </div>
  )
}

export default SingleEmployee
