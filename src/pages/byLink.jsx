import TagList from '@/components/TagList'
import { useAuth } from '@/context/AuthContext'
import { Button } from 'flowbite-react'
import React from 'react'

const ByLink = () => {
  const { profile } = useAuth()
  console.log(profile)
  return (
    <div className='w-[70%] dark:text-white dark:bg-dark2 text-dark3'>
        <div className='flex flex-col justify-center text-[26px] font-medium h-[80px] pl-[40px] border-b-[1px] dark:border-[#232830] border-[#DCE3EE]'>
          <span></span>Verify by link
          <div className='text-[14px] font-normal'>send the intrested employee this link to verify their identity and background check</div>
        </div>

        <div className='flex flex-row items-center w-[70%] mx-auto h-[70px] mt-[30px] rounded-lg border-[1px] border-[#DCE3EE] dark:border-[#232830]'>
          <div className='flex justify-center items-center w-[10%] h-full border-r-[1px] border-[#DCE3EE] dark:border-[#232830]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#A9A9A9" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
          </div>
          <div className='flex flex-row items-center text-[16px] font-medium px-[20px] text-[#090D11] dark:text-[#D9D9D9]'>
            https://localhost:3000/verifyByLink/{profile.gstin}
          </div>
          <Button className='ml-auto mr-[25px]'>
            Copy Link
          </Button>
        </div>

        <div className='flex flex-col w-[50%] max-h-[400px] mt-[40px] rounded-lg border-[1px] border-[#DCE3EE] dark:border-[#232830] mx-auto pb-20px box-border'>
          <div className='py-[15px] px-[30px] border-b-[1px] border-[#DCE3EE] dark:border-[#232830] '>
            <div className='text-[16px] font-medium'>Share this link Via Gmail</div>
            <div className='text-[12px]'>enter your friends' email address to send them link</div>
          </div>
          <div className='overflow-scroll'>
            <TagList/>
          </div>
        </div>
    </div>
  )
}

export default ByLink
