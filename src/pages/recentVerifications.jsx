import HireModal from "@/components/hireModal";
import { Button } from "flowbite-react";
import React, { useState } from "react";

const RecentVerifications = () => {
  // const [showModal, setShowModal] = React.useState(false);
  const [showModal, setShowModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState()
  const [selectedEmployee, setSelectedEmployee] = useState()

  const people = [
    {
      name: "Vansh",
      birth: "23-1-2023",
      Gender: "Male",
      Email: "vansh@gmail.com",
      Aadhar: 3310,
      // Message will come with reports.message for red Verifiedtruegreen, it will be from recommends.
      Verified: "true",
    },
    {
      name: "Abhi",
      birth: "23-9-2023",
      Gender: "Male",
      Email: "vansh@gmail.com",
      Aadhar: 3310,
      Verified: "false",
    },
    {
      name: "Bunty",
      birth: "23-2-2023",
      Gender: "Male",
      Email: "vansh@gmail.com",
      Aadhar: 3310,
      Verified: "true",
    },
    {
      name: "Cinderela",
      birth: "23-7-2023",
      Gender: "Male",
      Email: "vansh@gmail.com",
      Aadhar: 3310,
      Verified: "false",
    },
    {
      name: "Zen",
      birth: "23-3-2023",
      Gender: "Male",
      Email: "vansh@gmail.com",
      Aadhar: 3310,
      Verified: "true",
    },
  ];

  const onConfirmClickHandler = () => {
    setShowModal(false)
    console.log(selectedEmployee, selectedOption)
  }

  return (
    <div className='relative w-[70%] dark:text-white dark:bg-dark2 text-dark3'>
      <div className='flex flex-row items-center text-[26px] font-medium h-[70px] pl-[40px] border-b-[1px] dark:border-[#232830] border-[#DCE3EE]'>
          Recently Verified Employees
      </div>

      <div className="flex flex-col w-[95%]  mx-auto border-[1px] dark:border-[#232830] border-[#DCE3EE] border-collapse mt-[35px] rounded-[5px] cursor-pointer border-b-[0px]">
          <div className="flex flex-row justify-between bg-[#F6F9FC] dark:bg-[#1F232D] border-b-[1px] border-[#DCE3EE] dark:border-[#232830] rounded-t-[5px] text-[14px] font-medium">
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Name</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Gender</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">DOB</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Aadhaar</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Pan card</div>
            <div className="flex flex-row justify-center items-center w-[20%] box-border py-[12px] border-r-[1px] dark:border-[#232830]">Verification Status</div>
            <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px]">Option</div>
          </div>

          {people.map((p) => {
            return (
              <div className="flex flex-row justify-between text-[14px] border-b-[1px] rounded-b-[5px] border-[#DCE3EE] dark:border-[#232830]"> 
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">{p.name}</div>
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">{p.Gender}</div>
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">{p.birth}</div>
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">{p.Aadhar}</div>
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">-</div>
                <div className="flex flex-row justify-center items-center w-[20%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">
                  {p.Verified == 'true' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  }
                </div>
                <div className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] border-r-[1px] dark:border-[#232830]">
                  {p.Verified == 'true' ? 
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
                </div>
              </div>
            )
          })}
      </div>
      {showModal && <HireModal showModal={showModal} setShowModal={setShowModal} setSelectedOption={setSelectedOption} onConfirmClickHandler={onConfirmClickHandler}/>}
    </div>
  );
};

export default RecentVerifications;
