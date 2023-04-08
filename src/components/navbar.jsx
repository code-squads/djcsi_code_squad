import { AppContext } from "@/context/appContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ROUTES } from "../constants/routes";

const Navbar = () => {
  const router = useRouter();
  const appContext = useContext(AppContext);
  const { isLoggedIn, isProcessingLogin, logout } = useAuth();

  const [darkMode, setDarkMode] = useState(appContext.state.darkMode);
  const [dropdown, setDropdown] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    appContext.toggleTheme();
  };

  useEffect(() => {
    setDarkMode(appContext.state.darkMode);
  }, [appContext.state.darkMode]);

  return (
    <div
      className={`fixed w-full h-[60px] flex flex-row items-center border-b-[1px] px-[65px] font-inter z-10
            ${darkMode ? "bg-dark1 border-bd" : "bg-white borderblue2"}
            sm:px-[30px]
        `}
    >
      <div
        className={`flex flex-row gap-x-[15px] text-[22px] cursor-pointer ${
          darkMode ? "text-white" : "text-[#010342]"
        } sm:text-[18px]`}
        onClick={() => {
          router.push("/");
        }}
      >
        <img
          src={`${darkMode ? "/assets/logoWhite.svg" : "/assets/logo.svg"}`}
          alt="logo"
          className="w-[20px] sm:w-[15px]"
        />
        <span>HRSpace</span>
      </div>

      <div
        className="ml-auto mr-[30px] cursor-pointer p-[10px] "
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </div>

      <div
        className={`flex flex-row gap-x-[40px] text-[14px] ${
          darkMode && "text-white"
        } sm:text-[12px] sm:hidden`}
      >
        {isLoggedIn ? (
          <>
          <button
            onClick={() => {
              router.push(ROUTES.DASHBOARD);
            }}
          >
            Dashboard
          </button>
          <button
            onClick={logout}
          >
            Logout
          </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                router.push(ROUTES.LOGIN);
              }}
            >
              Login
            </button>
            <button
              className={`flex flex-row items-center gap-x-[6px] px-[20px] py-[8px] rounded-2xl text-[#eoeb3d] font-medium
                        ${darkMode ? "bg-dark3" : "bg-[#F5F9FC]"}
                        sm: px-[10px] py-[6px]
                        `}
              onClick={() => {
                router.push(ROUTES.SIGNUP);
              }}
            >
              Sign Up
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={darkMode ? "white" : "#0D0E12"}
          className="w-6 h-6 cursor-pointer md:hidden"
          onClick={() => {
            setDropdown((prevState) => !prevState);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        {dropdown && (
          <div className="absolute w-[150px] h-auto transition-height duration-3000 ease-in-out dark:bg-dark3 rounded-md right-[1px] mt-[18px] cursor-pointer md:hidden overflow-hidden bg-gray-200 text-{#535479]">
            {isLoggedIn ? (
              <>
                <div
                  className={`flex flex-col box-border text-[14px] ${
                    darkMode && "text-white"
                  }`}
                  onClick={() => {
                    router.push(ROUTES.DASHBOARD);
                    setDropdown(false);
                  }}
                >
                  <div
                    className={`border-b-[1px] px-[20px] py-[10px] dark:border-bd border-gray-300 dark:hover:bg-gray-600 hover:bg-gray-100`}
                  >
                    <span className="self-start">Dashboard</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`flex flex-col box-border text-[14px] ${
                    darkMode && "text-white"
                  }`}
                  onClick={() => {
                    router.push(ROUTES.LOGIN);
                    setDropdown(false);
                  }}
                >
                  <div
                    className={`border-b-[1px] px-[20px] py-[10px] dark:border-bd border-gray-300 dark:hover:bg-gray-600 hover:bg-gray-100`}
                  >
                    <span className="self-start">Login</span>
                  </div>
                </div>

                <div
                  className={`flex flex-col box-border text-[14px] ${
                    darkMode && "text-white"
                  }`}
                  onClick={() => {
                    router.push(ROUTES.SIGNUP);
                    setDropdown(false);
                  }}
                >
                  <div
                    className={`px-[20px] py-[10px] border-white dark:hover:bg-gray-600 hover:bg-gray-100`}
                  >
                    <span className="self-start">Sign Up</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
