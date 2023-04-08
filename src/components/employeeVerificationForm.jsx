import React, { useState } from 'react'
import DatePicker from "tailwind-datepicker-react"
import { DatePickerOptions } from '../constants/Constants'
import { Button } from "flowbite-react"
import { useRouter } from 'next/router'

const EmployeeVerificationForm = (
    createAccountHandler,
    stage,
    setStage,
) => {
    const router = useRouter()
    const [show, setShow] = useState(false)
	const handleClose = (state) => {
		setShow(state)
	}

    const verifyAadhaarPan = () => {
        //logic
        //verify logic
        const restuarantName = document.getElementById('restuarantName').value
        const restuarantGSTIN = document.getElementById('restuarantGSTIN').value
        console.log(restuarantName, restuarantGSTIN)
        setStage('verified')
    }

    const ocr = async (options) => {
        console.log("Inside ocr")
        try {
          const response = await axios.request(options);
          console.log("Got response", response);
          return response.data; 
        } catch(err){
          console.error(err);
          return {"result":"1","subScans":[],"value":"HRE FRE\nGovernment of India\nAmitabh Rajendra Shah\nDOB: 03/02/1990\nMale\n1234 5678 9012\n\u00c5RT TEIR, \u00c0"};
        }
        // return {"result":"1","subScans":[],"value":"HRE FRE\nGovernment of India\nAmitabh Rajendra Shah\nDOB: 03/02/1990\nMale\n1234 5678 9012\n\u00c5RT TEIR, \u00c0"};
    }

    const handleFileInputChange = (event) => {
        // setPreviewImage(URL.createObjectURL(event.target.files[0]));
        console.log("inside handle file", event)
        const form = new FormData();
        form.append("Session", "string");
        form.append("srcImg", event.target.files[0]);
        const options = {
          method: "POST",
          url: "https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/",
          headers: {
            "content-type": "multipart/form-data",
            "x-rapidapi-host": "pen-to-print-handwriting-ocr.p.rapidapi.com",
            "x-rapidapi-key": process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
          },
          data: form,
        };
        // return
        const dataText = ocr(options)
          .then(res => {
            // setText(res.value);
            console.log(res.value)
            const splitMe = res.value.split('\n')
            const userName = splitMe[2];
            const DOB = splitMe[3].split(':')[1].trim();
            const aadhar = splitMe[5];
            console.log(userName);
            console.log(DOB);
            console.log(aadhar);
          });
      }

    return (
        <form className="mt-[40px]" action="">
            <div className="flex flex-col gap-y-[25px]">
                <div className="flex flex-row justify-between gap-x-[30px]">
                    <div className="w-[45%]">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                    </div>

                    <div className="w-[45%]">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                    </div>
                </div>

                <div className="flex flex-row gap-x-[30px] justify-between">
                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                        <div className="relative cursor-pointer">
                        <DatePicker id="dob" options={DatePickerOptions} show={show} setShow={handleClose} />
                        </div>
                    </div>
                    
                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="gender" className="relative block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <select 
                            id="gender" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        >
                            <option value="">Select your gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-row gap-x-[30px]">
                    <div className="w-[45%]">
                        <label htmlFor="restuarant_address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="address" id="restuarantAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="L-12 Link Road, Andheri" required/>
                    </div>
                </div>

                <div className="flex flex-row gap-x-[30px] justify-between">
                    <div className="w-[45%] relative">
                        <label htmlFor="cardNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aadhaar/Pan card number</label>
                        <input type="text" id="cardNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase" maxLength={15} 
                        placeholder="07AAGXXXXX4N1Z1" required disabled={stage == 'verified' ? true : false}/>

                        {stage == 'verified' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="green" className="absolute top-[39px] right-[20px] w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}
                    </div>

                    <div className="flex flex-col w-[45%]">
                        <div className="flex items-center justify-center w-full">
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[70px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center">
                                    <svg aria-hidden="true" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-[10px] text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-[8px] text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileInputChange}/>
                            </label>
                        </div> 
                    </div>
                </div>

                <div className="flex flex-row gap-x-[30px]">
                    {/* <div className="w-[100%] relative">
                        <label htmlFor="restuarant_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Restuarant/Cafe Name</label>
                        <input type="text" id="restuarantName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Ettarra Coffee House" required disabled={stage == 'verified' ? true : false}/>

                        {stage == 'verified' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="green" className="absolute top-[39px] right-[20px] w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}

                    </div> */}

                    {/* <div className="w-[45%]">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                    </div> */}
                </div>

                {/* <div className="flex flex-row gap-x-[30px]"> */}
                    {/* <div className="w-[45%] relative">
                        <label htmlFor="restuarant_gstin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GSTIN</label>
                        <input type="text" id="restuarantGSTIN" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase" maxLength={15} 
                        placeholder="07AAGXXXXX4N1Z1" required disabled={stage == 'verified' ? true : false}/>

                        {stage == 'verified' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="green" className="absolute top-[39px] right-[20px] w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}
                    </div> */}

                    {/* <div className="w-[45%]">
                        <label htmlFor="restuarant_address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="address" id="restuarantAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="L-12 Link Road, Andheri" required/>
                    </div> */}

                    {/* <div className="w-[45%]">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                    </div> */}
                {/* </div> */}

                {stage == "verified" && <div className="flex flex-row gap-x-[30px]">
                    {/* mobile number */}
                    {/* <div className="w-[45%]">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9137XXXXXX" pattern="[0-9]{10}" required/>
                    </div> */}

                    {/* username */}
                    {/* <div className="flex w-[45%]">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            @
                        </span>
                        <input type="text" id="username" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk"/>
                    </div> */}

                    {/* email */}
                    {/* <div className="w-[45%]">
                        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com"/>
                        </div>
                    </div> */}

                    {/* <div className="flex flex-row gap-x-[8px] w-[45%] text-[#6A7280] pt-[30px] text-[12px] sm:text-[10px]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1A56DB" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                        </div>
                        <div>
                            We'll send OTP on this mobile number for verification.
                        </div>
                    </div> */}
                </div>}

                {/* <div className="flex flex-row gap-x-[30px]">
                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                        <div className="relative cursor-pointer">
                        <DatePicker id="dob" options={DatePickerOptions} show={show} setShow={handleClose} />
                        </div>
                    </div>
                    
                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="gender" className="relative block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <select 
                            id="gender" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        >
                            <option value="">Select your gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </div> */}

                {/* {stage == "verified" && <div className="flex flex-row gap-x-[30px]">
                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div>
                    
                </div>} */}
            </div>
            
            <div className="flex flex-row gap-x-[20px] mt-[45px] items-center justify-center">
                    <Button className="sm:w-[200px] w-[45%]" type="button" onClick={verifyAadhaarPan}>
                        Proceed
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-[10px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </Button>
                {/* <Button className="sm:w-[200px] w-[45%]" type="submit">Create Account</Button> */}
                {/* <div className="text-[14px]">
                    Already have an account?
                    <span className="text-[#1A56DB] font-medium ml-[5px] cursor-pointer dark:text-[#D9D9D9] dark:underline" onClick={() => {router.push("/login")}}>Login</span>
                </div> */}
            </div>

            {/* <div className="text-[12px] text-[#6A7280] mt-[15px]">
                By creating account you agree to the terms and conditions
            </div> */}
        </form>
    )
}

export default EmployeeVerificationForm
