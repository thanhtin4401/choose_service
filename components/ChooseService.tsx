import React from "react";

const ChooseService = () => {
  return (
    <div className="font-Poppins bg-[#F8FAFC] lg:h-[100vh]  p-[50px]">
      <div className="w-[90%] mx-auto">
        <h1 className="text-[40px] text-[#0C273C]  font-blod">
          Choose Service
        </h1>
        <div className="p-[10px]">
          <div className="bg-white rounded-[10px] flex flex-col p-[50px]">
            <div className="stepper relative  space-y-5 lg:space-y-0 flex flex-col lg:flex-row justify-between ">
              <div className="items flex flex-row lg:flex-col  lg:space-y-2 space-x-5 lg:justify-center items-center lg:w-36 ">
                <svg
                  className="relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                  <path
                    d="M11 21L17.6667 28L31 14"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-[#0C273C]  font-medium leading-[180%]">
                  Custumer Detail
                </span>
              </div>
              <div className="items flex flex-row lg:flex-col  lg:space-y-2 space-x-5 lg:justify-center items-center lg:w-36 ">
                <svg
                  className="relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <circle cx="21" cy="21" r="21" fill="#6D6CE3" />
                  <path
                    d="M11 21L17.6667 28L31 14"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-[#0C273C]  font-medium leading-[180%]">
                  Project Details
                </span>
              </div>
              <div className="items flex flex-row lg:flex-col  lg:space-y-2 space-x-5 lg:justify-center items-center lg:w-36">
                <svg
                  className="relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                  <path
                    d="M11 21L17.6667 28L31 14"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-[#0C273C]  font-medium leading-[180%]">
                  Attached File
                </span>
              </div>
              <div className="items flex flex-row lg:flex-col  lg:space-y-2 space-x-5 lg:justify-center items-center lg:w-36">
                <svg
                  className="relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                  <path
                    d="M11 21L17.6667 28L31 14"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-[#0C273C]  font-medium leading-[180%]">
                  Payment Details
                </span>
              </div>
              <div className="bg-[#6D6CE3]  absolute  w-[90%] lg:h-[2px] top-[21px] right-[90px]  -z-1"></div>
            </div>
            <div className="mt-[30px]">
              <div className="grid grid-cols-2  gap-x-[100px] rounded-[10px] ">
                <div className="col-span-2 lg:col-span-1">
                  <h3 className="text-[20px] font-medium leading-[36px] text-[#0C273C]">
                    Project Name
                  </h3>
                  <input
                    defaultValue={" Please Enter Project Name"}
                    className="bg-[#F8FAFC] rounded-[10px] p-[15px] w-full outline-none mt-[10px]"
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <h3 className="text-[20px] font-medium leading-[36px] text-[#0C273C]">
                    Bussiness Name
                  </h3>
                  <input
                    defaultValue={" Please Enter Project Name"}
                    className="bg-[#F8FAFC] rounded-[10px] p-[15px] w-full outline-none mt-[10px]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 mt-[20px]">
                <div>
                  <h3 className="text-[20px] col-span-2  font-medium leading-[36px] text-[#0C273C]">
                    Project Name
                  </h3>
                  <input
                    defaultValue={" Please Enter Project Name"}
                    className="bg-[#F8FAFC] rounded-[10px] pb-[150px] p-[15px] w-full outline-none mt-[10px]"
                  />
                </div>
              </div>
            </div>
            <div className="group-buttons flex justify-end mt-[50px]">
              <div className="">
                <button className="py-[12px] px-[21px] text-[#6D6CE3] rounded-[28px] border mr-[30px] border-[#6D6CE3]">
                  Back
                </button>
                <button className="bg-[#6D6CE3] text-[white] py-[12px] px-[21px] rounded-[28px]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseService;
