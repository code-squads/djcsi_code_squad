import OTPVerification from "@/components/otpVerification"
import SignupForm from "@/components/signupForm"

const { AppContext } = require("@/context/appContext")
const { useContext, useState, useEffect } = require("react")

const Signup = () => {
    const appContext = useContext(AppContext)
    const [state, setState] = useState(appContext.state)
    const [stage, setStage] = useState("createAccount") // createAccount || otpVerification || verified

    useEffect(() => {
        setState(appContext.state)
    }, [appContext.state])

    const createAccountHandler = (event) => {
        event.preventDefault()
        
        const restuarantName = event.target.restuarantName.value
        const restuarantGSTIN = event.target.restuarantGSTIN.value
        const address = event.target.restuarantAddress.value
        const phoneNumber = event.target.phone.value
        const password = event.target.password.value

        console.log(restuarantName, restuarantGSTIN, address, phoneNumber, password)
        setStage("otpVerification")
    }

    return (
        <div className={`w-full min-h-[calc(100vh-60px)] h-auto font-inter flex flex-row ${state.darkMode && "text-white bg-dark2"}
            sm:flex-col
        `}>
            {/* left container */}
            <div className={`w-[55%] h-full box-border ${state.darkMode && "text-white bg-dark2"}
                sm:w-full sm:min-h-[calc(100vh-60px)]
            `}>

            </div>

            {/* right container */}
            <div className={`flex flex-col w-[45%] px-[70px] py-[30px] min-h-full h-auto box-border border-l-[1px]
                ${state.darkMode ? "text-white bg-dark3 border-bd" : "bg-[#F6F9FC] text-[#0E0B3D]"}
                sm:w-full sm:px-[35px]
            `}>
                <div className="text-[22px] mb-[15px]">Let's create an account</div>

                <div className="flex flex-row items-center justify-between text-[14px] font-[12px]">
                    <div className="flex flex-row items-center text-blue-600 dark:text-blue-500">
                        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        Personal Info
                    </div>
                    <div className={`h-[1px] w-[30px] sm:w-[30px] ${(stage == 'verified' || stage == 'otpVerification') ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-500 dark:bg-gray-200"}`}>

                    </div>
                    <div className={`flex flex-row items-center ${(stage == 'verified' || stage == 'otpVerification') ? "text-blue-600 dark:text-blue-500" : "text-gray-500"}`}>
                        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        GSTIN Verification
                    </div>
                    <div className={`h-[1px] w-[30px] sm:w-[30px] ${stage == 'otpVerification' ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-500 dark:bg-gray-200"}`}>

                    </div>
                    <div className={`flex flex-row items-center ${stage == 'otpVerification' ? "text-blue-600 dark:text-blue-500" : "text-gray-500"}`}>
                        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        OTP Verification
                    </div>
                </div>

                {(stage == "createAccount" || stage == 'verified') ? 
                    <SignupForm createAccountHandler={createAccountHandler} stage={stage} setStage={setStage}/>
                :
                    <OTPVerification/>   
                }

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
    )
}

export default Signup