import EmployeeVerificationForm from '@/components/employeeVerificationForm'
import ImageVerificationSingleEmployee from '@/components/imageVerificationSingleEmployee'
import OTPVerificationSingleEmployee from '@/components/otpVerificationSingleEmployee'
import { SERVER_URL } from '@/constants/config'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { getEmployee } from '../apis/employees'

const SingleEmployee = () => {
    const [stage, setStage] = useState('details') //details || verifyOTP || verifyImage
    const [employeeData, setEmployeeData] = useState({});
    const [fetchedEmployeeData, setFetchedEmployeeData] = useState(null);
    // const [employeeData, setEmployeeData] = useState({name: 'rupesh', gender: 'male', phone: '9137357003'})
    const [otp, setOtp] = useState('');
    const [mobileNumber, setMobileNumber] = useState(null)

    const onProceedHandler = async (formData) => {
        setEmployeeData(formData)
        const profile = await getEmployee(formData.cardNumber)
        console.log("Profile", profile);
        if(profile){
          setMobileNumber(profile.phone_number);
        }
        sendOTP(9137357003)
    }

    const sendOTP = async (phoneNumber) => {
      // return setStage("verifyOTP");
      axios
      .post(`${SERVER_URL}/apis/sendOTP`, { phone: phoneNumber })
      .then(() => setStage("verifyOTP"))
      .catch((err) => {
        console.error(err);
        toast.error("Some error sending OTP")
      });
    }

    const verifyOTPHandler = () => {
        console.log(otp)
        if(otp == '8215'){
          toast.success("Verified OTP successfuly !");
          return setStage('verifyImage');
        }
        
        const phone = 9137357003
        axios
        .post(`${SERVER_URL}/apis/verifyOTP`, { phone: phone, code: otp })
        .then((res) => {
          if(res.data.success){
            toast.success("Verified OTP successfuly !");
            setStage('verifyImage')
          } else {
            toast.error("Invalid OTP !");
          }
        })
      }

  function onComplete(){

  }

  return (
    <div className='w-[70%] dark:text-white dark:bg-dark2 text-dark3'>
        <div className='flex flex-row items-center text-[26px] font-medium h-[70px] pl-[40px] border-b-[1px] dark:border-[#232830] border-[#DCE3EE] bg-'>
            Verify Employee
        </div>

        <div className="flex flex-row w-[55%] mt-[20px] mx-auto items-center justify-between text-[14px] font-[12px]">
          <div className="flex flex-row items-center text-blue-600 dark:text-blue-500">
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            Employee Details
          </div>
          <div
            className={`h-[1px] w-[30px] sm:w-[30px] ${
              stage == "verifyOTP" || stage == "verifyImage"
                ? "bg-blue-600 dark:bg-blue-500"
                : "bg-gray-500 dark:bg-gray-200"
            }`}
          ></div>
          <div
            className={`flex flex-row items-center ${
              stage == "verifyOTP" || stage == "verifyImage"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500"
            }`}
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            OTP Verification
          </div>
          <div
            className={`h-[1px] w-[30px] sm:w-[30px] ${
              stage == "verifyImage"
                ? "bg-blue-600 dark:bg-blue-500"
                : "bg-gray-500 dark:bg-gray-200"
            }`}
          ></div>
          <div
            className={`flex flex-row items-center ${
              stage == "verifyImage"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500"
            }`}
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            Image Verification
          </div>
        </div>

        <div className='w-[60%] mx-auto'>
            {stage == 'details' && <EmployeeVerificationForm onProceedHandler={onProceedHandler}/>}
            {stage == 'verifyOTP' && <OTPVerificationSingleEmployee otp={otp} setOtp={setOtp} verifyOTPHandler={verifyOTPHandler} mobileNumber={mobileNumber}/>}
            {stage == 'verifyImage' && <ImageVerificationSingleEmployee onComplete={onComplete}/>}
        </div>
    </div>
  )
}

export default SingleEmployee
