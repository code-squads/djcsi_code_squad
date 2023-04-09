import ImageUploader from '@/components/ImageUploader';
import React from 'react'


const ReportEmployeeWithPhoto = () => {
  return (
    <div className='relative w-[70%] dark:text-white dark:bg-dark2 text-dark3'>
      <div className='flex flex-row items-center text-[26px] font-medium h-[70px] pl-[40px] border-b-[1px] dark:border-[#232830] border-[#DCE3EE]'>
          Report Employee with photo
      </div>
      <div className="flex w-full justify-center">
        <ImageUploader></ImageUploader>
      </div>
    </div>
  )
}

export default ReportEmployeeWithPhoto;


