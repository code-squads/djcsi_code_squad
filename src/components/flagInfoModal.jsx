import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

const FlagInfoModal = ({
    showModal,
    setShowModal,
    FlagMessage
}) => {

  return (
    (showModal ? <div className='fixed flex justify-center items-center w-full h-full top-0 left-0 z-50'>
        {/* backdrop */}
        <div className='absolute w-full h-full bg-slate-300 dark:bg-dark3 opacity-60' onClick={() => {setShowModal(false)}}>

        </div>

        {/* modal */}
        <div className='flex flex-col absolute w-[500px] h-[400px] m-auto left-auto right-auto top-auto bg-white rounded-lg shadow dark:bg-gray-800 font-inter'>
            <div className='flex items-center h-[60px] px-[30px] w-full dark:text-white bg-[#F6F9FC] dark:bg-dark2 text-dark3 border-b-[1px] dark:border-[#232830] border-[#DCE3EE] text-[18px] font-medium rounded-t-lg'>
                Flag Info
            </div>
            <div className='px-[30px] py-[10px]'>
                {FlagMessage?.map((p) => {
                    return (
                        <div>
                            {p.message}
                        </div>
                    )
                })}
            </div>
            <div className='flex flex-row gap-x-[20px] items-center h-[65px] px-[30px] w-full dark:text-white text-dark3 border-b-[1px] dark:border-[#232830] border-t-[1px] border-[#DCE3EE] text-[18px] font-medium rounded-b-lg'>
                <button className='text-[14px] ml-auto' onClick={() => {setShowModal(false)}}>Cancel</button>
            </div>
        </div>
    </div>
    :
        <></>
    )
  )
}

export default FlagInfoModal
