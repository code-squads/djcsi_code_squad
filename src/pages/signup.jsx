import OTPVerification from "@/components/otpVerification";
import SignupForm from "@/components/signupForm";
import Image from "next/image";
import {
  withAuthenticatedRoute,
  withoutAuthenticatedRoute,
} from "../context/AuthContext";

const { AppContext } = require("@/context/appContext");
const { useContext, useState, useEffect } = require("react");

const Signup = () => {
  const appContext = useContext(AppContext);
  const [state, setState] = useState(appContext.state);
  const [stage, setStage] = useState("createAccount"); // createAccount || otpVerification || verified
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setState(appContext.state);
  }, [appContext.state]);

  const createAccountHandler = (event) => {
    event.preventDefault();

    const restuarantName = event.target.restuarantName.value;
    const restuarantGSTIN = event.target.restuarantGSTIN.value;
    const address = event.target.restuarantAddress.value;
    const phoneNumber = event.target.phone.value;
    const password = event.target.password.value;

    console.log("User info", {
      restuarantName,
      restuarantGSTIN,
      address,
      phoneNumber,
      password,
    });

    setUserInfo({
      restuarantName,
      restuarantGSTIN,
      address,
      phoneNumber,
      password,
    });
    setStage("otpVerification");
  };

  return (
    <div
      className={`w-full min-h-[calc(100vh-60px)] h-auto font-inter flex flex-row ${
        state.darkMode && "text-white bg-dark2"
      }
            sm:flex-col
        `}
    >
      {/* left container */}
      <div
        className={`w-[55%] h-full flex flex-col items-center box-border ${
          state.darkMode && "text-white bg-dark2"
        }
                sm:w-full sm:min-h-[calc(100vh-60px)]
            `}
      >
        <div className="text-[35px] mt-14 w-[100%] sm:w-[85%] md:w-[60%] lg:w-[65%] text-center text-[#666666] dark:text-white">
        Simplify the process of
          {" "}
          <span className="font-bold bg-gradient-to-r from-sky-400 to-emerald-500 bg-clip-text text-transparent">
            {" "}
            HR verification{" "}
          </span>{" "}
          with just a few clicks and {" "}
          <span className="font-bold  bg-gradient-to-br from-indigo-600 to-sky-400 bg-clip-text text-transparent">
          Save Time And Resources
          </span>
        </div>
        <Image
          src="/assets/SignUpIllustration.svg"
          className=""
          width={620}
          height={620}
        />
      </div>

      {/* right container */}
      <div
        className={`flex flex-col w-[45%] px-[70px] py-[30px] min-h-full h-auto box-border border-l-[1px]
                ${
                  state.darkMode
                    ? "text-white bg-dark3 border-bd"
                    : "bg-[#F6F9FC] text-[#0E0B3D]"
                }
                sm:w-full sm:px-[35px]
            `}
      >
        <div className="text-[22px] mb-[15px]">Let's create an account</div>

        <div className="flex flex-row items-center justify-between text-[14px] font-[12px]">
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
            Personal Info
          </div>
          <div
            className={`h-[1px] w-[30px] sm:w-[30px] ${
              stage == "verified" || stage == "otpVerification"
                ? "bg-blue-600 dark:bg-blue-500"
                : "bg-gray-500 dark:bg-gray-200"
            }`}
          ></div>
          <div
            className={`flex flex-row items-center ${
              stage == "verified" || stage == "otpVerification"
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
            GSTIN Verification
          </div>
          <div
            className={`h-[1px] w-[30px] sm:w-[30px] ${
              stage == "otpVerification"
                ? "bg-blue-600 dark:bg-blue-500"
                : "bg-gray-500 dark:bg-gray-200"
            }`}
          ></div>
          <div
            className={`flex flex-row items-center ${
              stage == "otpVerification"
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
        </div>

        {stage == "createAccount" || stage == "verified" ? (
          <SignupForm
            createAccountHandler={createAccountHandler}
            stage={stage}
            setStage={setStage}
          />
        ) : (
          <OTPVerification />
        )}

        {/* {stage == "otpVerification" && <OTPVerification/>} */}

        {/* <div className="flex flex-col mt-auto items-center justify-center">
                    <div className="flex flex-row">
                        <div className={` text-[#0E0B3D] ${state.darkMode && "text-white"}`}>Built at</div>
                    </div>

                    <a href="https://codeshastra.djcsi.co.in/" target="_blank">
                    <img 
                        src="/assets/codeshashtra.png" alt="codeshashtra image"
                        className="mt-[10px] w-[200px]"
                    />
                    </a>
                    <div className="mt-[20px] text-[14px]">
                        <span className="text-[#AEAEAE]">By</span> Team Code Squad 🚀</div>
                </div> */}
      </div>
    </div>
  );
};

export default withoutAuthenticatedRoute(Signup);
