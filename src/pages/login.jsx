import { AppContext } from "@/context/appContext";
import { Button } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useAuth, withoutAuthenticatedRoute } from "../context/AuthContext";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const { login } = useAuth();
  const appContext = useContext(AppContext);
  const [state, setState] = useState(appContext.state);

  useEffect(() => {
    setState(appContext.state);
  }, [appContext.state]);

  const loginHandler = (event) => {
    event.preventDefault();
    console.log("Login with");
    const phone = event.target.phone.value;
    const password = event.target.password.value;
    console.log("Login with params", phone, password);
    login(phone, password).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div
      className={`w-full min-h-[calc(100vh-60px)] h-auto font-inter flex flex-row ${
        state.darkMode && "text-white bg-dark2"
      }
            sm:flex-col
        `}
    >
      <div
        className={`w-[55%] h-full box-border flex flex-col items-center ${
          state.darkMode && "text-white bg-dark2"
        }
                sm:w-full sm:min-h-[calc(100vh-60px)]
            `}
      >
        {" "}
        <div className="text-[35px] mt-14 w-[100%] sm:w-[85%] md:w-[60%] lg:w-[55%] text-center text-[#666666] dark:text-white">
          Simplify your HR verification process with{" "}
          <span className="font-bold bg-gradient-to-r from-emerald-500 to-sky-400 bg-clip-text text-transparent">
            HrSpace
          </span>
        </div>
        <Image
          src="/assets/LoginIllustration.svg"
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
        <div className="text-[22px] mb-[15px] mt-[40px] text-center">
          Welcome Back!
        </div>

        <form
          className="mt-[40px] justify-center"
          action=""
          onSubmit={loginHandler}
        >
          <div className="flex flex-col gap-y-[25px]">
            <div className="flex flex-col justify-center items-center gap-y-[40px]">
              {/* mobile number */}
              {/* <div className="w-[45%]">
                                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
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
              <div className="w-[50%] sm:w-[70%]">
                <label
                  for="input-group-1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="9137XXXX28"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[50%] sm:w-[70%]">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-[20px] mt-[45px] items-center">
            <Button className="w-[50%] sm:w-[70%]" type="submit">
              Login
            </Button>
            <div className="text-[14px]">
              Don't have an account?
              <span
                className="text-[#1A56DB] font-medium ml-[5px] cursor-pointer dark:text-[#D9D9D9] dark:underline"
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withoutAuthenticatedRoute(Login);
