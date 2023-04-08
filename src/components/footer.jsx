import { AppContext } from "@/context/appContext"
import { useContext, useEffect, useState } from "react"

const Footer = () => {
    const appContext = useContext(AppContext)

    const [email, setEmail] = useState(null)
    const [darkMode, setDarkMode] = useState(appContext.state.darkMode)

    useEffect(() => {
        setDarkMode(appContext.state.darkMode)
    }, [appContext.state.darkMode])

    const isEmailValid = (e) => {
        var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(e).search (filter) != -1;
    }

    const onSubscribeClickHandler = () => {
        if(email?.length <1) {
            //add failure toaster here
            console.log("please enter valid email address")
        }
        else {
            if(isEmailValid(email)) {
                //add success toaster here
                //add logic to store email (additional feature)
            }
            else {
                //add failure toaster here
                console.log("please enter valid email address")
            }
        }
    }

    return (
        <footer className={`
            border-t-[1px] h-[244px] px-[65px] pt-[30px] font-inter text-[#535479] box-border
            sm:px-[25px] sm:pt-[20px] sm:h-auto sm:pb-[20px] ${darkMode ? "bg-dark2 border-bd text-[#D9D9D9]": "bg-[#F6F9FC]"}
        `}>
            <div className="flex flex-row justify-between h-auto sm:flex-col gap-y-[30px]">

                {/* first column */}
                <div className="flex flex-col h-auto">
                    <div className="flex flex-row gap-x-[12px]">
                        {/* <div className="w-[25px] h-[25px] bg-gray-500"></div> */}
                        <img src={`${darkMode ? "/assets/logoWhite.svg" : "/assets/logo.svg"}`} alt="logo" className="w-[25px] h-[25px]"/>
                        <div className={`font-medium text-[#0E0B3D] ${darkMode && "text-white"}`}>HRSpace</div>
                    </div>
                    <div className="max-w-[300px] mt-[20px] text-[14px]">
                        Description of the app Description of the app Description of the app
                    </div>

                    <div className={`text-[14px] text-[#535479] mt-auto sm:mt-[20px] ${darkMode && "text-white"}`}>
                    ©️ 2023 HRSpace. all rights reserved.
                    </div>
                </div>

                {/* second column */}
                <div className="h-full flex flex-col">
                    <div className="flex flex-row">
                        <div className={`font-medium text-[#0E0B3D] ${darkMode && "text-white"}`}>Contact</div>
                    </div>
                    <div className="mt-[20px] sm:mt-[15px] text-[14px]">
                        <a href="mailto:Info@appname.in">Info@HRSpace.in</a>
                    </div>
                    <div className="mt-[18px] sm:mt-[15px] text-[14px]">
                        <a href="tel:+919137357003">+91 9137357003</a>
                    </div>
                    <div className="mt-[18px] sm:mt-[15px] flex flex-row gap-x-[24px]">
                        <a href="https://twitter.com/rupeshraut2003" target="_blank"><img src={`${darkMode ? "assets/twitterWhite.svg" : "assets/twitter.svg"}`} className="w-[20px] h-[20px]"/></a>
                        <a href="https://github.com/Rupesh-2003" target="_blank"><img src={`${darkMode ? "assets/githubWhite.svg" : "assets/github.svg"}`} className="w-[20px] h-[20px]"/></a>
                    </div>
                </div>

                {/* thrird column */}
                <div className="h-full flex flex-col gap-y-[16px]">
                    <div className="flex flex-row gap-x-[12px]">
                        <div className={`font-medium text-[#0E0B3D] ${darkMode && "text-white"}`}>Subscribe to our newsletter</div>
                    </div>
                    <input 
                        type="email" 
                        className={` px-[22px] py-[10px] rounded-lg border-[1px] text-[12px] sm:self-start ${darkMode ? "bg-dark3 text-white border-bd" : "bg-white border-[#E5E7EB]"}`} 
                        placeholder="enter your email address"
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <button className="bg-blue1 flex flex-row items-center gap-x-[10px] text-white px-[17px] py-[7px] self-start rounded-[5px] text-[14px]"
                        onClick={onSubscribeClickHandler}
                    >
                        Subscribe 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                </div>

                {/* fourth column */}
                <div className="h-full flex flex-col">
                    <div className="flex flex-row">
                        <div className={`font-medium text-[#0E0B3D] ${darkMode && "text-white"}`}>Built at</div>
                    </div>

                    <a href="https://codeshastra.djcsi.co.in/" target="_blank">
                    <img 
                        src="/assets/codeshashtra.png" alt="codeshashtra image"
                        className="mt-[10px] w-[200px]"
                    />
                    </a>
                    <div className="mt-[20px] text-[14px]">
                        <span className="text-[#AEAEAE]">By</span> Team Code Squad 🚀</div>
                </div>
            </div>
            <div className={`text-[#0E0B3D] text-center mt-[20px] ${darkMode && "text-white"}`}>
                Built with <span className="text-[#F6285F]">❤</span> love.
            </div>

        </footer>
    )
}

export default Footer