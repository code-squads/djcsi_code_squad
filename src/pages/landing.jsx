import Loader from "@/components/loader";
import { AppContext } from "@/context/appContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const appContext = useContext(AppContext);
  const [darkMode, setDarkMode] = useState(appContext.state.darkMode);

  const handleOnclick = (e) => {
    e.preventDefault();
    router.push("/signup");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setDarkMode(appContext.state.darkMode);
  }, [appContext.state.darkMode]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  // if (isLoading) {
  //     return (
  //         <Loader/>
  //     )
  // }

  return (
    <div className="flex items-center flex-col">
      <div className="mx-[5%] my-[1%] text-[40px] sm:text-[60px] md:text-[70px] lg:text-[75px] w-[80%] text-center text-[#666666] dark:text-white">
        <span className="font-bold bg-gradient-to-r from-sky-400 to-emerald-500 bg-clip-text text-transparent ">
        Effortlessly 
        </span>{" "}
        Verify Employee Information
      </div>
      <div className="text-[25px] w-[80%] sm:w-[70%] md:w-[50%] lg:w-[37%] text-center text-[#666666] dark:text-white">
        <span className="font-bold bg-gradient-to-br from-indigo-600 to-sky-400 bg-clip-text text-transparent">
          HrSpace
        </span>{" "}
        is here to {" "}
        <span className="font-bold bg-gradient-to-r from-emerald-500 to-sky-400 bg-clip-text text-transparent">
        Streamline HR Verification and Reduce Risk
        </span>{" "}
        so you can{" "}
        <span className="font-bold bg-gradient-to-r from-amber-600 to-yellow-300 bg-clip-text text-transparent">
          Save Time and Resources
        </span>
      </div>
      <div className="">
        <button
          onClick={handleOnclick}
          className="m-5 py-2 px-5 dark:text-white text-white rounded-md bg-[#1977F2] dark:bg-[#0052CC]"
        >
          Get started
        </button>
      </div>
      <div className="m-10 ">
        <Image
          data-aos="fade-zoom-in"
          className=" drop-shadow-[0_0px_35px_rgba(85,99,238,0.7)] dark:drop-shadow-[0_0px_35px_rgba(85,99,238,0.3)] rounded-2xl shadow bg-teal-400 inline-flex"
          src="/assets/Defi1.png"
          alt="Hero Img"
          width={850}
          height={720}
        />
      </div>
      <div className="h-[1px] w-[75%] bg-gradient-to-r from-transparent to-slate-100 via-slate-950 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:to-gray-900 dark:via-gray-700 dark:to-transparent"></div>

      <div className="flex flex-row m-10 px-[65px] sm:px-[30px] flex-wrap  text-[#666666] dark:text-white justify-around">
        <div className="xl:w-[40%] lg:w-[45%] md:w-[75%] md:mb-10 sm:mb-6 sm:w-[100%]">
          <div className="mt-[10%] lg:text-[50px] md:text-[45px] sm:text-[30px] ">
            <span className="font-bold bg-gradient-to-b from-amber-600 to-yellow-300 bg-clip-text text-transparent">
              Multiple Verification
            </span>{" "}

          </div>
          <div className="xl:text-[20px] font-thin lg:text-[17px] md:text-[15px] sm:text-[12px]">
           Employee as well as owners have to go through multi level authentication for better security.
          </div>
        </div>

        <div>
          <Image
            data-aos="fade-zoom-in"
            className="rounded-2xl drop-shadow-[0_0px_35px_rgba(85,99,238,0.7)] dark:drop-shadow-[0_0px_35px_rgba(85,99,238,0.3)]"
            src="/assets/multi.jpg"
            alt="Hero Img"
            width={540}
            height={540}
          />
        </div>
      </div>
      <div className="h-[1px] w-[75%] bg-gradient-to-r from-transparent to-slate-100 via-slate-950 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:to-gray-900 dark:via-gray-700 dark:to-transparent"></div>

      <div className="flex flex-row  text-[#666666] dark:text-white m-10 px-[65px] sm:px-[30px] flex-wrap justify-around">
        <div>
          <Image
            data-aos="fade-zoom-in"
            className="rounded-2xl order-last md:order-last lg:order-first xl:order-first drop-shadow-[0_0px_35px_rgba(85,99,238,0.7)] dark:drop-shadow-[0_0px_35px_rgba(85,99,238,0.3)]"
            src="/assets/verf.jpg"
            alt="Hero Img"
            width={540}
            height={540}
          />
        </div>
        <div className="xl:w-[40%] lg:w-[45%] md:w-[75%] md:mb-10 sm:mb-6 sm:w-[100%] order-first md:order-first lg:order-last xl:order-last">
          <div className="mt-[10%] lg:text-[50px] md:text-[45px] sm:text-[30px]">
            <span className="font-bold bg-gradient-to-br from-indigo-600 to-sky-400 bg-clip-text text-transparent">
              Image verification
            </span>{" "}
          </div>
          <div className="xl:text-[20px] font-thin lg:text-[17px] md:text-[15px] sm:text-[12px]">
            Verify employee by uploading the image to check the past reports. Employees having shady track record will be warned
          </div>
        </div>
      </div>
      <div className="h-[1px] w-[75%] bg-gradient-to-r from-transparent to-slate-100 via-slate-950 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:to-gray-900 dark:via-gray-700 dark:to-transparent"></div>

      <div className="flex flex-row m-10 px-[65px] sm:px-[30px] flex-wrap justify-around">
        <div className="xl:w-[40%] lg:w-[45%] md:w-[75%] md:mb-10 sm:mb-6 sm:w-[100%]">
          <div className="mt-4 lg:text-[50px] md:text-[45px] sm:text-[30px]">
            <span className=" font-bold bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">
             Red Flag
            </span>{" "}

          </div>
          <div className="xl:text-[20px] font-thin  lg:text-[17px] md:text-[15px] sm:text-[12px]">
            If any past employee has done anything wrong like robbery, etc then the store owner has an option to flag the employee so that other people can be cautious and report the offender to the authorities
          </div>
        </div>

        <div>
          <Image
            data-aos="fade-zoom-in"
            className="rounded-2xl shadow h-[85%] bg-teal-400 inline-flex drop-shadow-[0_0px_35px_rgba(85,99,238,0.7)] dark:drop-shadow-[0_0px_35px_rgba(85,99,238,0.3)]"
            src="/assets/download.png"
            alt="Hero Img"
            width={540}
            height={540}
          />

        </div>
      </div>
    </div>
  );
};

export default Landing;