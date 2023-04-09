import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

const ReportAndRecomendedModal = ({
    showModal,
    setShowModal,
    reportAndRecomendClickHandler,
    selectedEmployee,
    setSelectedOption,
    selectedOption,
    setFlagReason
}) => {

  return (
    (showModal ? <div className='fixed flex justify-center items-center w-full h-full top-0 left-0 z-50'>
        {/* backdrop */}
        <div className='absolute w-full h-full bg-slate-300 dark:bg-dark3 opacity-60' onClick={() => {setShowModal(false)}}>

        </div>

        {/* modal */}
        <div className='flex flex-col absolute w-[500px] h-auto m-auto left-auto right-auto top-auto bg-white rounded-lg shadow dark:bg-gray-800 font-inter'>
            <div className='flex items-center h-[60px] px-[30px] w-full dark:text-white bg-[#F6F9FC] dark:bg-dark2 text-dark3 border-b-[1px] dark:border-[#232830] border-[#DCE3EE] text-[18px] font-medium rounded-t-lg'>
                Hire Employee
            </div>
            <div className='px-[30px] py-[10px]'>
                <div>Name: {selectedEmployee?.first_name + " " + selectedEmployee?.last_name}</div>
                <div>Aadhaar number: {selectedEmployee?.aadhar_number}</div>
            <h3 class="mt-[20px] mb-[2px] font-semibold text-gray-900 dark:text-white">Report/Flag the Employee: </h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="list-radio-license" type="radio" value="1" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={(e) => {setSelectedOption(e.target.value)}}/>
                        <label for="list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4 ml-[10px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                        </label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="list-radio-id" type="radio" value="2" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={(e) => {setSelectedOption(e.target.value)}}/>
                        <label for="list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4 ml-[10px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                        </label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="list-radio-millitary" type="radio" value="3" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={(e) => {setSelectedOption(e.target.value)}}/>
                        <label for="list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4 ml-[10px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                        </label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="list-radio-passport" type="radio" value="4" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={(e) => {setSelectedOption(e.target.value)}}/>
                        <label for="list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4 ml-[10px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        </label>
                    </div>
                </li>
            </ul>
            </div>

            {(selectedOption == 1 || selectedOption == 2 || selectedOption == 3) && <div className='px-[35px] mt-[10px] mb-[15px]'>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Flag reason/explanation</label>
                    <input type="text" id="flagInformation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What happened?" required onChange={(e) => {setFlagReason(e.target.value)}}/>
                </div>}

            <div className='flex flex-row gap-x-[20px] items-center h-[65px] px-[30px] w-full dark:text-white text-dark3 border-b-[1px] dark:border-[#232830] border-t-[1px] border-[#DCE3EE] text-[18px] font-medium rounded-b-lg'>
                <button className='text-[14px] ml-auto' onClick={() => {setShowModal(false)}}>Cancel</button>
                <Button onClick={reportAndRecomendClickHandler}>Confirm</Button>
            </div>
        </div>
    </div>
    :
        <></>
    )
  )
}

export default ReportAndRecomendedModal
