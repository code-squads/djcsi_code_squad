import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth, withAuthenticatedRoute } from "../context/AuthContext";

const RoutesToShowSideBar = [
  "/dashboard",
  "/singleEmployee",
  "/byLink",
  "/csvUpload",
  "/verifyEmployeeWithPhoto",
  "/recentVerifications",
  "/recentVerifications2",
  "/reportedEmployees",
  "/recomendedEmployees",
  "/reportEmployeeWithPhoto",
];

const SideBar = () => {
  const router = useRouter();
  const { profile, isLoggedIn } = useAuth();
  const [expandDiv, setExpandDiv] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    setCurrentRoute(router.pathname);
    RoutesToShowSideBar.includes;
  }, [router]);

  if (!isLoggedIn || !profile) return <></>;

  return RoutesToShowSideBar.includes(currentRoute) ? (
    <div className="flex flex-col w-[30%] h-[calc(100vh-60px)] bg-[#F6F9FC] dark:bg-dark3 border-r-[1px] dark:border-[#232830] border-[#DCE3EE] py-[25px]">
      <div className="flex flex-col gap-y-[7px] pb-[20px] px-[65px] border-b-[1px] dark:border-[#232830] border-[#DCE3EE]">
        <div className="flex flex-row items-center gap-x-[10px]">
          <img
            src="/assets/restaurant.png"
            alt="restaurant image"
            className="w-[50px]"
          />
          <div className="text-[16px] font-medium">
            {profile.restaurant_name}
          </div>
        </div>
        <div className="text-[14px]">{profile.address}</div>
        <div className="text-[14px]">GSTIN: {profile.gstin}</div>
      </div>
      <div className="flex flex-col gap-y-[10px] px-[45px] pt-[40px] text-[14px] cursor-pointer">
        <div
          className={`flex flex-row gap-x-[10px] px-[20px] py-[10px] ${
            currentRoute == "/dashboard" &&
            "bg-[#BED4F5] dark:bg-[#374151] rounded-md box-border"
          }`}
          onClick={() => {
            router.push("/dashboard");
          }}
        >
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
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
          Your Employees
        </div>
        <div
          className={`flex flex-col px-[20px] mt-[5px] ${
            expandDiv
              ? "min-h-[119px] transition-height duration-300 ease-in-out"
              : "h-[21px] overflow-hidden transition-height duration-300 ease-in-out"
          }`}
        >
          <div
            className="flex flex-row gap-x-[10px]"
            onClick={() => {
              setExpandDiv((prev) => !prev);
            }}
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> */}
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
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            Verify Employees
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex flex-col ml-[30px] mt-[15px]">
            <div
              className={`flex flex-row items-center gap-x-[10px] px-[10px] py-[5px] ${
                currentRoute == "/singleEmployee" &&
                "bg-[#BED4F5] dark:bg-[#374151] rounded-md box-border"
              }`}
              onClick={() => {
                router.push("/singleEmployee");
              }}
            >
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Single Employee
            </div>
            <div
              className={`flex flex-row gap-x-[10px] px-[10px] py-[5px] ${
                currentRoute == "/byLink" &&
                "bg-[#BED4F5] dark:bg-[#374151] rounded-md box-border"
              }`}
              onClick={() => {
                router.push("/byLink");
              }}
            >
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
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              By Link
            </div>
            {/* <div
              className={`flex flex-row gap-x-[10px] px-[10px] py-[5px] ${
                currentRoute == "/csvUpload" &&
                "bg-[#BED4F5] dark:bg-[#374151] rounded-md box-border"
              }`}
              onClick={() => {
                router.push("/csvUpload");
              }}
            >
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
                  d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              CSV Upload
            </div> */}
            <div
              className={`flex flex-row gap-x-[10px] px-[10px] py-[5px] ${
                currentRoute == "/verifyEmployeeWithPhoto" &&
                "bg-[#BED4F5] dark:bg-[#374151] rounded-md box-border"
              }`}
              onClick={() => {
                router.push("/verifyEmployeeWithPhoto");
              }}
            >
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
                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                />
              </svg>
              Verify Employee with photo
            </div>
          </div>
        </div>

        {/* ${currentRoute != "/recentVerifications" && " hover:bg-[#deebff] dark:hover:bg-[#2d3747]"} */}

        <div
          className={`flex flex-row gap-x-[10px] py-[10px] px-[20px] rounded-md
          ${
            currentRoute == "/recentVerifications" &&
            "bg-[#BED4F5] dark:bg-[#374151] dark:bg-[#374254] box-border"
          }`}
          onClick={() => {
            router.push("/recentVerifications");
          }}
        >
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
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Recent Verifications
        </div>

        <div
          className={`flex flex-row gap-x-[10px] py-[10px] px-[20px] ${
            currentRoute == "/reportedEmployees" &&
            "bg-[#BED4F5] dark:bg-[#374151] dark:bg-[#374151] rounded-md box-border"
          }`}
          onClick={() => {
            router.push("/reportedEmployees");
          }}
        >
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
              d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
            />
          </svg>
          Reported Employees
        </div>
        <div
          className={`flex flex-row gap-x-[10px] py-[10px] px-[20px] ${
            currentRoute == "/recomendedEmployees" &&
            "bg-[#BED4F5] dark:bg-[#374151] dark:bg-[#374151] rounded-md box-border"
          }`}
          onClick={() => {
            router.push("/recomendedEmployees");
          }}
        >
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
              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
            />
          </svg>
          Recommended Employees
        </div>
        <div
          className={`flex flex-row gap-x-[10px] py-[10px] px-[20px] ${
            currentRoute == "/reportEmployeeWithPhoto" &&
            "bg-[#BED4F5] dark:bg-[#374151] dark:bg-[#374151] rounded-md box-border"
          }`}
          onClick={() => {
            router.push("/reportEmployeeWithPhoto");
          }}
        >
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
              d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
            />
          </svg>
          Report Employee with photo
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SideBar;
