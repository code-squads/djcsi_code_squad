import { Button } from 'flowbite-react'
import React from 'react'

const HireModal = ({
    showModal,
    setShowModal,
    setSelectedOption,
    onConfirmClickHandler
}) => {
    // const [showModal, setShowModal] = useState(true)
    // const [selectedOption, setSelectedOption] = useState()

  return (
    (showModal ? <div className='fixed flex justify-center items-center w-full h-full top-0 left-0 z-50'>
        {/* backdrop */}
        <div className='absolute w-full h-full bg-slate-300 dark:bg-dark3 opacity-60' onClick={() => {setShowModal(false)}}>

        </div>

        {/* modal */}
        <div className='flex flex-col absolute w-[500px] h-[400px] m-auto left-auto right-auto top-auto bg-white rounded-lg shadow dark:bg-gray-800 font-inter'>
            <div className='flex items-center h-[60px] px-[30px] w-full dark:text-white bg-[#F6F9FC] dark:bg-dark2 text-dark3 border-b-[1px] dark:border-[#232830] border-[#DCE3EE] text-[18px] font-medium rounded-t-lg'>
                Hire Employee
            </div>
            <div className='px-[30px] py-[10px]'>
                <div>Name: Rupesh Raut</div>
                <div>Aadhaar number: DJSKS839390</div>
            <h3 class="mt-[10px] mb-[2px] font-semibold text-gray-900 dark:text-white">Job Role: </h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="list-radio-license" type="radio" value="Head Chief" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={(e) => {setSelectedOption(e.target.value)}}/>
                        <label for="list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Head Chief</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="list-radio-id" type="radio" value="Kitchen Helper" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={(e) => {setSelectedOption(e.target.value)}}/>
                        <label for="list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kitchen Helper</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="list-radio-millitary" type="radio" value="Receptionist" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={(e) => {setSelectedOption(e.target.value)}}/>
                        <label for="list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receptionist</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="list-radio-passport" type="radio" value="Waiter" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={(e) => {setSelectedOption(e.target.value)}}/>
                        <label for="list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Waiter</label>
                    </div>
                </li>
            </ul>
            </div>

            <div className='flex flex-row gap-x-[20px] items-center h-[65px] px-[30px] w-full dark:text-white text-dark3 border-b-[1px] dark:border-[#232830] border-t-[1px] border-[#DCE3EE] text-[18px] font-medium rounded-b-lg'>
                <button className='text-[14px] ml-auto' onClick={() => {setShowModal(false)}}>Cancel</button>
                <Button onClick={onConfirmClickHandler}>Confirm</Button>
            </div>
        </div>
    </div>
    :
        <></>
    )
  )
}

export default HireModal
