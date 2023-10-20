import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowDown, faArrowUp);
const Swap = () => {
  return (
    <div className="w-[560px] h-[698px] ">
      <div className="flex justify-center">
        <div className="w-[379px] h-[64px] bg-[#2F3338] rounded-full flex gap-10 justify-center items-center">
          <div className="w-[164px] h-[56px] bg-[#3F444E] rounded-full flex justify-center items-center">
            <p className="text-[#FFFFFF]">Swap</p>
          </div>
          <div className="w-[164px] h-[56px] rounded-full flex justify-center items-center">
            <p className="text-[#FFFFFF]">Donate</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[560px] h-[610px] bg-[#2F3338] rounded-lg mt-3 ptb-5 flex justify-center">
          <div className=" text-white w-[480px] h-[518px] my-auto ">
            <div className="w-[480px] h-[50px] gap-20 flex justify-between items-center ">
              <p className="text-lg">Swap</p>
              <div className="w-[32px] h-[32px] bg-[#3F444E] rounded-md flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.875 16.1245L3.75 16.1245"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.25 16.1245L17.625 16.1245"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.75 17.9995C16.7855 17.9995 17.625 17.16 17.625 16.1245C17.625 15.089 16.7855 14.2495 15.75 14.2495C14.7145 14.2495 13.875 15.089 13.875 16.1245C13.875 17.16 14.7145 17.9995 15.75 17.9995Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.875 7.87434L3.75 7.87427"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.25 7.87427L11.625 7.87434"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 9.74951C10.7855 9.74951 11.625 8.91005 11.625 7.87451C11.625 6.83898 10.7855 5.99951 9.75 5.99951C8.71447 5.99951 7.875 6.83898 7.875 7.87451C7.875 8.91005 8.71447 9.74951 9.75 9.74951Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="my-4 py-4 w-[480px] h-[100px] rounded-lg bg-[#3F444E]"></div>
            <div className="my-4 py-4 w-[480px] h-[100px] flex justify-center items-center ">
              <div className="  w-[48px] h-[48px] rounded-lg bg-[#3F444E] flex  justify-center items-center">
                <div className="text-white">
                  <FontAwesomeIcon className="" icon={["fas", "arrow-down"]} />
                  <FontAwesomeIcon icon={["fas", "arrow-up"]} />
                </div>
              </div>
            </div>
            <div className=" my-4py-4 w-[480px] h-[100px] rounded-lg bg-[#3F444E]"></div>
            <div className=" my-4 flex justify-end py-4 gap-2 ">
              <p className="text-[#6F49FD]">1 USD = 23.345 VND</p>
              <div className="flex justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.5 5.5L14 4L12.5 2.5" fill="white" />
                  <path
                    d="M12.5 5.5L14 4L12.5 2.5"
                    stroke="#B3B3B3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 8C2 6.93913 2.42143 5.92172 3.17157 5.17157C3.92172 4.42143 4.93913 4 6 4H14"
                    fill="white"
                  />
                  <path
                    d="M2 8C2 6.93913 2.42143 5.92172 3.17157 5.17157C3.92172 4.42143 4.93913 4 6 4H14"
                    stroke="#B3B3B3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M3.5 10.5L2 12L3.5 13.5" fill="white" />
                  <path
                    d="M3.5 10.5L2 12L3.5 13.5"
                    stroke="#B3B3B3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 8C14 9.06087 13.5786 10.0783 12.8284 10.8284C12.0783 11.5786 11.0609 12 10 12H2"
                    fill="white"
                  />
                  <path
                    d="M14 8C14 9.06087 13.5786 10.0783 12.8284 10.8284C12.0783 11.5786 11.0609 12 10 12H2"
                    stroke="#B3B3B3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="w-[480px] h-[62px] rounded-lg bg-[#6F49FD] flex justify-center ">
                <p className="text-white text-lg my-auto ">Swap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
