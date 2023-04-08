import React from "react";
import ImageUploader from "@/components/ImageUploader";

const VerifyEmployeeWithPhoto = () => {
  return (
    <div className="w-[70%]">
      <div className="w-[100%] dark:text-white dark:bg-dark2 text-dark3">
        <div className="flex flex-row items-center text-[26px] font-medium h-[70px] pl-[40px] border-b-[1px] dark:border-[#232830] border-[#DCE3EE] bg-">
          Verify Employee
        </div>
      </div>
      <div className="flex w-full justify-center">
        <ImageUploader></ImageUploader>
      </div>
    </div>
  );
};

export default VerifyEmployeeWithPhoto;
