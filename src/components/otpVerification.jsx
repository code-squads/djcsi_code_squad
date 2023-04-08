import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify';
import { SERVER_URL } from '../constants/config';

const OTPVerification = (props) => {
  const [otp, setOtp] = useState('');

  const verifyOTPHandler = () => {
    console.log("Verify otp:", otp);
    // props.postVerification();

    axios
      .post(`${SERVER_URL}/apis/verifyOTP`, { phone: props.phone, code: otp })
      .then((res) => {
        if(res.data.success){
          toast.success("Verified OTP successfuly !");
          props.postVerification();
        } else {
          toast.error("Invalid OTP !");
        }
      })
    //   .catch((err) => {
    //     console.error(err);
    //     toast.error("Some error verifying OTP");
    //   });
  }

  return (
    <div className='flex flex-col mt-[40px]'>
      <div>
        <span className='text-[20px]'>We have sent you an OTP on</span><br/>
        <span className='text-gray-600 dark:text-gray-200 mt-[10px]'>+91 {props.phone}</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <OtpInput
          containerStyle={"flex flex-row gap-x-[15px] text-black mt-[100px] sm:mt-[40px] mb-[30px]"}
          inputStyle={"min-w-[50px] min-h-[50px] p-0 rounded-md dark:bg-dark3 text-black dark:text-white"}
          value={otp}
          onChange={setOtp}
          numInputs={4}
          // renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />

        <Button className="sm:w-[200px] w-[45%]" type="submit" onClick={verifyOTPHandler}>Verify OTP</Button>
        <div className="text-[12px] text-[#6A7280] mt-[15px]">
          By verifying OTP, your account will be successfully created!
        </div>
      </div>
      
    </div>
  )
}

export default OTPVerification
